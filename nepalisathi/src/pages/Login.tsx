import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

interface FieldErrors {
  email?: string;
  password?: string;
}

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { addToast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const validateForm = (): boolean => {
    const errors: FieldErrors = {};

    if (!form.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!form.password) {
      errors.password = 'Password is required.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    let result: { success: boolean; error?: string };
    try {
      result = await login(form.email.trim(), form.password);
    } catch {
      setLoading(false);
      addToast('error', 'Something went wrong. Please try again.');
      return;
    }
    setLoading(false);
    if (result.success) {
      addToast('success', 'Welcome back!');
      navigate('/dashboard');
    } else {
      const errMsg = typeof result.error === 'string' ? result.error : 'Invalid email or password.';
      addToast('error', errMsg);
    }
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] flex">
      <div className="hidden lg:flex relative w-1/2 items-end overflow-hidden bg-gradient-to-br from-primary-900 to-primary-800">
        <img
          src="https://images.unsplash.com/photo-1586374579358-17d3912ee5fa?w=1200&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative p-10 lg:p-12 max-w-md">
          <div className="w-10 h-10 rounded-xl bg-secondary/20 backdrop-blur-sm flex items-center justify-center mb-4">
            <MapPin className="w-5 h-5 text-secondary" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-white leading-tight">
            Welcome Back to Nepal
          </h2>
          <p className="mt-2 text-white/70 text-sm leading-relaxed">
            Continue your heritage journey. Collect stamps, discover stories,
            and explore the cultural treasures of Nepal.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <img src="/logo.svg" alt="Nepali Sathi" className="h-7 w-auto" />
              <span className="text-lg font-semibold text-text-primary">Nepali Sathi</span>
            </Link>
            <h1 className="text-2xl font-bold text-text-primary">Welcome back</h1>
            <p className="mt-1 text-sm text-text-secondary">
              Sign in to continue your heritage journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
                if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }));
              }}
              error={fieldErrors.email}
              required
            />

            <div className="relative">
              <Input
                id="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                  if (fieldErrors.password) setFieldErrors((prev) => ({ ...prev, password: undefined }));
                }}
                error={fieldErrors.password}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-text-secondary hover:text-text-primary transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <Button type="submit" className="w-full" loading={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-text-secondary">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="text-primary font-medium hover:text-primary-700 transition-colors">
              Create one
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}