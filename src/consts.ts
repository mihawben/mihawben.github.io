import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "AI & Career Reality",
  EMAIL: "wei@example.com", 
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_WORKS_ON_HOMEPAGE: 0, 
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  // 对应：不讨论“风口”，只讨论“你站不站得住”。
  DESCRIPTION: "Forget the hype. We focus on where you stand. A realist's chronicle in the age of technology.",
};

export const BLOG: Metadata = {
  TITLE: "Reality Check",
  // 对应：普通人视角下的成本、风险与真相。
  DESCRIPTION: "Uncovering the costs, risks, and truths from a layman's perspective.",
};

export const WORK: Metadata = {
  TITLE: "Case Studies",
  DESCRIPTION: "Practical attempts and real-world results.",
};

export const PROJECTS: Metadata = {
  TITLE: "Toolbox",
  DESCRIPTION: "Tools that actually work in the real world.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github", 
    HREF: "https://github.com/mihawben" 
  }
];