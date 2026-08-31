/** Every string the site renders lives here or in a sibling content file. */

export const site = {
  name: "Black Swan Student Society",
  shortName: "Black Swan",
  university: "Bocconi University",
  city: "Milan",

  hero: {
    heading: "Black Swan Student Society",
    line: "A student association at Bocconi University in Milan, built around prediction markets and probabilistic thinking.",
    link: { label: "How membership works", href: "#membership" },
  },

  thesis: {
    eyebrow: "Thesis",
    heading: "A price is a probability",
    paragraphs: [
      "A prediction market turns a question into a price. When people with something at stake disagree about whether an event will happen, the price they settle on behaves as a probability, and it moves as evidence arrives.",
      "We use that mechanism as a method. It forces a view into a number, which makes it testable, and it rewards calibration over conviction: a forecaster who says seventy per cent should be right seventy per cent of the time.",
      "Nobody checks most analysis against what happened. Every forecast we publish carries a resolution date and a record of who was right.",
    ],
  },

  divisionsIntro: {
    eyebrow: "Divisions",
    heading: "Five divisions, one method",
    line: "Each division owns a set of questions. The method underneath them does not change: state a probability, write the reasoning, take the score.",
    exampleLabel: "Example market",
    exampleNote: "Example markets are illustrative",
  },

  membership: {
    eyebrow: "Membership",
    heading: "What members actually do",
    line: "Membership is by application. We keep it small so that everyone reads everyone else's work, and there is no seniority in a forecast.",
    activities: [
      {
        title: "Weekly forecasts",
        body: "Every member publishes a probability each week with the reasoning written underneath it.",
      },
      {
        title: "Internal markets",
        body: "Members trade the society's own markets against each other, which is where disagreement gets expensive.",
      },
      {
        title: "Research notes",
        body: "When a question deserves more than a number, the division writes it up and circulates it.",
      },
      {
        title: "Competitions",
        body: "We enter external forecasting competitions as a team and score ourselves against the field.",
      },
    ],
    applicationsTitle: "Applications",
    applicationsLine: "Applications open in September and February",
    applicationsNote:
      "We recruit twice a year. The form opens here when applications do.",
    formState: "Opens soon",
  },

  board: {
    eyebrow: "Board",
    heading: "Who runs it",
    line: "The society is run by a board of ten: a president, a vice president, a head of investment research, and heads for each division.",
    note: "Photographs are on the way. Until then each seat carries its own calibration curve.",
  },

  footer: {
    address: "Bocconi University, Milan",
    sectionsTitle: "Sections",
    elsewhereTitle: "Elsewhere",
    social: [
      {
        label: "Instagram",
        icon: "instagram",
        href: "{{PLACEHOLDER: Instagram URL}}",
      },
      {
        label: "LinkedIn",
        icon: "linkedin",
        href: "{{PLACEHOLDER: LinkedIn URL}}",
      },
      {
        label: "Email",
        icon: "mail",
        href: "mailto:{{PLACEHOLDER: contact email}}",
      },
    ],
    copyright: "© 2026 Black Swan Student Society",
  },

  nav: [
    { label: "Thesis", href: "/#thesis" },
    { label: "Divisions", href: "/#divisions" },
    { label: "Membership", href: "/#membership" },
    { label: "Board", href: "/board" },
  ],
} as const;
