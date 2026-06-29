import { motion } from 'framer-motion';
import { MapPin, Shield, Users, BookOpen } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

const values = [
  {
    icon: Shield,
    title: 'Preserving Heritage',
    description:
      'We believe in responsible tourism that respects and preserves Nepal\'s cultural and natural heritage for generations to come.',
  },
  {
    icon: Users,
    title: 'Community First',
    description:
      'Every visit supports local communities — from heritage site guides to family-run homestays and artisan cooperatives.',
  },
  {
    icon: BookOpen,
    title: 'Stories That Matter',
    description:
      'We go beyond dates and facts. Our guides share the living traditions, rituals, and people that make each site extraordinary.',
  },
  {
    icon: MapPin,
    title: 'Built for Explorers',
    description:
      'Whether you\'re a solo backpacker or a family traveler, we design tools that make exploration intuitive and rewarding.',
  },
];

export default function About() {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[280px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=1200&q=80"
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
              About Us
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
              Your Local Friend for Exploring Nepal
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <p className="mt-3 text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Nepali Sathi was born from a simple idea — that the best way to
              experience Nepal is with a friend who knows the land, the stories,
              and the hidden corners that guidebooks miss. We are a team of
              travelers, historians, and designers who believe heritage tourism
              should be thoughtful, immersive, and accessible to everyone.
            </p>
          </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="p-6 rounded-xl bg-card border border-border h-full">
                <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}