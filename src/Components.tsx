import { useState } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

export default function Components({
  className,
  onHover,
}: {
  className?: string
  onDotLoad?: (rect: DOMRect) => void
  onHover?: () => void
}) {
  const [currentCard, setCurrentCard] = useState(0)
  const cards = [
    <motion.div
      key={0}
      className="flex items-center gap-3 mr-12"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      exit={{ opacity: 0, x: 40, filter: "blur(3px)" }}
    >
      <img
        src="https://oiszjiwtfc65cwa2.public.blob.vercel-storage.com/work-previews/oklch-colors-new.png"
        alt="oklch-colors-dark-new"
        className="max-w-[200px] max-h-[300px] rounded-xl border border-gray-200"
      />
      <div className="flex flex-col gap-1 mb-auto">
        <p
          className="self-start"
          style={{
            fontFamily: "PP Neue Montreal",
            fontWeight: 500,
            lineHeight: "32px",
            fontSize: "17px",
          }}
        >
          An animated spinner
        </p>
        <p className="mb-auto">
          Created as a recreation of the default iOS spinner, built for Svelte
          and React.
        </p>
      </div>
    </motion.div>,
    <motion.div
      key={1}
      className="flex items-center gap-3 mr-12"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      exit={{ opacity: 0, x: 40, filter: "blur(3px)" }}
    >
      <img
        src="https://oiszjiwtfc65cwa2.public.blob.vercel-storage.com/work-previews/outline-orbit.png"
        alt="oklch-colors-dark-new"
        className="max-w-[200px] max-h-[300px] rounded-xl border border-gray-200"
      />
      <div className="flex flex-col gap-1 mb-auto">
        <p
          className="self-start"
          style={{
            fontFamily: "PP Neue Montreal",
            fontWeight: 500,
            lineHeight: "32px",
            fontSize: "17px",
          }}
        >
          Corner bordered buttons
        </p>
        <p className="mb-auto">
          Inspired by Tailwind CSS documentation page, I loved the look of it.
        </p>
      </div>
    </motion.div>,
  ]
  const handleNextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length)
  }
  const handlePreviousCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length)
  }
  return (
    <div
      className={`${className} mt-12 relative`}
      onMouseEnter={() => {
        onHover?.()
      }}
    >
      <p className="font-jetbrains-mono font-semibold text-[16px] text-gray-500/65 mb-2.5 flex items-center justify-between pr-12">
        COMPONENTS
        <span className="flex items-center gap-1 opacity-100">
          <ArrowRight
            className="w-4.5 h-4.5 cursor-pointer"
            strokeWidth={2.25}
            onClick={handleNextCard}
          />
        </span>
      </p>
      <AnimatePresence mode="popLayout">{cards[currentCard]}</AnimatePresence>
    </div>
  )
}
