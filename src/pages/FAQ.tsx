
import React from 'react';
import Layout from '../components/Layout';
import { faqs } from '../data/mockData';

// Страница "Часто задаваемые вопросы"
const FAQ = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Часто задаваемые вопросы</h1>
        
        <div className="bg-gameverse-light p-6 rounded-lg">
          <div className="space-y-6">
            {faqs.map(faq => (
              <div key={faq.id} className="border-b border-gameverse-darker pb-6 last:border-b-0">
                <h2 className="text-xl font-bold text-gameverse-red mb-3">{faq.question}</h2>
                <p className="text-gray-200">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
