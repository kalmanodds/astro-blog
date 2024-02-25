import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BGXLXoF4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A blog/portfolio website created using Astro 3.0 and Tailwind.\r\nSimple styling combined with Astro’s <em>View Transitions</em> make for a nice user experience.</p>";

				const frontmatter = {"title":"kalmanodds.com","projectSlug":"kalmanodds","description":"A blog/portfolio website created using Astro 3.0 and Tailwind.","publishedAt":"2023-09-23T15:22:00.000Z","image":"","url":"https://github.com/kalmanodds/kalmanodds.com","featured":true,"readmeUrl":"https://raw.githubusercontent.com/kalmanodds/kalmanodds.com/master/README.md","tags":["Astro","TypeScript","TailwindCSS"]};
				const file = "C:/Users/sigur/Documents/dev/astro-blog/src/content/portfolio/kalmanodds.md";
				const url = undefined;
				function rawContent() {
					return "A blog/portfolio website created using Astro 3.0 and Tailwind.\r\nSimple styling combined with Astro's *View Transitions* make for a nice user experience.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
