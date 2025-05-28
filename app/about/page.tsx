export default function About() {
  return (
    <div className="relative min-h-screen pt-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-600/10 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            About DocuBind
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8">
              DocuBind is your trusted solution for seamless PDF merging. We understand the challenges of managing multiple PDF documents, which is why we have created a powerful yet simple tool to help you combine your files effortlessly.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-8">
              Our mission is to simplify document management for individuals and businesses alike. We believe that working with PDFs should be straightforward and efficient, without compromising on security or quality.
            </p>

            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="text-gray-300 space-y-4 mb-8">
              <li>✨ User-friendly interface designed for efficiency</li>
              <li>🔒 Bank-level security for your documents</li>
              <li>⚡ Lightning-fast processing speeds</li>
              <li>💻 Accessible from any device</li>
              <li>🌟 Dedicated customer support</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Our Technology</h2>
            <p className="text-gray-300">
              Built with cutting-edge technology, DocuBind leverages advanced algorithms to ensure your PDFs are merged with precision while maintaining the highest quality. Our platform is constantly evolving to meet the growing needs of our users.
            </p>
            <p>It&apos;s easy to use and secure.</p>
          </div>
        </div>
      </div>
    </div>
  )
}