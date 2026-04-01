import { useState } from 'react'

function FutureLogo() {
  return (
    <svg
      width="32"
      height="28"
      viewBox="0 0 32 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Datacore logo"
    >
      <path
        d="M1.04356 6.35771L13.6437 0.666504L26.2438 6.35771V13.3333L13.6437 19.0245L1.04356 13.3333V6.35771Z"
        fill="white"
      />
      <path
        d="M6.34375 14.6667L13.6437 18.0245L20.9437 14.6667V21.6423L13.6437 27.3335L6.34375 21.6423V14.6667Z"
        fill="white"
        fillOpacity="0.6"
      />
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5L7 9L11 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6H21M3 12H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const navLinks = [
  { label: 'Home', hasChevron: false },
  { label: 'Services', hasChevron: true },
  { label: 'Reviews', hasChevron: false },
  { label: 'Contact us', hasChevron: false },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-[120px] py-[16px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FutureLogo />
          <span
            className="text-white font-semibold text-[17px] tracking-tight"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Datacore
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="flex items-center gap-1 text-white opacity-90 hover:opacity-70 transition-opacity duration-150 cursor-pointer"
              style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: '14px' }}
            >
              {link.label}
              {link.hasChevron && <ChevronDown />}
            </button>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="px-4 py-2 bg-white border border-[#d4d4d4] rounded-[8px] text-[#171717] cursor-pointer hover:bg-gray-50 transition-colors duration-150"
            style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '14px' }}
          >
            Sign In
          </button>
          <button
            className="px-4 py-2 bg-[#7b39fc] rounded-[8px] text-[#fafafa] cursor-pointer shadow-md hover:bg-[#6a2eeb] transition-colors duration-150"
            style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '14px', boxShadow: '0 2px 12px rgba(123,57,252,0.35)' }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </nav>

      {/* Mobile Full-Screen Overlay Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-5 right-6 text-white cursor-pointer"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>

          {navLinks.map((link) => (
            <button
              key={link.label}
              className="flex items-center gap-2 text-white text-2xl hover:opacity-70 transition-opacity duration-150 cursor-pointer"
              style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 500 }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
              {link.hasChevron && <ChevronDown />}
            </button>
          ))}

          <div className="flex flex-col items-center gap-4 mt-4">
            <button
              className="px-8 py-3 bg-white border border-[#d4d4d4] rounded-[8px] text-[#171717] w-48 cursor-pointer"
              style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '15px' }}
            >
              Sign In
            </button>
            <button
              className="px-8 py-3 bg-[#7b39fc] rounded-[8px] text-[#fafafa] w-48 cursor-pointer"
              style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '15px' }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  )
}
