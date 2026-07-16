import type { Config } from "tailwindcss";
import preset from "@flow-hq/config/tailwind";

export default {
  presets: [preset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  plugins: [require("tailwindcss-animate")]
} satisfies Config;
