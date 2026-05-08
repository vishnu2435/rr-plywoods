import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle, Heart } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const products = [
  'Plywood', 'Toughened Glass', 'Hardware', 'Power Tools',
  'Flush Doors', 'Pipes & Fittings', 'Laminates', 'Plywood Wholesale',
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-gold-800/20">
      <div className="container-custom px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="font-display text-2xl font-semibold gold-text">R R Glass</div>
              <div className="font-body text-xs text-gold-600/70 tracking-[0.3em] uppercase">& Plywoods</div>
            </div>
            <p className="font-body text-sm text-gold-100/40 leading-relaxed mb-5">
              Your trusted partner for premium building materials in Anantapur, Andhra Pradesh.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+919440565917"
                className="w-9 h-9 rounded-full border border-gold-700/30 flex items-center justify-center text-gold-600 hover:text-gold-400 hover:border-gold-600/60 transition-all duration-300"
              >
                <Phone size={14} />
              </a>
              <a
                href="https://wa.me/919440565917"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold-700/30 flex items-center justify-center text-gold-600 hover:text-gold-400 hover:border-gold-600/60 transition-all duration-300"
              >
                <MessageCircle size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold text-gold-300 tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-gold-100/40 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-body text-sm font-semibold text-gold-300 tracking-wider uppercase mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {products.map(p => (
                <li key={p}>
                  <span className="font-body text-sm text-gold-100/40">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm font-semibold text-gold-300 tracking-wider uppercase mb-5">
              Visit Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-gold-500 mt-0.5 shrink-0" />
                <p className="font-body text-sm text-gold-100/40 leading-relaxed">
                  Shop No 3, DCMS Building,<br />
                  Opp. Rithi Jewellery,<br />
                  R.F. Road, Anantapur – 515001<br />
                  Andhra Pradesh
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gold-500 shrink-0" />
                <a href="tel:+919440565917" className="font-body text-sm text-gold-400 hover:text-gold-300 transition-colors">
                  +91 94405 65917
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold-800/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-gold-100/25">
            © {new Date().getFullYear()} R R Glass & Plywoods. All rights reserved.
          </p>
          <p className="font-body text-xs text-gold-100/25 flex items-center gap-1">
            Built with <Heart size={10} className="text-gold-600 fill-gold-600" /> in Anantapur
          </p>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <motion.a
        href="https://wa.me/919440565917?text=Hi, I'd like to enquire about your products"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-900/50 hover:bg-green-400 transition-colors"
      >
        <MessageCircle size={26} className="text-white fill-white" />
      </motion.a>
    </footer>
  )
}
