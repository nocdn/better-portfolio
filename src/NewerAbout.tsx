import { motion } from "motion/react"
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
        onHover?.()
      }}
    >
      <p className="mb-2 font-jetbrains-mono text-gray-500 text-[16px] font-medium">
        ABOUT
      </p>
      <motion.div>
        {timeGreeting}, I'm{" "}
        <div className="inline-block relative text-blue-600">Bartek</div>. I am
        a front-end developer based in{" "}
        <div className="inline-flex items-center">
          <Globe width={20} />
        </div>{" "}
        England, studying computer science at the University of York with a
        passion to <span className="text-blue-600 font-sans italic">craft</span>{" "}
        nice things.
      </motion.div>
    </div>
  )
}
