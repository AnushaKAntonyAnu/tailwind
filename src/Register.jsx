import React from 'react';

function Register() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* 30 spiral-like SVG waves, darker color */}
      <svg className="absolute left-0 top-[55%] -translate-y-1/2 w-full h-[80vh] z-0" viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[...Array(30)].map((_, i) => (
          <path
            key={i}
            d={`M0 ${400 - i*6} C${360 + i*10} ${420 - i*10},${1080 - i*10} ${420 - i*10},1440 ${400 - i*6}`}
            stroke="#2563eb" // darker blue
            strokeWidth="2"
            fill="none"
            opacity={0.22 - i*0.006}
          />
        ))}
      </svg>
      {/* Header */}
      <header className="w-full flex items-center justify-between px-8 py-3 bg-white/80 shadow-sm z-10 relative">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 rounded-full p-2 flex items-center justify-center" style={{ width: 40, height: 40 }}>
            {/* Calendar icon without black circle */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="7" width="14" height="12" rx="2" fill="white" />
              <rect x="7" y="3" width="2" height="4" rx="1" fill="white" />
              <rect x="15" y="3" width="2" height="4" rx="1" fill="white" />
              <rect x="7" y="11" width="2" height="2" rx="1" fill="#3b82f6" />
              <rect x="11" y="11" width="2" height="2" rx="1" fill="#3b82f6" />
              <rect x="15" y="11" width="2" height="2" rx="1" fill="#3b82f6" />
            </svg>
          </div>
          <span className="font-bold text-2xl text-gray-800">Listify</span>
        </div>
        <nav className="flex gap-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-500">About us</a>
          <a href="#contacts" className="hover:text-blue-500">Contacts</a>
        </nav>
      </header>
      {/* Register Card */}
      <main className="flex items-center justify-center min-h-[80vh] z-10 relative">
        <div className="bg-white/40 rounded-3xl shadow-2xl p-10 w-full max-w-lg mt-10 backdrop-blur-lg">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">Register</h2>
          <p className="text-center text-gray-600 text-sm mb-6">Welcome! Sign in using your social account or email to continue us</p>
          {/* Social icons - official glyphs, no extra border/circle */}
          <div className="flex justify-center gap-8 mb-6">
            {/* Facebook */}
            <button className="bg-white rounded-full p-2 shadow hover:shadow-md transition flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29 16C29 8.82 23.18 3 16 3S3 8.82 3 16c0 6.63 5.12 12.09 11.62 12.91v-9.13h-3.5v-3.78h3.5v-2.88c0-3.46 2.06-5.36 5.22-5.36 1.51 0 3.09.27 3.09.27v3.4h-1.74c-1.71 0-2.25 1.06-2.25 2.15v2.42h3.83l-.61 3.78h-3.22v9.13C23.88 28.09 29 22.63 29 16z" fill="#1877F3"/>
                <path d="M20.44 19.78l.61-3.78h-3.83v-2.42c0-1.09.54-2.15 2.25-2.15h1.74v-3.4s-1.58-.27-3.09-.27c-3.16 0-5.22 1.9-5.22 5.36v2.88h-3.5v3.78h3.5v9.13c.7.09 1.41.14 2.13.14s1.43-.05 2.13-.14v-9.13h3.22z" fill="#fff"/>
              </svg>
            </button>
            {/* Google */}
            <button className="bg-white rounded-full p-2 shadow hover:shadow-md transition flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill="#4285F4" d="M43.6 20.5H42V20.5H24V27.5H35.1C33.7 31.1 30.1 33.5 24 33.5C17.4 33.5 12 28.1 12 21.5C12 14.9 17.4 9.5 24 9.5C27.1 9.5 29.7 10.6 31.7 12.4L36.3 8C32.7 4.7 28.1 2.5 24 2.5C13.5 2.5 5 11 5 21.5C5 32 13.5 40.5 24 40.5C34.5 40.5 43 32 43 21.5C43 20.3 43.1 19.4 43.3 18.5H24V20.5H43.6Z"/>
                  <path fill="#34A853" d="M24 40.5C30.1 40.5 35.7 37.7 39.1 33.2L32.2 27.5C30.5 29.1 27.7 30.5 24 30.5C20.3 30.5 17.5 29.1 15.8 27.5L8.9 33.2C12.3 37.7 17.9 40.5 24 40.5Z"/>
                  <path fill="#FBBC05" d="M39.1 33.2C41.5 30.2 43 26.1 43 21.5H24V27.5H35.1C34.5 29.1 33.7 30.5 32.2 32.2L39.1 33.2Z"/>
                  <path fill="#EA4335" d="M8.9 33.2L15.8 27.5C14.5 25.9 13.7 23.8 13.7 21.5C13.7 19.2 14.5 17.1 15.8 15.5L8.9 9.8C6.5 13.1 5 17.2 5 21.5C5 25.8 6.5 29.9 8.9 33.2Z"/>
                </g>
              </svg>
            </button>
            {/* Apple (official glyph, no border/circle, larger, dark) */}
            <button className="bg-white rounded-full p-2 shadow hover:shadow-md transition flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.7 15.6c-.1-2.1 1.7-3.1 1.8-3.2-1-1.5-2.6-1.7-3.1-1.7-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.8-2.7-.8-1.4 0-2.7.8-3.4 2.1-1.4 2.4-.4 5.9 1 7.8.7.9 1.5 1.9 2.6 1.9 1 0 1.3-.6 2.6-.6s1.6.6 2.6.6c1.1 0 1.8-.9 2.5-1.8.7-1 1-2 1-2-.1 0-2.6-1-2.7-3.9zm-3.1-7.2c.6-.7 1-1.7.9-2.7-.9.1-2 .6-2.6 1.3-.6.7-1.1 1.6-.9 2.6 1 .1 2-.5 2.6-1.2z" fill="#222"/>
              </svg>
            </button>
          </div>
          {/* Form */}
          <form className="space-y-5 flex flex-col items-center">
            <div className="w-80">
              <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-white bg-opacity-80 rounded-xl outline-none placeholder-gray-500 text-gray-800 border-b-2 border-black focus:border-blue-500 transition" />
            </div>
            <div className="w-80">
              <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-white bg-opacity-80 rounded-xl outline-none placeholder-gray-500 text-gray-800 border-b-2 border-black focus:border-blue-500 transition" />
            </div>
            <div className="w-80">
              <input type="password" placeholder="Password" className="w-full px-4 py-2 bg-white bg-opacity-80 rounded-xl outline-none placeholder-gray-500 text-gray-800 border-b-2 border-black focus:border-blue-500 transition" />
            </div>
            <button type="submit" className="w-60 bg-white shadow-md py-2 rounded-xl text-lg font-semibold text-gray-800 hover:bg-gray-100 transition mt-2">Register</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Register;
