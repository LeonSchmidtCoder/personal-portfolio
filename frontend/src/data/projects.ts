export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "AI 聊天助手",
    description:
      "基于大语言模型的实时对话应用，支持上下文记忆、Markdown 渲染和流式输出。",
    image: "https://placehold.co/600x340/1a1a2e/c084fc?text=AI+Chat",
    techStack: ["React", "TypeScript", "OpenAI API", "Tailwind CSS"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "电商仪表盘",
    description:
      "面向中小卖家的数据可视化后台，包含销售趋势、库存预警和订单管理模块。",
    image: "https://placehold.co/600x340/1a1a2e/a855f7?text=Dashboard",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Chart.js"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "实时协作白板",
    description:
      "支持多人同时编辑的在线白板工具，具备画笔、形状、便签和实时光标同步功能。",
    image: "https://placehold.co/600x340/1a1a2e/d946ef?text=Whiteboard",
    techStack: ["React", "WebSocket", "Canvas API", "Node.js"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "个人作品集",
    description:
      "你正在看的这个网站！使用 React + TypeScript + Tailwind CSS 构建，深色主题 + 渐变设计。",
    image: "https://placehold.co/600x340/1a1a2e/22d3ee?text=Portfolio",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com",
  },
];

export default projects;
