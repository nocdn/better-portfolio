import Unscrambling from "./Unscrambling"
import { useRef, useEffect } from "react"

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
        <Unscrambling
          title="Vanish"
          subtitle="Temporary emails through Cloudflare"
        />
        <Unscrambling
          title="Books"
          subtitle="Recreation of (Basic) Bookmarks in Svelte with extra features"
        />
      </div>
    </div>
  )
}
