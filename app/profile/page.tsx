import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile – Tarun Pareek | Tarun Spot',
  description: 'Meet Tarun Pareek — the creator behind Tarun Spot. Tech enthusiast, content creator, and honest product reviewer.',
};

const socialLinks = [
  {
    name: 'Instagram',
    handle: '@tarun_spot',
    href: 'https://www.instagram.com/tarun_spot',
    color: 'bg-pink-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '@TarunSpot',
    href: 'https://www.youtube.com/@TarunSpot',
    color: 'bg-red-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Gaming YT',
    handle: '@Tarun_Playz',
    href: 'https://www.youtube.com/@Tarun_Playz',
    color: 'bg-violet-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    handle: 'Join Channel',
    href: 'https://whatsapp.com/channel/0029VacXXH6Ae5VyWaSOdj0G',
    color: 'bg-green-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: 'Website',
    handle: 'tarunspot.shop',
    href: 'https://www.tarunspot.shop',
    color: 'bg-purple-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
];

const stats = [
  { label: 'YouTube Subscribers', value: 'Growing', icon: '▶️' },
  { label: 'Instagram Followers', value: 'Growing', icon: '📸' },
  { label: 'Products Reviewed', value: '50+', icon: '📦' },
  { label: 'Content Created', value: '100+', icon: '🎬' },
];

const niche = [
  { icon: '💻', label: 'Tech & Gadgets' },
  { icon: '🎮', label: 'Gaming' },
  { icon: '🛍️', label: 'Lifestyle Deals' },
  { icon: '📱', label: 'Smartphones' },
];

export default function Profile() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* ── Profile Card ── */}
        <div className="rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden mb-8">
          {/* Cover Banner */}
          <div className="h-36 sm:h-44 w-full bg-purple-600"></div>

          {/* Avatar + Info */}
          <div className="px-6 sm:px-8 pb-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-12 mb-6">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-2xl bg-purple-600 border-4 border-white shadow-lg flex items-center justify-center text-white text-3xl font-extrabold shrink-0">
                TP
              </div>
              {/* Follow / Contact */}
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/tarun_spot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors text-sm"
                >
                  Follow
                </a>
                <a
                  href="https://www.tarunspot.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                >
                  Website
                </a>
              </div>
            </div>

            {/* Name & Details */}
            <div className="space-y-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Tarun Pareek</h1>
                <p className="text-purple-600 font-semibold text-sm mt-0.5">@tarun_spot</p>
              </div>

              <p className="text-gray-600 max-w-xl leading-relaxed">
                Content creator &amp; product reviewer passionate about tech, gadgets, and gaming. Helping people make smarter buying decisions through honest reviews and real recommendations.
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  India
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  tarunspot.shop
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Since 2024
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* ── Left Column ── */}
          <div className="lg:col-span-1 space-y-6">

            {/* Niche / Topics */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
              <h2 className="text-base font-bold text-gray-900 mb-4">Content Niche</h2>
              <div className="flex flex-wrap gap-2">
                {niche.map((n) => (
                  <span
                    key={n.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 text-sm font-medium rounded-full border border-purple-100"
                  >
                    {n.icon} {n.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
              <h2 className="text-base font-bold text-gray-900 mb-4">Connect With Me</h2>
              <div className="space-y-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className={`w-9 h-9 ${s.color} rounded-lg flex items-center justify-center text-white shrink-0`}>
                      {s.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900">{s.name}</p>
                      <p className="text-xs text-purple-600 group-hover:underline truncate">{s.handle}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-purple-500 ml-auto shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <p className="text-2xl font-extrabold text-purple-600">{s.value}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* About / Mission */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
              <h2 className="text-base font-bold text-gray-900 mb-3">About Me</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Hi, I&apos;m <strong className="text-gray-900">Tarun Pareek</strong> — the creator behind <strong className="text-purple-600">Tarun Spot</strong>. I actively explore the latest products, trends, and real user needs to bring you the most honest and useful recommendations online.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mt-3">
                My goal is simple — help you make <strong className="text-gray-900">smarter buying decisions</strong> without wasting time or money. No fake reviews, no unnecessary hype, just real value.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-3">
                <a
                  href="/about"
                  className="text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                >
                  Read Full Story →
                </a>
              </div>
            </div>

            {/* What I Do */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
              <h2 className="text-base font-bold text-gray-900 mb-4">What I Create</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: '📹', title: 'Product Reviews', desc: 'Honest, in-depth reviews on YouTube' },
                  { icon: '🎮', title: 'Gaming Content', desc: 'Gameplay & gaming gear on @Tarun_Playz' },
                  { icon: '💡', title: 'Buying Guides', desc: 'Smart guides to save your time & money' },
                  { icon: '🏷️', title: 'Best Deals', desc: 'Latest offers shared on WhatsApp & Instagram' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 items-start p-3 rounded-xl bg-gray-50">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="rounded-2xl p-6 bg-purple-600 text-white text-center"
            >
              <p className="font-bold text-lg mb-1">Smart Choices. Better Deals. Real Value.</p>
              <p className="text-purple-200 text-sm mb-4">Explore the latest product recommendations from Tarun Spot.</p>
              <a
                href="/"
                className="inline-block px-6 py-2.5 bg-white text-purple-700 font-bold rounded-lg hover:bg-purple-50 transition-colors text-sm"
              >
                Browse Products →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
