import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "AI & CAREER REALITY",
  DESCRIPTION: "Critical examinations of technological shifts. No hype, no bias—just the hard truths about professional survival in the age of AI.",
  AUTHOR: "mihawben",
}

// Blog Page - 修改这里
export const BLOG: Page = {
  TITLE: "Analysis", // 页面标题改为 Analysis
  DESCRIPTION: "In-depth observations on AI and the evolving professional landscape.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all articles and insights by keyword.",
}

// Links - 修改这里
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Analysis", // 导航栏名称同步修改
    HREF: "/blog", 
  }
]

// Socials (保持原样即可)
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "your-email@example.com", // 记得改成你自己的
    HREF: "mailto:your-email@example.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "mihawben",
    HREF: "https://github.com/mihawben"
  }
]