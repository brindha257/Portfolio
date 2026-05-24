import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Backend integration ready)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16 px-6 bg-slate-600" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-slate-600">Get in Touch</h3>
            <div className="space-y-3 text-gray-600">
              <p>📞 9342313921</p>
              <p>📧 brindhakamaraj2006@gmail.com</p>
              <p>📍 Veppampattu, Thiruvallur</p>
              <p>🔗 <a href="https://github.com/brindha257" className="text-slate-900 hover:underline" target="_blank" rel="noopener noreferrer">github.com/brindha257</a></p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
            <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required></textarea>
            <button type="submit" className="w-full bg-slate-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact