import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.phone.trim()) e.phone = 'Please enter your phone number'
    if (!form.message.trim()) e.message = 'Please enter your message'
    return e
  }

  const handleWhatsApp = () => {
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})

    // Build a clean WhatsApp message with all the user's details
    const lines = [
      `Hello R R Glass & Plywoods! 👋`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Message:* ${form.message}`,
      ``,
      `_(Sent from your website)_`,
    ]
    const encoded = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/919440565917?text=${encoded}`, '_blank')
    setSent(true)
    // Reset after 4 seconds
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', phone: '', message: '' })
    }, 4000)
  }

  const Field = ({
    label, field, type = 'text', placeholder, rows,
  }: {
    label: string
    field: keyof typeof form
    type?: string
    placeholder: string
    rows?: number
  }) => (
    <div>
      <label className="font-body text-xs text-gold-500 tracking-wider uppercase mb-2 block">
        {label}
      </label>
      <div className="relative">
        {rows ? (
          <textarea
            value={form[field]}
            onChange={e => {
              setForm(f => ({ ...f, [field]: e.target.value }))
              if (errors[field]) setErrors(er => ({ ...er, [field]: '' }))
            }}
            placeholder={placeholder}
            rows={rows}
            className={`w-full bg-dark-700/50 border rounded-xl px-4 py-3 font-body text-sm text-gold-100 placeholder-gold-100/20 focus:outline-none transition-colors duration-300 resize-none ${
              errors[field]
                ? 'border-red-500/60 focus:border-red-500'
                : 'border-gold-800/30 focus:border-gold-500/60'
            }`}
          />
        ) : (
          <input
            type={type}
            value={form[field]}
            onChange={e => {
              setForm(f => ({ ...f, [field]: e.target.value }))
              if (errors[field]) setErrors(er => ({ ...er, [field]: '' }))
            }}
            placeholder={placeholder}
            className={`w-full bg-dark-700/50 border rounded-xl px-4 py-3 font-body text-sm text-gold-100 placeholder-gold-100/20 focus:outline-none transition-colors duration-300 ${
              errors[field]
                ? 'border-red-500/60 focus:border-red-500'
                : 'border-gold-800/30 focus:border-gold-500/60'
            }`}
          />
        )}
        {errors[field] && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1 mt-1.5 font-body text-xs text-red-400"
          >
            <AlertCircle size={11} /> {errors[field]}
          </motion.p>
        )}
      </div>
    </div>
  )

  return (
    <section id="contact" className="section-padding bg-dark-900/50">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-gold-500" />
            <span className="font-mono text-xs text-gold-500 tracking-[0.35em] uppercase">Get In Touch</span>
            <div className="h-px w-12 bg-gold-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-semibold text-gold-100"
          >
            Visit or <span className="gold-text italic">Contact Us</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ── LEFT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="glass-card rounded-2xl p-8 space-y-5">
              <div className="mb-2">
                <h3 className="font-display text-xl text-gold-200">Send an Enquiry</h3>
                <p className="font-body text-xs text-gold-100/35 mt-1">
                  Fill in the form — your details will open directly in WhatsApp ✓
                </p>
              </div>

              <Field label="Your Name" field="name" placeholder="e.g. Ravi Kumar" />
              <Field label="Phone Number" field="phone" type="tel" placeholder="+91 98765 43210" />
              <Field label="Your Message" field="message" placeholder="e.g. I need Marine Plywood 19mm, 10 sheets — what's the price?" rows={4} />

              {/* WhatsApp preview — shows live as user types */}
              {(form.name || form.phone || form.message) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="rounded-xl border border-green-600/20 bg-green-950/20 p-4"
                >
                  <p className="font-mono text-xs text-green-400/60 mb-2 tracking-wider">WHATSAPP PREVIEW</p>
                  <div className="font-body text-xs text-gold-100/50 leading-relaxed space-y-0.5">
                    <p className="text-green-300/80">Hello R R Glass & Plywoods! 👋</p>
                    {form.name    && <p><span className="text-gold-500">Name:</span> {form.name}</p>}
                    {form.phone   && <p><span className="text-gold-500">Phone:</span> {form.phone}</p>}
                    {form.message && <p><span className="text-gold-500">Message:</span> {form.message}</p>}
                  </div>
                </motion.div>
              )}

              <button
                onClick={handleWhatsApp}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-body font-semibold text-base transition-all duration-300 ${
                  sent
                    ? 'bg-green-600 text-white scale-100'
                    : 'bg-gold-500 text-dark-950 hover:bg-gold-400 hover:scale-[1.02] shadow-lg shadow-gold-900/30'
                }`}
              >
                {sent ? (
                  <><CheckCircle size={18} /> Opening WhatsApp...</>
                ) : (
                  <><MessageCircle size={18} /> Send via WhatsApp</>
                )}
              </button>

              <p className="font-body text-xs text-gold-100/25 text-center">
                Tapping the button opens WhatsApp with your message pre-filled — no data is stored.
              </p>
            </div>

            {/* Quick contact row */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+919440565917"
                className="flex items-center gap-3 p-4 rounded-xl border border-gold-800/20 bg-dark-800/30 hover:border-gold-700/40 hover:bg-dark-700/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <Phone size={16} className="text-gold-500" />
                </div>
                <div>
                  <div className="font-body text-xs text-gold-100/40">Call Us</div>
                  <div className="font-body text-sm text-gold-300 font-medium">+91 94405 65917</div>
                </div>
              </a>
              <a
                href="https://wa.me/919440565917"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-gold-800/20 bg-dark-800/30 hover:border-green-600/40 hover:bg-dark-700/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle size={16} className="text-green-500" />
                </div>
                <div>
                  <div className="font-body text-xs text-gold-100/40">WhatsApp</div>
                  <div className="font-body text-sm text-green-400 font-medium">Chat Now</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT: Map + Address ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden border border-gold-700/20 h-80 relative">
              <iframe
                title="R R Glass & Plywoods Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.23!2d77.6724!3d14.6819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14c9c0d6d7455%3A0x4ea8e2a0d7da9f0e!2sR.F.%20Road%2C%20Anantapur%2C%20Andhra%20Pradesh%20515001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0, filter: 'grayscale(0.4) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none border border-gold-700/20 rounded-2xl" />
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-gold-500" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-gold-200 mb-2">Find Us At</h4>
                  <p className="font-body text-sm text-gold-100/55 leading-relaxed">
                    Shop No 3, DCMS Building,<br />
                    Opposite Rithi Jewellery Showroom,<br />
                    R.F. Road, Anantapur – 515001<br />
                    Andhra Pradesh, India
                  </p>
                  <a
                    href="https://maps.google.com/?q=R+R+Glass+Plywoods+RF+Road+Anantapur+515001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 font-body text-sm text-gold-500 hover:text-gold-400 transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              <div className="border-t border-gold-800/20 pt-4 grid grid-cols-2 gap-3">
                <div>
                  <p className="font-body text-xs text-gold-100/30 mb-1">Mon – Sat</p>
                  <p className="font-body text-sm text-gold-300">9:00 AM – 8:00 PM</p>
                </div>
                <div>
                  <p className="font-body text-xs text-gold-100/30 mb-1">Sunday</p>
                  <p className="font-body text-sm text-gold-300">10:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
