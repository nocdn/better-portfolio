import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"

export default function Unscrambling({
  className,
  title,
  subtitle,
}: {
  className?: string
  title: string
  subtitle?: string
}) {
  const titleRef = useRef<HTMLParagraphElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const [showSubtitle, setShowSubtitle] = useState(false)
  useEffect(() => {
    gsap.registerPlugin(ScrambleTextPlugin)

    if (titleRef.current) {
      gsap.to(titleRef.current, {
        duration: 1.5, // ← 2 seconds instead of 1
        scrambleText: {
          text: title,
          chars:
            "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789",
          revealDelay: 0.1,
          speed: 0.5, // ← updates scrambled chars every 0.5s
          tweenLength: true, // ← gradual length growth
        },
      })
    }

    setTimeout(() => {
      setShowSubtitle(true)
    }, 200)
  }, [])

  useEffect(() => {
    if (subtitleRef.current && showSubtitle) {
      gsap.to(subtitleRef.current, {
        duration: 2.25,
        scrambleText: {
          text: subtitle || "",
          chars:
            "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789",
          revealDelay: 0.1,
          speed: 0.5, // ← updates scrambled chars every 0.5s
          tweenLength: true, // ← gradual length growth
        },
      })
    }
  }, [showSubtitle])

  return (
    <div className={`${className}`}>
      <div
        className="text-[15px] flex items-center gap-3"
        style={{
          fontFamily: "PP Neue Montreal",
          fontWeight: 500,
          lineHeight: "32px",
          fontSize: "17px",
        }}
      >
        <p ref={titleRef}></p>
        {subtitle && showSubtitle && (
          <p
            ref={subtitleRef}
            className="text-gray-500 motion-opacity-in-0 motion-translate-x-in-25 motion-blur-in-xs"
          ></p>
        )}
      </div>
    </div>
  )
}
