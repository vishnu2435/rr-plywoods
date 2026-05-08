import { motion } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gold-700/20 h-96">
              <img
                src="https://images.unsplash.com/photo-1590736969596-b8fda8d1a748?w=700&h=500&fit=crop&auto=format"
                alt="R R Glass & Plywoods shop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 max-w-52"
            >
              <div className="font-display text-3xl font-semibold gold-text mb-1">20+</div>
              <div className="font-body text-sm text-gold-100/60 leading-snug">
                Years serving Anantapur with quality & trust
              </div>
            </motion.div>

            {/* Gold accent lines */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-600/40 rounded-tl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-600/40 rounded-br-2xl" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-gold-500" />
              <span className="font-mono text-xs text-gold-500 tracking-[0.35em] uppercase">About Us</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-semibold text-gold-100 mb-6 leading-tight">
              Anantapur's <span className="gold-text italic">Premium</span><br />
              Building Materials Store
            </h2>

            <p className="font-body text-gold-100/60 leading-relaxed mb-5">
              R R Glass & Plywoods is located in the heart of Anantapur at Shop No. 3,
              DCMS Building, R.F. Road — one of the city's most trusted hardware and
              building materials destinations.
            </p>

            <p className="font-body text-gold-100/60 leading-relaxed mb-8">
              We stock an extensive range of plywood grades, toughened glass, hardware
              fittings, power tools, flush doors, pipes and more — sourced directly from
              certified manufacturers to ensure quality at every price point.
            </p>

            {/* Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-gold-800/20 bg-dark-800/30">
                <MapPin size={18} className="text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-body text-sm font-medium text-gold-200 mb-0.5">Address</div>
                  <div className="font-body text-sm text-gold-100/50 leading-relaxed">
                    Shop No 3, DCMS Building, Opposite Rithi Jewellery Showroom,<br />
                    R.F. Road, Anantapur – 515001, Andhra Pradesh
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-gold-800/20 bg-dark-800/30">
                <Clock size={18} className="text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-body text-sm font-medium text-gold-200 mb-0.5">Shop Hours</div>
                  <div className="font-body text-sm text-gold-100/50">
                    Mon – Sat: 9:00 AM – 8:00 PM<br />
                    Sunday: 10:00 AM – 2:00 PM
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-gold-800/20 bg-dark-800/30">
                <Phone size={18} className="text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-body text-sm font-medium text-gold-200 mb-0.5">Contact</div>
                  <a href="tel:+919440565917" className="font-body text-sm text-gold-400 hover:text-gold-300 transition-colors">
                    +91 94405 65917
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
