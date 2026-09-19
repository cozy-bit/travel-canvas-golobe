import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import authSideImg from '../../assets/images/auth/auth-side.png';
import { UserCheck, Sparkles, Lock, Mail } from 'lucide-react';

export default function LoginPage() {
  return (
    <Layout showNewsletter={false}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Assignment notification */}
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900">
              Зона ответственности: Кибриё
            </span>
            <span className="text-sm text-amber-900">
              Экран входа (Login / Sign In Flow) — React + Tailwind v4.
            </span>
          </div>
          <a
            href="/team-guide.html"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-amber-900 underline hover:text-black"
          >
            Инструкция в Team Guide →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          
          {/* Left: Login Form */}
          <div className="max-w-md w-full mx-auto space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#112211]">Login</h1>
              <p className="text-sm text-gray-600 mt-2">
                Login to access your Golobe account
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <Input
                label="Email"
                type="email"
                placeholder="john.doe@gmail.com"
                icon={<Mail className="w-4 h-4" />}
                required
              />

              <Input
                label="Password"
                type="password"
                placeholder="••••••••••••"
                icon={<Lock className="w-4 h-4" />}
                required
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-xs font-medium text-gray-600 cursor-pointer">
                  <input type="checkbox" className="rounded-xs text-[#8DD3BB] accent-[#8DD3BB]" />
                  Remember me
                </label>
                <a href="#" className="text-xs font-semibold text-[#FF8682] hover:underline">
                  Forgot Password?
                </a>
              </div>

              <Button variant="primary" size="lg" className="w-full rounded-lg">
                Login
              </Button>
            </form>

            <div className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#FF8682] font-bold hover:underline">
                Sign up
              </Link>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="hidden lg:block">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 max-h-[580px]">
              <img
                src={authSideImg}
                alt="Golobe Travel Sign In"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
