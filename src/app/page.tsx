import React from 'react'
import Header from '@/components/Header'
import path from 'path'
import fs from 'fs'
import dynamic from 'next/dynamic'

const PhotoGallery = dynamic(() => import('@/components/PhotoGallery'), { ssr: false }) as any

// Server Component: get all image filenames in public/photos
function getPhotoFilenames() {
  const photosDir = path.join(process.cwd(), 'public', 'photos')
  const files = fs.readdirSync(photosDir)
  return files.filter(
    (file) =>
      !file.startsWith('.') &&
      !file.includes('DS_Store') &&
      /\.(jpe?g|png|webp|gif)$/i.test(file)
  )
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
  return array
}

export default function Home() {
  const photos = getPhotoFilenames()
  // Skip the first two images
  let displayPhotos = photos.slice(2)
  // Remove 4th, 6th, and 7th images (indexes 3, 5, 6 in displayPhotos)
  displayPhotos = displayPhotos.filter((_, i) => ![3, 5, 6].includes(i))
  // Randomize the order
  displayPhotos = shuffle([...displayPhotos])
  return (
    <main className="min-h-screen bg-black">
      <Header />
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Removed gradient overlay */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-16">
          <PhotoGallery photos={displayPhotos} />
        </div>
      </section>

      {/* About Section
