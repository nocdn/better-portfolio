import { useEffect, useState } from "react"

export default function Projects({ className }: { className?: string }) {
  // start with no letters appended, and all in an array
  // add random letters
  const alphabet = [
    "a",
    "A",
    "b",
    "B",
    "c",
    "C",
    "d",
    "D",
    "e",
    "E",
    "f",
    "F",
    "g",
    "G",
    "h",
    "H",
    "i",
    "I",
    "j",
    "J",
    "k",
    "K",
    "l",
    "L",
    "m",
    "M",
    "n",
    "N",
    "o",
    "O",
    "p",
    "P",
    "q",
    "Q",
    "r",
    "R",
    "s",
    "S",
    "t",
    "T",
    "u",
    "U",
    "v",
    "V",
    "w",
    "W",
    "x",
    "X",
    "y",
    "Y",
    "z",
    "Z",
    "!",
    "?",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ]
  // slowly add letters which are random, and randomly uppercase and lowercase too

  const [string, setString] = useState<string[]>([])
  const finalString = "Temporary email API"

  useEffect(() => {
    const finalChars = finalString.split("")
    const words = finalString.split(" ")
    // calculate start index for each word
    const wordStartIndices: number[] = []
    let offset = 0
    words.forEach((word) => {
      wordStartIndices.push(offset)
      offset += word.length + 1
    })
    const scrambleDelay = 35
    const revealDelay = 47
    const threshold = 5
    // determine global finish time so all words end together
    const maxWordLength = Math.max(...words.map((w) => w.length))
    const globalFinish = (threshold + maxWordLength - 1) * revealDelay
    // initialize the state array with blanks
    setString(Array(finalChars.length).fill(""))
    words.forEach((word, wIdx) => {
      const startIdx = wordStartIndices[wIdx]
      const length = word.length
      // compute start delay so this word ends at globalFinish
      const finishTime = (threshold + length - 1) * revealDelay
      const startDelay = globalFinish - finishTime
      for (let letterIdx = 0; letterIdx < length; letterIdx++) {
        const idx = startIdx + letterIdx
        // scramble
        setTimeout(() => {
          const randomLetter =
            alphabet[Math.floor(Math.random() * alphabet.length)]
          setString((prev) => {
            const newArr = [...prev]
            newArr[idx] = randomLetter
            return newArr
          })
        }, startDelay + letterIdx * scrambleDelay)
        // reveal
        setTimeout(() => {
          setString((prev) => {
            const newArr = [...prev]
            newArr[idx] = finalChars[idx]
            return newArr
          })
        }, startDelay + (threshold + letterIdx) * revealDelay)
      }
      // reveal space after word if not last
      const spaceIdx = startIdx + length
      if (spaceIdx < finalChars.length) {
        setTimeout(() => {
          setString((prev) => {
            const newArr = [...prev]
            newArr[spaceIdx] = " "
            return newArr
          })
        }, startDelay + threshold * revealDelay)
      }
    })
  }, [])

  return (
    <div className={`${className} mt-12`}>
      <p className="font-jetbrains-mono font-medium text-[16px] text-gray-500 mb-2">
        PROJECTS
      </p>
      <div
        className="text-[15px]"
        style={{
          fontFamily: "PP Neue Montreal",
          fontWeight: 500,
          lineHeight: "32px",
          fontSize: "17px",
        }}
      >
        <p>{string}</p>
      </div>
    </div>
  )
}
