'use client'

export default function AnimatedBorder() {
  return (
    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl p-[3px] overflow-hidden group">
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#00e5ff,#7000ff,#ff007f,#00e5ff)] animate-[spin_5s_linear_infinite] blur-[1px]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#00e5ff,#7000ff,#ff007f,#00e5ff)] animate-[spin_5s_linear_infinite] blur-xl opacity-60" />
      <div className="absolute inset-[3px] bg-slate-950 rounded-[13px] flex items-center justify-center border border-slate-800/50 backdrop-blur-md">
      </div>
    </div>
  )
}