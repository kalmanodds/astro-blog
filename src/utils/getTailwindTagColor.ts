export default function getTailwindTagColor(tag: string) {
  switch(tag) {
    case "typescript": return "bg-tag-typescript";
    case "astro": return "bg-tag-astro";
    case "tailwindcss": return "bg-tag-tailwindcss";
    default: return "bg-skin-fill";
  }
}