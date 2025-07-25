import { AnimatePresence, motion } from "motion/react"
import { useState, useEffect } from "react"
import { Twitter, Github } from "lucide-react"

export default function NewAbout({
  className,
  onHover,
}: {
  className?: string
  onHover?: () => void
}) {
  const [yearsElapsedValue, setYearsElapsedValue] = useState("calculating...")
  const [timeGreeting, setTimeGreeting] = useState<string>("Hello")

  const msPerYear = 1000 * 60 * 60 * 24 * 365.2425
  const startDateEpoch = 1644508311000 // milliseconds

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
    const intervalId = setInterval(updateYearsElapsed, 10000)
    setTimeGreeting(getTimeGreeting())

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const [showingElapsedTime, setShowingElapsedTime] = useState(true)

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
        {timeGreeting}, my name is{" "}
        <div className="inline-block relative">Bartek</div>, and I have been a
        developer{" "}
        <AnimatePresence mode="wait">
          <motion.div
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
          </motion.div>
        </AnimatePresence>
        . I am a computer science student at the University of York with a love
        to <span className="text-blue-600 font-sans italic">craft</span> nice
        things.
      </motion.div>
    </div>
  )
}
