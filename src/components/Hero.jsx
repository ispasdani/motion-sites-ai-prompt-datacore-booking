export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-32 px-6 flex-1">

        {/* Tagline Pill */}
        <div
          className="flex items-center gap-2 px-2 py-1 rounded-[10px] h-[38px] mb-8"
          style={{
            background: 'rgba(85, 80, 110, 0.4)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(164, 132, 215, 0.5)',
          }}
        >
          <span
            className="px-2 py-0.5 text-white rounded-[6px] text-[12px] leading-none"
            style={{ background: '#7b39fc', fontFamily: 'Cabin, sans-serif', fontWeight: 500 }}
          >
            New
          </span>
          <span
            className="text-white pr-1"
            style={{ fontFamily: 'Cabin, sans-serif', fontWeight: 500, fontSize: '14px' }}
          >
            Say Hello to Datacore v3.2
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-white max-w-[820px]"
          style={{
            fontFamily: 'Instrument Serif, serif',
            fontSize: 'clamp(2.75rem, 7vw, 96px)',
            lineHeight: 1.1,
            fontWeight: 400,
          }}
        >
          Book your perfect stay instantly{' '}
          <em
            style={{
              fontStyle: 'italic',
              letterSpacing: '0.01em',
            }}
          >
            and
          </em>{' '}
          hassle-free
        </h1>

        {/* Subtext */}
        <p
          className="text-white/70 mt-6 max-w-[662px]"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: 1.6 }}
        >
          Discover handpicked hotels, resorts, and stays across your favorite destinations. Enjoy
          exclusive deals, fast booking, and 24/7 support.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <button
            className="px-7 py-3.5 rounded-[10px] text-white cursor-pointer transition-colors duration-150"
            style={{
              background: '#7b39fc',
              fontFamily: 'Cabin, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#8f52fd')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#7b39fc')}
          >
            Book a Free Demo
          </button>
          <button
            className="px-7 py-3.5 rounded-[10px] cursor-pointer transition-colors duration-150"
            style={{
              background: '#2b2344',
              color: '#f6f7f9',
              fontFamily: 'Cabin, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#352c54')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#2b2344')}
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  )
}
