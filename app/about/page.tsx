export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Hero Section */}
        <div className="mb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Our Story</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
            We're passionate about connecting you with the best products and trusted recommendations. Our mission is to make shopping easier, more transparent, and more rewarding.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-2xl bg-white border border-gray-200 p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all">
            <div className="mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-green-600 rounded-2xl flex items-center justify-center text-2xl">
                🎯
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We believe everyone deserves access to quality products at fair prices. Our mission is to curate and deliver the best affiliate offerings that genuinely make a difference in your life.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all">
            <div className="mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-green-600 rounded-2xl flex items-center justify-center text-2xl">
                ✨
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become your trusted platform for discovering premium products and building a community of satisfied customers who value transparency and quality recommendations.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🤝', title: 'Trust', desc: 'Transparency and honest recommendations above all' },
              { icon: '🚀', title: 'Innovation', desc: 'Always seeking the latest and greatest products' },
              { icon: '💎', title: 'Quality', desc: 'Only partnering with brands we truly believe in' },
            ].map((value, i) => (
              <div key={i} className="rounded-xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            { number: '10K+', label: 'Happy Customers' },
            { number: '500+', label: 'Products Listed' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '24/7', label: 'Customer Support' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent mb-3">
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl bg-gradient-to-r from-teal-50 to-green-50 border border-teal-200 p-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Shopping?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Explore our carefully curated collection of premium products and find exactly what you're looking for.
          </p>
          <a href="/" className="inline-block bg-gradient-to-r from-teal-600 to-green-600 text-white px-10 py-3 rounded-xl hover:shadow-lg transition-all font-semibold hover:scale-105">
            Browse All Products
          </a>
        </div>
      </div>
    </div>
  );
}
