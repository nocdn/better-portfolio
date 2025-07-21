import { AnimatePresence, motion } from "motion/react"
import { useState, useEffect, useRef } from "react"

export default function NewAbout({
  className,
  onAboutDotLoad,
  onHover,
}: {
  className?: string
  onAboutDotLoad?: (rect: DOMRect) => void
  onHover?: () => void
}) {
  const startDateEpoch = 1644508311000 // milliseconds

  const msPerYear = 1000 * 60 * 60 * 24 * 365.2425

  const [yearsElapsedValue, setYearsElapsedValue] = useState("calculating...")

  const calculateYearsSince = (epoch: number) => {
    const now = Date.now()
    const millisecondsSince = now - epoch
    const yearsSince = millisecondsSince / msPerYear
    return yearsSince.toFixed(9) // Reduced from 11 to 6 digits
  }

  const updateYearsElapsed = () => {
    setYearsElapsedValue(calculateYearsSince(startDateEpoch))
  }

  useEffect(() => {
    updateYearsElapsed()
    const intervalId = setInterval(updateYearsElapsed, 10000) // Changed from 25ms to 1000ms (1 second)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const blueCircleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (blueCircleRef.current && onAboutDotLoad) {
      onAboutDotLoad(blueCircleRef.current.getBoundingClientRect())
    }
  }, [onAboutDotLoad])

  const [showingElapsedTime, setShowingElapsedTime] = useState(true)

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
        setShowingElapsedTime(false)
        onHover?.()
      }}
      onMouseLeave={() => {
        setShowingElapsedTime(true)
      }}
    >
      <p className="mb-2 font-jetbrains-mono text-gray-500 text-[16px] font-medium">
        ABOUT
      </p>
      <motion.div>
        I have been a developer{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={showingElapsedTime ? "elapsed" : "since"}
            initial={{ opacity: 0.5, filter: "blur(1px)", y: -2 }}
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
        to <span className="text-blue-600 font-sans italic">craft</span> nice
        things.
      </motion.div>
      <div
        ref={blueCircleRef}
        className="absolute top-[6px] -left-8 rounded-full w-4.5 h-4.5 bg-red-200"
      ></div>
    </div>
  )
}
