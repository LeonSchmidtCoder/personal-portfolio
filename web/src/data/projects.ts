import heroImg from '../assets/hero.png'

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  imageSrc: string
  href: string
}

/**
 * 项目数据：以数组形式集中管理，后续新增/修改只需改这里。
 * 目前没有专门的项目截图素材，所以先复用 `hero.png` 作为占位图。
 */
export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description:
      '使用 React + TypeScript + Tailwind 打造深色主题的个人作品集站点，强调性能与移动端体验。',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    imageSrc: heroImg,
    href: 'https://example.com',
  },
  {
    id: 'dashboard',
    title: 'Dashboard UI',
    description:
      '面向数据展示的卡片化界面，包含可复用组件、响应式布局与渐变强调视觉系统。',
    tags: ['UI', 'Responsive', 'Design System'],
    imageSrc: heroImg,
    href: 'https://example.com',
  },
  {
    id: 'animation',
    title: 'Smooth Motion',
    description:
      '把动效节奏与可访问性结合：滚动/交互状态尽量轻量，提升整体“质感”。',
    tags: ['Motion', 'Accessibility', 'Performance'],
    imageSrc: heroImg,
    href: 'https://example.com',
  },
]

