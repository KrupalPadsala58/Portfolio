"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa'

const PROJECT_TYPES = [
  "Web Development",
  "UI/UX Design",
  "Mobile App",
  "Branding",
  "Consultation",
  "Other"
]

const BUDGET_RANGES = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+"
]

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    if (!formData.projectType) newErrors.projectType = 'Please select a project type'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: ''
      })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  return (
    <section className="py-24 bg-background overflow-hidden" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Context & Trust */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 order-2 lg:order-1"
          >
            <div className="sticky top-24">
              <span className="text-primary font-bold uppercase tracking-widest mb-4 block">Let’s Work Together</span>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                Have a project in mind? Let&apos;s bring it to life.
              </h2>
              <p className="text-text-secondary text-lg mb-10 max-w-md">
                I&apos;m currently available for new projects and collaborations. Drop me a message and I&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary font-medium">Email Me</p>
                    <a href="mailto:hello@example.com" className="text-text-primary font-semibold hover:text-primary transition-colors">hello@example.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary font-medium">Location</p>
                    <p className="text-text-primary font-semibold">San Francisco, CA</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary font-medium">Availability</p>
                    <p className="text-text-primary font-semibold">Available Now (24h Response)</p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="mt-12 p-6 rounded-3xl bg-surface border border-border/50 relative overflow-hidden">
                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-surface bg-grey-2" />
                    ))}
                  </div>
                  <p className="text-sm text-text-secondary">
                    Join <span className="text-text-primary font-bold">50+ happy clients</span> who trusted me with their vision.
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-12 -mt-12" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12 order-1 lg:order-2"
          >
            <div className="bg-surface rounded-[40px] p-8 md:p-12 border border-border shadow-2xl relative">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center text-4xl mb-6">
                      <FaCheckCircle />
                    </div>
                    <h3 className="text-3xl font-bold text-text-primary mb-4">Inquiry Received!</h3>
                    <p className="text-text-secondary max-w-sm mb-8">
                      Thank you for reaching out. I&apos;ve received your details and will get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:opacity-90 transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="text-sm font-semibold text-text-primary ml-1 block">Full Name *</label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full bg-background border ${errors.fullName ? 'border-red-500' : 'border-border'} rounded-2xl px-6 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all`}
                          placeholder="John Doe"
                          aria-invalid={!!errors.fullName}
                        />
                        {errors.fullName && <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-1"><FaExclamationCircle /> {errors.fullName}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-text-primary ml-1 block">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full bg-background border ${errors.email ? 'border-red-500' : 'border-border'} rounded-2xl px-6 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all`}
                          placeholder="john@example.com"
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-1"><FaExclamationCircle /> {errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-text-primary ml-1 block">Phone Number (Optional)</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-background border border-border rounded-2xl px-6 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="projectType" className="text-sm font-semibold text-text-primary ml-1 block">Project Type *</label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className={`w-full bg-background border ${errors.projectType ? 'border-red-500' : 'border-border'} rounded-2xl px-6 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer`}
                          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.5rem' }}
                          aria-invalid={!!errors.projectType}
                        >
                          <option value="" disabled>Select project type</option>
                          {PROJECT_TYPES.map(type => (
                            <option key={type} value={type} className="bg-surface">{type}</option>
                          ))}
                        </select>
                        {errors.projectType && <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-1"><FaExclamationCircle /> {errors.projectType}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-semibold text-text-primary ml-1 block">Budget Range</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {BUDGET_RANGES.map(range => (
                          <button
                            key={range}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, budget: range }))}
                            className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${formData.budget === range ? 'bg-primary border-primary text-white' : 'bg-background border-border text-text-secondary hover:border-primary/50'}`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-text-primary ml-1 block">Message / Project Details *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full bg-background border ${errors.message ? 'border-red-500' : 'border-border'} rounded-2xl px-6 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none`}
                        placeholder="Tell me about your project, goals, and any specific requirements..."
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-1"><FaExclamationCircle /> {errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className={`w-full py-5 rounded-2xl font-bold text-white flex items-center justify-center gap-3 transition-all ${status === 'submitting' ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98]'}`}
                    >
                      {status === 'submitting' ? (
                        <>
                          <FaSpinner className="animate-spin" />
                          Sending Inquiry...
                        </>
                      ) : (
                        "Send Inquiry"
                      )}
                    </button>
                    
                    {status === 'error' && (
                        <p className="text-red-500 text-center text-sm font-medium mt-2">
                           Something went wrong. Please try again.
                        </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact

