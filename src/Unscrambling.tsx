import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUpRight } from "lucide-react"

export default function Unscrambling({
  className,
  title,
  description,
  demoURL,
  sourceURL,
  chips = [],
}: {
  className?: string
  title: string
  description?: string
  demoURL?: string
  sourceURL?: string
  chips?: string[]
}) {
  const titleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const [showDescription, setShowDescription] = useState(false)
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
      setShowDescription(true)
    }, 200)
  }, [])

  const chipsDetails = {
    svelte: {
      bgColor: "#FEEEEE",
      textColor: "#EC6A5B",
      label: "Svelte",
    },
    react: {
      bgColor: "#E5F3FE",
      textColor: "#008DFF",
      label: "React",
    },
    flask: {
      bgColor: "#F1F1F1",
      textColor: "#787878",
      label: "Flask",
    },
    nextjs: {
      bgColor: "#F5F5F5",
      textColor: "#222222",
      label: "Next.js",
    },
    supabase: {
      bgColor: "#E1FAE8",
      textColor: "#38C25D",
      label: "Supabase",
    },
    sqlite: {
      bgColor: "#E5F3FE",
      textColor: "#008DFF",
      label: "SQLite",
    },
    lambda: {
      bgColor: "#FFF4EE",
      textColor: "#E68F37",
      label: "Lambda",
    },
    python: {
      bgColor: "#FDF4DC",
      textColor: "#E6961F",
      label: "Python",
    },
  }

  useEffect(() => {
    if (descriptionRef.current && showDescription) {
      gsap.to(descriptionRef.current, {
        duration: 2.25,
        scrambleText: {
          text: description || "",
          chars:
            "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789",
          revealDelay: 0.1,
          speed: 0.5, // ← updates scrambled chars every 0.5s
          tweenLength: true, // ← gradual length growth
        },
      })
    }
  }, [showDescription])

  const [showingBackground, setShowingBackground] = useState(false)
  const [showingChips, setShowingChips] = useState(false)

  const chipsElements = chips.map((chip, index) => (
    <div
      key={index}
      className="rounded-lg px-2.5 text-[15px] leading-4 py-1.5 inline-flex items-center font-sf-pro-rounded"
      style={{
        backgroundColor:
          chipsDetails[chip as keyof typeof chipsDetails].bgColor,
        color: chipsDetails[chip as keyof typeof chipsDetails].textColor,
        letterSpacing: "0.02em",
      }}
    >
      {chipsDetails[chip as keyof typeof chipsDetails].label}
    </div>
  ))

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => {
        setShowingBackground(true)
        setShowingChips(true)
      }}
      onMouseLeave={() => {
        setShowingBackground(false)
        setShowingChips(false)
      }}
    >
      <a
        href={demoURL ? demoURL : sourceURL}
        target="_blank"
        className={`${className} relative inline-block`}
      >
        <motion.div
          className="absolute inset-0 w-full h-full rounded-lg -translate-x-2.5"
          initial={{ width: 0 }}
          animate={{ width: showingBackground ? "100%" : 0 }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        />
        <div
          className="relative z-10 text-[15px] flex items-center gap-3 motion-blur-in-[2px] motion-opacity-in-0"
          style={{
            fontFamily: "PP Neue Montreal",
            fontWeight: 500,
            lineHeight: "32px",
            fontSize: "17px",
          }}
        >
          <p ref={titleRef}></p>
          {description && showDescription && (
            <div className="grid">
              <div
                style={{
                  filter: showingChips ? "blur(1px)" : "",
                  gridArea: "1/1",
                  opacity: showingChips ? 0.05 : 1,
                  scale: showingChips ? 0.98 : 1,
                  transformOrigin: "left",
                  transition: "all 0.2s ease-out",
                }}
              >
                <p
                  ref={descriptionRef}
                  className="text-gray-500 motion-opacity-in-0 motion-translate-x-in-25 motion-blur-in-xs"
                ></p>
              </div>
              <AnimatePresence>
                {showingChips && (
                  <motion.div
                    className="flex items-center gap-1"
                    initial={{ opacity: 0, y: -7, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    exit={{ opacity: 0, y: 5, filter: "blur(2px)" }}
                    style={{ gridArea: "1/1" }}
                  >
                    {chipsElements}{" "}
                    <p className="text-gray-600 text-[15px] font-sf-pro-rounded ml-1 -motion-translate-x-in-25 flex items-center gap-1 motion-delay-75">
                      <ArrowUpRight
                        className="w-4.5 h-4.5"
                        strokeWidth={2.25}
                      />
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </a>
      {/* <AnimatePresence>
        {showingChips && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="flex items-center gap-1 font-sf-pro-rounded pt-1">
              {chipsElements}
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  )
}
