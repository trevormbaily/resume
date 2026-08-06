# Trevor Baily — Vite + React resume

Public-safe resume site for GitHub Pages. Content mirrors the Hudl FE Platform draft in `trevor-os` (`knowledge-vault/Career/`) with employer product codenames stripped.

**Stack signal:** Vite + React + TypeScript — the same FE stack the Frontend Platform role lists.

## Recommendation: GitHub Pages (public `resume` repo)

| Host | Use for this resume? |
|---|---|
| **Public GitHub repo + Pages** | **Yes — default.** Recruiters expect a GitHub URL; the repo itself proves Vite/React. Free on public repos. |
| Personal Cloudflare Pages | Fine later if you want a custom domain / Workers edge toys. Not better for this apply. |
| **Work / employer Cloudflare** | **No.** Job-hunt materials should not live on an account you lose when you leave. Keep ATG/work split clean. |

Target URL: `https://trevormbaily.github.io/resume/`

## Ship from your Mac (one script)

Repo already created: https://github.com/trevormbaily/resume  
Cloud agents cannot push there (`cursor[bot]` 403). On a machine where `gh` is **you** (`trevormbaily`):

```bash
# from a checkout that has sites/resume (PR #31 or main after merge)
cd sites/resume
chmod +x scripts/ship-public-repo.sh
./scripts/ship-public-repo.sh --existing
```

Then once: **Settings → Pages → Source: GitHub Actions**  
→ https://github.com/trevormbaily/resume/settings/pages

## Local

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

`vite.config.ts` uses `base: './'` so the build works on project Pages or a nested path.

## Deploy options

1. **Standalone public repo (recommended)** — `scripts/ship-public-repo.sh` or copy this folder to a new repo root (includes `.github/workflows/pages.yml`).
2. **`npm run deploy`** — pushes `dist/` to a `gh-pages` branch (needs write access to the target remote).
3. **Inside private `trevor-os`** — monorepo workflow at repo root; private Pages needs GitHub Pro. Prefer the public `resume` repo instead.

## Greenhouse note

Hudl Greenhouse still wants a **PDF**. Put the Pages URL on LinkedIn / portfolio / optional website field — don’t block the apply on deploy.

## Edit content

Update `src/data/resume.ts`, then rebuild. Keep claims portable (no internal product / repo names).
