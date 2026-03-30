/**
 * Hero 首屏组件 — 大标题 + 简介 + 头像
 * 占满视口高度，居中展示个人信息
 */
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* 背景渐变光晕 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]"
      />

      {/* 科技感 Logo */}
      <div className="relative mb-8">
        <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400 opacity-60 blur-md" />
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-neutral-700/50 bg-[#0a0a0a]">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a855f7" />
                <stop offset="0.5" stopColor="#d946ef" />
                <stop offset="1" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
            {/* &lt;/&gt; 代码标签造型 */}
            <path
              d="M24 18L10 32l14 14M40 18l14 14-14 14"
              stroke="url(#logo-grad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36 12L28 52"
              stroke="url(#logo-grad)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* 大标题 — 渐变文字 */}
      <h1 className="mb-4 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-center text-5xl font-bold leading-tight tracking-tight text-transparent md:text-7xl">
        你好，我是开发者
      </h1>

      {/* 简介 */}
      <p className="mb-8 max-w-2xl text-center text-lg leading-relaxed text-neutral-400 md:text-xl">
        一名热爱创造的全栈工程师，专注于用 React、TypeScript 和现代 Web 技术构建优雅高效的产品体验。
      </p>

      {/* CTA 按钮 */}
      <div className="flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          查看项目
        </a>
        <a
          href="#contact"
          className="rounded-full border border-neutral-700 px-8 py-3 text-sm font-medium text-neutral-300 transition-colors hover:border-purple-500 hover:text-white"
        >
          联系我
        </a>
      </div>
    </section>
  );
};

export default Hero;
