import { AnimatePresence, motion } from "motion/react"
import { useState, useEffect } from "react"

export default function About({ className }: { className?: string }) {
  const startDateEpoch = 1644508311000 // milliseconds

  const msPerYear = 1000 * 60 * 60 * 24 * 365.2425

  const [yearsElapsedValue, setYearsElapsedValue] = useState("calculating...")

  const calculateYearsSince = (epoch: number) => {
    const now = Date.now()
    const millisecondsSince = now - epoch
    const yearsSince = millisecondsSince / msPerYear
    return yearsSince.toFixed(11)
  }

  const updateYearsElapsed = () => {
    setYearsElapsedValue(calculateYearsSince(startDateEpoch))
  }

  useEffect(() => {
    updateYearsElapsed()
    const intervalId = setInterval(updateYearsElapsed, 25)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const [showingElapsedTime, setShowingElapsedTime] = useState(true)

  return (
    <div
      className={`${className} text-[15px] font-jetbrains-mono mt-6`}
      onMouseEnter={() => setShowingElapsedTime(false)}
      onMouseLeave={() => setShowingElapsedTime(true)}
    >
      <p className="mb-2.5">Hello,</p>
      <motion.div>
        I have been a developer{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={showingElapsedTime ? "elapsed" : "since"}
            initial={{ opacity: 0, filter: "blur(1px)", y: -2 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(1px)", y: 2 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="text-black inline-block"
          >
            {showingElapsedTime
              ? `for ${yearsElapsedValue} years`
              : "since 10th February '22"}
          </motion.span>
        </AnimatePresence>
        . I am a computer science student at the University of York with a love
        to craft nice things.
      </motion.div>
    </div>
  )
}
