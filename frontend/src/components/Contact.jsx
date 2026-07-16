import React from 'react';

const Contact = () => {
  const contactItems = [
    { icon: '📞', label: 'Phone', value: '9342313921', href: 'tel:9342313921' },
    { icon: '📧', label: 'Email', value: 'brindhakamaraj2006@gmail.com', href: 'mailto:brindhakamaraj2006@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Chennai', href: null },
    { icon: '🔗', label: 'GitHub', value: 'github.com/brindha257', href: 'https://github.com/brindha257' }
  ];

  return (
    <section className="py-16 px-6 bg-slate-600" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-slate-700 border-b border-gray-200 pb-4">
              Get in Touch
            </h3>
            <div className="space-y-5">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-purple-100 rounded-full text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                      {item.label}
                    </p>
                                      
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-slate-700 font-medium hover:text-purple-700 hover:underline transition"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-700 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
