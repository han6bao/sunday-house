// Server-only access to optional platform bindings.
// On Vercel there are no Cloudflare bindings, so every accessor is absent and
// callers must guard (they already do: `if (DB) …`).
type D1Statement = {
  bind: (...args: unknown[]) => D1Statement;
  run: () => Promise<unknown>;
  all: () => Promise<unknown>;
  first: <T = unknown>() => Promise<T | null>;
};
type D1Like = { prepare: (sql: string) => D1Statement };

type AppEnv = {
  DB?: D1Like;
  HF_ENV?: string;
  APP_SLUG?: string;
};

export function bindings(): AppEnv {
  return { HF_ENV: process.env.VERCEL_ENV };
}
