export type Pattern = {
  name: string;
  value: string;
  preview: string;
};

export const patterns: Pattern[] = [
  {
    name: "Damier",
    value: "bg-[url('/patterns/checker.svg')]",
    preview: "repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50% / 20px 20px"
  },
  {
    name: "Tressé",
    value: "bg-[url('/patterns/weave.svg')]",
    preview: "repeating-linear-gradient(45deg, #808080 0px, #808080 2px, transparent 2px, transparent 10px)"
  }
]; 