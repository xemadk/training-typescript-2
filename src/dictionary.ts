type Sizes = "small" | "medium" | "large";
type EurSizes = Record<Sizes, string>;
type UkSizes = Record<Sizes, number>;

const eurSizes: EurSizes = { small: "s", medium: "m", large: "l" };
const ukSizes: UkSizes = { small: 8, medium: 9, large: 10 };
