import React from 'react'

export default function OptionButton({ label, selected, onClick, icon }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex-1 min-h-[84px] rounded-xl border transition-all select-none
        ${selected ? 'border-blue-600 bg-blue-50 shadow-sm' : 'border-slate-200 hover:border-slate-300 bg-white'}
        `}
    >
      <div className="flex items-center gap-3 px-5 py-4">
        {icon && <span className={`w-9 h-9 rounded-lg flex items-center justify-center
            ${selected ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>{icon}</span>}
        <span className={`text-left text-sm sm:text-base font-medium ${selected ? 'text-blue-800' : 'text-slate-700'}`}>
          {label}
        </span>
      </div>
      {selected && (
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-blue-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M20 6 9 17l-5-5"/></svg>
          Selected
        </span>
      )}
    </button>
  )
}
