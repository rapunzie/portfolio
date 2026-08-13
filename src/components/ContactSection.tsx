import React, { useState } from 'react';
import { Linkedin, Github, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="pt-6 pb-12 sm:pt-8 sm:pb-16" id="contact">
      {/* Soft icy blue outer container panel matching the website theme */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-[#C9DCF2] bg-gradient-to-br from-[#E6F0FA] via-[#F1F6FC] to-[#DAE8F8] p-5 sm:p-8 lg:p-12 text-[#263B5C] shadow-[0_16px_50px_rgba(69,105,168,0.08)]">
        {/* Ambient icy blue radial glows */}
        <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#8FB5E8]/30 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -left-28 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-[#AFCFF5]/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#C8DCF5]/35 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-7 sm:gap-10 lg:gap-12 items-stretch">
          {/* LEFT SIDE: Get in touch panel */}
          <div className="lg:col-span-5 flex flex-col justify-between min-h-0 lg:min-h-[480px]">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-[#263B5C] leading-[1.1]">
                Get in <span className="font-medium text-[#4569A8]">touch.</span>
              </h2>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#526C96] leading-relaxed">
                Have a project or opportunity? I'd love to hear.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 border-t border-[#C7DAF0] flex items-center justify-center gap-3 sm:gap-4">
              {/* Email */}
              <a
                href="mailto:lovely.deesya@gmail.com"
                aria-label="Send Email"
                className="
                  w-10
                  h-10
                  sm:w-11
                  sm:h-11
                  rounded-full
                  bg-white/90
                  backdrop-blur-md
                  border
                  border-[#CBDDF2]
                  text-[#3B5D98]
                  shadow-xs
                  hover:bg-gradient-to-br
                  hover:from-[#8FB5E8]
                  hover:to-[#3B5D98]
                  hover:border-transparent
                  hover:text-white
                  hover:shadow-[0_6px_18px_rgba(59,93,152,0.25)]
                  hover:-translate-y-0.5
                  active:scale-90
                  active:translate-y-0
                  transition-all
                  duration-300
                  ease-out
                  flex
                  items-center
                  justify-center
                  group
                  cursor-pointer
                "
              >
                <span
                  className="w-4 h-4 bg-[#3B5D98] group-hover:bg-white transition-colors duration-200 inline-block"
                  style={{
                    maskImage: `url('https://img.icons8.com/?size=100&id=qyRpAggnV0zH&format=png&color=000000')`,
                    WebkitMaskImage: `url('https://img.icons8.com/?size=100&id=qyRpAggnV0zH&format=png&color=000000')`,
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                  }}
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/deesyalovely"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="
                  w-10
                  h-10
                  sm:w-11
                  sm:h-11
                  rounded-full
                  bg-white/90
                  backdrop-blur-md
                  border
                  border-[#CBDDF2]
                  text-[#3B5D98]
                  shadow-xs
                  hover:bg-gradient-to-br
                  hover:from-[#8FB5E8]
                  hover:to-[#3B5D98]
                  hover:border-transparent
                  hover:text-white
                  hover:shadow-[0_6px_18px_rgba(59,93,152,0.25)]
                  hover:-translate-y-0.5
                  active:scale-90
                  active:translate-y-0
                  transition-all
                  duration-300
                  ease-out
                  flex
                  items-center
                  justify-center
                  group
                  cursor-pointer
                "
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/rapunzie"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="
                  w-10
                  h-10
                  sm:w-11
                  sm:h-11
                  rounded-full
                  bg-white/90
                  backdrop-blur-md
                  border
                  border-[#CBDDF2]
                  text-[#3B5D98]
                  shadow-xs
                  hover:bg-gradient-to-br
                  hover:from-[#8FB5E8]
                  hover:to-[#3B5D98]
                  hover:border-transparent
                  hover:text-white
                  hover:shadow-[0_6px_18px_rgba(59,93,152,0.25)]
                  hover:-translate-y-0.5
                  active:scale-90
                  active:translate-y-0
                  transition-all
                  duration-300
                  ease-out
                  flex
                  items-center
                  justify-center
                  group
                  cursor-pointer
                "
              >
                <Github className="w-4 h-4" />
              </a>

              {/* Medium */}
              <a
                href="https://medium.com/@deesya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium Profile"
                className="
                  w-10
                  h-10
                  sm:w-11
                  sm:h-11
                  rounded-full
                  bg-white/90
                  backdrop-blur-md
                  border
                  border-[#CBDDF2]
                  text-[#3B5D98]
                  shadow-xs
                  hover:bg-gradient-to-br
                  hover:from-[#8FB5E8]
                  hover:to-[#3B5D98]
                  hover:border-transparent
                  hover:text-white
                  hover:shadow-[0_6px_18px_rgba(59,93,152,0.25)]
                  hover:-translate-y-0.5
                  active:scale-90
                  active:translate-y-0
                  transition-all
                  duration-300
                  ease-out
                  flex
                  items-center
                  justify-center
                  group
                  cursor-pointer
                "
              >
                <span
                  className="w-4 h-4 bg-[#3B5D98] group-hover:bg-white transition-colors duration-200 inline-block"
                  style={{
                    maskImage: `url('https://img.icons8.com/?size=100&id=wYiGNIiB4OKj&format=png&color=000000')`,
                    WebkitMaskImage: `url('https://img.icons8.com/?size=100&id=wYiGNIiB4OKj&format=png&color=000000')`,
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                  }}
                />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Glassmorphism Message Form Card */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-xl p-5 sm:p-8 rounded-2xl sm:rounded-[24px] border border-white/90 shadow-[0_12px_36px_rgba(69,105,168,0.08)] relative">
            <div className="mb-5 sm:mb-7">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-[#263B5C]">
                Send Me a <span className="font-medium text-[#4569A8]">Message</span>
              </h3>
            </div>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-5"
            >
              {/* Web3Forms Access Key Placeholder */}
              <input
                type="hidden"
                name="access_key"
                value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
              />

              <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[10px] font-medium text-[#526C96] mb-1.5 sm:mb-2 uppercase tracking-[0.12em] font-mono"
                  >
                    Your Name <span className="text-[#4569A8]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 sm:h-12 px-3.5 sm:px-4 text-xs sm:text-sm bg-white/70 backdrop-blur-sm border border-[#D4E1F2] rounded-xl text-[#263B5C] placeholder:text-[#94A7C5] focus:outline-none focus:bg-white focus:border-[#5B7FC4] focus:ring-4 focus:ring-[#5B7FC4]/15 transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[10px] font-medium text-[#526C96] mb-1.5 sm:mb-2 uppercase tracking-[0.12em] font-mono"
                  >
                    Email Address <span className="text-[#4569A8]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 sm:h-12 px-3.5 sm:px-4 text-xs sm:text-sm bg-white/70 backdrop-blur-sm border border-[#D4E1F2] rounded-xl text-[#263B5C] placeholder:text-[#94A7C5] focus:outline-none focus:bg-white focus:border-[#5B7FC4] focus:ring-4 focus:ring-[#5B7FC4]/15 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-[10px] font-medium text-[#526C96] mb-1.5 sm:mb-2 uppercase tracking-[0.12em] font-mono"
                >
                  Subject <span className="text-[#4569A8]">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full h-11 sm:h-12 px-3.5 sm:px-4 text-xs sm:text-sm bg-white/70 backdrop-blur-sm border border-[#D4E1F2] rounded-xl text-[#263B5C] placeholder:text-[#94A7C5] focus:outline-none focus:bg-white focus:border-[#5B7FC4] focus:ring-4 focus:ring-[#5B7FC4]/15 transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[10px] font-medium text-[#526C96] mb-1.5 sm:mb-2 uppercase tracking-[0.12em] font-mono"
                >
                  Message <span className="text-[#4569A8]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={3}
                  placeholder="Write something..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[105px] sm:min-h-[132px] px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm bg-white/70 backdrop-blur-sm border border-[#D4E1F2] rounded-xl text-[#263B5C] placeholder:text-[#94A7C5] focus:outline-none focus:bg-white focus:border-[#5B7FC4] focus:ring-4 focus:ring-[#5B7FC4]/15 transition-all duration-200 resize-none"
                />
              </div>

              {/* Status Notifications */}
              {status === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-50/80 backdrop-blur-sm border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Message sent successfully.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-rose-50/80 backdrop-blur-sm border border-rose-200 text-rose-800 text-xs font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#4569A8] via-[#5B7FC4] to-[#6F92D6] text-white font-medium text-sm shadow-md shadow-[#4569A8]/20 hover:shadow-lg hover:shadow-[#4569A8]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                {status !== 'submitting' && (
                  <Send className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}