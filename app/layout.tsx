import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blueprint3D | Convert 2D Blueprints to 3D Models',
  description: 'Transform your 2D blueprints into immersive 3D models',
  generator: 'v0.dev',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-primary text-white p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="logo text-xl font-bold">
              Blueprint<span className="text-secondary">3D</span>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-secondary transition-colors" data-page="dashboard">Dashboard</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors" data-page="upload">Upload Blueprint</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors" data-page="parameters">Parameters</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors" data-page="output">3D Output</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors" data-page="walkthrough">Walkthrough</a></li>
              </ul>
            </nav>
            <div className="auth-buttons flex gap-2">
              <a href="/login" className="btn btn-outline px-4 py-2 rounded border border-white text-white hover:bg-white hover:text-primary transition-colors">Login</a>
              <a href="/register" className="btn btn-primary px-4 py-2 rounded bg-secondary text-white hover:bg-blue-600 transition-colors">Register</a>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-primary text-white p-8 mt-8">
          <div className="container mx-auto">
            <div className="footer-content flex flex-wrap justify-between">
              <div className="footer-section mb-6">
                <h3 className="text-secondary mb-4">Blueprint3D</h3>
                <p>Transforming 2D architectural blueprints into immersive 3D walkthrough models for enhanced planning and visualization.</p>
              </div>
              <div className="footer-section mb-6">
                <h3 className="text-secondary mb-4">Quick Links</h3>
                <ul className="list-none">
                  <li><a href="#" className="text-white hover:text-secondary transition-colors" data-page="dashboard">Dashboard</a></li>
                  <li><a href="#" className="text-white hover:text-secondary transition-colors" data-page="upload">Upload Blueprint</a></li>
                  <li><a href="#" className="text-white hover:text-secondary transition-colors" data-page="walkthrough">3D Walkthrough</a></li>
                </ul>
              </div>
              <div className="footer-section mb-6">
                <h3 className="text-secondary mb-4">Contact Us</h3>
                <p>Email: info@blueprint3d.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </div>
            <div className="footer-bottom text-center pt-4 border-t border-white/10 mt-4">
              <p>&copy; 2023 Blueprint3D. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
