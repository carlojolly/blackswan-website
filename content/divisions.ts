export type Division = {
  id: string;
  index: string;
  name: string;
  remit: string;
  /** One line of areas. This is how Cross-Domain visibly spans all four of
      its areas now that the bulleted lists are gone. */
  scope: string[];
  /** Illustrative only, and labelled as such in the section. Static: the
      brief allows one ambient element and only in the hero. */
  example: { question: string; probability: string };
};

export const divisions: Division[] = [
  {
    id: "economics-politics",
    index: "01",
    name: "Economics & Politics",
    remit: "We price macro releases, central bank decisions and elections, then argue about why the market disagrees with us.",
    scope: ["Central banks", "Elections", "Macro releases"],
    example: { question: "The ECB cuts before the Fed does", probability: "0.34" },
  },
  {
    id: "business-finance",
    index: "02",
    name: "Business & Finance",
    remit: "We price corporate events, from earnings and guidance through to deals that may or may not close.",
    scope: ["Earnings", "Mergers", "Listings"],
    example: { question: "Tesla and SpaceX announce a merger by 2027", probability: "0.09" },
  },
  {
    id: "cross-domain",
    index: "03",
    name: "Cross-Domain",
    remit: "We take the questions that refuse to sit inside one discipline, across crypto, sports, private markets and whatever the week is actually arguing about.",
    scope: ["Crypto", "Sports", "Private markets", "Trending"],
    example: { question: "Anthropic's IPO values it above $2tn", probability: "0.41" },
  },
  {
    id: "academic-research",
    index: "04",
    name: "Academic Research",
    remit: "We study the markets themselves, publishing market reports and original research on what prediction markets reveal about the world.",
    scope: ["Market reports", "Open questions", "Methodology"],
    example: { question: "Prediction markets beat polling averages at the next election", probability: "0.58" },
  },
  {
    id: "algorithm-development",
    index: "05",
    name: "Algorithm Development",
    remit: "We build what the other four divisions run on, from data pipelines through to the scoring that tells us how good we actually are.",
    scope: ["Data pipelines", "Backtesting", "Calibration"],
    example: { question: "Our model is better calibrated than the market", probability: "0.28" },
  },
];
