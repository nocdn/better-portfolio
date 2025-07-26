import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Magnetic } from "./Magnetic"

export default function Contact({ className }: { className?: string }) {
  const [showingCopied, setShowCopied] = useState(false)

  return (
    <div className={`${className} w-full pr-12`}>
      <p className="font-jetbrains-mono font-medium text-[16px] text-gray-500 mb-2.5">
        CONTACT
      </p>
      <div
        className="flex gap-12 justify-between"
        style={{
          fontFamily: "PP Neue Montreal",
          fontWeight: 500,
          lineHeight: "30px",
          fontSize: "19px",
        }}
      >
        <div>
          <p className="text-[19px] font-medium flex items-center gap-1">
            Twitter{" "}
            <span className="font-sf-pro-rounded font-medium mx-3 mb-0.5">
              /
            </span>
            <Magnetic intensity={0.2}>
              <a
                href="https://twitter.com/nocdns"
                className="font-sf-pro-rounded text-gray-500 hover:text-blue-800 transition-colors"
              >
                @nocdns
              </a>
            </Magnetic>
          </p>
          <p className="text-[19px] font-medium flex items-center gap-1">
            GitHub{" "}
            <span className="font-sf-pro-rounded font-medium mx-3 mb-0.5">
              /
            </span>
            <Magnetic intensity={0.2}>
              <a
                href="https://github.com/nocdn"
                className="font-sf-pro-rounded text-gray-500 hover:text-black transition-colors"
              >
                @nocdn
              </a>
            </Magnetic>
          </p>
          <div className="text-[19px] font-medium flex items-center gap-1">
            Email{" "}
            <span className="font-sf-pro-rounded font-medium mx-3 mb-0.5">
              /
            </span>
            <Magnetic intensity={0.2}>
              <a
                onClick={(e) => {
                  e.preventDefault()
                  navigator.clipboard.writeText("contact@bartoszbak.org")
                  setShowCopied(true)
                  setTimeout(() => setShowCopied(false), 1500)
                }}
                href="mailto:contact@bartoszbak.org"
                className="font-sf-pro-rounded text-gray-500 hover:text-pink-800 transition-colors"
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
            </Magnetic>
          </div>
        </div>
        <p className="w-[16rem] text-[18px] text-[#161616]">
          Please reach out with any and all questions or opportunities at any
          time <span className="font-sf-pro-rounded">:)</span>
        </p>
      </div>
    </div>
  )
}
