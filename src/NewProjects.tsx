import Unscrambling from "./Unscrambling"
import { useRef, useEffect, useState } from "react"

export default function NewProjects({
  className,
  onDotLoad,
  onHover,
}: {
  className?: string
  onDotLoad?: (rect: DOMRect) => void
  onHover?: () => void
}) {
  const dotRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (titleRef.current && onDotLoad) {
      onDotLoad(titleRef.current.getBoundingClientRect())
    }
  }, [onDotLoad])

  const [shownIndex, setShownIndex] = useState(0)

  type Project = {
    title: string
    description: string
    sourceURL?: string
    demoURL?: string
    chips?: string[]
  }
  const projects: Project[] = [
    {
      title: "Vanish",
      description: "Temporary emails through Cloudflare, with frontend and API",
      sourceURL: "https://github.com/nocdn/vanish",
      chips: ["react", "flask"],
    },
    {
      title: "Books",
      description:
        "Recreation of (Basic) Bookmarks in Svelte with extra features",
      demoURL: "https://bookmarks.bartoszbak.org/",
      chips: ["svelte", "sqlite"],
    },
    {
      title: "Quiet Watch",
      description: "Intelligent ad segment remover powered by LLMs",
      sourceURL: "https://github.com/nocdn/ad-segment-trimmer",
    },
    {
      title: "Echoes",
      description: "Full stack, self-hostable video/audio transcription app",
      demoURL: "https://whisper.bartoszbak.org/",
    },
    {
      title: "MCQs",
      description:
        "Interactive psychology practice question built for my friends",
      demoURL: "https://mcqs.bartoszbak.org/",
    },
    {
      title: "Shifts",
      description: "Rota management, and shift management system",
      demoURL: "https://whisper.bartoszbak.org/",
      chips: ["react", "supabase", "nextjs"],
    },
  ]

  useEffect(() => {
    for (let i = 0; i < projects.length; i++) {
      setTimeout(() => {
        setShownIndex((prev) => prev + 1)
      }, i * 125)
    }
  }, [])

  const unscramblingElements = projects.map((project, index) => (
    <div className="flex flex-col gap-1" key={index}>
      {index < shownIndex && (
        <Unscrambling
          title={project.title}
          description={project.description}
          key={index}
          demoURL={project.demoURL}
          sourceURL={project.sourceURL}
          chips={project.chips}
        />
      )}
    </div>
  ))

  return (
    <div
      className={`${className} mt-12 relative`}
      onMouseEnter={() => {
        onHover?.()
      }}
    >
      <div
        ref={dotRef}
        className="absolute top-[6px] -left-8 rounded-full w-4.5 h-4.5"
      ></div>
      <p className="font-jetbrains-mono font-medium text-[16px] text-gray-500 mb-2">
        PROJECTS
      </p>
      <div
        ref={titleRef}
        className="text-[15px] flex flex-col gap-1"
        style={{
          fontFamily: "PP Neue Montreal",
          fontWeight: 500,
          lineHeight: "32px",
          fontSize: "17px",
        }}
      >
        {unscramblingElements}
      </div>
    </div>
  )
}
