import Unscrambling from "./Unscrambling"
import { useRef, useEffect } from "react"
import { motion } from "motion/react"

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

  type Project = {
    title: string
    description: string
    sourceURL?: string
    demoURL?: string
    chips?: string[]
  }
  const projects: Project[] = [
    {
      title: "Shifts",
      description:
        "Full stack rota and shift management system with authentication",
      demoURL: "https://github.com/nocdn/shifts",
      chips: ["react", "supabase", "nextjs", "betterAuth"],
    },
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
      sourceURL: "https://github.com/nocdn/booksr",
      chips: ["react", "sqlite"],
    },
    {
      title: "MCQs",
      description:
        "Interactive psychology practice questions built for my friends",
      demoURL: "https://mcqs.bartoszbak.org/",
      chips: ["react", "supabase", "lambda"],
    },
    {
      title: "Quiet Watch",
      description: "Intelligent ad segment remover powered by LLMs",
      sourceURL: "https://github.com/nocdn/ad-segment-trimmer",
      chips: ["python"],
    },
    {
      title: "Echoes",
      description: "Full stack, self-hostable video/audio transcription app",
      demoURL: "https://whisper.bartoszbak.org/",
      chips: ["python"],
    },
  ]

  const unscramblingElements = projects.map((project, index) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.175, 0.885, 0.32, 1.0] }}
      className="flex flex-col gap-1"
      key={index}
    >
      <Unscrambling
        title={project.title}
        description={project.description}
        key={index}
        demoURL={project.demoURL}
        sourceURL={project.sourceURL}
        chips={project.chips}
        animate={false}
      />
    </motion.div>
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
      <p className="font-jetbrains-mono font-semibold text-[16px] text-gray-500/65 mb-2">
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
