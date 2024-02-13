export default function getTailwindTagColor(tag: string) {
  switch(tag) {
    case "astro": return "bg-tag-astro";
    case "docker": return "bg-tag-docker";
    case "nextjs": return "bg-tag-nextjs";
    case "postgres": return "bg-tag-postgres";
    case "tailwindcss": return "bg-tag-tailwindcss";
    case "typescript": return "bg-tag-typescript";
    default: return "bg-skin-accent";
  }
}