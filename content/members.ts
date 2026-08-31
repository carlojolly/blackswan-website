export type BoardMember = {
  /** Stable seat id, also seeds the placeholder curve so each avatar differs. */
  id: string;
  index: string;
  role: string;
  name: string;
  /** Path under /public once a photograph exists, null until then. */
  photo: string | null;
};

/** Ten seats: president, vice president, a head of investment research, then
    the division heads. Economics & Politics and Business & Finance each run
    with two co-heads, the other two divisions with one.
    Each id also seeds that seat's placeholder curve, so they must stay unique.
    Names stay as placeholders until the roles are confirmed. */
export const board: BoardMember[] = [
  {
    id: "president",
    index: "01",
    role: "President",
    name: "Marco Similea",
    photo: null,
  },
  {
    id: "vice-president",
    index: "02",
    role: "Vice President",
    name: "Leo Scully",
    photo: null,
  },
  {
    id: "head-investment-research",
    index: "03",
    role: "Head of Investment Research",
    name: "Horia Timofti",
    photo: null,
  },
  {
    id: "co-head-economics-politics-a",
    index: "04",
    role: "Co-Head of Economics & Politics",
    name: "Adrien Tsonev",
    photo: null,
  },
  {
    id: "co-head-economics-politics-b",
    index: "05",
    role: "Co-Head of Economics & Politics",
    name: "Harry Downey",
    photo: null,
  },
  {
    id: "co-head-business-finance-a",
    index: "06",
    role: "Co-Head of Business & Finance",
    name: "Niklas Ondruch",
    photo: null,
  },
  {
    id: "co-head-business-finance-b",
    index: "07",
    role: "Co-Head of Business & Finance",
    name: "Loyd Hegarty",
    photo: null,
  },
  {
    id: "head-cross-domain",
    index: "08",
    role: "Head of Cross-Domain",
    name: "Carlo Giolla",
    photo: null,
  },
  {
    id: "head-academic-research",
    index: "09",
    role: "Head of Academic Research",
    name: "Can Deniz",
    photo: null,
  },
  {
    id: "head-algorithm-development",
    index: "10",
    role: "Head of Algorithm Development",
    name: "Thomas Tumini",
    photo: null,
  },
];

/** Total society size, shown as a plain figure in the membership band. */
export const societySize = "25+";
