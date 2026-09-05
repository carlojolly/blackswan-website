/** Every string the site renders lives here or in a sibling content file. */

const EMAIL = "as.blackswan@unibocconi.it";

/** The live application form. Null until it exists, which is what puts the
    footer button and the slot in the applications block into their waiting
    state. Setting it here turns both into real links. */
const APPLICATION_FORM: string | null = null;

export const site = {
  name: "Black Swan Student Society",
  shortName: "Black Swan",
  university: "Bocconi University",
  city: "Milan",

  /** Canonical origin. Crawlers cannot resolve relative paths, so the
      metadata base, the sitemap and the robots file all read it from here. */
  url: "https://www.blackswanstudents.com",

  /** The <title> only, never rendered on the page: the hero still carries the
      name on its own. Search results need to say what the society is and
      where, which the name alone does not. Under 60 characters so the part
      that does that work survives truncation in the results page. */
  metaTitle: "Black Swan Student Society — Prediction Markets at Bocconi",

  hero: {
    heading: "Black Swan Student Society",
    line: "A student association at Bocconi University in Milan, built around prediction markets and probabilistic thinking.",
    link: { label: "Apply here", href: "#apply" },
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
    heading: "Our Divisions",
    line: "Three of the five are investment research, each pricing its own domain and pitching what it finds. The other two work on the markets themselves: how they behave, and the models underneath.",
    exampleLabel: "Example market",
    exampleNote: "Example markets are illustrative",
  },

  membership: {
    eyebrow: "Membership",
    heading: "What you get as a member",
    benefits: [
      {
        title: "Career Support",
        body: "Members in their second and third year help with internships, CVs and recruiting, and with whatever else you are stuck on.",
      },
      {
        title: "The Community",
        body: "Events with people who trade, research and build for a living, and a drink together often enough that you know everyone in the room.",
      },
      {
        title: "Output",
        body: "Research notes and market reports go out under your name, so there is real work to point at by the end of the year.",
      },
      {
        title: "You are early",
        body: "We are in the building stage, so what the society becomes over the next two years is largely down to the people joining now.",
      },
    ],
    applicationsTitle: "Applications",
    applicationsLine: "Applications are now open",
    applicationsNote:
      "The form asks for your CV and a short response. Applications are reviewed on a rolling basis, and shortlisted candidates will be invited to an interview.",
    applyLabel: "Apply here",
    formState: "Opens soon",
    timelineTitle: "Timeline",
    timeline: [
      { date: "6 September", label: "Applications open" },
      { date: "TBD", label: "Networking aperitivo" },
      { date: "24 September", label: "Associations on Display" },
      { date: "27 September", label: "Applications close" },
      { date: "5\u20136 October", label: "Final decisions" },
    ],
  },

  board: {
    heading: "The Board",
    note: "Photographs are on the way.",
  },

  footer: {
    address: "Bocconi University, Milan",
    sectionsTitle: "Sections",
    /** Closes the sections column as the one action in it, rather than
        joining the nav, which stays to the three destinations. The
        destination is the form itself, not the section about it. */
    applyLabel: "Apply here",
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
        href: `mailto:${EMAIL}`,
      },
    ],
    copyright: "© 2026 Black Swan Student Society",
  },

  nav: [
    { label: "Divisions", href: "/#divisions" },
    { label: "Membership", href: "/#membership" },
    { label: "Board", href: "/board" },
  ],

  contact: { label: "Contact us", href: `mailto:${EMAIL}` },

  applicationForm: APPLICATION_FORM,
} as const;
