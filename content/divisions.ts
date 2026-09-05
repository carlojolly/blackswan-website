export type Division = {
  id: string;
  index: string;
  name: string;
  remit: string;
  /** One line of areas, three per division, under the remit. */
  scope: string[];
  /** Illustrative only, and labelled as such in the section. Static: the
      brief allows one ambient element and only in the hero. Omitted by the
      two divisions that study markets rather than run them, where a sample
      question would only point back at the society. */
  example?: { question: string; probability: string };
};

export const divisions: Division[] = [
  {
    id: "economics-politics",
    index: "01",
    name: "Economics & Politics",
    remit: "We cover the markets tied to macroeconomic and political outcomes, from central bank decisions and inflation data to elections, trade policy and geopolitics. We watch how they take in new information, and measure their probabilities against the polls, forecasts and data.",
    scope: ["Central banks", "Macro data", "Elections & policy"],
    example: { question: "The Fed hikes rates before the end of 2026", probability: "0.22" },
  },
  {
    id: "business-finance",
    index: "02",
    name: "Business & Finance",
    remit: "We apply prediction markets to corporate and financial events, from company earnings and industry rankings to the course of an acquisition: what the buyer pays, how the tender offer and the negotiations go, and whether the deal closes at all.",
    scope: ["Earnings", "Industry rankings", "M&A"],
    example: { question: "Tesla and SpaceX announce a merger by 2027", probability: "0.09" },
  },
  {
    id: "cross-domain",
    index: "03",
    name: "Cross-Domain",
    remit: "We work outside traditional finance, on crypto, weather, public appearances and mention markets. We watch how these markets respond to real-world information, and compare the probabilities across sources to see how expectations form and where they disagree.",
    scope: ["Crypto", "Weather", "Appearances & mentions"],
    example: { question: "Bitcoin closes 2026 above $200,000", probability: "0.19" },
  },
  {
    id: "market-studies",
    index: "04",
    name: "Market Studies",
    remit: "We study the markets themselves, publishing market reports and statistical research on what prediction markets reveal once they have closed.",
    scope: ["Closed markets", "Statistical analysis", "Price drivers"],
  },
  {
    id: "algorithm-development",
    index: "05",
    name: "Algorithm Development",
    remit: "We look for alpha in prediction markets through statistical models and systematic trading, turning research ideas into testable strategies through algorithm design and backtesting.",
    scope: ["Statistical models", "Backtesting", "Systematic trading"],
  },
];
