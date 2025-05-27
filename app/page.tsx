'use client';

import Image from "next/image";
import Link from "next/link";
import UploadPDF from "./components/UploadPDF";
import { useRef } from 'react';

export default function Home() {
  const uploadSectionRef = useRef<HTMLDivElement>(null);

  const scrollToUpload = () => {
    uploadSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-600/10 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Merge PDFs with Ease
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Combine multiple PDF files into one seamless document. Fast, secure, and professional.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={scrollToUpload}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              Get Started Free
            </button>
            <Link
              href="/about"
              className="px-8 py-3 bg-white/10 rounded-full font-medium hover:bg-white/20 transition-colors border border-white/20 cursor-pointer"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div ref={uploadSectionRef}>
        <UploadPDF />
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose DocuBind?</h2>
        <div className="grid md:grid-cols-3 gap-8">
                  {/* Feature Cards */}
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-colors">
            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Merging</h3>
            <p className="text-gray-400">Drag and drop your PDF files and merge them with just a few clicks.</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-colors">
            <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Processing</h3>
            <p className="text-gray-400">Your files are encrypted and automatically deleted after processing.</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-colors">
            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Get your merged PDF in seconds with our optimized processing engine.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
