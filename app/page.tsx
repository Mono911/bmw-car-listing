"use client"
import { useState, useEffect } from "react"

// FAQ interactive section
// FAQ interactive section
function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-slate-700/60">
      {faqs.map((faq, idx) => (
        <div key={idx} className="">
          <button
            className={`w-full flex items-center justify-between py-6 text-left transition-all duration-300 focus:outline-none group
              ${open === idx ? "text-fuchsia-400 font-semibold" : "text-slate-200 hover:text-fuchsia-300"}
            `}
            onClick={() => setOpen(open === idx ? null : idx)}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") setOpen(open === idx ? null : idx)
            }}
            aria-expanded={open === idx}
          >
            <span className="flex items-center text-lg md:text-xl">
              <svg
                className={`w-5 h-5 mr-3 transition-colors duration-300 ${
                  open === idx ? "text-fuchsia-400" : "text-fuchsia-300 group-hover:text-fuchsia-400"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {faq.question}
            </span>
            <svg
              className={`w-6 h-6 ml-2 transform transition-transform duration-300 ${
                open === idx
                  ? "rotate-180 text-fuchsia-400"
                  : "text-fuchsia-300 group-hover:text-fuchsia-400"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              open === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`pl-12 pr-4 pb-6 text-slate-300 text-base md:text-lg font-light text-left relative`}
            >
              <div
                className={`absolute left-6 top-0 h-1 w-32 rounded-full bg-fuchsia-400/70 transition-all duration-500 ${
                  open === idx ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
                style={{ transformOrigin: "left" }}
              ></div>
              <span className="block pt-4">{faq.answer}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

import dynamic from "next/dynamic";
const ParticlesBackground = dynamic(() => Promise.resolve(function ParticlesBackground() {
  // Precomputed random positions for hydration-safe background particles
  const PARTICLE_POSITIONS = [
    { left: "29.8%", top: "91.2%", delay: "0s", duration: "5.2s" },
    { left: "76.3%", top: "68.1%", delay: "0.5s", duration: "12.3s" },
    { left: "39.5%", top: "78.6%", delay: "1s", duration: "8.2s" },
    { left: "53.8%", top: "14.3%", delay: "1.5s", duration: "13.6s" },
    { left: "72.3%", top: "98.6%", delay: "2s", duration: "14.8s" },
    { left: "99.1%", top: "77.7%", delay: "2.5s", duration: "11.2s" },
    { left: "65.5%", top: "88.7%", delay: "3s", duration: "8.1s" },
    { left: "98.1%", top: "17.8%", delay: "3.5s", duration: "11.6s" },
    { left: "43.9%", top: "25.2%", delay: "4s", duration: "5.6s" },
    { left: "70.7%", top: "69.4%", delay: "4.5s", duration: "7.5s" },
    { left: "4.1%", top: "79.9%", delay: "5s", duration: "5.8s" },
    { left: "61.6%", top: "21.7%", delay: "5.5s", duration: "13.2s" },
    { left: "5.8%", top: "23.2%", delay: "6s", duration: "5.3s" },
    { left: "99.9%", top: "32.7%", delay: "6.5s", duration: "7.9s" },
    { left: "50.7%", top: "27.3%", delay: "7s", duration: "12.7s" },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none">
      {PARTICLE_POSITIONS.map((pos, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
          style={{
            left: pos.left,
            top: pos.top,
            animationDelay: pos.delay,
            animationDuration: pos.duration,
          }}
        ></div>
      ))}
    </div>
  );
}), { ssr: false });

export default function Page() {
  const carImages = [
    {
      url: "/BMW 535x side.png",
      title: "Front Exterior View",
      description: "2011 BMW 535d xDrive Touring - Twin-turbo diesel excellence",
    },
    {
      url: "/ChatGPT Image Jul 15, 2025 at 10_08_55 PM.png",
      title: "Side Profile - Touring",
      description: "Elegant wagon silhouette with extended cargo space",
    },
    {
      url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Premium Interior",
      description: "Dakota leather Oyster interior with premium features",
    },
    {
      url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Rear Cargo Area",
      description: "Spacious touring cargo area with split-folding seats",
    },
    {
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Dashboard & Controls",
      description: "2011 iDrive system with navigation",
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, carImages.length])

  const nextImage = () => {
    setIsAutoPlaying(false)
    setCurrentImageIndex((prev) => (prev + 1) % carImages.length)
  }

  const prevImage = () => {
    setIsAutoPlaying(false)
    setCurrentImageIndex((prev) => (prev - 1 + carImages.length) % carImages.length)
  }

  const goToImage = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentImageIndex(index)
  }

  // Data
  const headline = {
    title: "Two-Owner BMW 535d xDrive Touring (313 PS)",
    subtitle: "Family estate with sports‑car punch—ready to drive home today",
    subDetails: "230 kW twin-turbo, AWD, Imperial Blue, Oyster leather, 198 000 km",
    highlights: ["Two owners", "Full BMW service record", "Accident-free paint", "Turn-key peace of mind"],
  }

  const whyYoullLoveThis = [
    {
      title: "Effortless thrust",
      description: "630 N·m (465 lb‑ft) from just 1 500 rpm shrinks every overtake, even fully loaded.",
    },
    {
      title: "All‑weather confidence",
      description: "Intelligent xDrive with torque vectoring keeps you safe on wet cobblestones and snowy autoroutes.",
    },
    {
      title: "Flagship comfort",
      description:
        "Heated & ventilated Comfort Seats, tri‑zone climate and a whisper‑quiet cabin turn daily commutes into first‑class journeys.",
    },
    {
      title: "Surprisingly frugal",
      description: "Real‑world average 6,4 l/100 km means over 1 000 km per tank.",
    },
    {
      title: "Estate practicality",
      description: "560 l boot (1 670 l with seats flat) plus split glass hatch for quick access.",
    },
    {
      title: "Turn‑key peace of mind",
      description:
        "Full BMW Luxembourg service history, accident‑free paint, fresh oil & filters (15 Jun 2025) and contrôle technique valid to 07/2027.",
    },
  ]

  const atAGlance = [
    { spec: "0–100 km/h 5,5 s", benefit: "Sport‑sedan pace on demand" },
    { spec: "ZF 8‑speed auto", benefit: "Seamless shifts & lower fuel use" },
    { spec: "Adaptive LED lights", benefit: "Night drives that feel like daylight" },
    { spec: "Harman/Kardon 16‑speaker audio", benefit: "Concert‑hall sound every drive" },
    { spec: "Head‑Up Display & driver aids", benefit: "Eyes stay on the road, fines stay away" },
    { spec: "Two wheel sets", benefit: "No seasonal tyre‑swap hassle" },
  ]

  const lifestyleFeatures = [
    {
      category: "Family & leisure",
      description: "ISOFIX points, flat floor, load‑space net.",
    },
    {
      category: "Business travel",
      description: "HUD speed‑limit info and adaptive cruise keep you fresh.",
    },
    {
      category: "Weekend escapes",
      description: "Self‑levelling rear air suspension stays level with bikes or camping kit aboard.",
    },
  ]

  const technicalSpecs = [
    { label: "Engine", value: "3 000 cm³ inline‑6, sequential twin‑turbo (N57D30T1)" },
    { label: "Power", value: "230 kW / 313 PS @ 4 400 rpm" },
    { label: "Torque", value: "630 N·m @ 1 500 rpm" },
    { label: "Drivetrain", value: "xDrive all‑wheel drive" },
    { label: "Transmission", value: "ZF 8‑speed automatic with paddles" },
    { label: "Suspension", value: "Double‑wishbone front, self‑levelling air rear" },
    { label: "Brakes", value: "374 mm front / 345 mm rear ventilated discs" },
    { label: "Dimensions", value: "4 907 × 1 860 × 1 462 mm" },
    { label: "Boot", value: "560 l (seats up) • 1 670 l (seats flat)" },
    { label: "Fuel consumption", value: "6,4 l/100 km • CO₂ 169 g/km" },
  ]

  const equipment = [
    "Adaptive LED headlights, high-beam assist",
    "Harman/Kardon 16-speaker audio",
    "iDrive Professional 10.2″ with 2025 maps, HUD",
    "Comfort seats: electric, memory, heat, ventilation",
    "Tri-zone climate, rear privacy glass",
    "Front & rear PDC plus reversing camera",
    "Lane-departure warning · Speed-limit info",
    "Power tailgate with separate glass hatch",
    "Two wheel sets: 18″ summer (90 %), 17″ winter (70 %)",
  ]

  const condition = {
    exterior: "Factory‑depth Imperial Blue paint, blemish‑free.",
    interior: "Oyster Dakota leather, smoke‑free, no tears.",
    mechanical: "BMW‑maintained from new; gearbox oil service 20 May 2023.",
    mileage: "198 000 km, certified and verifiable.",
  }

  const extras = [
    "Second wheel set with tyres (18″ summer 90 %, 17″ winter 70 %)",
    "Space‑saver spare & jack",
    "BMW load‑space net",
    "PDF paint‑depth report",
    "Two remote keys, manuals & COC",
  ]

  const price = {
    amount: "€12 900",
    terms: 'Reasonable offers after inspection. Private sale under Luxembourg law; sold "as-is".',
  }

  const faqs = [
    { question: "Is the price negotiable?", answer: "Reasonable offers considered after inspection." },
    { question: "Accident history?", answer: "No accidents, paint fully original—report provided." },
    { question: "Why selling?", answer: "Upgrading to a company EV; no longer need a diesel estate." },
    { question: "Can I test drive?", answer: "Yes—bring ID, valid licence and proof of insurance." },
    { question: "Can I have it inspected at BMW?", answer: "Absolutely—nearest dealer is 10 minutes away." },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-8 py-6 flex justify-between items-center border-b border-slate-700/50 backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
            <span className="text-white font-bold text-sm tracking-wider">BMW</span>
          </div>
          <div>
            <span className="text-2xl font-extralight tracking-wide">535d xDrive Touring</span>
            <div className="text-xs text-slate-400 font-light tracking-widest uppercase">Twin-Turbo Diesel • F11</div>
          </div>
        </div>
        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-medium tracking-wide text-sm uppercase hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
          Contact Owner
        </button>
      </header>

      {/* Main Content */}
      <section className="relative px-8 py-32 text-center">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="mb-16 relative z-10">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {headline.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center bg-blue-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-500/20"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-light text-blue-300">{highlight}</span>
                </div>
              ))}
            </div>

            <h1 className="text-6xl md:text-8xl font-extralight mb-6 leading-none">
              <span className="block text-slate-300/90 mb-2">Two-Owner BMW</span>
              <span className="block relative">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 blur-xl opacity-30"></span>
                <span className="relative bg-gradient-to-r from-blue-400 via-purple-300 to-blue-400 bg-clip-text text-transparent font-light">
                  535d xDrive Touring
                </span>
              </span>
              <span className="block text-slate-400 text-3xl mt-4">(313 PS)</span>
            </h1>

            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-slate-400 font-light mb-4 text-center leading-relaxed">
                {headline.subtitle}
              </p>
              <p className="text-lg md:text-xl text-slate-500 font-light mb-8 text-center leading-relaxed">
                {headline.subDetails}
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-8"></div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative mb-16">
            <div className="relative group">
              <div
                className="w-full h-[600px] bg-slate-800/30 backdrop-blur-sm rounded-3xl overflow-hidden mb-6 shadow-2xl shadow-black/50 border border-slate-600/30 relative"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="relative w-full h-full overflow-hidden">
                  {carImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                      }`}
                    >
                      <img
                        src={image.url || "/placeholder.svg"}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20"></div>
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                    <h3 className="text-white text-lg font-light mb-1">{carImages[currentImageIndex].title}</h3>
                    <p className="text-slate-300 text-sm font-light">{carImages[currentImageIndex].description}</p>
                  </div>
                </div>

                {/* Auto-play indicator */}
                <div className="absolute top-6 right-6">
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-slate-500"
                    }`}
                  ></div>
                </div>

                {/* Image counter */}
                <div className="absolute top-6 left-6">
                  <div className="bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-light">
                    {currentImageIndex + 1} / {carImages.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center space-x-3 mb-6">
              {carImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative transition-all duration-300 ${
                    currentImageIndex === index ? "w-8 h-4" : "w-4 h-4"
                  }`}
                >
                  <div
                    className={`w-full h-full rounded-full transition-all duration-300 ${
                      currentImageIndex === index
                        ? "bg-blue-500 shadow-lg shadow-blue-500/50"
                        : "bg-slate-600 hover:bg-slate-500"
                    }`}
                  ></div>
                </button>
              ))}
            </div>

            {/* Thumbnail grid */}
            <div className="grid grid-cols-5 gap-3">
              {carImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative aspect-video rounded-xl overflow-hidden transition-all duration-300 ${
                    currentImageIndex === index
                      ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-900 scale-105"
                      : "hover:scale-105 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={image.url || "/placeholder.svg"} alt={image.title} className="w-full h-full object-cover" />
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      currentImageIndex === index ? "bg-blue-500/20" : "bg-black/40 hover:bg-black/20"
                    }`}
                  ></div>
                </button>
              ))}
            </div>
          </div>

          {/* Performance Facts */}
          {/* Why you'll love this car - Innovative Design */}
          <div className="relative mb-16 overflow-hidden">
            {/* Background with animated elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 rounded-3xl"></div>
            <div className="absolute inset-0">
              {/* Floating geometric shapes */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute opacity-10"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${20 + (i % 3) * 25}%`,
                    animationDelay: `${i * 0.8}s`,
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse blur-sm"></div>
                </div>
              ))}
            </div>

            <div className="relative z-10 p-10">
              <h2 className="text-5xl font-extralight mb-16 text-center">
                <span className="block text-slate-400 text-2xl mb-4 tracking-widest uppercase">Experience</span>
                <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent tracking-wide">
                  Why you'll love this car
                </span>
              </h2>

              {/* Interactive cards with hover effects */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {whyYoullLoveThis.map((fact, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.02]"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    {/* Card background with gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                    <div className="absolute inset-[1px] bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-slate-800/90 rounded-3xl backdrop-blur-xl"></div>

                    {/* Card content */}
                    <div className="relative p-8 h-full flex flex-col">
                      {/* Icon area with animated background */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 rounded-full flex items-center justify-center border border-emerald-400/30 group-hover:border-emerald-300/50 transition-all duration-500">
                          {/* Dynamic icons based on content */}
                          {index === 0 && (
                            <svg
                              className="w-10 h-10 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                          )}
                          {index === 1 && (
                            <svg
                              className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>
                          )}
                          {index === 2 && (
                            <svg
                              className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          )}
                          {index === 3 && (
                            <svg
                              className="w-10 h-10 text-green-400 group-hover:text-green-300 transition-colors duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                              />
                            </svg>
                          )}
                          {index === 4 && (
                            <svg
                              className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                              />
                            </svg>
                          )}
                          {index === 5 && (
                            <svg
                              className="w-10 h-10 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          )}
                        </div>
                      </div>

                      {/* Title with gradient effect */}
                      <h3 className="text-2xl font-light mb-4 group-hover:text-white transition-colors duration-300">
                        <span className="bg-gradient-to-r from-slate-200 via-white to-slate-200 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:via-cyan-300 group-hover:to-blue-300 transition-all duration-500">
                          {fact.title}
                        </span>
                      </h3>

                      {/* Description with enhanced typography */}
                      <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed flex-grow text-lg font-light">
                        {fact.description}
                      </p>

                      {/* Animated bottom accent */}
                      <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
                    </div>

                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                ))}
              </div>

              {/* Bottom decorative element */}
              <div className="mt-16 flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>

          {/* At a glance - Infographic Style */}
          <div className="relative mb-16 overflow-hidden">
            {/* Animated floating geometric shapes */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute opacity-10"
                  style={{
                    left: `${8 + i * 15}%`,
                    top: `${10 + (i % 2) * 40}%`,
                    animationDelay: `${i * 0.7}s`,
                  }}
                >
                  <div className="w-16 h-16 bg-violet-500 rounded-full animate-pulse blur-md"></div>
                </div>
              ))}
            </div>
            <div className="relative z-10 p-10 bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-violet-500/30 shadow-2xl shadow-black/30">
              <h2 className="text-5xl font-extralight mb-16 text-center">
                <span className="text-violet-400 tracking-wide">At a glance</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
                {/* Infographic cards */}
                {/* 0–100 km/h 5,5 s */}
                <div className="flex flex-col items-center bg-slate-900/40 rounded-2xl p-6 shadow-lg group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500 mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-fuchsia-300 mb-1">5.5s</div>
                  <div className="text-sm uppercase tracking-wide text-fuchsia-200 mb-2">0–100 km/h</div>
                  <div className="text-xs text-slate-400 text-center">Sport‑sedan pace</div>
                </div>
                {/* ZF 8‑speed auto */}
                <div className="flex flex-col items-center bg-slate-900/40 rounded-2xl p-6 shadow-lg group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-cyan-300 mb-1">8‑spd</div>
                  <div className="text-sm uppercase tracking-wide text-cyan-200 mb-2">ZF Auto</div>
                  <div className="text-xs text-slate-400 text-center">Seamless shifts</div>
                </div>
                {/* Adaptive LED lights */}
                <div className="flex flex-col items-center bg-slate-900/40 rounded-2xl p-6 shadow-lg group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-500 mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-purple-200 mb-1">LED</div>
                  <div className="text-sm uppercase tracking-wide text-purple-200 mb-2">Adaptive Lights</div>
                  <div className="text-xs text-slate-400 text-center">Night = Day</div>
                </div>
                {/* Harman/Kardon audio */}
                <div className="flex flex-col items-center bg-slate-900/40 rounded-2xl p-6 shadow-lg group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-2v16l-12-2zm0 0H5a2 2 0 01-2-2V8a2 2 0 012-2h4" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-blue-200 mb-1">16</div>
                  <div className="text-sm uppercase tracking-wide text-blue-200 mb-2">Speakers</div>
                  <div className="text-xs text-slate-400 text-center">Concert sound</div>
                </div>
                {/* Head-Up Display & driver aids */}
                <div className="flex flex-col items-center bg-slate-900/40 rounded-2xl p-6 shadow-lg group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-violet-500 mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-green-200 mb-1">HUD</div>
                  <div className="text-sm uppercase tracking-wide text-green-200 mb-2">Driver Aids</div>
                  <div className="text-xs text-slate-400 text-center">Eyes on road</div>
                </div>
                {/* Two wheel sets */}
                <div className="flex flex-col items-center bg-slate-900/40 rounded-2xl p-6 shadow-lg group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2} fill="none" />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={2} fill="none" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-indigo-200 mb-1">2x</div>
                  <div className="text-sm uppercase tracking-wide text-indigo-200 mb-2">Wheel Sets</div>
                  <div className="text-xs text-slate-400 text-center">No tyre swaps</div>
                </div>
              </div>
            </div>
          </div>

          {/* Lifestyle Features - Visual Storytelling */}
          <div className="relative mb-16 overflow-hidden">
            {/* Animated floating geometric shapes */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute opacity-10"
                  style={{
                    left: `${15 + i * 20}%`,
                    top: `${15 + (i % 2) * 50}%`,
                    animationDelay: `${i * 0.9}s`,
                  }}
                >
                  <div className="w-16 h-16 bg-cyan-500 rounded-full animate-pulse blur-md"></div>
                </div>
              ))}
            </div>
            <div className="relative z-10 p-10 bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-cyan-500/30 shadow-2xl shadow-black/30">
              <h2 className="text-5xl font-extralight mb-16 text-center">
                <span className="text-cyan-400 tracking-wide">Lifestyle Features</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
                {/* Family & leisure */}
                <div className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.03] bg-slate-900/40 flex flex-col items-center p-8">
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                    alt="Family & leisure"
                    className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg"
                  />
                  <h3 className="text-2xl font-semibold text-cyan-200 mb-2">Family & Leisure</h3>
                  <p className="text-slate-400 mb-4 text-lg font-light text-center">
                    ISOFIX points, flat floor, load‑space net.
                  </p>
                  <div className="text-slate-300 text-base font-light text-center">
                    <span className="italic">
                      "Pack up the kids, bikes, and dog—there’s room for all. The flat floor and ISOFIX make family trips a breeze, while the load net keeps everything secure."
                    </span>
                  </div>
                </div>
                {/* Business travel */}
                <div className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.03] bg-slate-900/40 flex flex-col items-center p-8">
                  <img
                    src="https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=600&q=80"
                    alt="Business travel"
                    className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg"
                  />
                  <h3 className="text-2xl font-semibold text-cyan-200 mb-2">Business Travel</h3>
                  <p className="text-slate-400 mb-4 text-lg font-light text-center">
                    HUD speed‑limit info and adaptive cruise keep you fresh.
                  </p>
                  <div className="text-slate-300 text-base font-light text-center">
                    <span className="italic">
                      "Glide between meetings with adaptive cruise and head-up display—arrive sharp, relaxed, and always on time."
                    </span>
                  </div>
                </div>
                {/* Weekend escapes */}
                <div className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.03] bg-slate-900/40 flex flex-col items-center p-8">
                  <img
                    src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
                    alt="Weekend escapes"
                    className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg"
                  />
                  <h3 className="text-2xl font-semibold text-cyan-200 mb-2">Weekend Escapes</h3>
                  <p className="text-slate-400 mb-4 text-lg font-light text-center">
                    Self‑levelling rear air suspension stays level with bikes or camping kit aboard.
                  </p>
                  <div className="text-slate-300 text-base font-light text-center">
                    <span className="italic">
                      "Load up for adventure—self-levelling suspension keeps the ride smooth, whether it’s bikes, tents, or a spontaneous getaway."
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications - Animated Icon Grid with Category Headings */}
          <div className="relative mb-16 overflow-hidden">
            {/* Animated floating geometric shapes */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="absolute opacity-10"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${18 + (i % 3) * 28}%`,
                    animationDelay: `${i * 0.7}s`,
                  }}
                >
                  <div className="w-16 h-16 bg-fuchsia-500 rounded-full animate-pulse blur-md"></div>
                </div>
              ))}
            </div>
            <div className="relative z-10 p-10 bg-gradient-to-br from-fuchsia-900/40 via-slate-900/80 to-fuchsia-800/30 backdrop-blur-xl rounded-3xl border border-fuchsia-500/30 shadow-2xl shadow-black/30 max-w-7xl mx-auto">
              <h2 className="text-5xl font-extralight mb-14 text-center">
                <span className="text-fuchsia-400 tracking-wide">Technical Specifications</span>
              </h2>
              <div className="max-w-5xl mx-auto space-y-10">
                {/* Powertrain */}
                <div>
                  <div className="flex items-center mb-6">
                    <svg className="w-8 h-8 text-orange-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 19V5l12-2v16l-12-2z" />
                    </svg>
                    <span className="text-2xl font-semibold text-orange-200 tracking-wide">Powertrain</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Engine */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-orange-400/20 via-slate-900/60 to-fuchsia-900/10 rounded-2xl p-8 shadow-lg border border-orange-400/20 hover:border-orange-400/60 hover:scale-[1.04] transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400/40 to-fuchsia-500/30 mb-4 shadow">
                        <svg className="w-8 h-8 text-orange-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 19V5l12-2v16l-12-2z" />
                        </svg>
                      </div>
                      <div className="text-lg font-semibold text-slate-100 mb-1">Engine</div>
                      <div className="text-base text-fuchsia-100 mb-2">{technicalSpecs[0].value}</div>
                      <div className="text-xs text-orange-200/80 italic">Smooth, powerful inline-6 twin-turbo</div>
                    </div>
                    {/* Power */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-pink-400/20 via-slate-900/60 to-fuchsia-900/10 rounded-2xl p-8 shadow-lg border border-pink-400/20 hover:border-pink-400/60 hover:scale-[1.04] transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-400/40 to-fuchsia-500/30 mb-4 shadow">
                        <svg className="w-8 h-8 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="text-lg font-semibold text-slate-100 mb-1">Power</div>
                      <div className="text-base text-fuchsia-100 mb-2">{technicalSpecs[1].value}</div>
                      <div className="text-xs text-pink-200/80 italic">313 PS—effortless acceleration</div>
                    </div>
                    {/* Torque */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-yellow-400/20 via-slate-900/60 to-fuchsia-900/10 rounded-2xl p-8 shadow-lg border border-yellow-400/20 hover:border-yellow-400/60 hover:scale-[1.04] transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400/40 to-fuchsia-500/30 mb-4 shadow">
                        <svg className="w-8 h-8 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2} fill="none" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v5l4 2" />
                        </svg>
                      </div>
                      <div className="text-lg font-semibold text-slate-100 mb-1">Torque</div>
                      <div className="text-base text-fuchsia-100 mb-2">{technicalSpecs[2].value}</div>
                      <div className="text-xs text-yellow-200/80 italic">630 Nm—instant overtaking</div>
                    </div>
                    {/* Transmission */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-cyan-400/20 via-slate-900/60 to-fuchsia-900/10 rounded-2xl p-8 shadow-lg border border-cyan-400/20 hover:border-cyan-400/60 hover:scale-[1.04] transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/40 to-fuchsia-500/30 mb-4 shadow">
                        <svg className="w-8 h-8 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                      </div>
                      <div className="text-lg font-semibold text-slate-100 mb-1">Transmission</div>
                      <div className="text-base text-fuchsia-100 mb-2">{technicalSpecs[4].value}</div>
                      <div className="text-xs text-cyan-200/80 italic">ZF 8-speed—silky, efficient</div>
                    </div>
                  </div>
                </div>
                {/* Chassis & Brakes */}
                <div>
                  <div className="flex items-center mb-6 mt-10">
                    <svg className="w-8 h-8 text-green-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2} fill="none" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" />
                    </svg>
                    <span className="text-2xl font-semibold text-green-200 tracking-wide">Chassis & Brakes</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Suspension */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-green-400/20 via-slate-900/60 to-fuchsia-900/10 rounded-2xl p-8 shadow-lg border border-green-400/20 hover:border-green-400/60 hover:scale-[1.04] transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400/40 to-fuchsia-500/30 mb-4 shadow">
                        <svg className="w-8 h-8 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2} fill="none" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" />
                        </svg>
                      </div>
                      <div className="text-lg font-semibold text-slate-100 mb-1">Suspension</div>
                      <div className="text-base text-fuchsia-100 mb-2">{technicalSpecs[5].value}</div>
                      <div className="text-xs text-green-200/80 italic">Self-levelling air rear—always level</div>
                    </div>
                    {/* Brakes */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-purple-400/20 via-slate-900/60 to-fuchsia-900/10 rounded-2xl p-8 shadow-lg border border-purple-400/20 hover:border-purple-400/60 hover:scale-[1.04] transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-400/40 to-fuchsia-500/30 mb-4 shadow">
                        <svg className="w-8 h-8 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2} fill="none" />
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={2} fill="none" />
                        </svg>
                      </div>
                      <div className="text-lg font-semibold text-slate-100 mb-1">Brakes</div>
                      <div className="text-base text-fuchsia-100 mb-2">{technicalSpecs[6].value}</div>
                      <div className="text-xs text-purple-200/80 italic">Big ventilated discs—confident stops</div>
                    </div>
                    {/* Drivetrain */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-blue-400/20 via-slate-900/60 to-fuchsia-900/10 rounded-2xl p-8 shadow-lg border border-blue-400/20 hover:border-blue-400/60 hover:scale-[1.04] transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400/40 to-fuchsia-500/30 mb-4 shadow">
                        <svg className="w-8 h-8 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16M4 12l4-4m-4 4l4 4" />
                        </svg>
                      </div>
                      <div className="text-lg font-semibold text-slate-100 mb-1">Drivetrain</div>
                      <div className="text-base text-fuchsia-100 mb-2">{technicalSpecs[3].value}</div>
                      <div className="text-xs text-blue-200/80 italic">xDrive AWD—safe in all weather</div>
                    </div>
                  </div>
                </div>
                {/* Dimensions & Efficiency */}
                <div>
                  <div className="flex items-center mb-6 mt-10">
                    <svg className="w-8 h-8 text-sky-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="4" y="8" width="16" height="8" rx="2" stroke="currentColor" strokeWidth={2} fill="none" />
                    </svg>
                    <span className="text-2xl font-semibold text-sky-200 tracking-wide">Dimensions & Efficiency</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Dimensions */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-sky-400/20 via-slate-900/60 to-fuchsia-900/10 rounded-2xl p-8 shadow-lg border border-sky-400/20 hover:border-sky-400/60 hover:scale-[1.04] transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-400/40 to-fuchsia-500/30 mb-4 shadow">
                        <svg className="w-8 h-8 text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="4" y="8" width="16" height="8" rx="2" stroke="currentColor" strokeWidth={2} fill="none" />
                        </svg>
                      </div>
                      <div className="text-lg font-semibold text-slate-100 mb-1">Dimensions</div>
                      <div className="text-base text-fuchsia-100 mb-2">{technicalSpecs[7].value}</div>
                      <div className="text-xs text-sky-200/80 italic">Spacious yet agile</div>
                    </div>
                    {/* Boot */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-blue-400/20 via-slate-900/60 to-fuchsia-900/10 rounded-2xl p-8 shadow-lg border border-blue-400/20 hover:border-blue-400/60 hover:scale-[1.04] transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400/40 to-fuchsia-500/30 mb-4 shadow">
                        <svg className="w-8 h-8 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="10" width="12" height="6" rx="2" stroke="currentColor" strokeWidth={2} fill="none" />
                        </svg>
                      </div>
                      <div className="text-lg font-semibold text-slate-100 mb-1">Boot</div>
                      <div className="text-base text-fuchsia-100 mb-2">{technicalSpecs[8].value}</div>
                      <div className="text-xs text-blue-200/80 italic">560–1,670L—wagon practicality</div>
                    </div>
                    {/* Fuel consumption */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-green-400/20 via-slate-900/60 to-fuchsia-900/10 rounded-2xl p-8 shadow-lg border border-green-400/20 hover:border-green-400/60 hover:scale-[1.04] transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: "1.0s" }}>
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400/40 to-fuchsia-500/30 mb-4 shadow">
                        <svg className="w-8 h-8 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2" />
                          <circle cx="12" cy="9" r="4" stroke="currentColor" strokeWidth={2} fill="none" />
                        </svg>
                      </div>
                      <div className="text-lg font-semibold text-slate-100 mb-1">Fuel Consumption</div>
                      <div className="text-base text-fuchsia-100 mb-2">{technicalSpecs[9].value}</div>
                      <div className="text-xs text-green-200/80 italic">6.4L/100km—over 1,000km per tank</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative bottom accent */}
              <div className="flex justify-center mt-10">
                <div className="w-32 h-2 bg-gradient-to-r from-fuchsia-400/30 via-fuchsia-500/60 to-fuchsia-400/30 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>

          {/* Equipment Highlights - Icon Grid with Tooltips (No Hover Card) */}
          <div className="relative mb-16 overflow-hidden">
            {/* Animated floating geometric shapes */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute opacity-10"
                  style={{
                    left: `${10 + i * 22}%`,
                    top: `${20 + (i % 2) * 55}%`,
                    animationDelay: `${i * 0.7}s`,
                  }}
                >
                  <div className="w-16 h-16 bg-emerald-500 rounded-full animate-pulse blur-md"></div>
                </div>
              ))}
            </div>
            <div className="relative z-10 p-10 bg-gradient-to-br from-emerald-900/40 via-slate-900/80 to-emerald-800/30 backdrop-blur-xl rounded-3xl border border-emerald-500/30 shadow-2xl shadow-black/30">
              <h2 className="text-5xl font-extralight mb-14 text-center">
                <span className="text-emerald-400 tracking-wide">Equipment Highlights</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {equipment.map((item, index) => {
                  // Pick an icon based on the item content
                  let icon = null;
                  if (item.toLowerCase().includes("led")) {
                    icon = (
                      <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={2} fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m16.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" />
                      </svg>
                    );
                  } else if (item.toLowerCase().includes("audio")) {
                    icon = (
                      <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2} fill="none" />
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={2} fill="none" />
                      </svg>
                    );
                  } else if (item.toLowerCase().includes("climate")) {
                    icon = (
                      <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v10m0 0a4 4 0 100 8 4 4 0 100-8z" />
                      </svg>
                    );
                  } else if (item.toLowerCase().includes("camera")) {
                    icon = (
                      <svg className="w-8 h-8 text-fuchsia-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth={2} fill="none" />
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={2} fill="none" />
                      </svg>
                    );
                  } else if (item.toLowerCase().includes("hud")) {
                    icon = (
                      <svg className="w-8 h-8 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="4" y="8" width="16" height="8" rx="2" stroke="currentColor" strokeWidth={2} fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16v2m8-2v2" />
                      </svg>
                    );
                  } else if (item.toLowerCase().includes("seats")) {
                    icon = (
                      <svg className="w-8 h-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="5" y="7" width="14" height="10" rx="3" stroke="currentColor" strokeWidth={2} fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17v2m10-2v2" />
                      </svg>
                    );
                  } else if (item.toLowerCase().includes("privacy")) {
                    icon = (
                      <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="4" y="8" width="16" height="8" rx="2" stroke="currentColor" strokeWidth={2} fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 8V6a4 4 0 018 0v2" />
                      </svg>
                    );
                  } else if (item.toLowerCase().includes("pdc")) {
                    icon = (
                      <svg className="w-8 h-8 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="6" y="10" width="12" height="4" rx="2" stroke="currentColor" strokeWidth={2} fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h2m12 0h2" />
                      </svg>
                    );
                  } else if (item.toLowerCase().includes("lane")) {
                    icon = (
                      <svg className="w-8 h-8 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="9" y="4" width="6" height="16" rx="3" stroke="currentColor" strokeWidth={2} fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16" />
                      </svg>
                    );
                  } else if (item.toLowerCase().includes("tailgate")) {
                    icon = (
                      <svg className="w-8 h-8 text-lime-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="5" y="10" width="14" height="6" rx="2" stroke="currentColor" strokeWidth={2} fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v6" />
                      </svg>
                    );
                  } else if (item.toLowerCase().includes("wheel")) {
                    icon = (
                      <svg className="w-8 h-8 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2} fill="none" />
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={2} fill="none" />
                      </svg>
                    );
                  } else {
                    icon = (
                      <svg className="w-8 h-8 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    );
                  }

                  // Tooltip text (short explanation)
                  let tooltip = "";
                  if (item.toLowerCase().includes("led")) tooltip = "Adaptive LED headlights for safer night driving";
                  else if (item.toLowerCase().includes("audio")) tooltip = "Premium Harman/Kardon surround sound";
                  else if (item.toLowerCase().includes("climate")) tooltip = "Tri-zone climate for all passengers";
                  else if (item.toLowerCase().includes("camera")) tooltip = "Reversing camera for easy parking";
                  else if (item.toLowerCase().includes("hud")) tooltip = "Head-Up Display keeps your eyes on the road";
                  else if (item.toLowerCase().includes("seats")) tooltip = "Heated, ventilated, memory comfort seats";
                  else if (item.toLowerCase().includes("privacy")) tooltip = "Rear privacy glass for comfort and security";
                  else if (item.toLowerCase().includes("pdc")) tooltip = "Parking Distance Control front & rear";
                  else if (item.toLowerCase().includes("lane")) tooltip = "Lane-departure warning & speed-limit info";
                  else if (item.toLowerCase().includes("tailgate")) tooltip = "Power tailgate with split glass hatch";
                  else if (item.toLowerCase().includes("wheel")) tooltip = "Two sets: summer & winter wheels";
                  else tooltip = "Premium feature";

                  return (
                    <div
                      key={index}
                      className="relative group bg-gradient-to-br from-emerald-700/10 via-slate-800/40 to-emerald-900/10 rounded-2xl p-6 flex items-center shadow-lg border border-emerald-500/10 hover:border-emerald-400/40 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 mr-6">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400/30 via-emerald-500/10 to-emerald-700/20 flex items-center justify-center shadow-lg">
                          {icon}
                        </div>
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-lg text-slate-100 font-medium">{item}</div>
                        <div className="text-emerald-300/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {tooltip}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Decorative bottom accent */}
              <div className="flex justify-center mt-10">
                <div className="w-32 h-2 bg-gradient-to-r from-emerald-400/30 via-emerald-500/60 to-emerald-400/30 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>

          {/* Condition & History - Experience Style, Exact Match */}
          <div className="relative mb-16 overflow-hidden">
            {/* Animated floating geometric shapes */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute opacity-10"
                  style={{
                    left: `${18 + i * 30}%`,
                    top: `${18 + (i % 2) * 55}%`,
                    animationDelay: `${i * 0.8}s`,
                  }}
                >
                  <div className="w-16 h-16 bg-cyan-700 rounded-full animate-pulse blur-md"></div>
                </div>
              ))}
            </div>
            <div className="relative z-10 p-10 bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-cyan-700/30 shadow-2xl shadow-black/30">
              <h2 className="text-5xl font-extralight mb-16 text-center">
                <span className="text-cyan-300 tracking-wide">Condition & History</span>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {/* Paint & Interior */}
                <div className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.02]">
                  {/* Card background with cyan border */}
                  <div className="absolute inset-0 bg-cyan-700/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                  <div className="absolute inset-[1px] bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-slate-800/90 rounded-3xl backdrop-blur-xl"></div>
                  {/* Card content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon area with animated background */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                      <div className="relative w-20 h-20 bg-cyan-700/30 rounded-full flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-300/50 transition-all duration-500">
                        <svg className="w-10 h-10 text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-light mb-4 text-cyan-200 group-hover:text-white transition-colors duration-300">
                      Paint & Interior
                    </h3>
                    <p className="text-slate-400 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed flex-grow text-lg font-light mb-2">
                      {condition.exterior}
                    </p>
                    <p className="text-slate-400 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed flex-grow text-lg font-light">
                      {condition.interior}
                    </p>
                    {/* Animated accent line */}
                    <div className="mt-6 h-1 bg-cyan-700/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
                  </div>
                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-cyan-700/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
                {/* Mechanical & Service */}
                <div className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.02]">
                  {/* Card background with cyan border */}
                  <div className="absolute inset-0 bg-cyan-700/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                  <div className="absolute inset-[1px] bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-slate-800/90 rounded-3xl backdrop-blur-xl"></div>
                  {/* Card content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon area with animated background */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                      <div className="relative w-20 h-20 bg-cyan-700/30 rounded-full flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-300/50 transition-all duration-500">
                        <svg className="w-10 h-10 text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-light mb-4 text-cyan-200 group-hover:text-white transition-colors duration-300">
                      Mechanical & Service
                    </h3>
                    <p className="text-slate-400 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed flex-grow text-lg font-light mb-2">
                      {condition.mechanical}
                    </p>
                    <p className="text-slate-400 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed flex-grow text-lg font-light">
                      {condition.mileage}
                    </p>
                    {/* Animated accent line */}
                    <div className="mt-6 h-1 bg-cyan-700/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
                  </div>
                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-cyan-700/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Extras Included - Enhanced Visual List */}
          <div className="relative mb-16 overflow-hidden">
            {/* Animated floating geometric shapes */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute opacity-10"
                  style={{
                    left: `${18 + i * 30}%`,
                    top: `${18 + (i % 2) * 55}%`,
                    animationDelay: `${i * 0.8}s`,
                  }}
                >
                  <div className="w-16 h-16 bg-blue-500 rounded-full animate-pulse blur-md"></div>
                </div>
              ))}
            </div>
            <div className="relative z-10 p-10 bg-gradient-to-br from-slate-800/60 via-slate-900/80 to-blue-900/40 backdrop-blur-xl rounded-3xl border border-blue-500/30 shadow-2xl shadow-black/30">
              <h2 className="text-5xl font-extralight mb-12 text-center">
                <span className="text-blue-400 tracking-wide">Extras Included</span>
              </h2>
              <ul className="divide-y divide-blue-500/10 max-w-2xl mx-auto">
                {extras.map((extra, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center py-6 px-2 transition-all duration-300 group hover:bg-blue-500/10 rounded-2xl ${
                      idx === 0 ? "bg-gradient-to-r from-blue-900/30 via-blue-800/10 to-transparent" : ""
                    }`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400/30 via-emerald-400/20 to-blue-600/30 flex items-center justify-center shadow-lg shadow-blue-400/10 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} className="text-blue-400" fill="none" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4" />
                        </svg>
                      </div>
                    </div>
                    <span className="ml-6 text-lg text-slate-100 font-medium flex items-center">
                      {idx === 0 && (
                        <span className="inline-block px-2 py-1 mr-2 text-xs rounded bg-blue-500/20 text-blue-200 font-semibold uppercase tracking-wider shadow">Most Valuable</span>
                      )}
                      {idx === extras.length - 1 && (
                        <span className="inline-block px-2 py-1 mr-2 text-xs rounded bg-emerald-500/20 text-emerald-200 font-semibold uppercase tracking-wider shadow">Full Set</span>
                      )}
                      {extra}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Decorative bottom accent */}
              <div className="flex justify-center mt-10">
                <div className="w-32 h-2 bg-gradient-to-r from-blue-400/30 via-blue-500/60 to-blue-400/30 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>

          {/* FAQs - Accordion with Underline */}
          <div className="relative mb-16 overflow-hidden">
            {/* Animated floating geometric shapes */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute opacity-10"
                  style={{
                    left: `${18 + i * 30}%`,
                    top: `${18 + (i % 2) * 55}%`,
                    animationDelay: `${i * 0.8}s`,
                  }}
                >
                  <div className="w-16 h-16 bg-fuchsia-500 rounded-full animate-pulse blur-md"></div>
                </div>
              ))}
            </div>
            <div className="relative z-10 p-10 bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-fuchsia-500/30 shadow-2xl shadow-black/30">
              <h2 className="text-5xl font-extralight mb-16 text-center">
                <span className="text-fuchsia-400 tracking-wide">Frequently Asked Questions</span>
              </h2>
              <div className="max-w-3xl mx-auto">
                <FAQSection faqs={faqs} />
              </div>
            </div>
          </div>

          {/* Price & Contact */}
          <div className="relative mb-16 overflow-hidden">
            {/* Animated background particles */}
            <ParticlesBackground />
            {/* Glass morphism container */}
            <div className="relative max-w-7xl mx-auto bg-slate-800/20 backdrop-blur-xl rounded-3xl p-10 border border-blue-500/30 shadow-2xl shadow-black/30 w-full">
              <div className="mb-8 text-center max-w-3xl mx-auto">
                <div className="text-7xl font-extralight mb-3 tracking-tight">
                  <span className="text-blue-400 text-6xl">12 900 €</span>
                  <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent"></span>
                </div>
                <p className="text-slate-300/80 mb-6 max-w-2xl mx-auto text-lg">{price.terms}</p>
                <div className="flex flex-wrap justify-center gap-6 text-base text-slate-300/80 font-light tracking-wide">
                  {[
                    { color: "bg-green-400", text: "Single Owner" },
                    { color: "bg-blue-400", text: "198 000 km" },
                    { color: "bg-purple-400", text: "No Accidents" },
                  ].map((item, index) => (
                    <span key={index} className="flex items-center space-x-2 px-4 py-2 bg-slate-700/30 rounded-full shadow border border-slate-600/30">
                      <div className={`w-2 h-2 ${item.color} rounded-full animate-pulse`}></div>
                      <span>{item.text}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 justify-center max-w-2xl mx-auto">
                <button className="flex-1 min-w-[200px] px-10 py-5 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 rounded-2xl font-medium text-xl tracking-wide uppercase hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Schedule Viewing</span>
                </button>
                <button className="flex-1 min-w-[200px] px-10 py-5 border-2 border-slate-500/30 bg-slate-800/30 rounded-2xl font-medium text-xl tracking-wide uppercase hover:border-emerald-500/50 hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Contact Owner</span>
                </button>
              </div>
            </div>
          </div>

          {/* Legal & Compliance */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-10 mb-16 border border-slate-600/30 shadow-2xl shadow-black/30 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-light mb-8 text-center bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 bg-clip-text text-transparent">
                Legal & Compliance (Luxembourg / EU)
              </h2>
              <div className="space-y-4 text-slate-300 font-light">
                <p>
                  Vente privée / Privatverkauf – Verkauf unter Ausschluss jeglicher Sachmängelhaftung ("sold as is").
                </p>
                <p>Kilométrage certifié. Aucun gage ou leasing en cours (frei von Rechten Dritter).</p>
                <p>Contrôle technique valable jusqu'au 07/2027.</p>
                <p>Le vendeur se charge de la déclaration de cession auprès de la SNCA dans les 5 jours ouvrables.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-slate-700/50 text-center text-slate-400 relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="font-light tracking-wide">
            © 2025 • VIN WBAKS910X0XXXXX • Private sale Luxembourg • 198 000 km • Two owners • Accident‑free
          </p>
        </div>
      </footer>
    </div>
  )
}
