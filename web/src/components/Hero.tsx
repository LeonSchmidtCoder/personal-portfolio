import type { CSSProperties } from 'react'

export type HeroProps = {
  title: string
  description: string
  avatarSrc: string
  avatarAlt: string
  /**
   * Title 的高亮片段（会用渐变色显示）。
   * 如果为空，则整个 title 都使用普通样式。
   */
  highlight?: string
  /**
   * 可选：允许外部传入渐变光晕颜色微调。
   */
  glowStyle?: CSSProperties
}

export default function Hero({
  title,
  description,
  avatarSrc,
  avatarAlt,
  highlight,
  glowStyle,
}: HeroProps) {
  const titleBefore =
    highlight && title.includes(highlight)
      ? title.slice(0, title.indexOf(highlight))
      : title
  const titleAfter =
    highlight && title.includes(highlight)
      ? title.slice(title.indexOf(highlight) + highlight.length)
      : ''

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/30 via-violet-500/30 to-cyan-400/20 blur-3xl"
        style={glowStyle}
      />

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <div className="w-full md:max-w-2xl">
            <h1 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl md:text-left">
              {highlight ? (
                <>
                  {titleBefore}
                  <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                    {highlight}
                  </span>
                  {titleAfter}
                </>
              ) : (
                title
              )}
            </h1>

            <p className="mt-5 max-w-prose text-center text-base leading-relaxed text-white/80 sm:text-lg md:text-left">
              {description}
            </p>

            <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300" />
              <span className="text-sm text-white/70">Crafted with React + TypeScript</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-fuchsia-400/25 via-violet-400/25 to-cyan-300/20 blur-lg" />
            <img
              src={avatarSrc}
              alt={avatarAlt}
              loading="lazy"
              className="relative h-40 w-40 rounded-full border border-white/10 bg-white/5 object-cover shadow-[0_0_80px_rgba(192,132,252,0.25)] sm:h-44 sm:w-44"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

