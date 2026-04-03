export type Category =
  | "maths"
  | "art"
  | "music"
  | "physics"
  | "code"
  | "UI/UX"
  | "other";

export interface Sity {
  title: string;
  description: string;
  href: string;
  date: string; // YYYY-MM-DD format for easy sorting
  categories: Category[];
}

export const sities: Sity[] = [
  {
    title: "Pretext Playground",
    description: "Experiment with the exciting world of Pretext.",
    href: "/pretext",
    date: "2026-04-03",
    categories: ["code", "UI/UX", "art"],
  },
  {
    title: "Infinite π Scroll",
    description:
      "Dive into the eternal digits of Pi, continuously revealed as you scroll into infinity.",
    href: "/pi",
    date: "2026-03-14",
    categories: ["maths"],
  },
  {
    title: "Mandelbrot Explorer",
    description:
      "Zoom and explore the infinite boundaries of the Mandelbrot fractal.",
    href: "/mandelbrot",
    date: "2026-03-10",
    categories: ["maths"],
  },
];
