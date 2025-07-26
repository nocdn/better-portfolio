import { AnimatePresence, motion } from "motion/react"
import { useState, useEffect } from "react"
import Globe from "./icons/globe"

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
    }, 300)

    setTimeout(() => {
      setShowingCSIcon(true)
    }, 500)
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
        setShowLocationIcon(true)
        onHover?.()
      }}
      onMouseLeave={() => {
        setShowLocationIcon(false)
        setShowingCSIcon(false)
      }}
    >
      <p className="mb-2 font-jetbrains-mono text-gray-500 text-[16px] font-medium">
        ABOUT
      </p>
      <motion.div>
        {timeGreeting}, I'm{" "}
        <div className="inline-block relative text-blue-600">Bartek</div>. I am
        a developer based in{" "}
        <motion.span layout className="inline-block">
          <AnimatePresence>
            {showingLocationIcon && (
              <motion.div
                initial={{ scale: 0, width: 0, rotate: 270 }}
                animate={{ scale: 1, width: "auto", rotate: 0 }}
                exit={{ scale: 0, width: 0 }}
                transition={{
                  duration: 0.65,
                  ease: [0.175, 0.885, 0.32, 1.0],
                }}
                className="flex items-center overflow-hidden"
                style={{ originX: 0.5 }}
              >
                <motion.div className="mx-[1px]">
                  <Globe size={18} className="mt-1" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.span>{" "}
        England, studying computer science at the University of York with a
        passion to <span className="text-blue-600 font-sans italic">craft</span>{" "}
        nice things.
      </motion.div>
    </div>
  )
}
