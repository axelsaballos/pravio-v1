export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    phase: 'Assess',
    title: 'Understand your baseline',
    description:
      'We map your current state, your stack, and your team before writing a single line of process.',
  },
  {
    number: '02',
    phase: 'Design',
    title: 'Build the foundation',
    description:
      'Strategy, standards, processes and tooling — all tailored to how your organization actually works.',
  },
  {
    number: '03',
    phase: 'Execute',
    title: 'Implement & automate',
    description:
      'We deploy the frameworks, set up automation pipelines and staff the roles your operation needs.',
  },
  {
    number: '04',
    phase: 'Enable',
    title: 'Hand it over',
    description:
      'We train your team to own and evolve the system independently, so quality scales with you.',
  },
];
