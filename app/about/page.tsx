import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us – Tarun Spot | Smart Choices. Better Deals. Real Value.',
  description:
    'Learn about Tarun Spot — your trusted destination for honest product recommendations, smart buying guides, and the best deals across tech, gadgets, gaming, and lifestyle.',
};

const socialLinks = [
  {
    label: 'Instagram',
    handle: '@tarun_spot',
    href: 'https://www.instagram.com/tarun_spot',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    bg: 'from-pink-500 to-orange-400',
    glow: 'shadow-pink-500/30',
  },
  {
    label: 'Website',
    handle: 'tarunspot.shop',
    href: 'https://www.tarunspot.shop',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    bg: 'from-indigo-600 to-purple-600',
    glow: 'shadow-indigo-500/30',
  },
  {
    label: 'WhatsApp Channel',
    handle: 'Join Channel',
    href: 'https://whatsapp.com/channel/0029VacXXH6Ae5VyWaSOdj0G',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    bg: 'from-green-500 to-emerald-500',
    glow: 'shadow-green-500/30',
  },
  {
    label: 'YouTube – Main',
    handle: '@TarunSpot',
    href: 'https://www.youtube.com/@TarunSpot',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    bg: 'from-red-500 to-rose-500',
    glow: 'shadow-red-500/30',
  },
  {
    label: 'YouTube – Gaming',
    handle: '@Tarun_Playz',
    href: 'https://www.youtube.com/@Tarun_Playz',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z" />
      </svg>
    ),
    bg: 'from-violet-600 to-indigo-500',
    glow: 'shadow-violet-500/30',
  },
];

const promises = [
  { icon: '🚫', title: 'No Misleading Recs', desc: 'Every recommendation is vetted and honest — no fluff or filler.' },
  { icon: '📢', title: 'No Unnecessary Hype', desc: 'We cut through the noise and give you the real picture.' },
  { icon: '🔍', title: 'Honest & Useful Info', desc: 'Clear pros, cons, and comparisons you can actually act on.' },
  { icon: '🏆', title: 'User Benefit First', desc: 'Your interests always come before any commission opportunity.' },
];

const whatWeDo = [
  { icon: '💰', title: 'Value-for-Money Picks', desc: 'Handpicked products that give you the most bang for your buck.' },
  { icon: '⚖️', title: 'Real Pros & Cons', desc: 'Balanced, unbiased breakdowns — not just marketing copy.' },
  { icon: '⏱️', title: 'Time-Saving Guides', desc: 'Clear, simple guides so you never have to read 50 reviews again.' },
  { icon: '🏷️', title: 'Best Deals Online', desc: 'We surface the top offers before they disappear.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-20 sm:py-28">


        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-semibold text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Smart Choices. Better Deals. Real Value.
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            About{' '}
            <span className="text-purple-600">
              Tarun Spot
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Your trusted destination for discovering the best products, honest recommendations,
            and smart buying guides — helping you make better decisions without wasting time or money.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl p-10 sm:p-12 bg-purple-600 text-white">
          <div className="relative">
            <p className="uppercase tracking-widest text-purple-200 text-sm font-bold mb-4">Our Mission</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-snug">
              Help you make better buying decisions
            </h2>
            <p className="text-purple-100 text-lg max-w-3xl leading-relaxed">
              We understand how confusing it can be to choose the right product online. With so many options,
              fake reviews, and paid promotions, it&apos;s hard to know what actually works.{' '}
              <strong className="text-white">That&apos;s where we come in.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-12">
          <p className="uppercase tracking-widest text-indigo-600 text-sm font-bold mb-2">💡 What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            We research, compare &amp; recommend
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl">
            Across categories like tech, gadgets, gaming, and lifestyle — so you don&apos;t have to.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatWeDo.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-white border border-gray-100 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How We Earn ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-8 sm:p-10 flex gap-6 items-start">
          <div className="text-4xl shrink-0">🤝</div>
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">How We Earn</h2>
            <p className="text-gray-600 leading-relaxed">
              Some of the links on our website are <strong>affiliate links</strong>. This means if you purchase
              through those links, we may earn a small commission —{' '}
              <strong>at no extra cost to you</strong>. This helps us keep the website running and continue
              providing helpful content for free.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Promise ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-12">
          <p className="uppercase tracking-widest text-indigo-600 text-sm font-bold mb-2">🔍 Our Promise</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What we stand for</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {promises.map((p) => (
            <div
              key={p.title}
              className="flex gap-5 items-start rounded-2xl bg-white border border-gray-100 p-7 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div
                className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: 'linear-gradient(135deg, #eef2ff, #ede9fe)' }}
              >
                {p.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Trust Us ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-10 sm:p-14 text-center">
          <div className="text-5xl mb-5">🚀</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Why Trust Us?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Tarun Spot is built by someone who <strong>actively explores products, trends, and real user needs</strong>.
            Every recommendation is made with the intention to genuinely help — not just sell. No middlemen,
            no corporate agenda — just one creator committed to honest content.
          </p>
        </div>
      </section>

      {/* ── Connect With Us ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mb-12 text-center">
          <p className="uppercase tracking-widest text-indigo-600 text-sm font-bold mb-2">🌐 Connect With Us</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Stay updated</h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Follow us across our platforms for the latest content, deals, and recommendations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div
                className={`w-12 h-12 shrink-0 rounded-xl bg-purple-600 flex items-center justify-center text-white`}
              >
                {link.icon}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-base">{link.label}</p>
                <p className="text-sm text-purple-600 font-medium group-hover:underline">{link.handle}</p>
              </div>
              <svg
                className="w-5 h-5 text-gray-300 group-hover:text-purple-500 ml-auto transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-2xl p-12 sm:p-14 text-center bg-gray-900 text-white">
          <div className="relative">
            <p className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-4">
              Ready to explore?
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Browse Our Product Picks</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
              Discover our carefully curated selection and find the perfect product for you.
            </p>
            <a
              href="/"
              className="inline-block px-10 py-3.5 rounded-xl font-bold bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200"
            >
              Browse All Products →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
