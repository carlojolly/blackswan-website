export type BoardGroupId = "leadership" | "divisions" | "operations";

export type BoardGroup = { id: BoardGroupId; title: string };

/** Rendered in this order. Grouping the board is what stops a ragged final
    row reading as a leftover: each group simply ends where it ends. */
export const boardGroups: BoardGroup[] = [
  { id: "leadership", title: "Leadership" },
  { id: "divisions", title: "Divisions" },
  { id: "operations", title: "Media & Operations" },
];

export type BoardMember = {
  /** Stable seat id, also seeds the placeholder curve so each avatar differs. */
  id: string;
  index: string;
  group: BoardGroupId;
  role: string;
  name: string;
  /** Path under /public once a photograph exists, null until then. */
  photo: string | null;
};

/** Thirteen seats: president, vice president, a head of investment research,
    the division heads, then the media and operations functions. Economics & Politics and Business & Finance each run
    with two co-heads, the other two divisions with one.
    Each id also seeds that seat's placeholder curve, so they must stay unique.
    Names stay as placeholders until the roles are confirmed. */
export const board: BoardMember[] = [
  {
    id: "president",
    index: "01",
    group: "leadership",
    role: "President",
    name: "Marco Similea",
    photo: null,
  },
  {
    id: "vice-president",
    index: "02",
    group: "leadership",
    role: "Vice President",
    name: "Leo Scully",
    photo: null,
  },
  {
    id: "head-investment-research",
    index: "03",
    group: "leadership",
    role: "Head of Investment Research",
    name: "Horia Timofti",
    photo: null,
  },
  {
    id: "co-head-economics-politics-a",
    index: "04",
    group: "divisions",
    role: "Co-Head of Economics & Politics",
    name: "Adrien Tsonev",
    photo: null,
  },
  {
    id: "co-head-economics-politics-b",
    index: "05",
    group: "divisions",
    role: "Co-Head of Economics & Politics",
    name: "Harry Downey",
    photo: null,
  },
  {
    id: "co-head-business-finance-a",
    index: "06",
    group: "divisions",
    role: "Co-Head of Business & Finance",
    name: "Niklas Ondruch",
    photo: null,
  },
  {
    id: "co-head-business-finance-b",
    index: "07",
    group: "divisions",
    role: "Co-Head of Business & Finance",
    name: "Loyd Hegarty",
    photo: null,
  },
  {
    id: "head-cross-domain",
    index: "08",
    group: "divisions",
    role: "Head of Cross-Domain",
    name: "Carlo Giolla",
    photo: null,
  },
  {
    id: "head-academic-research",
    index: "09",
    group: "divisions",
    role: "Head of Academic Research",
    name: "Can Deniz",
    photo: null,
  },
  {
    id: "head-algorithm-development",
    index: "10",
    group: "divisions",
    role: "Head of Algorithm Development",
    name: "Thomas Tumini",
    photo: null,
  },
  {
    id: "co-head-media-a",
    index: "11",
    group: "operations",
    role: "Co-Head of Media",
    name: "Maria Mateescu",
    photo: null,
  },
  {
    id: "co-head-media-b",
    index: "12",
    group: "operations",
    role: "Co-Head of Media",
    name: "Sofia Damean",
    photo: null,
  },
  {
    id: "head-operations-events",
    index: "13",
    group: "operations",
    role: "Head of Operations & Events",
    name: "Matteo Mascaretti",
    photo: null,
  },
];

/** Total society size, shown as a plain figure in the membership band. */
export const societySize = "25+";
