import React from 'react'

export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10">
      <div className="relative w-10 h-10 mb-3">
        <span className="absolute inset-0 rounded-full border-4 border-slate-200"></span>
        <span className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></span>
      </div>
      <p className="text-slate-600">Submitting your request…</p>
    </div>
  )
}

export function SuccessState() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10">
      <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <p className="text-slate-700 font-medium">Your issue has been submitted successfully.</p>
    </div>
  )}
