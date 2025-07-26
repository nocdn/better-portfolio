import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export default function Favourites({ className }: { className?: string }) {
  const [showingSubtitle, setShowingSubtitle] = useState(false)

  return (
    <div
      className={className}
      onMouseEnter={() => setShowingSubtitle(true)}
      onMouseLeave={() => setShowingSubtitle(false)}
    >
      <p className="font-jetbrains-mono font-medium text-[16px] text-gray-500 mb-2.5 flex items-center gap-1">
        FAVOURITES{" "}
        <AnimatePresence mode="wait">
          {showingSubtitle && (
            <motion.span
              className="text-blue-600/80 inline-block text-[15px] mb-[1px] ml-2"
              initial={{ opacity: 0, filter: "blur(1px)", y: -1 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(1px)", y: 1 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              [ BEST OF THE INTERNET ]
            </motion.span>
          )}
        </AnimatePresence>
      </p>
      <div className="border border-gray-200 rounded-xl h-86"></div>
    </div>
  )
}
