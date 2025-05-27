'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useUser } from '@clerk/nextjs';
import PDFMerger from 'pdf-merger-js/browser';
import { toast } from 'react-hot-toast';

export default function UploadPDF() {
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isSignedIn, user } = useUser();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Filter for PDF files and size limit
    const pdfFiles = acceptedFiles.filter(
      file => file.type === 'application/pdf' && file.size <= 10 * 1024 * 1024 // 10MB
    );
    setFiles(prev => [...prev, ...pdfFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  const handleMerge = async () => {
    if (!isSignedIn) {
      toast.error('Please sign in to merge PDFs');
      return;
    }

    if (files.length < 2) {
      toast.error('Please select at least 2 PDF files to merge');
      return;
    }

    try {
      setIsLoading(true);
      const merger = new PDFMerger();

      // Add all files to merger
      for (const file of files) {
        await merger.add(file);
      }

      // Merge and download
      const mergedPdf = await merger.saveAsBlob();
      const url = URL.createObjectURL(mergedPdf);
      
      // Create download link
      const link = document.createElement('a');
      link.href = url;
      link.download = 'merged.pdf';
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast.success('PDFs merged successfully!');
      setFiles([]);
    } catch (error) {
      console.error('Error merging PDFs:', error);
      toast.error('Error merging PDFs. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${isDragActive ? 'border-blue-500 bg-blue-500/10' : 'border-gray-700 hover:border-gray-600'}`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="p-4 bg-blue-500/10 rounded-full">
            <svg
              className="h-8 w-8 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Drag & Drop PDF Files</h3>
            <p className="text-gray-400">Or click to browse from your device</p>
          </div>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
            Select Files
          </button>
          <p className="text-sm text-gray-500">Supports PDF files up to 10MB each</p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-8 space-y-4">
          <h4 className="text-lg font-semibold">Selected Files:</h4>
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
            >
              <span className="text-gray-300 truncate">{file.name}</span>
              <button
                onClick={() => setFiles(files.filter((_, i) => i !== index))}
                className="text-red-400 hover:text-red-300 transition-colors cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={handleMerge}
            disabled={isLoading || !isSignedIn}
            className={`w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full transition-all ${isLoading || !isSignedIn ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90 cursor-pointer'}`}
          >
            {isLoading ? 'Merging...' : !isSignedIn ? 'Sign in to Merge PDFs' : 'Merge PDFs'}
          </button>
          {!isSignedIn && (
            <p className="text-sm text-gray-400 text-center mt-2">
              Please sign in to merge PDF files
            </p>
          )}
        </div>
      )}
    </div>
  );
}