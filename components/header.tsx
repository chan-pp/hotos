'use client'

import { useTheme } from './ThemeProvider'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black dark:bg-black dark:border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Chandler Patton
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/bigshot223"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-400 dark:text-pink-400 dark:hover:text-pink-300 text-lg font-semibold transition"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75h9a3.75 3.75 0 0 1 3.75 3.75v9a3.75 3.75 0 0 1-3.75 3.75h-9A3.75 3.75 0 0 1 3.75 16.5v-9A3.75 3.75 0 0 1 7.5 3.75zm9.75 2.25h.008v.008h-.008V6zm-5.25 2.25a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1 bg-pink-600 hover:bg-pink-400 text-white dark:bg-pink-400 dark:hover:bg-pink-300 dark:text-black font-semibold px-4 py-2 rounded-lg transition text-lg"
              aria-label="Shop (coming soon)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75A.75.75 0 0 1 3 6h18a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V6.75zm0 0V5.25A2.25 2.25 0 0 1 4.5 3h15a2.25 2.25 0 0 1 2.25 2.25v1.5" />
              </svg>
              Shop
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white hover:bg-black/10 text-black dark:bg-black dark:hover:bg-white/10 dark:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 
