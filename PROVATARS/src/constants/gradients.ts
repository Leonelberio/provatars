export type GradientPreset = {
  name: string;
  value: string;
  preview: string;
};

export const gradients: GradientPreset[] = [
  {
    name: "Sunset",
    value: "bg-gradient-to-r from-orange-500 to-pink-500",
    preview: "linear-gradient(to right, #f97316, #ec4899)"
  },
  {
    name: "Ocean",
    value: "bg-gradient-to-r from-blue-400 to-emerald-400",
    preview: "linear-gradient(to right, #60a5fa, #34d399)"
  },
  {
    name: "Forest",
    value: "bg-gradient-to-r from-green-400 to-emerald-600",
    preview: "linear-gradient(to right, #4ade80, #059669)"
  },
  {
    name: "Purple Rain",
    value: "bg-gradient-to-r from-purple-500 to-indigo-500",
    preview: "linear-gradient(to right, #a855f7, #6366f1)"
  },
  {
    name: "Fire",
    value: "bg-gradient-to-r from-red-500 to-yellow-500",
    preview: "linear-gradient(to right, #ef4444, #eab308)"
  }
]; 