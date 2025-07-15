"use client"
import React from 'react'

export default function Header() {
  return (
    <header className="w-full py-6 px-8 bg-black relative flex items-center justify-center">
      <h1 className="text-2xl font-bold text-white absolute left-1/2 transform -translate-x-1/2">Chandler Patton</h1>
      <nav className="flex gap-4 ml-auto">
        <a
          href="https://instagram.com/bigshot223"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-300 text-lg font-semibold transition"
        >
          Instagram
        </a>
        <a
          href="#"
          className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
          Shop
        </a>
      </nav>
    </header>
  )
} 
