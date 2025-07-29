import { AnimatePresence, motion } from "motion/react"
import { useState, useEffect } from "react"
import Globe from "./icons/globe"
import ClockIcon from "./icons/clock"

export default function NewerAbout({
  className,
  onHover,
}: {
  className?: string
  onHover?: () => void
}) {
  const [timeGreeting, setTimeGreeting] = useState<string>("Hello")
  const [showingLocationIcon, setShowLocationIcon] = useState<boolean>(false)
  const [showingCSIcon, setShowingCSIcon] = useState<boolean>(false)

  useEffect(() => {
    setTimeGreeting(getTimeGreeting())

    setTimeout(() => {
      setShowLocationIcon(true)
    }, 500)

    setTimeout(() => {
      setShowingCSIcon(true)
    }, 700)
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
  })

  console.log(bstTimeString.split(":")[0])

  const [hoveringName, setHoveringName] = useState<boolean>(false)

  return (
    <div
      className={`${className} text-[15px] mt-6 relative`}
      style={{
        fontFamily: "PP Neue Montreal",
        fontWeight: 500,
        lineHeight: "30px",
        fontSize: "19px",
      }}
      onMouseEnter={() => {
        onHover?.()
      }}
    >
      <p className="mb-2 font-jetbrains-mono text-gray-500 text-[16px] font-medium">
        ABOUT
      </p>
      <motion.div>
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
              filter: hoveringName ? "blur(2px)" : "blur(0px)",
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
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 3, filter: "blur(2px)" }}
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
                }}
                className="absolute left-[calc(50%-1px)] top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none font-sf-pro-rounded font-semibold text-[16px] text-blue-600"
                style={{ opacity: 0.1 }}
              >
                <ClockIcon
                  hours={parseInt(bstTimeString.split(":")[0])}
                  minutes={parseInt(bstTimeString.split(":")[1])}
                  size={23}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        . I am a developer based in{" "}
        <motion.span layout className="inline-block">
          <AnimatePresence>
            {showingLocationIcon && (
              <motion.div
                initial={{ scale: 0, width: 0, rotate: 270 }}
                animate={{ scale: 1, width: "auto", rotate: 0, y: 2.5 }}
                exit={{ scale: 0, width: 0 }}
                transition={{
                  duration: 0.75,
                  ease: [0.175, 0.885, 0.32, 1.0],
                }}
                className="flex items-center overflow-hidden"
                style={{ originX: 0.5 }}
              >
                <motion.div className="mx-[1px]">
                  <Globe size={19} strokeWidth={1.75} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.span>{" "}
        England, studying computer science at the University of York with a
        passion to{" "}
        <span className="text-blue-600 font-sans italic transition-all duration-300 hover:font-bold">
          craft
        </span>{" "}
        nice things.
      </motion.div>
    </div>
  )
}
