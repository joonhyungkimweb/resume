export const profile = {
  name: "김준형",
  title: "Fullstack Web Developer",
  intro:
    "익힌 기술로 현실의 문제에 도전하고, 이를 해결했을 때 성장을 체감하는 개발자입니다.",
  links: [
    { label: "Email", href: "mailto:asy8010@gmail.com" },
    {
      label: "GitHub",
      href: "https://github.com/joonhyungkimweb",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/joon-hyung-kim-682563252",
    },
  ],
};

// 경력: 회사(depth-1) → 역할(depth-2).
// 각 역할은 desc(간단한 설명) + points(성과)로 구성.
// 각 성과는 여러 역량(tags)에 매핑될 수 있다(1:n).
export const experiences: {
  company: string;
  href?: string;
  period?: string;
  roles: {
    org?: string;
    title: string;
    desc?: string;
    points: { text: string; tags?: string[] }[];
  }[];
}[] = [
  {
    company: "뱅크샐러드",
    period: "2024.06 ~ 재직 중",
    roles: [
      {
        org: "금융쇼핑 PA",
        title: "웹 프론트엔드 엔지니어",
        desc: "신용/대출 관리 도메인의 웹·웹뷰 프론트엔드 개발 및 운영",
        points: [
          {
            text: "CDP·Amplitude 이벤트 설계와 실험 기반 개선으로 핵심 퍼널 지표 향상: 진입 전환율 150% 증가, CTA 클릭률 112% 증가, 알림 전환율 2배 증가",
            tags: ["비즈니스"],
          },
          {
            text: "레거시 스타일 시스템(BPL)을 사내 디자인 시스템(BDS)과 Tailwind 기반으로 마이그레이션하고 CDN 의존성을 제거",
            tags: ["설계", "생산성"],
          },
          {
            text: "점진 배포, QA 체계, Sentry 모니터링, 보안 대응 프로세스를 운영하며 연 100건 이상 이슈 대응",
            tags: ["품질"],
          },
          {
            text: "공용 컴포넌트와 유틸리티를 정비하고 Tailwind 툴링과 문서를 개선해 반복 구현 비용을 절감",
            tags: ["생산성"],
          },
        ],
      },
    ],
  },
  {
    company: "에이아이노미스",
    href: "https://www.ainomis.com",
    period: "2020.11 ~ 2023.12 (3년 1개월)",
    roles: [
      {
        title: "풀스택 웹 개발자",
        desc: "딥러닝·생성형 AI 웹 플랫폼을 MVP 단계부터 개발하고 운영",
        points: [
          {
            text: "TensorFlow.js 기반 학습 기능을 블록 코딩 GUI로 구현하고, 그래프 탐색으로 블록 실행 순서를 보장",
            tags: ["성능"],
          },
          {
            text: "브라우저 GPU 메모리 해제와 학습 데이터 분할 처리로 클라이언트 학습 과정의 안정성을 개선",
            tags: ["성능"],
          },
          {
            text: "제한된 GPU 인스턴스에 AI 추론 서버 컨테이너를 순환 배치하는 Kubernetes 기반 서버리스 구조 구축",
            tags: ["설계", "성능"],
          },
          {
            text: "Vue 기반 서비스를 React로 리뉴얼하고 공용 컴포넌트와 HOC를 정비해 프론트엔드 재사용성 개선",
            tags: ["설계", "생산성"],
          },
        ],
      },
      {
        title: "외주 프로젝트 개발",
        desc: "Soynet, MBC 라디오 mini, Timeflik 등 다양한 도메인의 FE·BE 개발 담당",
        points: [
          {
            text: "MBC 라디오 mini 리뉴얼에서 React·Electron 기반 웹/데스크톱 클라이언트 개발을 담당하고 OS별 기능 차이를 조율",
            tags: ["문제해결"],
          },
          {
            text: "Timeflik NFT 마켓플레이스에서 경매 스마트컨트랙트와 웹앱을 구현하고 모바일 웹뷰 지갑 연동 이슈를 해결",
            tags: ["문제해결", "설계"],
          },
          {
            text: "Soynet 브랜드 페이지와 콘텐츠 기능을 AWS Lambda, DynamoDB, API Gateway 기반 서버리스 구조로 구현",
            tags: ["설계"],
          },
        ],
      },
    ],
  },
  {
    company: "기타",
    roles: [
      {
        title: "프리랜서",
        desc: "어린이 영어 독서 앱 개발 (2023)",
        points: [
          {
            text: "React 웹앱과 Nest.js 백엔드를 구축하고, 결제 라이브러리의 deprecated App Store API 의존성을 백엔드 영수증 검증으로 우회",
            tags: ["문제해결"],
          },
        ],
      },
      {
        title: "개인 프로젝트",
        desc: "NFC 기반 Wifi 자동연결 iOS 앱 (2024)",
        points: [
          {
            text: "iOS가 기본 제공하지 않는 NFC 기반 Wifi 자동 연결 흐름을 SwiftUI 앱으로 구현",
            tags: ["문제해결", "UX"],
          },
        ],
      },
    ],
  },
];

export const languages = [
  "영어 : 일상 회화 가능",
  "일본어 : 고급 및 비즈니스 회화 가능 (JLPT N1)",
  "프랑스어 : 초급 회화 가능 (DELF A1)",
];

export const certificates = ["정보처리기사"];
