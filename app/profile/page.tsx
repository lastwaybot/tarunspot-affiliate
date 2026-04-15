'use client';

import { useState } from 'react';

export default function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Product enthusiast and smart shopper',
    joinDate: 'January 2026',
  });

  const [orders] = useState([
    { id: 1, product: 'Premium Headphones', date: '2026-04-10', status: 'Delivered', price: '$89.99' },
    { id: 2, product: 'Wireless Mouse', date: '2026-04-05', status: 'Delivered', price: '$34.99' },
    { id: 3, product: 'USB-C Cable', date: '2026-03-28', status: 'Delivered', price: '$12.99' },
  ]);

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Profile Header */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-3">
            My <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Profile</span>
          </h1>
          <p className="text-gray-600 text-lg">Welcome back! Here's your account overview.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm sticky top-24">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-600 to-green-600 rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-white">
                  JD
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{user.name}</h2>
                <p className="text-gray-600 mb-4">{user.email}</p>
                <p className="text-gray-600 text-sm mb-6">{user.bio}</p>
                <div className="w-full border-t border-gray-200 pt-6 mb-6 text-left">
                  <p className="text-gray-500 text-sm mb-1">Member Since</p>
                  <p className="text-teal-600 font-semibold">{user.joinDate}</p>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
                >
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Total Orders', value: '12' },
                { label: 'Total Spent', value: '$1,234.56' },
                { label: 'Loyalty Points', value: '5,280' },
                { label: 'Referrals', value: '8' },
              ].map((stat, i) => (
                <div key={i} className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all">
                  <p className="text-gray-600 text-sm mb-2 font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Recent Orders */}
            <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Orders</h3>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-teal-200 transition-all"
                  >
                    <div className="flex-1">
                      <h4 className="text-gray-900 font-semibold mb-1">{order.product}</h4>
                      <p className="text-gray-500 text-sm">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-teal-600 font-semibold mb-1">{order.price}</p>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#" className="inline-block mt-6 text-teal-600 hover:text-teal-700 font-semibold transition-colors">
                View All Orders →
              </a>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '❤️', title: 'Wishlist', desc: '5 items' },
                { icon: '🎁', title: 'Referrals', desc: 'Earn rewards' },
                { icon: '⚙️', title: 'Settings', desc: 'Preferences' },
                { icon: '📞', title: 'Support', desc: 'Get help' },
              ].map((action, i) => (
                <button
                  key={i}
                  className="rounded-lg bg-white border border-gray-200 p-5 hover:border-teal-200 hover:shadow-md transition-all text-left"
                >
                  <div className="text-2xl mb-2">{action.icon}</div>
                  <h4 className="text-gray-900 font-semibold text-sm">{action.title}</h4>
                  <p className="text-gray-500 text-xs">{action.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
