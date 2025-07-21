export default function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={`w-full text-[15px] font-medium pt-3.5 flex items-center justify-between font-geist-mono ${className}`}
    >
      <p className="font-medium">bartosz bak</p>
      <div className="flex items-center gap-6 text-gray-600 font-geist-mono">
        <div className="cursor-pointer">projects</div>
        <div className="cursor-pointer">education</div>
        <div className="cursor-pointer">contact</div>
      </div>
    </div>
  )
}
