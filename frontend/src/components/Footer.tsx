import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-24 bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-indigo-500 to-pink-500 font-bold text-white">
                W
              </div>
              <div>
                <div className="text-lg font-bold text-white">WomenWork</div>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-6 text-slate-400">
              Empowering homemakers and flexible professionals through meaningful remote work, upskilling, and career confidence.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-white">Quick links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="/" className="transition hover:text-white">Home</a></li>
              <li><a href="/jobs" className="transition hover:text-white">Jobs</a></li>
              <li><a href="/courses" className="transition hover:text-white">Courses</a></li>
              <li><a href="/dashboard" className="transition hover:text-white">Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-white">Support</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="transition hover:text-white">Help Center</a></li>
              <li><a href="#" className="transition hover:text-white">Contact Us</a></li>
              <li><a href="#" className="transition hover:text-white">FAQs</a></li>
              <li><a href="#" className="transition hover:text-white">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-white">Follow us</h4>
            <div className="flex flex-wrap gap-3 text-sm text-slate-400">
              <a href="#" className="rounded-full border border-slate-700 px-3 py-2 transition hover:border-violet-400 hover:text-white">LinkedIn</a>
              <a href="#" className="rounded-full border border-slate-700 px-3 py-2 transition hover:border-violet-400 hover:text-white">Instagram</a>
              <a href="#" className="rounded-full border border-slate-700 px-3 py-2 transition hover:border-violet-400 hover:text-white">Facebook</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {currentYear} WomenWork. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
