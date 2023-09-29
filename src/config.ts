import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://kalmanodds.dev/",
  author: "Sigurður Kalman Oddsson",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "kalmanodds",
  ogImage: "astropaper-og.jpg",
  postPerPage: 4,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/kalmanodds",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kalmanodds/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:kalmanodds@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
