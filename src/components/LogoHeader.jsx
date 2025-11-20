import React from 'react'

export default function LogoHeader() {
  return (
    <header className="w-full flex flex-col items-center text-center pt-10 pb-6">
      <img
        src="/flame-icon.svg"
        alt="Company Logo"
        className="w-16 h-16 mb-4"
      />
      <h1 className="text-2xl font-semibold text-slate-900">Új hibajegy beküldése / New Issue Submission</h1>
      <p className="mt-2 max-w-xl text-slate-600">
        Válassza ki a szükséges utántöltést, majd küldje be a kérést. Select the required refill and submit the request.
      </p>
    </header>
  )
}
