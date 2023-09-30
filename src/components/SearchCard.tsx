import type { BlogFrontmatter, ProjectFrontmatter } from "@content/_schemas";
import SearchDateTime from "./SearchDateTime";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter | ProjectFrontmatter;
  secHeading?: boolean;
}

// React copy of Card.astro because Astro components can't be used in React
const SearchCard = ({ href, frontmatter, secHeading }: Props) => {
  const { title, publishedAt, description } = frontmatter;
  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 className="text-lg font-medium decoration-dashed hover:underline">
            {title}
          </h2>
        ) : (
          <h3 className="text-lg font-medium decoration-dashed hover:underline">
            {title}
          </h3>
        )}
      </a>
      <SearchDateTime datetime={publishedAt} />
      <p>{description}</p>
      </li>
  )
}

export default SearchCard;
