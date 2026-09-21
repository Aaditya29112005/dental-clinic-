"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Instagram, 
  Facebook, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles,
  Calendar,
  ShieldCheck,
  Stethoscope
} from "lucide-react";
import { 
  clinicConfig, 
  servicesData, 
  orthodonticProblemsData, 
  dentalProblemsData, 
  locationsData,
  getAlignerTerm
} from "@/data/clinicData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const alignerTerm = getAlignerTerm(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className={`bg-navy-900 text-white text-xs py-2 px-4 border-b border-navy-800 transition-all duration-300 ${isScrolled ? 'hidden md:block' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4 flex-wrap">
            <a href={`tel:${clinicConfig.phoneRaw}`} className="flex items-center gap-1.5 hover:text-teal-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-teal-500" />
              <span>{clinicConfig.phone}</span>
            </a>
            <a href={`mailto:${clinicConfig.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-teal-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-teal-500" />
              <span>{clinicConfig.email}</span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-teal-500" />
              <span>Tue - Sun: 10 am - 7 pm (Mon Closed)</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="#map-location" 
              className="flex items-center gap-1 hover:text-teal-400 text-slate-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-teal-500" />
              <span>Sector 49, Noida</span>
            </a>
            <div className="flex items-center space-x-2 pl-2 border-l border-navy-700">
              <a href={clinicConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 p-1">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href={clinicConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 p-1">
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <div className={`glass-header transition-all duration-300 ${isScrolled ? 'shadow-soft py-3' : 'py-4'} border-b border-teal-500/10`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          
          {/* Clinic Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Align Dentofacial Clinic Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 text-sm font-medium text-navy-900">
            <Link href="/" className="px-3 py-2 rounded-lg hover:text-teal-600 hover:bg-teal-50/50 transition-colors">
              Home
            </Link>

            {/* Orthodontics Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("ortho")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-teal-600 hover:bg-teal-50/50 transition-colors">
                <span>Orthodontics</span>
                <ChevronDown className="w-4 h-4 text-teal-600" />
              </button>
              {activeDropdown === "ortho" && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-elevated p-4 border border-slate-100 grid gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider px-2 py-1 bg-teal-50 rounded-md">
                    Doctor Speciality
                  </div>
                  <Link href="/services/braces-noida" className="block px-3 py-2 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors">
                    <div className="font-semibold">Braces (Metal & Ceramic)</div>
                    <div className="text-xs text-slate-500">Precision smile alignment</div>
                  </Link>
                  <Link href="/services/clear-aligners-noida" className="block px-3 py-2 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors">
                    <div className="font-semibold">{alignerTerm}</div>
                    <div className="text-xs text-slate-500">Invisible smile correction</div>
                  </Link>
                  <div className="text-xs font-semibold text-navy-900 uppercase tracking-wider px-2 pt-2 border-t border-slate-100">
                    Problems We Correct
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs text-slate-700">
                    {orthodonticProblemsData.slice(0, 6).map((prob) => (
                      <Link 
                        key={prob.id} 
                        href={`/orthodontics/${prob.slug}`}
                        className="px-2 py-1.5 rounded hover:bg-slate-50 hover:text-teal-600 transition-colors"
                      >
                        {prob.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-teal-600 hover:bg-teal-50/50 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-teal-600" />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-white rounded-2xl shadow-elevated p-5 border border-slate-100 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div>
                    <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2 pb-1 border-b border-teal-100">
                      General & Restorative
                    </div>
                    {servicesData.slice(0, 5).map((srv) => (
                      <Link
                        key={srv.id}
                        href={`/services/${srv.slug}`}
                        className="block px-2.5 py-1.5 text-xs rounded-md hover:bg-teal-50 hover:text-teal-700 transition-colors"
                      >
                        <div className="font-medium text-navy-900">{srv.title}</div>
                      </Link>
                    ))}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2 pb-1 border-b border-teal-100">
                      Cosmetic & Implants
                    </div>
                    {servicesData.slice(5, 10).map((srv) => (
                      <Link
                        key={srv.id}
                        href={`/services/${srv.slug}`}
                        className="block px-2.5 py-1.5 text-xs rounded-md hover:bg-teal-50 hover:text-teal-700 transition-colors"
                      >
                        <div className="font-medium text-navy-900">{srv.title}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dental Problems */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("problems")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-teal-600 hover:bg-teal-50/50 transition-colors">
                <span>Dental Problems</span>
                <ChevronDown className="w-4 h-4 text-teal-600" />
              </button>
              {activeDropdown === "problems" && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-elevated p-4 border border-slate-100 grid gap-1 animate-in fade-in duration-200">
                  <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">
                    Facing Any Concern?
                  </div>
                  {dentalProblemsData.map((prob) => (
                    <Link
                      key={prob.id}
                      href={`/dental-problems/${prob.slug}`}
                      className="block px-3 py-1.5 text-xs rounded-md hover:bg-teal-50 hover:text-teal-700 transition-colors text-slate-700 font-medium"
                    >
                      {prob.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-teal-600 hover:bg-teal-50/50 transition-colors">
                <span>About</span>
                <ChevronDown className="w-4 h-4 text-teal-600" />
              </button>
              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-elevated p-3 border border-slate-100 grid gap-1 animate-in fade-in duration-200 text-xs">
                  <Link href="/about-clinic" className="px-3 py-2 rounded-lg hover:bg-teal-50 hover:text-teal-700 font-medium">
                    About the Clinic
                  </Link>
                  <Link href="/meet-dr-jyoti-chauhan" className="px-3 py-2 rounded-lg hover:bg-teal-50 hover:text-teal-700 font-medium">
                    Meet Dr. Jyoti Chauhan
                  </Link>
                  <Link href="/gallery" className="px-3 py-2 rounded-lg hover:bg-teal-50 hover:text-teal-700 font-medium">
                    Clinic Tour & Gallery
                  </Link>
                </div>
              )}
            </div>

            {/* Areas We Serve */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("areas")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-teal-600 hover:bg-teal-50/50 transition-colors">
                <span>Areas We Serve</span>
                <ChevronDown className="w-4 h-4 text-teal-600" />
              </button>
              {activeDropdown === "areas" && (
                <div className="absolute top-full right-0 w-64 bg-white rounded-2xl shadow-elevated p-4 border border-slate-100 grid grid-cols-2 gap-1 animate-in fade-in duration-200 text-xs">
                  {locationsData.map((loc) => (
                    <Link
                      key={loc.id}
                      href={`/${loc.slug}`}
                      className="px-2.5 py-1.5 rounded hover:bg-teal-50 hover:text-teal-700 text-slate-700 font-medium"
                    >
                      {loc.areaName}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="px-3 py-2 rounded-lg hover:text-teal-600 hover:bg-teal-50/50 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="px-3 py-2 rounded-lg hover:text-teal-600 hover:bg-teal-50/50 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/smile-assessment"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-teal-600 border border-teal-500 hover:bg-teal-50 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-500" />
              <span>Smile Assessment</span>
            </Link>
            <a
              href="#book-appointment"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-teal-500 hover:bg-teal-600 shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-navy-900 hover:text-teal-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-40 overflow-y-auto p-5 animate-in slide-in-from-right duration-200">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-base font-semibold text-navy-900 pb-2 border-b border-slate-100"
            >
              Home
            </Link>
            
            <div>
              <div className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">Orthodontics</div>
              <div className="pl-3 space-y-2 text-sm text-slate-700">
                <Link href="/services/braces-noida" onClick={() => setMobileMenuOpen(false)} className="block">Braces (Metal & Ceramic)</Link>
                <Link href="/services/clear-aligners-noida" onClick={() => setMobileMenuOpen(false)} className="block">{alignerTerm}</Link>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">Services</div>
              <div className="pl-3 grid grid-cols-1 gap-2 text-sm text-slate-700">
                {servicesData.map((s) => (
                  <Link key={s.id} href={`/services/${s.slug}`} onClick={() => setMobileMenuOpen(false)}>
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">Dental Problems</div>
              <div className="pl-3 grid grid-cols-2 gap-2 text-xs text-slate-700">
                {dentalProblemsData.map((p) => (
                  <Link key={p.id} href={`/dental-problems/${p.slug}`} onClick={() => setMobileMenuOpen(false)}>
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col space-y-3">
              <Link href="/about-clinic" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium">About Clinic</Link>
              <Link href="/meet-dr-jyoti-chauhan" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium">Meet Dr. Jyoti Chauhan</Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium">Blog</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium">Contact Us</Link>
            </div>

            <div className="pt-4 flex flex-col gap-2">
              <Link
                href="/smile-assessment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center rounded-xl text-xs font-semibold text-teal-600 border border-teal-500"
              >
                Smile Assessment Quiz
              </Link>
              <a
                href="#book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center rounded-xl text-xs font-semibold text-white bg-teal-500 shadow-md"
              >
                Book Appointment Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
