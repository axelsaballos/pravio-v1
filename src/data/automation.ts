export interface AutomationTemplate {
  name: string;
  category: string;
  description: string;
  tags: string[];
  badge?: string;
  featured?: boolean;
  purchaseUrl?: string; // URL de compra (Gumroad, Stripe, etc.) — configurar cuando esté listo
}

export const automationTemplates: AutomationTemplate[] = [
  {
    name: 'Playwright E2E Starter',
    category: 'End-to-End',
    description:
      'Full E2E test suite scaffold with page object model, fixtures, CI configuration and Allure reporting.',
    tags: ['Playwright', 'TypeScript', 'GitHub Actions'],
    badge: 'Popular',
    featured: true,
  },
  {
    name: 'API Testing Suite',
    category: 'API / Integration',
    description:
      'REST and GraphQL contract testing setup with schema validation, data factories and environment management.',
    tags: ['Playwright', 'Supertest', 'Zod'],
    featured: true,
  },
  {
    name: 'CI/CD Quality Gate',
    category: 'DevOps',
    description:
      'Pipeline templates that enforce coverage thresholds, block deploys on regressions, and post results to Slack.',
    tags: ['GitHub Actions', 'GitLab CI', 'Slack'],
    badge: 'New',
    featured: true,
  },
  {
    name: 'Cypress Component Kit',
    category: 'Component',
    description:
      'Component-level test harness for React and Vue applications, with visual snapshot diffing.',
    tags: ['Cypress', 'React', 'Storybook'],
  },
  {
    name: 'Performance Baseline',
    category: 'Performance',
    description:
      'k6 load test suite with threshold definitions, baseline profiles and Grafana dashboard config.',
    tags: ['k6', 'Grafana', 'Docker'],
  },
  {
    name: 'Mobile Automation Pack',
    category: 'Mobile',
    description:
      'Appium setup for iOS and Android with device farms integration, parallel execution and retry logic.',
    tags: ['Appium', 'WebDriverIO', 'BrowserStack'],
  },
];

export const categories = ['All', 'End-to-End', 'API / Integration', 'Component', 'Performance', 'Mobile', 'DevOps'];
