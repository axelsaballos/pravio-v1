export interface Service {
  icon: string;
  title: string;
  description: string;
  longDescription: string;
  includes: string[];
  slug: string;
}

export const services: Service[] = [
  {
    icon: 'grid',
    slug: 'qa-strategy',
    title: 'QA Strategy & Process Design',
    description:
      'We build your quality framework from scratch — structured, scalable, and aligned with how your team actually works.',
    longDescription:
      'We design your entire quality foundation from the ground up. That means defining testing standards, documentation practices, risk models, and workflows that actually fit your product and team — not a generic template.',
    includes: [
      'Quality framework design tailored to your product',
      'Testing standards and documentation guidelines',
      'Risk-based testing strategy and coverage model',
      'Tooling selection and integration roadmap',
    ],
  },
  {
    icon: 'flask',
    slug: 'qa-testing',
    title: 'QA Testing',
    description:
      'Functional, regression, exploratory and end-to-end testing strategies tailored to your product and business requirements.',
    longDescription:
      'We execute structured testing across your entire product — from core user flows to edge cases. Our approach combines functional, regression, exploratory and end-to-end testing to give you real confidence before every release.',
    includes: [
      'Functional and regression test execution',
      'Exploratory testing sessions with detailed reports',
      'End-to-end test coverage for critical flows',
      'Bug reporting with reproduction steps and severity triage',
    ],
  },
  {
    icon: 'robot',
    slug: 'test-automation',
    title: 'Test Automation',
    description:
      'Modern automation frameworks built for your stack. From tool selection to pipeline setup and team training.',
    longDescription:
      'We build automation that actually runs in your CI/CD pipeline and stays maintainable over time. From choosing the right tools to writing the first tests and training your team — we handle the full automation lifecycle.',
    includes: [
      'Framework selection and architecture design',
      'End-to-end and API test automation implementation',
      'CI/CD pipeline integration (GitHub Actions, GitLab CI, etc.)',
      'Team training and handover documentation',
    ],
  },
  {
    icon: 'users',
    slug: 'qa-staffing',
    title: 'QA Staffing & Team Building',
    description:
      'We source, vet and onboard the QA professionals your operation needs — as part of the project, covered by your engagement.',
    longDescription:
      'Beyond strategy and execution, we help you build the team that will own quality long-term. We identify the right profiles, run technical vetting, and handle onboarding — so you get engineers who are already aligned with your process from day one.',
    includes: [
      'QA profile definition based on your needs',
      'Technical screening and vetting of candidates',
      'Onboarding aligned to your defined QA process',
      'Retention and team structure recommendations',
    ],
  },
  {
    icon: 'chart',
    slug: 'qa-consulting',
    title: 'QA Consulting',
    description:
      'We audit your current processes, identify the gaps, and deliver a clear roadmap to fix them — fast.',
    longDescription:
      'Already have a QA practice but something isn\'t working? We audit your current setup — tools, processes, coverage, team dynamics — and deliver a concrete, prioritized roadmap to close the gaps without rebuilding everything from scratch.',
    includes: [
      'Full audit of current QA processes and tooling',
      'Gap analysis and risk identification',
      'Prioritized improvement roadmap',
      'Optional: hands-on implementation support',
    ],
  },
  {
    icon: 'school',
    slug: 'training',
    title: 'Training & Team Enablement',
    description:
      'We train your engineers on modern QA practices so the knowledge stays in-house long after we\'re done.',
    longDescription:
      'We run structured training programs that turn your engineering team into confident quality practitioners. From QA fundamentals to advanced automation — the knowledge stays with your team, not with us.',
    includes: [
      'Custom training program based on your team\'s current level',
      'QA fundamentals, test design and automation workshops',
      'Hands-on practice with your actual product and stack',
      'Post-training support and reference materials',
    ],
  },
];
