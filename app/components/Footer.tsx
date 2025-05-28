export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} DocuBind. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/samarth-shrivastava"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/samarth-shrivastava-276904251/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}