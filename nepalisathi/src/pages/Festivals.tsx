import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Sparkles, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { festivals, type Festival } from '../data/festivals';

function FestivalCard({ festival }: { festival: Festival }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
    >
      <div className="rounded-xl bg-card border border-border overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative h-48 overflow-hidden">
          <img
            src={festival.image}
            alt={festival.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <Badge variant="secondary" size="sm" className={festival.color}>
              {festival.duration}
            </Badge>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <h3 className="text-lg font-semibold text-text-primary">{festival.name}</h3>
              <p className="text-sm text-text-secondary">{festival.alternateName}</p>
            </div>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-3">
            {festival.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-text-secondary mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {festival.date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {festival.locations[0]}
            </span>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-700 transition-colors"
          >
            {open ? 'Show less' : 'Learn more'}
            {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-border space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-1">Significance</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {festival.significance}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-2">Traditions</h4>
                    <ul className="space-y-1.5">
                      {festival.traditions.map((tradition) => (
                        <li key={tradition} className="flex items-start gap-2 text-sm text-text-secondary">
                          <Sparkles className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                          {tradition}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-1">Celebrated In</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {festival.locations.map((loc) => (
                        <Badge key={loc} variant="default" size="sm">
                          {loc}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function Festivals() {
  const [search, setSearch] = useState('');

  const filtered = festivals.filter(
    (f) =>
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.description.toLowerCase().includes(search.toLowerCase()) ||
      f.locations.some((l) => l.toLowerCase().includes(search.toLowerCase())),
  );

  return (
    <div>
      <section className="relative h-[40vh] min-h-[280px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1637168312579-cf3082117709?w=1200&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <Badge variant="primary" size="md" className="mb-3">
              Culture
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
              Festivals of Nepal
            </h1>
            <p className="mt-2 text-white/80 max-w-lg mx-auto text-sm sm:text-base">
              Discover the vibrant festivals that bring Nepal&apos;s rich cultural
              heritage to life.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="max-w-md mb-10"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input
                type="text"
                placeholder="Search festivals..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-border bg-card text-sm text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((festival) => (
              <FestivalCard key={festival.id} festival={festival} />
            ))}
          </div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Sparkles className="w-10 h-10 text-text-secondary mx-auto mb-3" />
              <p className="text-text-secondary">No festivals match your search.</p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-16 p-6 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-100 text-center"
          >
            <h2 className="text-xl font-semibold font-serif text-text-primary mb-2">
              Plan Your Visit Around a Festival
            </h2>
            <p className="text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
              Experiencing a Nepali festival is unforgettable. Check the dates and
              plan your heritage journey to coincide with these vibrant celebrations.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
