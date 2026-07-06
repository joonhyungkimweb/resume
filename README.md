# 이력서 — 김준형

[Astro](https://astro.build)로 만든 정적 이력서 페이지입니다.

## 개발

```shell
pnpm install
pnpm dev         # http://localhost:4321/resume
```

## 빌드 & 배포

```shell
pnpm build       # dist/ 생성
pnpm preview     # 빌드 결과 로컬 확인
pnpm deploy      # 빌드 후 gh-pages 브랜치로 배포
```

배포 주소: https://joonhyungkimweb.github.io/resume

## 구조

- `src/pages/index.astro` — 페이지 레이아웃 & 스타일
- `src/data/resume.ts` — 프로필 / 경력 / 기술 / 언어·자격 데이터
- `src/data/projects.json` — 프로젝트 데이터
