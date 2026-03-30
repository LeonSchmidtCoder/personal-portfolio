import heroImg from './assets/hero.png'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Hero
        title="Hi, I'm a Frontend Developer who loves building"
        highlight="beautiful UI"
        description="使用 React + TypeScript 打造稳定、易维护且注重细节的产品体验。把性能、可访问性和动画节奏做到刚刚好。"
        avatarSrc={heroImg}
        avatarAlt="Portfolio avatar"
      />
      <Projects />
    </div>
  )
}
