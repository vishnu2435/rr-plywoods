import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Clock, Truck, HeartHandshake, Award, Users } from 'lucide-react'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / 60
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 25)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const reasons = [
  {
    icon: Award,
    title: 'Trusted for 20+ Years',
    description: 'A legacy of reliability — serving Anantapur\'s builders and homeowners for over two decades.',
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'We stock only ISI-marked, certified plywood and glass from reputed manufacturers.',
  },
  {
    icon: Truck,
    title: 'Prompt Delivery',
    description: 'Fast delivery across Anantapur and surrounding districts for bulk and retail orders.',
  },
  {
    icon: HeartHandshake,
    title: 'Honest Pricing',
    description: 'No hidden costs. Competitive wholesale and retail pricing for every customer.',
  },
  {
    icon: Clock,
    title: 'Expert Guidance',
    description: 'Not sure what grade you need? Our experienced staff will guide you to the right product.',
  },
  {
    icon: Users,
    title: 'Bulk & Retail',
    description: 'Catering to individual homeowners, contractors, architects, and builders alike.',
  },
]

const stats = [
  { target: 20, suffix: '+', label: 'Years in Business' },
  { target: 500, suffix: '+', label: 'Products in Stock' },
  { target: 5000, suffix: '+', label: 'Satisfied Customers' },
  { target: 100, suffix: '%', label: 'Quality Certified' },
]

export default function WhyUs() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-700/5 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-gold-500" />
            <span className="font-mono text-xs text-gold-500 tracking-[0.35em] uppercase">
              Why Choose Us
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-semibold text-gold-100 mb-4"
          >
            Built on <span className="gold-text italic">Trust</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-gold-100/50 max-w-md mx-auto"
          >
            R R Glass & Plywoods has been Anantapur's most reliable building materials partner.
          </motion.p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-2xl border border-gold-700/20 bg-dark-800/40"
            >
              <div className="font-display text-4xl font-semibold gold-text mb-2">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="font-body text-xs text-gold-100/40 tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-6 rounded-2xl border border-gold-800/20 bg-dark-800/30 hover:bg-dark-700/40 hover:border-gold-700/40 transition-all duration-400"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5 group-hover:bg-gold-500/15 transition-colors duration-300">
                <reason.icon size={22} className="text-gold-500" />
              </div>
              <h3 className="font-display text-lg font-semibold text-gold-100 mb-2">
                {reason.title}
              </h3>
              <p className="font-body text-sm text-gold-100/50 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
