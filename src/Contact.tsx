import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

export default function Contact({ className }: { className?: string }) {
  const [showingCopied, setShowCopied] = useState(false)

  return (
    <div className={`${className} w-fit`}>
      <p className="font-jetbrains-mono font-medium text-[16px] text-gray-500 mb-2.5">
        CONTACT
      </p>
      {/* <Magnetic intensity={0.2} actionArea="global" range={75}>
        <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-3 py-1.5 cursor-pointer group">
          <Twitter
            className="w-4 h-4 group-hover:text-blue-800 transition-colors"
            strokeWidth={2.25}
          />
          <p className="text-[15px] font-sf-pro-rounded font-medium group-hover:text-blue-700 transition-colors">
            @nocdns
          </p>
        </div>
      </Magnetic> */}

      <div
        style={{
          fontFamily: "PP Neue Montreal",
          fontWeight: 500,
          lineHeight: "30px",
          fontSize: "19px",
        }}
      >
        <p className="text-[19px] font-medium flex items-center gap-1">
          Twitter{" "}
          <span className="font-sf-pro-rounded font-medium mx-3 mb-0.5">/</span>
          <a
            href="https://twitter.com/nocdns"
            className="font-sf-pro-rounded text-gray-500"
          >
            @nocdns
          </a>
        </p>
        <p className="text-[19px] font-medium flex items-center gap-1">
          GitHub{" "}
          <span className="font-sf-pro-rounded font-medium mx-3 mb-0.5">/</span>
          <a
            href="https://github.com/nocdn"
            className="font-sf-pro-rounded text-gray-500"
          >
            @nocdn
          </a>
        </p>
        <div className="text-[19px] font-medium flex items-center gap-1">
          Email{" "}
          <span className="font-sf-pro-rounded font-medium mx-3 mb-0.5">/</span>
          <a
            onClick={(e) => {
              e.preventDefault()
              navigator.clipboard.writeText("contact@bartoszbak.org")
              setShowCopied(true)
              setTimeout(() => setShowCopied(false), 2000)
            }}
            href="mailto:contact@bartoszbak.org"
            className="font-sf-pro-rounded text-gray-500"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={showingCopied ? "copied" : "copy"}
                initial={{ opacity: 0.5, filter: "blur(1px)", y: -2 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(1px)", y: 2 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                className="inline-block cursor-pointer"
              >
                {showingCopied ? (
                  <>
                    copied:{" "}
                    <span className="text-blue-600/90">
                      contact@bartoszbak.org
                    </span>
                  </>
                ) : (
                  "[ copy ]"
                )}
              </motion.div>
            </AnimatePresence>
          </a>
        </div>
      </div>
    </div>
  )
}
