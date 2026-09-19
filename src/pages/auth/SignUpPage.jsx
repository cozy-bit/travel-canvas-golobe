import React from 'react';
import Layout from '../../components/layout/Layout';

export default function SignUpPage() {
  return (
    <Layout showNewsletter={false}>
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#112211] mb-3">
          Страница регистрации (Sign Up)
        </h1>
        <p className="text-base sm:text-lg text-gray-500 font-medium">
          Это страница Кибриё
        </p>
      </div>
    </Layout>
  );
}
