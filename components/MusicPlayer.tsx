"use client"
import { useRef, useState } from "react"

export default function MusicPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 rounded-full flex items-center px-4 py-2 shadow-lg gap-3">
      <button
        onClick={togglePlay}
        className="text-white text-2xl focus:outline-none"
        aria-label={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 5.25v13.5m10.5-13.5v13.5" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z" />
          </svg>
        )}
      </button>
      <audio
        ref={audioRef}
        src={src}
        loop
        autoPlay
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="hidden"
      />
      <span className="text-white text-sm font-semibold select-none">Now Playing</span>
    </div>
  )
}
