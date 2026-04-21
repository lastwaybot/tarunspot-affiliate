'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-indigo-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center font-bold text-white text-sm">
            TS
          </div>
          <span className="text-xl font-bold text-purple-600 hidden sm:inline" style={{color: '#9333ea'}}>
            TARUNSPOT
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-900 font-semibold hover:text-purple-600 transition-colors duration-200" style={{color: '#111827'}}>
            Home
          </Link>
          <Link href="/about" className="text-gray-900 font-semibold hover:text-purple-600 transition-colors duration-200" style={{color: '#111827'}}>
            About
          </Link>
          <Link href="/profile" className="bg-purple-600 text-white px-6 py-2.5 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium">
            Profile
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/" className="text-gray-900 font-semibold hover:text-purple-600 transition-colors duration-200" onClick={() => setIsOpen(false)} style={{color: '#111827'}}>
                Home
              </Link>
              <Link href="/about" className="text-gray-900 font-semibold hover:text-purple-600 transition-colors duration-200" onClick={() => setIsOpen(false)} style={{color: '#111827'}}>
                About
              </Link>
              <Link href="/profile" className="bg-purple-600 text-white px-6 py-2.5 rounded-lg inline-block text-center font-medium hover:bg-purple-700 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Profile
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
