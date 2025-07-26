import Globe from "./icons/globe"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export default function AppearingIcon({ className }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`${className} flex items-center`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <p>I am a developer from</p>
      <AnimatePresence>
        {isHovered && (
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
            <motion.div className="mx-1">
              <Globe size={16} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <span>England</span>
      <motion.div className="flex flex-col" initial={{ height: 0 }}>
        <p>Hello this is the first element</p>
        {isHovered && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.65 }}
          >
            <p>Hello this is the second element</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
