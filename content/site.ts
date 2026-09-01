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

  origin: {
    eyebrow: "The name",
    heading: "Why Black Swan",
    paragraphs: [
      "The name comes from Nassim Nicholas Taleb's 2007 book, The Black Swan: The Impact of the Highly Improbable. Taleb, a former options trader, used the term for the rare events that decide outcomes and that everyone explains away afterwards.",
      "That is what we work on. A prediction market forces you to put a number on the unlikely thing instead of ignoring it, and then holds you to that number when the question resolves.",
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
        title: "Market mechanics",
        body: "We work through how these markets function, from how a contract resolves to where the price gets it wrong.",
      },
      {
        title: "Research notes",
        body: "When a question deserves more than a number, the division writes it up and circulates it.",
      },
      {
        title: "Competitions",
        body: "We score and rank every member's calls, so who forecasts best is a matter of record rather than opinion.",
      },
    ],
    applicationsTitle: "Applications",
    applicationsLine: "Applications open in September and February",
    applicationsNote:
      "We recruit twice a year. The form opens here when applications do.",
    formState: "Opens soon",
  },

  board: {
    heading: "The board",
    line: "The society is run by a board of thirteen: a president and vice president, a head of investment research, heads for each division, and heads of media and operations.",
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
        href: "https://www.instagram.com/blackswanstudentsociety/",
      },
      {
        label: "LinkedIn",
        icon: "linkedin",
        href: "https://www.linkedin.com/company/black-swan-student-society/",
      },
      {
        label: "Email",
        icon: "mail",
        href: "mailto:as.blackswan@unibocconi.it",
      },
    ],
    copyright: "© 2026 Black Swan Student Society",
  },

  nav: [
    { label: "Divisions", href: "/#divisions" },
    { label: "Membership", href: "/#membership" },
    { label: "Board", href: "/board" },
  ],

  contact: { label: "Contact us", href: "/#contact" },
} as const;
