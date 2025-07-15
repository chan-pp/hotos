"use client"
import { useState, useEffect, useCallback } from "react"

export default function PhotoGallery({ photos }: { photos: string[] }) {
  const [modal, setModal] = useState<{ open: boolean; src: string | null }>({ open: false, src: null })
  const [likes, setLikes] = useState<{ [src: string]: number }>(() => Object.fromEntries(photos.map(p => [p, 0])))

  const openModal = (src: string) => setModal({ open: true, src })
  const closeModal = useCallback(() => setModal({ open: false, src: null }), [])
  const likePhoto = (src: string) => setLikes(l => ({ ...l, [src]: (l[src] || 0) + 1 }))

  // Close modal on Escape key
  useEffect(() => {
    if (!modal.open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [modal.open, closeModal])

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((src, i) => (
          <div key={i} className="relative group overflow-hidden cursor-pointer">
            <img
              src={`/photos/${src}`}
              alt={`Chandler Patton photo ${i + 1}`}
              className="w-full h-[400px] object-cover object-center transition-transform duration-300 hover:scale-105"
              loading="lazy"
              style={{ border: 'none', boxShadow: 'none' }}
              onClick={() => openModal(src)}
            />
          </div>
        ))}
      </div>
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeModal}>
          <img
            src={`/photos/${modal.src}`}
            alt="Full size"
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-8 text-white text-5xl font-bold bg-black/70 rounded-full px-5 py-2 hover:bg-black/90 transition z-50"
            onClick={closeModal}
            aria-label="Close"
            style={{fontSize: '2.5rem'}}>
            ×
          </button>
          <button
            className="absolute bottom-10 right-1/2 translate-x-1/2 bg-white/80 dark:bg-black/60 rounded-full px-6 py-2 flex items-center gap-2 text-xl shadow hover:scale-110 transition"
            onClick={e => { e.stopPropagation(); likePhoto(modal.src!) }}
          >
            <span role="img" aria-label="like">❤️</span> {likes[modal.src!] || 0}
          </button>
        </div>
      )}
    </>
  )
} 
