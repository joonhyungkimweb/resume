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

// 경력(depth-1). 각 경력에 속한 프로젝트는 projects.json 의 `group` 값으로
// 매칭해 하위(depth-2)로 묶는다.
// showAffiliation: true 인 그룹은 프로젝트마다 소속(team)을 기간 옆에 노출한다.
export const experiences: {
  company: string;
  href?: string;
  role?: string;
  period?: string;
  summary?: string[];
  group: string;
  showAffiliation?: boolean;
}[] = [
  {
    company: "에이아이노미스",
    role: "Web Developer",
    period: "2020.11 ~ 2023.12 (3년 1개월)",
    summary: [
      "AI 모델 추론 서버 Serverless 아키텍처 구축",
      "FE, BE CI/CD 파이프라인 구축",
      "인턴 및 신입 개발자 대상 개발 스터디 진행 (git, docker, JS)",
    ],
    group: "ainomis",
  },
  {
    company: "기타",
    group: "etc",
    showAffiliation: true,
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Programming",
    items: [
      "사용하는 언어의 Idiom을 탐구하고 Convention을 준수하는 것을 즐깁니다.",
      "함수형과 객체 지향 패러다임을 이해하고 적재적소에 사용합니다.",
      "Javascript/Typescript에 능숙합니다. 타입 조작 키워드를 사용하여 TS가 타입 추론을 잘 할 수 있게 격려합니다.",
      "Python의 방대한 AI 관련 생태계를 활용하고 환경을 구성하는 데에 익숙합니다.",
    ],
  },
  {
    category: "Frontend",
    items: [
      "주로 React를 사용해 Frontend를 개발합니다. 함수형 컴포넌트와 Hooks를 능숙하게 사용하고 로직을 적절히 분리합니다.",
      "날 것 그대로의 React를 탐구하는 한 편 생산성을 높이는 React 생태계에도 큰 관심을 기울입니다.",
      "컴포넌트의 디자인 패턴에 대해 숙고하고 우아한 컴포넌트 분리를 위해 노력합니다.",
      "시맨틱한 마크업과 웹 접근성 향상을 지향합니다.",
    ],
  },
  {
    category: "Backend",
    items: [
      "Express, Nest.js, fastAPI 등의 프레임워크를 사용해 웹서버를 구축합니다.",
      "ORM을 사용하여 영속 데이터를 코드 중심으로 처리하는 것을 선호합니다.",
      "Testing Library로 테스트 코드를 작성하고 테스트 주도 개발을 실천하려 노력합니다.",
      "기능 구현뿐만 아니라 보다 효율적인 서비스 구조를 구축하기 위해 고민합니다.",
    ],
  },
  {
    category: "DevOps",
    items: [
      "Docker image 경량화 및 최적화를 위해 노력합니다.",
      "Kubernetes를 사용해 제한된 리소스를 보다 효율적으로 관리해 본 경험이 있습니다.",
      "클라우드 환경에서 제품을 배포하는 데에 익숙하며, 다양한 클라우드 공급자 환경에서 CI/CD를 구축할 수 있습니다.",
      "온프레미스와 클라우드 간, 혹은 서로 다른 클라우드 공급자 사이의 리소스를 이전하거나 각기 다른 환경을 통합해 아키텍처를 구축한 경험이 있습니다.",
    ],
  },
  {
    category: "Others",
    items: [
      "Git을 사용한 버전 관리에 익숙하며, 한 커밋이 일관된 작업 내용을 담도록 많은 노력을 기울입니다. patch 옵션을 애용하고, 필요하다면 공격적인 rebase로 히스토리를 바로잡습니다.",
      "Jira, Notion 등 협업용 도구 사용에 익숙합니다.",
      "문제 해결을 위해 가능한 모든 방법을 탐구하고, 필요하다면 낯선 분야라도 적극적으로 탐색합니다.",
    ],
  },
];

export const languages = [
  "영어 : 일상 회화 가능",
  "일본어 : 고급 및 비즈니스 회화 가능 (JLPT N1)",
  "프랑스어 : 초급 회화 가능 (DELF A1)",
];

export const certificates = ["정보처리기사"];
