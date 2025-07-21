import peaceHand from "./assets/peace-hand.svg"
import leftBracket from "./assets/bracket-left.svg"
import rightBracket from "./assets/bracket-right.svg"

export default function Intro({ className }: { className?: string }) {
  return (
    <div className={`flex items-center mt-24 ${className}`}>
      <img src={peaceHand} alt="peace hand" className="w-8 h-8 mb-0.5" />
      <p className="text-3xl font-geist mx-3 text-gray-400 font-light mb-0.5">
        /
      </p>
      <div className="flex flex-col ml-2 gap-1">
        <p className="font-medium font-jetbrains-mono leading-none">
          BARTOSZ BAK
        </p>
        <p className="text-sm font-ibm-plex-mono text-gray-700 leading-none">
          frontend developer
        </p>
      </div>
    </div>
  )
}
