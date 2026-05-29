export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="#a855f7" strokeWidth="2" />
        <path d="M 12 8 L 20 22 L 28 8" stroke="#a855f7" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 20 22 L 20 32" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <div className="font-bold text-lg tracking-tight">
        <span className="text-violet-600">Yalen</span>
        <br />
        <span className="text-sm text-gray-700">Metodo Pilates</span>
      </div>
    </div>
  )
}
