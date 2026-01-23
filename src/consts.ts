import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "AI & CAREER REALITY",
  DESCRIPTION: "Forget the hype. We focus on where you stand. A realist's chronicle of career and technology.",
  AUTHOR: "mihawben",
}



// Blog Page
export const BLOG: Page = {
  TITLE: "Reality Check",
  DESCRIPTION: "Uncovering costs, risks, and truths from a layman's perspective.",
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
  }
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