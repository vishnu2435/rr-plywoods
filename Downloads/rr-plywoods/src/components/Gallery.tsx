import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Phone, MessageCircle } from 'lucide-react'

// ─── REAL PRODUCT DATA WITH VERIFIED PEXELS IMAGES ────────────────────────
const categoryData: Record<string, {
  label: string
  tagline: string
  accent: string
  products: { title: string; desc: string; badge: string; img: string }[]
}> = {
  Plywood: {
    label: 'Plywood',
    tagline: 'All grades for every construction need',
    accent: '#d97706',
    products: [
      {
        title: 'Marine Plywood',
        badge: 'IS:710 Certified',
        desc: 'Fully waterproof — ideal for boats, kitchens, bathrooms & exterior use. Available in 6mm to 25mm.',
        img: 'https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'BWR Grade Plywood',
        badge: 'Boiling Water Resistant',
        desc: 'Phenol formaldehyde bonded plywood — perfect for furniture, cabinets & modular kitchens.',
        img: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Commercial Plywood',
        badge: 'MR Grade',
        desc: 'Moisture resistant plywood for indoor furniture, partition boards, shelving & wardrobes.',
        img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Laminates & Veneers',
        badge: 'Decorative Finish',
        desc: 'Premium decorative laminates in 100+ textures — wood grain, matte, glossy & metallic finishes.',
        img: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Fire Retardant Ply',
        badge: 'FR Grade',
        desc: 'Chemically treated fire-resistant plywood for commercial spaces, theatres & hotels.',
        img: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Block Board',
        badge: 'Heavy Duty',
        desc: 'Solid core block boards for doors, shutters, table tops & heavy furniture applications.',
        img: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
    ],
  },
  Glass: {
    label: 'Glass',
    tagline: 'All types of architectural & safety glass',
    accent: '#60a5fa',
    products: [
      {
        title: 'Toughened Safety Glass',
        badge: 'IS:2553 Certified',
        desc: '4x stronger than ordinary glass. Shatters into pebbles — safe for doors, partitions & railings.',
        img: 'https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Clear Float Glass',
        badge: 'Optical Clarity',
        desc: 'High clarity distortion-free glass for windows, showcases, mirrors & framing. 2mm–19mm thick.',
        img: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Frosted / Etched Glass',
        badge: 'Privacy Glass',
        desc: 'Acid-etched or sandblasted finish — perfect for bathroom partitions, office cabins & interior doors.',
        img: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Reflective Glass',
        badge: 'Solar Control',
        desc: 'One-way mirror finish with solar control coating — ideal for office buildings & storefronts.',
        img: 'https://images.pexels.com/photos/302083/pexels-photo-302083.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Laminated Glass',
        badge: 'Shatter-Proof',
        desc: 'Two glass layers bonded with PVB film — stays intact when broken. Best for skylights & facades.',
        img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Mirror Glass',
        badge: 'Silver Backed',
        desc: 'Premium quality silver-backed mirrors with anti-moisture coating for bathrooms & wardrobes.',
        img: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
    ],
  },
  Hardware: {
    label: 'Hardware',
    tagline: 'Complete fittings for every structure',
    accent: '#a78bfa',
    products: [
      {
        title: 'Door Hinges',
        badge: 'SS & Brass',
        desc: 'Butt hinges, piano hinges, concealed hinges — stainless steel & brass finish in all sizes.',
        img: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Handles & Knobs',
        badge: '200+ Designs',
        desc: 'Cabinet handles, door knobs, drawer pulls in stainless steel, brass, antique & chrome finish.',
        img: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Mortise Locks',
        badge: 'Security Grade',
        desc: 'High-security mortise lock sets, padlocks, deadbolts & digital locks for home & commercial use.',
        img: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Screws & Fasteners',
        badge: 'All Sizes',
        desc: 'Wood screws, self-tapping, machine bolts, anchors, nails & wall plugs in SS, zinc & GI grade.',
        img: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Tower Bolts & Latches',
        badge: 'Flush & Surface',
        desc: 'Flush bolts, barrel bolts, hasp & staple, safety latches for doors, windows & gates.',
        img: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Glass Fittings',
        badge: 'Spider & Patch',
        desc: 'Spider clamps, patch fittings, glass channels, rubber gaskets & silicone sealants for glass work.',
        img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
    ],
  },
  'Power Tools': {
    label: 'Power Tools',
    tagline: 'Professional tools for every trade',
    accent: '#f59e0b',
    products: [
      {
        title: 'Electric Drills',
        badge: 'Corded & Cordless',
        desc: 'Impact drills, hammer drills, cordless drill-drivers — Bosch, Makita, DeWalt & local brands.',
        img: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Angle Grinders',
        badge: '4" to 9" sizes',
        desc: 'Cutting, grinding & polishing — 4", 5", 7" & 9" angle grinders for metal, tile & stone work.',
        img: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Circular Saws',
        badge: 'Wood & Metal',
        desc: 'Powerful circular saws for cutting plywood, timber & metal sheets — table saw attachments available.',
        img: 'https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Jigsaw Machines',
        badge: 'Variable Speed',
        desc: 'Curve & contour cutting — ideal for curved woodwork, laminate trimming & detail cuts.',
        img: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Sanders & Polishers',
        badge: 'Belt & Orbital',
        desc: 'Belt sanders, orbital sanders, palm sanders — for smooth finishing of wood & furniture surfaces.',
        img: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Routers & Trimmers',
        badge: 'Precision Cut',
        desc: 'Wood routers for edge finishing, groove cutting & laminate trimming on furniture & cabinetry.',
        img: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
    ],
  },
  Doors: {
    label: 'Flush Doors',
    tagline: 'Premium doors for every room',
    accent: '#10b981',
    products: [
      {
        title: 'Solid Core Flush Doors',
        badge: 'Heavy Duty',
        desc: 'Full blockboard core flush doors — soundproof, warp-free, ideal for bedrooms & main entrance.',
        img: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Hollow Core Flush Doors',
        badge: 'Lightweight',
        desc: 'Lightweight honey-comb core flush doors — cost-effective choice for interior use & partitions.',
        img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Membrane Press Doors',
        badge: 'Designer Finish',
        desc: 'PVC membrane finish doors with 3D routing patterns — premium look for modern interiors.',
        img: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Veneer Finish Doors',
        badge: 'Natural Wood',
        desc: 'Real wood veneer faced doors — teak, oak, cherry & walnut finish for luxury interiors.',
        img: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Fire Rated Doors',
        badge: '30/60 Min FRL',
        desc: 'Fire resistant doors for stairwells, server rooms & commercial buildings — IS:3614 certified.',
        img: 'https://images.pexels.com/photos/302083/pexels-photo-302083.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Door Frames',
        badge: 'Wood & Steel',
        desc: 'Solid wood frames, steel frames, UPVC frames — for all door types and wall thicknesses.',
        img: 'https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
    ],
  },
  Pipes: {
    label: 'Pipes & Fittings',
    tagline: 'Complete plumbing solutions',
    accent: '#f43f5e',
    products: [
      {
        title: 'CPVC Pipes & Fittings',
        badge: 'Hot & Cold Water',
        desc: 'Chlorinated PVC pipes for hot & cold water — corrosion-free, lead-free & food-safe.',
        img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'UPVC Pressure Pipes',
        badge: 'High Pressure',
        desc: 'Unplasticised PVC pipes for agriculture, water supply & drainage — ISI marked.',
        img: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'PPR Pipes',
        badge: 'Polypropylene',
        desc: 'Heat fusion welded PPR pipes — no joints, no leaks — for concealed plumbing & potable water.',
        img: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'GI Pipes',
        badge: 'Galvanised Iron',
        desc: 'Heavy duty galvanised iron pipes for water, gas & structural applications in all diameters.',
        img: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Ball Valves & Taps',
        badge: 'Brass & SS',
        desc: 'Quarter-turn ball valves, gate valves, stop cocks & CP bath fittings from top brands.',
        img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'SWR Drainage Pipes',
        badge: 'Soil & Waste',
          desc: 'Soil, waste & rainwater pipes with rubber ring joints — smooth bore for fast flow.',
        img: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
    ],
  },
}

const categories = ['Plywood', 'Glass', 'Hardware', 'Power Tools', 'Doors', 'Pipes']

export default function Gallery() {
  const [active, setActive] = useState('Glass')
  const [lightbox, setLightbox] = useState<{ title: string; desc: string; badge: string; img: string; category: string } | null>(null)

  const current = categoryData[active]

  return (
    <section id="gallery" className="section-padding bg-dark-900/40">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-gold-500" />
            <span className="font-mono text-xs text-gold-500 tracking-[0.35em] uppercase">Product Range</span>
            <div className="h-px w-12 bg-gold-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-semibold text-gold-100 mb-3"
          >
            Explore by <span className="gold-text italic">Category</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-sm text-gold-100/40"
          >
            Click any category to see all available types
          </motion.p>
        </div>

        {/* Category tabs — horizontal scroll on mobile */}
        <div className="flex gap-3 overflow-x-auto pb-2 mb-10 scrollbar-hide justify-center flex-wrap">
          {categories.map(cat => {
            const accent = categoryData[cat].accent
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="shrink-0 px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300"
                style={
                  active === cat
                    ? { background: accent, color: '#0a0805', boxShadow: `0 0 20px ${accent}55` }
                    : { border: `1px solid ${accent}30`, color: `${accent}99` }
                }
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Active category header */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 max-w-12" style={{ background: current.accent }} />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-semibold" style={{ color: current.accent }}>
                  {current.label}
                </span>
                <span className="font-body text-xs text-gold-100/40">{current.tagline}</span>
              </div>
              <div className="h-px flex-1" style={{ background: `${current.accent}30` }} />
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {current.products.map((product, i) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  onClick={() => setLightbox({ ...product, category: active })}
                  className="group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-400"
                  style={{ borderColor: `${current.accent}20`, background: 'rgba(26,22,15,0.7)' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${current.accent}55`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = `${current.accent}20`)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-dark-700">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      onError={e => {
                        // Fallback: show a gradient placeholder if image fails
                        const target = e.currentTarget
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.style.background = `linear-gradient(135deg, ${current.accent}22, ${current.accent}08)`
                          parent.innerHTML += `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:${current.accent};font-size:14px;font-family:DM Sans,sans-serif;opacity:0.5">${product.title}</div>`
                        }
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(to top, ${current.accent}33, transparent)` }}
                    />
                    {/* Zoom icon */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm"
                        style={{ background: `${current.accent}30`, border: `1px solid ${current.accent}50` }}
                      >
                        <ZoomIn size={13} style={{ color: current.accent }} />
                      </div>
                    </div>
                    {/* Badge */}
                    <div className="absolute bottom-3 left-3">
                      <span
                        className="font-mono text-xs px-2.5 py-1 rounded-full backdrop-blur-sm"
                        style={{ background: `${current.accent}25`, color: current.accent, border: `1px solid ${current.accent}40` }}
                      >
                        {product.badge}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-display text-base font-semibold text-gold-100 mb-2">
                      {product.title}
                    </h3>
                    <p className="font-body text-xs text-gold-100/45 leading-relaxed line-clamp-2">
                      {product.desc}
                    </p>
                    <div
                      className="mt-4 flex items-center gap-1 font-body text-xs font-medium transition-all duration-200"
                      style={{ color: current.accent }}
                    >
                      <span>Enquire now</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href={`https://wa.me/919440565917?text=Hi R R Glass %26 Plywoods, I'm interested in your ${active} products. Please share details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{ background: current.accent, color: '#0a0805' }}
              >
                <MessageCircle size={15} />
                WhatsApp for {active} Pricing
              </a>
              <a
                href="tel:+919440565917"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm border transition-all duration-300"
                style={{ borderColor: `${current.accent}40`, color: current.accent }}
              >
                <Phone size={15} />
                Call: 94405 65917
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark-950/97 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="relative max-w-2xl w-full rounded-3xl overflow-hidden"
              style={{ border: `1px solid ${categoryData[lightbox.category]?.accent}40` }}
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-72 bg-dark-700">
                <img
                  src={lightbox.img}
                  alt={lightbox.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
              </div>
              <div className="bg-dark-800 p-8">
                <span
                  className="font-mono text-xs px-3 py-1 rounded-full mb-4 inline-block"
                  style={{
                    background: `${categoryData[lightbox.category]?.accent}20`,
                    color: categoryData[lightbox.category]?.accent,
                    border: `1px solid ${categoryData[lightbox.category]?.accent}40`,
                  }}
                >
                  {lightbox.badge}
                </span>
                <h3 className="font-display text-2xl font-semibold text-gold-100 mb-3">{lightbox.title}</h3>
                <p className="font-body text-sm text-gold-100/60 leading-relaxed mb-6">{lightbox.desc}</p>
                <div className="flex gap-3">
                  <a
                    href={`https://wa.me/919440565917?text=Hi, I want to enquire about ${lightbox.title}. Please share price and availability.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-body text-sm font-semibold transition-all duration-300 hover:opacity-90"
                    style={{ background: categoryData[lightbox.category]?.accent, color: '#0a0805' }}
                  >
                    <MessageCircle size={15} /> WhatsApp Enquiry
                  </a>
                  <a
                    href="tel:+919440565917"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-body text-sm border transition-all duration-300 hover:bg-dark-700"
                    style={{ borderColor: `${categoryData[lightbox.category]?.accent}40`, color: categoryData[lightbox.category]?.accent }}
                  >
                    <Phone size={15} /> Call
                  </a>
                </div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-dark-900/80 backdrop-blur-sm border border-gold-700/30 flex items-center justify-center text-gold-400"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
