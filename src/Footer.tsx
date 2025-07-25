export default function Footer({ className }: { className?: string }) {
  function getBSTTime() {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    return `${hours}:${minutes}`
  }
  return (
    <footer className={`${className} w-full`}>
      <div className="font-jetbrains-mono text-gray-600 flex items-center justify-between">
        <p>&copy; {new Date().getFullYear()} Bartosz Bak</p>
        <p className="text-[15px]">{getBSTTime()}</p>
      </div>
    </footer>
  )
}
