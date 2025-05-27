'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full backdrop-blur-md bg-black/50 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18H17V16H7V18Z"
                className="fill-blue-500"
              />
              <path
                d="M17 14H7V12H17V14Z"
                className="fill-purple-600"
              />
              <path
                d="M7 10H17V8H7V10Z"
                className="fill-blue-500"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM6 4H18V20H6V4Z"
                className="fill-current text-white"
              />
            </svg>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">DocuBind</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link 
                href="/" 
                className={`transition-colors ${pathname === '/' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`transition-colors ${pathname === '/about' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`transition-colors ${pathname === '/contact' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <SignedOut>
                <SignInButton mode="modal" />
                <SignUpButton mode="modal" />
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`transition-colors ${pathname === '/' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`transition-colors ${pathname === '/about' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`transition-colors ${pathname === '/contact' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-700">
                <SignedOut>
                  <div className="flex flex-col space-y-4">
                    <SignInButton mode="modal" />
                    <SignUpButton mode="modal" />
                  </div>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}