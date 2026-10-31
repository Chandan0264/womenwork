import React from 'react'
import Footer from '@/components/Footer'

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'Digital Marketing Basics',
      instructor: 'Sarah Johnson',
      level: 'beginner',
      duration: '4 weeks',
      rating: 4.8,
      enrolled: 1250,
      accent: 'from-violet-500 to-indigo-500',
    },
    {
      id: 2,
      title: 'Web Development with React',
      instructor: 'John Smith',
      level: 'intermediate',
      duration: '8 weeks',
      rating: 4.9,
      enrolled: 980,
      accent: 'from-pink-500 to-rose-400',
    },
    {
      id: 3,
      title: 'Virtual Assistant Skills',
      instructor: 'Emma Wilson',
      level: 'beginner',
      duration: '3 weeks',
      rating: 4.7,
      enrolled: 2100,
      accent: 'from-cyan-500 to-sky-500',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-10">
          <span className="section-tag">Skill development</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">Learn practical skills for flexible work.</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Explore short, beginner-friendly courses designed to build confidence and prepare you for remote work opportunities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="premium-card overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className={`h-40 bg-gradient-to-br ${course.accent}`} />
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-violet-700">
                    {course.level}
                  </span>
                  <span className="text-sm font-semibold text-amber-500">⭐ {course.rating}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">{course.title}</h3>
                <p className="mt-2 text-sm font-medium text-slate-500">By {course.instructor}</p>

                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Duration</span>
                    <span className="font-semibold text-slate-900">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Enrolled</span>
                    <span className="font-semibold text-slate-900">{course.enrolled.toLocaleString()}</span>
                  </div>
                </div>

                <button className="premium-button mt-6 w-full rounded-xl px-4 py-3 text-sm">
                  Enroll now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Courses
