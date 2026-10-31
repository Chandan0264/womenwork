import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '@/components/Footer'

const Home: React.FC = () => {
  const features = [
    {
      icon: '💼',
      title: 'Flexible Remote Jobs',
      description: 'Explore work opportunities that fit around your schedule, family life, and growing career goals.',
    },
    {
      icon: '📚',
      title: 'Skill Growth',
      description: 'Build practical digital, communication, and career-ready skills through curated learning tracks.',
    },
    {
      icon: '🤝',
      title: 'Community Support',
      description: 'Connect with a supportive space for women seeking confidence, mentorship, and meaningful work.',
    },
  ]

  const statCards = [
    { label: 'Remote roles', value: '120+' },
    { label: 'Skill courses', value: '45+' },
    { label: 'Partner employers', value: '35+' },
    { label: 'Success stories', value: '1.2k+' },
  ]

  const categories = [
    'Virtual Assistant',
    'Content Writing',
    'Customer Support',
    'Design & Social Media',
    'Sales & Marketing',
    'Data Entry',
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(113,90,240,0.16),_transparent_32%),linear-gradient(135deg,_#f8f7ff_0%,_#eef4ff_45%,_#fdf2f8_100%)] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="section-tag">Women-led work opportunities</span>
              <h1 className="mt-6 max-w-xl text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Build a career that fits your life.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
                WomenWork helps homemakers discover flexible remote opportunities, confidence-building courses, and a supportive network to get back to work on their own terms.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/jobs" className="premium-button rounded-xl px-6 py-3 text-base">
                  Explore jobs
                </Link>
                <Link to="/signup" className="premium-button secondary rounded-xl px-6 py-3 text-base">
                  Join for free
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="stat-pill">✔ Trusted by learners</span>
                <span className="stat-pill">✔ Flexible roles</span>
                <span className="stat-pill">✔ Career support</span>
              </div>
            </div>

            <div className="relative">
              <div className="premium-card p-5">
                <div className="rounded-[28px] bg-gradient-to-br from-violet-600 via-indigo-500 to-pink-500 p-6 text-white shadow-2xl shadow-violet-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-violet-100">Featured match</p>
                      <h3 className="mt-3 text-2xl font-bold">Remote Social Media Assistant</h3>
                    </div>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
                      Hybrid
                    </span>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-xs uppercase tracking-[0.12em] text-violet-100">Salary</div>
                      <div className="mt-2 text-2xl font-extrabold">₹22k</div>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-xs uppercase tracking-[0.12em] text-violet-100">Location</div>
                      <div className="mt-2 text-xl font-bold">Remote</div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-sm text-violet-100">
                      <span>Application progress</span>
                      <span>78%</span>
                    </div>
                    <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-white/20">
                      <div className="h-full w-[78%] rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((item) => (
            <div key={item.label} className="premium-card p-6">
              <div className="text-3xl font-black text-slate-900">{item.value}</div>
              <div className="mt-2 text-sm font-medium text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="mb-10 text-center">
          <span className="section-tag">Why WomenWork</span>
          <h2 className="mt-5 text-3xl font-black text-slate-900 md:text-4xl">Purpose-built for flexible careers.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="premium-card p-7">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-3xl shadow-sm">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{feature.title}</h3>
              <p className="text-base leading-7 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <span className="section-tag bg-white/10 text-violet-100">Popular job categories</span>
            <h2 className="mt-5 text-3xl font-black md:text-4xl">Find work that matches your strengths.</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <div key={category} className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100">
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="mb-10 text-center">
          <span className="section-tag">How it works</span>
          <h2 className="mt-5 text-3xl font-black text-slate-900 md:text-4xl">Simple steps to your next opportunity.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['1', 'Create profile', 'Set up your skills, experience, and availability to stand out.'],
            ['2', 'Explore roles', 'Browse flexible jobs and learning paths suited to your goals.'],
            ['3', 'Apply confidently', 'Track progress, apply faster, and grow through guided learning.'],
          ].map(([step, title, description]) => (
            <div key={step} className="premium-card p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-500 text-lg font-extrabold text-white">
                {step}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
              <p className="text-base leading-7 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="premium-card overflow-hidden">
          <div className="grid items-center gap-8 bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-12 text-white md:grid-cols-[1fr_auto] md:px-10">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-100">Ready to begin?</div>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">Start your flexible career journey today.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/jobs" className="premium-button ghost rounded-xl px-6 py-3 text-base text-slate-900">
                Browse roles
              </Link>
              <Link to="/signup" className="premium-button rounded-xl px-6 py-3 text-base bg-white text-violet-700 shadow-none">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
