import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "AI & Career Reality",
  DESCRIPTION: "Forget the hype. We focus on where you stand. A realist's chronicle of career and technology.",
  AUTHOR: "mihawben",
}

// Work Page
export const WORK: Page = {
  TITLE: "Migration",
  DESCRIPTION: "Documenting professional shifts in the age of AI.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Reality Check",
  DESCRIPTION: "Uncovering costs, risks, and truths from a layman's perspective.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Toolbox",
  DESCRIPTION: "Pragmatic tools and resources that actually work.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all articles and insights by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Reality Check", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Migration", 
    HREF: "/work", 
  },
  { 
    TEXT: "Toolbox", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "wei@example.com", // 建议改为你的邮箱
    HREF: "mailto:wei@example.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "mihawben",
    HREF: "https://github.com/mihawben"
  }
]