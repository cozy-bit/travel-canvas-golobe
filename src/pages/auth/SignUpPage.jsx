import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import signupSideImg from '../../assets/images/auth/signup-side.png';
import { UserCheck, Mail, Lock, User, Phone } from 'lucide-react';

export default function SignUpPage() {
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
              Экран регистрации (Sign Up Flow) — React + Tailwind v4.
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
          
          {/* Left: Sign up Form */}
          <div className="max-w-md w-full mx-auto space-y-5">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#112211]">Sign up</h1>
              <p className="text-sm text-gray-600 mt-2">
                Let's get you all set up so you can access your personal account.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="First Name"
                  placeholder="John"
                  icon={<User className="w-4 h-4" />}
                />
                <Input
                  label="Last Name"
                  placeholder="Doe"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Email"
                  type="email"
                  placeholder="john.doe@gmail.com"
                  icon={<Mail className="w-4 h-4" />}
                />
                <Input
                  label="Phone Number"
                  placeholder="+992 90 000 0000"
                  icon={<Phone className="w-4 h-4" />}
                />
              </div>

              <Input
                label="Password"
                type="password"
                placeholder="••••••••••••"
                icon={<Lock className="w-4 h-4" />}
              />

              <Input
                label="Confirm Password"
                type="password"
                placeholder="••••••••••••"
                icon={<Lock className="w-4 h-4" />}
              />

              <div className="flex items-start gap-2 pt-1">
                <input type="checkbox" className="mt-1 rounded-xs text-[#8DD3BB] accent-[#8DD3BB]" id="agree" />
                <label htmlFor="agree" className="text-xs text-gray-600 cursor-pointer">
                  I agree to all the <a href="#" className="text-[#FF8682] underline font-semibold">Terms</a> and <a href="#" className="text-[#FF8682] underline font-semibold">Privacy Policies</a>
                </label>
              </div>

              <Button variant="primary" size="lg" className="w-full rounded-lg mt-2">
                Create account
              </Button>
            </form>

            <div className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-[#FF8682] font-bold hover:underline">
                Login
              </Link>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="hidden lg:block">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 max-h-[640px]">
              <img
                src={signupSideImg}
                alt="Golobe Travel Sign Up"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
