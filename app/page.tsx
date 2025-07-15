import Header from '@/components/Header'
import path from 'path'
import fs from 'fs'
import dynamic from 'next/dynamic'

const PhotoGallery = dynamic(() => import('@/components/PhotoGallery'), { ssr: false })

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

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                About Chandler
              </h2>
              <p className="text-lg text-white/80 mb-6">
                This is Chandler Patton's personal website built with cutting-edge technologies. We've combined the power of Next.js with the flexibility of Tailwind CSS to create an exceptional user experience.
              </p>
              <p className="text-lg text-white/80">
                The website features a beautiful design system with custom colors, smooth animations, and full dark mode support. Every component is carefully crafted to provide the best possible user experience.
              </p>
            </div>
            <div className="card bg-black">
              <div className="aspect-video rounded-lg flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Ready to start your next project? Let's work together!
          </p>
          <button className="btn-primary">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-black bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/60">
              © 2024 Chandler Patton. Built with ❤️ using Next.js and Tailwind CSS.
            </p>
            <a
              href="https://instagram.com/bigshot223"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 text-lg font-semibold transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75h9a3.75 3.75 0 0 1 3.75 3.75v9a3.75 3.75 0 0 1-3.75 3.75h-9A3.75 3.75 0 0 1 3.75 16.5v-9A3.75 3.75 0 0 1 7.5 3.75zm9.75 2.25h.008v.008h-.008V6zm-5.25 2.25a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
