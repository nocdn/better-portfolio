import { ArrowUpRight } from "lucide-react"
import { Book } from "./icons/book"

export default function Writing({
  className,
  onHover,
}: {
  className?: string
  onDotLoad?: (rect: DOMRect) => void
  onHover?: () => void
}) {
  return (
    <div
      className={`${className} mt-12 relative`}
      onMouseEnter={() => {
        onHover?.()
      }}
    >
      <p className="font-jetbrains-mono font-semibold text-[16px] text-gray-500/65 mb-2.5 flex items-center justify-between pr-12">
        WRITING
        <span className="flex items-center gap-1 opacity-100">
          <ArrowUpRight
            className="w-4.5 h-4.5 cursor-pointer"
            strokeWidth={2.25}
          />
        </span>
      </p>
      <div className="flex flex-col gap-4">
        <div className="font-inter flex justify-between border border-gray-200 rounded-lg p-3 w-fit hover:bg-gray-100/55 cursor-pointer">
          <div>
            <p className="font-medium text-gray-1200">
              Making a blue orb feel alive
            </p>
            <p className="text-gray-500 shrink-0 whitespace-nowrap inline-flex items-center gap-2">
              August 2025
              <span>
                <Book className="w-4 h-4" strokeWidth={2.25} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
