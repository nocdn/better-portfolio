import { AnimatePresence, motion } from "motion/react"
import { useState, useEffect, useRef } from "react"
import ClockIcon from "./icons/clock"
import { Magnetic } from "./Magnetic"
import Star from "./icons/star"

export default function NewerAbout({
  className,
  onHover,
}: {
  className?: string
  onHover?: () => void
}) {
  const [timeGreeting, setTimeGreeting] = useState<string>("Hello")
  const firstPosition = useRef(null)

  useEffect(() => {
    setTimeGreeting(getTimeGreeting())
  }, [])

  function getTimeGreeting() {
    const now = new Date()
    const hour = now.getHours()
    if (hour > 18) {
      return "Good evening"
    } else if (hour > 12) {
      return "Good afternoon"
    } else {
      return "Good morning"
    }
  }

  // calculate BST time (no matter where the user is)
  const bstTime = new Date()
  const bstTimeString = bstTime.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/London",
  })

  console.log(bstTimeString.split(":")[0])

  const [hoveringName, setHoveringName] = useState<boolean>(false)

  const [showingExtras, setShowingExtras] = useState<boolean>(false)
  const [showingExtrasHint, setShowingExtrasHint] = useState<boolean>(false)

  const extraIntro = (
    <div>
      Hello, I am a motivated second year computer science student with skills
      in web and backend applications. I am highly technical and proficient in{" "}
      <span className="text-blue-600/75">TypeScript</span>,{" "}
      <span className="text-blue-600/75">React</span>,{" "}
      <span className="text-blue-600/75">Next.js</span>,{" "}
      <span className="text-blue-600/75">Python</span> and{" "}
      <span className="text-blue-600/75">Flask</span>. Through personal
      projects, I have gained some experience with{" "}
      <span className="text-blue-600/75">AWS</span> and{" "}
      <span className="text-blue-600/75">GCP</span>. I have also experimented
      with mobile development through React Native. I am a very agile learner
      and always looking for new challenges to grow as a developer.
    </div>
  )

  return (
    <div
      className={`${className} text-[15px] mt-6 relative group`}
      style={{
        fontFamily: "PP Neue Montreal",
        fontWeight: 500,
        lineHeight: "30px",
        fontSize: "19px",
      }}
      onMouseEnter={() => {
        onHover?.()
        setShowingExtrasHint(true)
      }}
      onMouseLeave={() => {
        setShowingExtrasHint(false)
      }}
    >
      <div className="mb-2 font-jetbrains-mono text-gray-500/65 text-[16px] font-medium relative flex items-center gap-1">
        ABOUT
        <Magnetic intensity={0.2}>
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            ref={firstPosition}
            className="w-4 h-4 bg-blue-500/85 rounded-full absolute top-1/2 -translate-y-1/2 -translate-x-20"
          ></motion.div>
        </Magnetic>
        <AnimatePresence mode="wait">
          {showingExtrasHint && (
            <motion.div
              key={showingExtras ? "extras" : "more"}
              initial={{ opacity: 0.5, filter: "blur(1px)", y: -2 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(1px)", y: 2 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              onClick={() => setShowingExtras(!showingExtras)}
              className="inline-block cursor-pointer font-geist text-[17px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto mr-15"
            >
              {showingExtras ? (
                <>
                  <span className="flex items-center gap-1">
                    <Star
                      size={18}
                      fill="#E4F3FE"
                      className="text-[#0090FF]/60"
                    />
                    TLDR
                  </span>
                </>
              ) : (
                <div className="flex items-center gap-1">
                  <Star size={18} className="" /> Extra
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {showingExtras ? (
        <motion.div
          initial={{ opacity: 0, y: -5, filter: "blur(1px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 5, filter: "blur(1px)" }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="pr-8"
        >
          {extraIntro}
        </motion.div>
      ) : (
        <motion.div className="pr-8">
          {timeGreeting}, I'm{" "}
          <div className="inline-block relative text-blue-600">
            <motion.span
              onMouseEnter={() => setHoveringName(true)}
              onMouseLeave={() => setHoveringName(false)}
              style={{
                opacity: hoveringName ? 0 : 1,
                pointerEvents: "auto",
              }}
              animate={{
                opacity: hoveringName ? 0 : 1,
                y: hoveringName ? -5 : 0,
                filter: hoveringName ? "blur(1px)" : "blur(0px)",
                transition: {
                  opacity: { duration: hoveringName ? 0 : 0.35 },
                  y: { duration: 0.35 },
                  filter: { duration: 0.35 },
                },
              }}
              transition={{
                opacity: { duration: hoveringName ? 0 : 0.35 },
                y: { duration: 0.35 },
                filter: { duration: 0.35 },
              }}
            >
              Bartek
            </motion.span>
            <AnimatePresence>
              {hoveringName && (
                <motion.div
                  initial={{ opacity: 0, y: -5, filter: "blur(3px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 3, filter: "blur(2px)" }}
                  transition={{
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="absolute left-[calc(50%-1px)] top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none font-sf-pro-rounded font-semibold text-[18px]"
                  style={{ opacity: 0.1 }}
                >
                  {bstTimeString}
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {hoveringName && (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: -28, x: 20, rotate: 8.5 }}
                  exit={{
                    opacity: 0,
                    y: 0,
                    x: 10,
                    filter: "blur(1px)",
                    transition: { duration: 0.15 },
                  }}
                  className="absolute left-[calc(50%-1px)] top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none font-sf-pro-rounded font-semibold text-[16px] text-blue-600/75"
                  style={{ opacity: 0.1 }}
                >
                  BST
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {hoveringName && (
                <motion.div
                  initial={{ opacity: 0, y: 0, scale: 0.9 }}
                  animate={{
                    opacity: 0.75,
                    y: -30,
                    x: -22,
                    rotate: -13,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 0,
                    x: -13,
                    filter: "blur(1px)",
                    scale: 0.7,
                    transition: { duration: 0.15 },
                  }}
                  className="absolute left-[calc(50%-1px)] top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none font-sf-pro-rounded font-semibold text-[16px] text-blue-600"
                  style={{ opacity: 0.1 }}
                >
                  <ClockIcon
                    hours={parseInt(bstTimeString.split(":")[0])}
                    minutes={parseInt(bstTimeString.split(":")[1])}
                    size={23}
                    showBellArms={true}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          . I am a front-end developer based in England, studying computer
          science at the University of
          York.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I
          love to{" "}
          <span className="text-blue-600 font-sans italic transition-all duration-300 hover:font-bold">
            craft
          </span>{" "}
          tools and experiences for other developers.
        </motion.div>
      )}
    </div>
  )
}
