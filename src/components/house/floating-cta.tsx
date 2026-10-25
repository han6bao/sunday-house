"use client";

import { useEffect, useState } from "react";

import { Link } from "@tanstack/react-router";

/**
 * A small "Check your date" pill that appears once the visitor scrolls past the
 * first screen, and steps aside when the closing invitation is on screen.
 */
export function FloatingCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Step aside whenever the closing card, the footer, or any other
    // "check your date" style button is already on screen.
    const visible = new Set<Element>();
    let inviteVisible = false;
    const targets = document.querySelectorAll(".sh-invite, .hz-footer, main .sh-btn-fill");
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      inviteVisible = visible.size > 0;
      update();
    });
    targets.forEach((t) => io.observe(t));
    function update() {
      const onInquiry = window.location.pathname.startsWith("/experience") || Boolean(document.querySelector(".sh-concierge"));
      setShow(!onInquiry && window.scrollY > window.innerHeight * 0.8 && !inviteVisible);
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      io.disconnect();
    };
  }, []);
  return (
    <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className={`sh-float sh-noprint${show ? " is-on" : ""}>
      Email us
    </a>
  );
}
