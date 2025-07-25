import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

export default function Name({ className }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`inline-block relative ${className}`}
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 -m-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              background: `
                radial-gradient(
                  ellipse at center,
                  rgba(255, 255, 255, 0.8) 0%,
                  rgba(255, 255, 255, 0.6) 30%,
                  rgba(255, 255, 255, 0.3) 60%,
                  rgba(255, 255, 255, 0.1) 80%,
                  transparent 100%
                )
              `,
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              borderRadius: "12px",
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">Bartek</span>
    </div>
  )
}
