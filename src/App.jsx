import React, { useState } from 'react'
import LogoHeader from './components/LogoHeader'
import OptionButton from './components/OptionButton'
import { LoadingState, SuccessState } from './components/SubmitStates'

function App() {
  const [selection, setSelection] = useState(null) // 'soap' | 'toilet' | null
  const [state, setState] = useState('idle') // idle | loading | success

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selection || state === 'loading') return

    setState('loading')
    // Simulate async submit
    setTimeout(() => {
      setState('success')
    }, 1400)
  }

  const reset = () => {
    setSelection(null)
    setState('idle')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <LogoHeader />

        <main className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 sm:p-6 md:p-8">
          {state === 'idle' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <OptionButton
                  label="Folyékony szappan utántöltés / Soap refill"
                  selected={selection === 'soap'}
                  onClick={() => setSelection(selection === 'soap' ? null : 'soap')}
                  icon={(
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M4 11h16M7 11V7a5 5 0 0 1 10 0v4"/><rect x="4" y="11" width="16" height="9" rx="4"/></svg>
                  )}
                />

                <OptionButton
                  label="WC papír utántöltés / Toilet paper refill"
                  selected={selection === 'toilet'}
                  onClick={() => setSelection(selection === 'toilet' ? null : 'toilet')}
                  icon={(
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M4 7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4h-4"/><path d="M8 3v18"/><circle cx="8" cy="7" r="1"/></svg>
                  )}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!selection}
                  className={`w-full inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition-colors
                    ${selection ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-200 text-slate-500 cursor-not-allowed'}`}
                >
                  Submit
                </button>
              </div>
            </form>
          )}

          {state === 'loading' && <LoadingState />}
          {state === 'success' && (
            <div>
              <SuccessState />
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={reset}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-4 py-2.5 border border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  Submit another
                </button>
                <a href="/" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-4 py-2.5 bg-blue-600 text-white hover:bg-blue-700">
                  Back to start
                </a>
              </div>
            </div>
          )}
        </main>

        <footer className="py-8 text-center text-slate-400 text-sm">© Company</footer>
      </div>
    </div>
  )
}

export default App
