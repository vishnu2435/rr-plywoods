import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

const products = [
  {
    id: 'plywood',
    title: 'Plywood',
    subtitle: 'All grades & sizes',
    description: 'Marine, BWR, Commercial, Fire Retardant, Block Board & Decorative Laminates from ISI-certified manufacturers.',
    accent: '#d97706',
    tags: ['Marine Ply · IS:710', 'BWR Grade', 'Commercial MR', 'Fire Retardant', 'Block Board', 'Laminates'],
    img: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
    stat: '50+ variants',
  },
  {
    id: 'glass',
    title: 'Glass',
    subtitle: 'All architectural types',
    description: 'Toughened, Clear Float, Frosted, Reflective, Laminated & Mirror glass for every construction use.',
    accent: '#60a5fa',
    tags: ['Toughened · IS:2553', 'Clear Float', 'Frosted/Etched', 'Reflective', 'Laminated', 'Mirrors'],
    img: 'https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
    stat: '2mm – 19mm',
  },
  {
    id: 'hardware',
    title: 'Hardware',
    subtitle: 'Complete fittings range',
    description: 'Hinges, handles, locks, fasteners, tower bolts, glass fittings & every fitting you need.',
    accent: '#a78bfa',
    tags: ['Hinges & Pivots', 'Handles & Knobs', 'Mortise Locks', 'Fasteners', 'Glass Fittings', 'Latches'],
    img: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
    stat: '200+ designs',
  },
  {
    id: 'power-tools',
    title: 'Power Tools',
    subtitle: 'Professional grade brands',
    description: 'Bosch, Makita, DeWalt & more — drills, grinders, saws, sanders & routers for every trade.',
    accent: '#f59e0b',
    tags: ['Drills & Drivers', 'Angle Grinders', 'Circular Saws', 'Jigsaws', 'Sanders', 'Routers'],
    img: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
    stat: 'Top brands',
  },
  {
    id: 'doors',
    title: 'Flush Doors',
    subtitle: 'Interior & exterior',
    description: 'Solid core, hollow core, membrane press, veneer finish & fire-rated doors with frames.',
    accent: '#10b981',
    tags: ['Solid Core', 'Hollow Core', 'Membrane Press', 'Veneer Finish', 'Fire Rated', 'Door Frames'],
    img: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
    stat: 'Custom sizes',
  },
  {
    id: 'pipes',
    title: 'Pipes & Fittings',
    subtitle: 'Complete plumbing solutions',
    description: 'CPVC, UPVC, PPR, GI pipes & full range of valves, taps and drainage fittings.',
    accent: '#f43f5e',
    tags: ['CPVC Hot/Cold', 'UPVC Pressure', 'PPR Pipes', 'GI Pipes', 'Ball Valves', 'SWR Drainage'],
    img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
    stat: 'ISI marked',
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl overflow-hidden border transition-all duration-500"
      style={{ borderColor: `${product.accent}18`, background: 'rgba(16,12,7,0.85)' }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = `${product.accent}45`
        el.style.transform = 'translateY(-6px)'
        el.style.boxShadow = `0 24px 50px ${product.accent}18`
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = `${product.accent}18`
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
      }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(10,8,5,0.95) 100%)' }} />
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(to right, ${product.accent}, transparent)` }} />
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full font-mono text-xs backdrop-blur-sm"
          style={{ background: `${product.accent}22`, color: product.accent, border: `1px solid ${product.accent}40` }}
        >
          {product.stat}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-1" style={{ color: product.accent }}>
          <span className="font-mono text-xs tracking-widest uppercase">{product.subtitle}</span>
        </div>
        <h3 className="font-display text-2xl font-semibold text-gold-100 mb-3">{product.title}</h3>
        <p className="font-body text-sm text-gold-100/50 leading-relaxed mb-5">{product.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {product.tags.map(tag => (
            <span
              key={tag}
              className="font-body text-xs px-2.5 py-1 rounded-full"
              style={{ background: `${product.accent}12`, color: `${product.accent}cc`, border: `1px solid ${product.accent}25` }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: `${product.accent}15` }}>
          <a
            href="#gallery"
            className="flex items-center gap-2 font-body text-sm font-medium transition-all duration-200 group/btn"
            style={{ color: product.accent }}
          >
            View All Types
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
          </a>
          <div className="flex-1" />
          <a
            href={`https://wa.me/919440565917?text=Hi R R Glass %26 Plywoods, I want to enquire about ${product.title} products.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full font-body text-xs font-semibold transition-all duration-300 hover:opacity-90"
            style={{ background: product.accent, color: '#0a0805' }}
          >
            <MessageCircle size={12} /> Enquire
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Products() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="products" className="section-padding" style={{ background: 'rgba(16,14,9,0.5)' }}>
      <div className="container-custom">
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-gold-500" />
            <span className="font-mono text-xs text-gold-500 tracking-[0.35em] uppercase">Everything In One Place</span>
            <div className="h-px w-12 bg-gold-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-semibold text-gold-100 mb-4"
          >
            Our <span className="gold-text italic">Product Range</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-gold-100/50 max-w-lg mx-auto text-base leading-relaxed"
          >
            Six major categories. 500+ products. All under one roof at R.F. Road, Anantapur.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl text-center border border-gold-800/20 bg-dark-800/30"
        >
          <p className="font-display text-xl text-gold-200 mb-2">Can't find what you need?</p>
          <p className="font-body text-sm text-gold-100/40 mb-6">
            We stock 500+ products — just WhatsApp or call and we'll check availability instantly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/919440565917?text=Hi, I'm looking for a specific product. Can you help?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-500 text-dark-950 font-body font-semibold text-sm hover:bg-gold-400 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={15} /> WhatsApp Us
            </a>
            <a
              href="tel:+919440565917"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold-600/40 text-gold-400 font-body text-sm hover:bg-gold-600/10 transition-all duration-300"
            >
              📞 +91 94405 65917
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
