import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ContactSection } from './components/ContactSection';

import docStunting1 from './assets/images/dokumentasi_stunting_1.png';
import docStunting2 from './assets/images/dokumentasi_stunting_2.png';
import docRIF from './assets/images/dokumentasi_RIF_fix.png';
import docPdam from './assets/images/dokumentasi_pdam_dashboard.png';
import docRag from './assets/images/dokumentasi_rag.png';

/*
|--------------------------------------------------------------------------
| DESIGN SYSTEM
|--------------------------------------------------------------------------
| Soft / icy blue portfolio
|
| Background       #F3F8FE
| Soft background  #E8F1FC
| Primary          #5B7FC4
| Primary dark     #4569A8
| Soft blue        #8FB5E8
| Text             #263B5C
| Secondary text   #526C96
| Muted            #7890B3
| Border           #D4E1F2
|--------------------------------------------------------------------------
*/

/* -------------------------------------------------------------------------- */
/* GLASS FLOWER LOGO                                                          */
/* -------------------------------------------------------------------------- */

export function GlassFlowerLogo({
  className = 'w-8 h-8 sm:w-9 sm:h-9',
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 select-none ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient
            id="navGlassOuter"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#D2E4FC" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#A3C5F8" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient
            id="navGlassMid"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#E6F0FE" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#87B0F0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4A75D0" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient
            id="navRim"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#D5E5FC" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#87B0F0" stopOpacity="0.3" />
          </linearGradient>

          <radialGradient
            id="navDarkCore"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor="#224498" stopOpacity="0.98" />
            <stop offset="45%" stopColor="#3B63C8" stopOpacity="0.85" />
            <stop offset="80%" stopColor="#6993E4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#A8C9FC" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g>
          {/* Outer 6 overlapping translucent petals (lightest on outside) */}
          <circle
            cx="50"
            cy="34"
            r="19"
            fill="url(#navGlassOuter)"
            stroke="url(#navRim)"
            strokeWidth="0.8"
          />
          <circle
            cx="63.8"
            cy="42"
            r="19"
            fill="url(#navGlassOuter)"
            stroke="url(#navRim)"
            strokeWidth="0.8"
          />
          <circle
            cx="63.8"
            cy="58"
            r="19"
            fill="url(#navGlassOuter)"
            stroke="url(#navRim)"
            strokeWidth="0.8"
          />
          <circle
            cx="50"
            cy="66"
            r="19"
            fill="url(#navGlassOuter)"
            stroke="url(#navRim)"
            strokeWidth="0.8"
          />
          <circle
            cx="36.2"
            cy="58"
            r="19"
            fill="url(#navGlassOuter)"
            stroke="url(#navRim)"
            strokeWidth="0.8"
          />
          <circle
            cx="36.2"
            cy="42"
            r="19"
            fill="url(#navGlassOuter)"
            stroke="url(#navRim)"
            strokeWidth="0.8"
          />

          {/* Inner ring petals */}
          <circle
            cx="50"
            cy="40"
            r="12"
            fill="url(#navGlassMid)"
            stroke="url(#navRim)"
            strokeWidth="0.6"
          />
          <circle
            cx="58.6"
            cy="45"
            r="12"
            fill="url(#navGlassMid)"
            stroke="url(#navRim)"
            strokeWidth="0.6"
          />
          <circle
            cx="58.6"
            cy="55"
            r="12"
            fill="url(#navGlassMid)"
            stroke="url(#navRim)"
            strokeWidth="0.6"
          />
          <circle
            cx="50"
            cy="60"
            r="12"
            fill="url(#navGlassMid)"
            stroke="url(#navRim)"
            strokeWidth="0.6"
          />
          <circle
            cx="41.4"
            cy="55"
            r="12"
            fill="url(#navGlassMid)"
            stroke="url(#navRim)"
            strokeWidth="0.6"
          />
          <circle
            cx="41.4"
            cy="45"
            r="12"
            fill="url(#navGlassMid)"
            stroke="url(#navRim)"
            strokeWidth="0.6"
          />

          {/* Dark Royal Blue Core */}
          <circle cx="50" cy="50" r="15" fill="url(#navDarkCore)" />
          <circle cx="50" cy="50" r="7" fill="#234599" opacity="0.95" />
          <circle cx="50" cy="50" r="3" fill="#FFFFFF" opacity="0.95" />
        </g>
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* HERO GLASS FLOWER                                                          */
/* -------------------------------------------------------------------------- */

export function HeroGlassFlower({
  className = 'w-[320px] h-[320px] sm:w-[420px] sm:h-[420px]',
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 pointer-events-none select-none ${className}`}
    >
      {/* Soft ambient glow behind flower */}
      <div className="absolute inset-0 rounded-full bg-radial from-[#3862C7]/30 via-[#8BB0F0]/15 to-transparent blur-[85px]" />

      <svg
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient
            id="heroOuterGlass"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#D4E5FC" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#9EC3FA" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient
            id="heroMidGlass"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#87B0F0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3F68C4" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient
            id="heroInnerGlass"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#D8E8FE" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#416ACA" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#25489C" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient
            id="heroRimGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#E2EEFE" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8BB0F0" stopOpacity="0.25" />
          </linearGradient>

          <radialGradient
            id="heroDarkCore"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor="#1E3C88" stopOpacity="0.98" />
            <stop offset="30%" stopColor="#2A4EA2" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#3C64C8" stopOpacity="0.7" />
            <stop offset="85%" stopColor="#6C95E6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9EC3FA" stopOpacity="0" />
          </radialGradient>

          <filter
            id="heroSoftBlur"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite
              in="SourceGraphic"
              in2="blur"
              operator="over"
            />
          </filter>
        </defs>

        <g filter="url(#heroSoftBlur)">
          {/* Outer layer of translucent glass petals (lightest outside) */}
          <circle
            cx="150"
            cy="98"
            r="58"
            fill="url(#heroOuterGlass)"
            stroke="url(#heroRimGrad)"
            strokeWidth="1.2"
          />
          <circle
            cx="197"
            cy="118"
            r="58"
            fill="url(#heroOuterGlass)"
            stroke="url(#heroRimGrad)"
            strokeWidth="1.2"
          />
          <circle
            cx="202"
            cy="173"
            r="58"
            fill="url(#heroOuterGlass)"
            stroke="url(#heroRimGrad)"
            strokeWidth="1.2"
          />
          <circle
            cx="162"
            cy="208"
            r="58"
            fill="url(#heroOuterGlass)"
            stroke="url(#heroRimGrad)"
            strokeWidth="1.2"
          />
          <circle
            cx="108"
            cy="200"
            r="58"
            fill="url(#heroOuterGlass)"
            stroke="url(#heroRimGrad)"
            strokeWidth="1.2"
          />
          <circle
            cx="95"
            cy="143"
            r="58"
            fill="url(#heroOuterGlass)"
            stroke="url(#heroRimGrad)"
            strokeWidth="1.2"
          />
          <circle
            cx="120"
            cy="102"
            r="58"
            fill="url(#heroOuterGlass)"
            stroke="url(#heroRimGrad)"
            strokeWidth="1.2"
          />

          {/* Middle layer */}
          <circle
            cx="150"
            cy="120"
            r="38"
            fill="url(#heroMidGlass)"
            stroke="url(#heroRimGrad)"
            strokeWidth="1.1"
          />
          <circle
            cx="178"
            cy="150"
            r="38"
            fill="url(#heroMidGlass)"
            stroke="url(#heroRimGrad)"
            strokeWidth="1.1"
          />
          <circle
            cx="150"
            cy="180"
            r="38"
            fill="url(#heroMidGlass)"
            stroke="url(#heroRimGrad)"
            strokeWidth="1.1"
          />
          <circle
            cx="122"
            cy="150"
            r="38"
            fill="url(#heroMidGlass)"
            stroke="url(#heroRimGrad)"
            strokeWidth="1.1"
          />

          {/* Inner ring */}
          <circle
            cx="150"
            cy="135"
            r="24"
            fill="url(#heroInnerGlass)"
            stroke="url(#heroRimGrad)"
            strokeWidth="1"
          />
          <circle
            cx="165"
            cy="150"
            r="24"
            fill="url(#heroInnerGlass)"
            stroke="url(#heroRimGrad)"
            strokeWidth="1"
          />
          <circle
            cx="150"
            cy="165"
            r="24"
            fill="url(#heroInnerGlass)"
            stroke="url(#heroRimGrad)"
            strokeWidth="1"
          />
          <circle
            cx="135"
            cy="150"
            r="24"
            fill="url(#heroInnerGlass)"
            stroke="url(#heroRimGrad)"
            strokeWidth="1"
          />

          {/* Dark Royal Blue Core */}
          <circle cx="150" cy="150" r="45" fill="url(#heroDarkCore)" />
          <circle cx="150" cy="150" r="22" fill="#224498" opacity="0.95" />
          <circle cx="150" cy="150" r="10" fill="#365CBE" opacity="0.9" />
          <circle cx="150" cy="150" r="4" fill="#FFFFFF" opacity="0.98" />
        </g>
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* COMPANY LOGO                                                               */
/* -------------------------------------------------------------------------- */

export function CompanyLogo({
  src,
  alt,
  className = '',
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  const defaultSrc = '/images/company-logo-placeholder.svg';
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`
        shrink-0
        w-11 h-11
        rounded-xl
        bg-white
        border border-[#D4E1F2]
        shadow-[0_4px_14px_rgba(69,105,168,0.06)]
        flex items-center justify-center
        overflow-hidden
        transition-transform duration-300
        group-hover:scale-105
        ${className}
      `}
    >
      <img
        src={imgError || !src ? defaultSrc : src}
        alt={alt}
        onError={() => setImgError(true)}
        className="w-full h-full object-contain p-1.5"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* PROJECT PREVIEW                                                            */
/* -------------------------------------------------------------------------- */

export function ProjectPreview({
  src,
  images,
  alt,
  className = '',
}: {
  src?: string;
  images?: string[];
  alt: string;
  className?: string;
}) {
  const defaultSrc = '/images/project-placeholder.svg';

  const imageList =
    images && images.length > 0
      ? images
      : [src || defaultSrc];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgErrors, setImgErrors] = useState<
    Record<number, boolean>
  >({});

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentIndex((prev) =>
      prev === 0 ? imageList.length - 1 : prev - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentIndex((prev) =>
      prev === imageList.length - 1 ? 0 : prev + 1
    );
  };

  const handleDotClick = (
    e: React.MouseEvent,
    index: number
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const currentSrc = imgErrors[currentIndex]
    ? defaultSrc
    : imageList[currentIndex];

  return (
    <div
      className={`
        project-preview
        w-full
        aspect-[16/9]
        bg-[#EAF2FA]
        rounded-[18px]
        overflow-hidden
        border border-[#DCE7F3]
        relative
        group/slider
        ${className}
      `}
    >
      <img
        key={currentIndex}
        src={currentSrc}
        alt={`${alt} ${
          imageList.length > 1
            ? `(${currentIndex + 1}/${imageList.length})`
            : ''
        }`}
        onError={() =>
          setImgErrors((prev) => ({
            ...prev,
            [currentIndex]: true,
          }))
        }
        className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          ease-out
          group-hover/slider:scale-[1.02]
        "
      />

      {imageList.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="
              absolute
              left-2.5
              top-1/2
              -translate-y-1/2
              w-8 h-8
              rounded-full
              bg-white/80
              hover:bg-white
              text-[#4569A8]
              backdrop-blur-md
              flex items-center justify-center
              opacity-90
              sm:opacity-0
              group-hover/slider:opacity-100
              transition-all
              duration-200
              shadow-sm
              cursor-pointer
              z-20
              border border-white/70
            "
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next image"
            className="
              absolute
              right-2.5
              top-1/2
              -translate-y-1/2
              w-8 h-8
              rounded-full
              bg-white/80
              hover:bg-white
              text-[#4569A8]
              backdrop-blur-md
              flex items-center justify-center
              opacity-90
              sm:opacity-0
              group-hover/slider:opacity-100
              transition-all
              duration-200
              shadow-sm
              cursor-pointer
              z-20
              border border-white/70
            "
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div
            className="
              absolute
              bottom-2.5
              left-1/2
              -translate-x-1/2
              flex items-center gap-1.5
              px-2.5 py-1
              rounded-full
              bg-[#263B5C]/35
              backdrop-blur-md
              z-20
            "
          >
            {imageList.map((_, index) => (
              <button
                key={index}
                onClick={(e) =>
                  handleDotClick(e, index)
                }
                aria-label={`Go to slide ${index + 1}`}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  cursor-pointer
                  ${
                    currentIndex === index
                      ? 'bg-white w-4'
                      : 'bg-white/50 w-1.5 hover:bg-white/80'
                  }
                `}
              />
            ))}
          </div>

          <div
            className="
              absolute
              top-2.5
              right-2.5
              px-2.5 py-1
              rounded-full
              bg-[#263B5C]/35
              backdrop-blur-md
              text-white
              text-[10px]
              font-mono
              z-20
              tracking-wider
            "
          >
            {currentIndex + 1} / {imageList.length}
          </div>
        </>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SMALL REUSABLE UI                                                          */
/* -------------------------------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="reveal mb-10">
      <div className="flex items-center gap-2.5 mb-3">
        <span className="w-5 h-px bg-[#8FB5E8] rounded-full" />

        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.18em]
            font-medium
            text-[#6B88B5]
          "
        >
          {eyebrow} ↗
        </span>
      </div>

      <h2
        className="
          text-3xl
          sm:text-4xl
          font-light
          tracking-[-0.04em]
          leading-tight
          text-[#263B5C]
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm text-[#7890B3]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function GlassCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        bg-white/75
        backdrop-blur-xl
        border border-[#D4E1F2]
        rounded-[24px]
        shadow-[0_12px_40px_rgba(69,105,168,0.055)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

function Metric({
  value,
  children,
}: {
  value?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className="
        inline-flex
        items-center
        gap-1.5
        bg-[#F3F7FD]
        border border-[#D7E4F3]
        text-[#526C96]
        px-3
        py-1.5
        rounded-full
        text-xs
        font-normal
      "
    >
      {value && (
        <span className="font-medium text-[#5B7FC4]">
          {value}
        </span>
      )}

      {children}
    </span>
  );
}

function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        text-[11px]
        font-mono
        px-2.5
        py-1
        bg-[#F3F7FD]
        border border-[#D7E4F3]
        rounded-md
        text-[#6B82A6]
      "
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* APP                                                                        */
/* -------------------------------------------------------------------------- */

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isGetStartedExpanded, setIsGetStartedExpanded] =
    useState(false);

  const handleGetStartedClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    setIsGetStartedExpanded(true);

    setTimeout(() => {
      const target = document.getElementById('about');

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
        });
      }

      setTimeout(() => {
        setIsGetStartedExpanded(false);
      }, 900);
    }, 350);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
  }, [mobileMenuOpen]);

  /* Scroll reveal */
  useEffect(() => {
    const revealEls =
      document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
      const observer =
        new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('in');
                observer.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.08,
            rootMargin: '0px 0px -20px 0px',
          }
        );

      revealEls.forEach((element) =>
        observer.observe(element)
      );

      return () => observer.disconnect();
    }

    revealEls.forEach((element) =>
      element.classList.add('in')
    );
  }, []);

  return (
    <div
      className="
        min-h-screen
        bg-[#F3F8FE]
        text-[#263B5C]
        antialiased
        selection:bg-[#5B7FC4]
        selection:text-white
        relative
      "
    >
      {/* ------------------------------------------------------------------ */}
      {/* NAVBAR                                                            */}
      {/* ------------------------------------------------------------------ */}

      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          h-[72px]
          flex
          items-center
          transition-all
          duration-300

          ${
            isScrolled
              ? `
                bg-white/70
                backdrop-blur-2xl
                border-b
                border-[#C8DCF2]/80
                shadow-[0_8px_32px_rgba(69,105,168,0.08)]
              `
              : `
                bg-[#E8F1FC]/20
                backdrop-blur-md
                border-b
                border-white/30
              `
          }
        `}
      >
        {/* Subtle glass reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />
        <div
          className="
            max-w-[1120px]
            mx-auto
            w-full
            px-6
            sm:px-8
            flex
            items-center
            justify-between
          "
        >
          {/* Glass flower logo */}
          <a
            href="#home"
            className="
              flex
              items-center
              group
              transition-transform
              duration-300
              hover:scale-105
            "
            aria-label="Home"
          >
            <GlassFlowerLogo className="w-12 h-12 sm:w-13 sm:h-13" />
          </a>

          {/* Desktop navigation */}
          <nav
            className={`
              hidden
              md:flex
              items-center
              gap-8
              text-[14px]
              font-normal
              transition-colors
              duration-300

              ${
                isScrolled
                  ? 'text-[#526C96]'
                  : 'text-[#526C96]'
              }
            `}
          >
            {[
              ['#home', 'Home'],
              ['#about', 'About'],
              ['#experience', 'Experience'],
              ['#projects', 'Projects'],
              ['#contact', 'Contact'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="
                  py-1
                  relative
                  group
                  transition-colors
                  hover:text-[#4569A8]
                "
              >
                {label}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-px
                    bg-[#5B7FC4]
                    rounded-full
                    transition-all
                    duration-200
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="
              hidden
              sm:inline-flex
              items-center
              gap-2
              text-xs
              font-medium
              px-4.5
              py-2.5
              rounded-full
              relative
              overflow-hidden

              bg-white/60
              backdrop-blur-xl
              border
              border-[#CBDDF2]
              text-[#3B5D98]

              shadow-[0_4px_18px_rgba(69,105,168,0.08)]

              hover:bg-white/85
              hover:border-[#9AC0EE]
              hover:text-[#25447B]
              hover:shadow-[0_8px_25px_rgba(69,105,168,0.16)]
              hover:-translate-y-0.5

              active:scale-[0.95]
              active:bg-[#D5E4F7]/90
              active:border-[#82AEE5]
              active:shadow-inner

              transition-all
              duration-300
              ease-out
              group
              cursor-pointer
              select-none
            "
          >
            {/* Glass reflection highlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

            <span className="relative z-10">Get in touch</span>
            <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#4569A8] group-hover:text-[#25447B]">
              ↗
            </span>
          </a>

          {/* Mobile button */}
          <button
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            className="
              md:hidden
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-full
              border
              border-[#CBDDF2]
              bg-white/80
              backdrop-blur-md
              text-[#3B5D98]
              shadow-[0_4px_14px_rgba(69,105,168,0.08)]
              hover:bg-white
              hover:border-[#9AC0EE]
              hover:shadow-[0_6px_18px_rgba(69,105,168,0.15)]
              active:scale-90
              transition-all
              duration-300
              ease-out
              cursor-pointer
              select-none
              relative
            "
            aria-label="Toggle menu"
          >
            <div className="relative w-4 h-4 flex items-center justify-center">
              <span
                className={`absolute w-4 h-[1.5px] bg-[#3B5D98] rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen
                    ? 'translate-y-0 rotate-45'
                    : '-translate-y-1.5 rotate-0'
                }`}
              />
              <span
                className={`absolute w-4 h-[1.5px] bg-[#3B5D98] rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen
                    ? 'translate-y-0 opacity-0 scale-x-0'
                    : 'translate-y-0 opacity-100 scale-x-100'
                }`}
              />
              <span
                className={`absolute w-4 h-[1.5px] bg-[#3B5D98] rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen
                    ? 'translate-y-0 -rotate-45'
                    : 'translate-y-1.5 rotate-0'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className="
              absolute
              top-[72px]
              left-0
              right-0
              bg-white/90
              backdrop-blur-xl
              border-b
              border-[#D4E1F2]
              p-6
              flex
              flex-col
              gap-4
              shadow-[0_12px_35px_rgba(69,105,168,0.08)]
              md:hidden
            "
          >
            {[
              ['#home', 'Home'],
              ['#about', 'About'],
              ['#experience', 'Experience'],
              ['#projects', 'Projects'],
              ['#contact', 'Contact'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="
                  text-base
                  font-normal
                  text-[#526C96]
                  hover:text-[#4569A8]
                  transition-colors
                "
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* HOME / HERO                                                       */}
      {/* ------------------------------------------------------------------ */}

      <section
        className="
          min-h-screen
          flex
          flex-col
          justify-center
          pt-[72px]
          relative
          overflow-hidden
        "
        id="home"
      >
        {/* Main icy gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, #DCEAFF 0%, #E8F1FC 32%, #F3F8FE 72%, #FFFFFF 100%)',
          }}
        />

        {/* Ambient blue glows */}
        <div
          className="
            absolute
            -top-[180px]
            -right-[120px]
            w-[620px]
            h-[620px]
            rounded-full
            bg-[#8FB5E8]/25
            blur-[150px]
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            top-[35%]
            -left-[180px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#AFCFF5]/25
            blur-[140px]
            pointer-events-none
          "
        />

        {/* Very subtle noise */}
        <div
          className="
            absolute
            inset-0
            pointer-events-none
            opacity-[0.018]
            mix-blend-overlay
          "
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[180px]
            bg-gradient-to-b
            from-transparent
            via-[#F3F8FE]/60
            to-[#F3F8FE]
            pointer-events-none
            z-[1]
          "
        />

        <div
          className="
            max-w-[1120px]
            mx-auto
            w-full
            px-6
            sm:px-8
            relative
            z-10
            py-20
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-12
            sm:gap-16
          "
        >
          {/* Hero text */}
          <div className="max-w-2xl flex-1">
            <h1
              className="
                text-4xl
                sm:text-6xl
                md:text-7xl
                font-extralight
                tracking-[-0.04em]
                leading-[1.08]
                text-[#33528A]
              "
            >
              Hi, I'm Deesya
            </h1>

            <p
              className="
                mt-6
                text-base
                sm:text-lg
                text-[#5873A0]
                leading-relaxed
                max-w-xl
                font-light
              "
            >
              A Data Scientist turning data into practical solutions.
              I build data-driven solutions across analytics, machine learning, and AI.
            </p>

            <div className="mt-8 flex items-center">
              <a
                href="#about"
                onClick={handleGetStartedClick}
                className="
                  relative
                  overflow-hidden
                  inline-flex
                  items-center
                  justify-between
                  min-w-[180px]
                  sm:min-w-[195px]
                  h-[48px]
                  pl-6
                  pr-2
                  rounded-full

                  bg-[#E2ECF9]/80
                  backdrop-blur-md
                  text-[#3B5D98]

                  border
                  border-[#CDE0F7]

                  shadow-[0_6px_20px_rgba(69,105,168,0.08)]

                  hover:bg-[#D5E4F7]
                  hover:shadow-[0_8px_25px_rgba(69,105,168,0.12)]
                  hover:scale-[1.01]

                  active:scale-[0.98]

                  transition-all
                  duration-300

                  group
                  cursor-pointer
                  select-none
                "
              >
                <span
                  className={`
                    relative
                    z-10
                    font-normal
                    text-xs
                    sm:text-sm
                    tracking-wide
                    text-[#3B5D98]
                    transition-all
                    duration-300
                    ease-out
                    group-hover:opacity-0
                    group-hover:-translate-x-3

                    ${
                      isGetStartedExpanded
                        ? 'opacity-0 -translate-x-3'
                        : 'opacity-100 translate-x-0'
                    }
                  `}
                >
                  Let's get started
                </span>

                <div
                  className={`
                    absolute
                    top-1.5
                    bottom-1.5
                    right-1.5
                    bg-white
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    shadow-sm
                    rounded-full

                    group-hover:w-[calc(100%-12px)]

                    ${
                      isGetStartedExpanded
                        ? 'w-[calc(100%-12px)]'
                        : 'w-9'
                    }
                  `}
                >
                  <span
                    className="
                      font-normal
                      text-sm
                      text-[#3B5D98]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    →
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Flower ONLY exists here */}
          <div
            className="
              hidden
              md:flex
              items-center
              justify-center
              shrink-0
            "
          >
            <HeroGlassFlower />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* MAIN CONTENT                                                       */}
      {/* ------------------------------------------------------------------ */}

      <main
        className="
          max-w-[1120px]
          mx-auto
          px-6
          sm:px-8
          space-y-24
          pb-28
          relative
          z-10
        "
      >
        {/* ---------------------------------------------------------------- */}
        {/* ABOUT                                                            */}
        {/* ---------------------------------------------------------------- */}

        <section className="pt-8" id="about">
  <SectionHeading
    eyebrow="About me"
    title="Who I am & what I do."
  />

  <div
    className="
      grid
      md:grid-cols-[1.2fr_1fr]
      gap-8
      items-start
    "
  >
    <GlassCard className="p-7 sm:p-8 reveal space-y-5">
      <p
        className="
          text-base
          sm:text-lg
          text-[#526C96]
          leading-relaxed
        "
      >
        I'm a Data Scientist who enjoys turning raw, messy data into things people can
        actually use, whether that's a dashboards, predictive models, or an NLP system built from the ground up.
      </p>

      <p
        className="
          text-base
          sm:text-lg
          text-[#526C96]
          leading-relaxed
        "
      >
        I like working closely with teams to understand what they really need, 
        then building something that makes their decisions a little easier.
      </p>
    </GlassCard>

    <GlassCard className="p-7 sm:p-8 reveal space-y-4">
      {[
        ['Focus', 'Data Analytics · AI · NLP · BI'],
        ['Build', 'Dashboards · ML Models · NLP Systems'],
        ['Tools', 'Python · SQL · Power BI · Tableau'],
        ['Experience', 'Data · ML · AI Engineering'],
        ['Certification', 'BNSP Certified Data Scientist (Issued Nov 2024)']
      ].map(([label, value]) => (
        <div
          key={label}
          className="
            flex
            justify-between
            gap-4
            py-2.5
            border-b
            border-[#DCE7F3]
            text-sm
          "
        >
          <span className="text-[#7890B3]">
            {label}
          </span>

          <span
            className="
              font-medium
              text-[#263B5C]
              text-right
              max-w-[65%]
            "
          >
            {value}
          </span>
        </div>
      ))}
    </GlassCard>
  </div>
</section>

        {/* ---------------------------------------------------------------- */}
        {/* EXPERIENCE                                                       */}
        {/* ---------------------------------------------------------------- */}

        <section className="pt-4" id="experience">
          <SectionHeading
            eyebrow="Working experience"
            title="Where I've put it to work."
          />

          <div className="space-y-5">
            {/* Experience 1 */}
            <GlassCard className="p-6 sm:p-8 reveal group hover:-translate-y-1 transition-all duration-300">
              <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start">
                <div className="flex flex-col gap-2.5">
                  <CompanyLogo
                    src="/images/ravilia-logo.png"
                    alt="PT Ravilia Studio Inovasi Logo"
                  />

                  <div>
                    <span
                      className="
                        font-mono
                        text-xs
                        text-[#7890B3]
                        block
                      "
                    >
                      Oct 2025 — Present
                    </span>

                    <span
                      className="
                        font-medium
                        text-[#5B7FC4]
                        text-sm
                      "
                    >
                      PT Ravilia Studio Inovasi
                    </span>
                  </div>
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      sm:text-xl
                      font-medium
                      tracking-[-0.015em]
                      text-[#263B5C]
                      mb-2
                      group-hover:text-[#4569A8]
                      transition-colors
                    "
                  >
                    Artificial Intelligence Engineer
                  </h3>

                  <p
                    className="
                      text-[#526C96]
                      text-sm
                      sm:text-base
                      leading-relaxed
                      mb-3
                    "
                  >
                    Built an AI-powered WhatsApp chatbot for a client as a proof of concept, automating
                    billing inquiries, complaints, and customer support. Analyzed 3,000+ monthly interactions during the pilot, reaching an 86.33% CSAT.
                  </p>

                  <p
                    className="
                      text-[#526C96]
                      text-sm
                      sm:text-base
                      leading-relaxed
                      mb-4
                    "
                  >
                    Also built a multi-tenant chatbot platform live across multiple retail businesses
                    on a LangChain agent
                    architecture, with fallback models, OCR,
                    human escalation, and context-aware memory.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Metric value="3,000+">
                      monthly interactions
                    </Metric>

                    <Metric value="86.33%">
                      CSAT
                    </Metric>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Experience 2 */}
            <GlassCard className="p-6 sm:p-8 reveal group hover:-translate-y-1 transition-all duration-300">
              <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start">
                <div className="flex flex-col gap-2.5">
                  <CompanyLogo
                    src="/images/magna-logo.jpg"
                    alt="Magna Partners Logo"
                  />

                  <div>
                    <span
                      className="
                        font-mono
                        text-xs
                        text-[#7890B3]
                        block
                      "
                    >
                      Jun 2024 — Jan 2025
                    </span>

                    <span
                      className="
                        font-medium
                        text-[#5B7FC4]
                        text-sm
                      "
                    >
                      Magna Partners (Remote)
                    </span>
                  </div>
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      sm:text-xl
                      font-medium
                      tracking-[-0.015em]
                      text-[#263B5C]
                      mb-2
                      group-hover:text-[#4569A8]
                      transition-colors
                    "
                  >
                    Data Scientist Associate
                  </h3>

                  <p
                    className="
                      text-[#526C96]
                      text-sm
                      sm:text-base
                      leading-relaxed
                      mb-4
                    "
                  >
                    Contributed to the development of an automated RAG-based CV feedback system 
                    that scores candidate's resumes and generates actionable improvement suggestions.
                    Also annotated a dataset of 100+ student CVs (PDF) for an object detection task used in training the model.
                  </p>

                  <div className="flex flex-wrap gap-2">
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Experience 3 */}
            <GlassCard className="p-6 sm:p-8 reveal group hover:-translate-y-1 transition-all duration-300">
              <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start">
                <div className="flex flex-col gap-2.5">
                  <CompanyLogo
                    src="/images/ojk-logo.png"
                    alt="Otoritas Jasa Keuangan Logo"
                  />

                  <div>
                    <span
                      className="
                        font-mono
                        text-xs
                        text-[#7890B3]
                        block
                      "
                    >
                      Sep — Dec 2024
                    </span>

                    <span
                      className="
                        font-medium
                        text-[#5B7FC4]
                        text-sm
                      "
                    >
                      Otoritas Jasa Keuangan, Jakarta
                    </span>
                  </div>
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      sm:text-xl
                      font-medium
                      tracking-[-0.015em]
                      text-[#263B5C]
                      mb-2
                      group-hover:text-[#4569A8]
                      transition-colors
                    "
                  >
                    Junior Data Analyst Intern
                  </h3>

                  <p
                    className="
                      text-[#526C96]
                      text-sm
                      sm:text-base
                      leading-relaxed
                      mb-4
                    "
                  >
                    Selected for MSIB Kampus Merdeka Batch 7
                    from 25,199 applicants. Created 70+ SQL
                    queries across audit scenarios and built
                    ARK Monitoring and Risk Management
                    dashboards in Tableau, working closely
                    with business teams on requirements.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Metric value="0.39%">
                      acceptance rate
                    </Metric>

                    <Metric value="70+">
                      SQL queries
                    </Metric>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Experience 4 */}
            <GlassCard className="p-6 sm:p-8 reveal group hover:-translate-y-1 transition-all duration-300">
              <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start">
                <div className="flex flex-col gap-2.5">
                  <CompanyLogo
                    src="/images/pdam-logo.jpg"
                    alt="PDAM Surya Sembada Logo"
                  />

                  <div>
                    <span
                      className="
                        font-mono
                        text-xs
                        text-[#7890B3]
                        block
                      "
                    >
                      Jan — Jun 2024
                    </span>

                    <span
                      className="
                        font-medium
                        text-[#5B7FC4]
                        text-sm
                      "
                    >
                      PDAM Surya Sembada, Surabaya
                    </span>
                  </div>
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      sm:text-xl
                      font-medium
                      tracking-[-0.015em]
                      text-[#263B5C]
                      mb-2
                      group-hover:text-[#4569A8]
                      transition-colors
                    "
                  >
                    Machine Learning Engineer Intern
                  </h3>

                  <p
                    className="
                      text-[#526C96]
                      text-sm
                      sm:text-base
                      leading-relaxed
                      mb-4
                    "
                  >
                    Built an NLP system that classifies customer complaints by topic (e.g. leakage,
                    outages, meter issues, service), question vs. statement, and sentiment, using fine-tuned
                    BERT models trained on 4,668 real complaints.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Metric value="97%">
                      sentiment accuracy
                    </Metric>

                    <Metric value="87%">
                      classification accuracy
                    </Metric>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* PROJECTS                                                         */}
        {/* ---------------------------------------------------------------- */}

        <section className="pt-4" id="projects">
          <SectionHeading
            eyebrow="Project experience"
            title="A few things I've shipped."
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Project 1: SEC Filing Research Assistant */}
            <GlassCard className="overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 reveal">
              <ProjectPreview
                src={docRag}
                alt="SEC Filing Research Assistant"
              />

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3
                      className="
                        text-lg
                        font-medium
                        tracking-[-0.015em]
                        text-[#263B5C]
                        group-hover:text-[#4569A8]
                        transition-colors
                      "
                    >
                      SEC Filing Research Assistant
                    </h3>

                    <span className="font-mono text-xs text-[#7890B3] shrink-0">
                      2025
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#526C96] leading-relaxed">
                    A hybrid Retrieval-Augmented Generation system for financial Q&amp;A, combining
                    vector search over SEC EDGAR 10-K filings (via Qdrant) with structured financial
                    data in SQLite, powered by Llama to answer questions like net income, year over year
                    revenue trends, and MD&amp;A highlights on demand for companies like Apple, Alphabet,
                    Tesla, P&amp;G, and Microsoft.
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <TechTag>RAG</TechTag>
                    <TechTag>Qdrant</TechTag>
                    <TechTag>SQLite</TechTag>
                    <TechTag>Llama</TechTag>
                  </div>

                  <a
                    href="https://github.com/rapunzie/sec-rag-hybrid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-xs
                      sm:text-sm
                      font-medium
                      text-[#5B7FC4]
                      inline-flex
                      items-center
                      gap-1
                      group-hover:translate-x-1
                      transition-transform
                    "
                  >
                    View project ↗
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Project 2 */}
            <GlassCard className="overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 reveal">
              <ProjectPreview
                src={docRIF}
                alt="Risk in Focus & ARK Monitoring"
              />

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3
                      className="
                        text-lg
                        font-medium
                        tracking-[-0.015em]
                        text-[#263B5C]
                        group-hover:text-[#4569A8]
                        transition-colors
                      "
                    >
                      Risk in Focus &amp; ARK Monitoring
                    </h3>

                    <span className="font-mono text-xs text-[#7890B3] shrink-0">
                      2024
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#526C96] leading-relaxed">
                    Built two Tableau dashboards at OJK: RIF
                    for annual strategic risk reporting, and
                    ARK for real-time operational monitoring
                    via ETL from multiple internal systems.
                    All figures shown are dummy data for confidentiality.
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <TechTag>Tableau</TechTag>
                    <TechTag>SQL Server</TechTag>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Project 3 */}
            <GlassCard className="overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 reveal">
              <ProjectPreview
                src={docPdam}
                alt="Customer Complaints NLP System"
              />

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3
                      className="
                        text-lg
                        font-medium
                        tracking-[-0.015em]
                        text-[#263B5C]
                        group-hover:text-[#4569A8]
                        transition-colors
                      "
                    >
                      Customer Complaints NLP System
                    </h3>

                    <span className="font-mono text-xs text-[#7890B3] shrink-0">
                      Thesis · 2024
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#526C96] leading-relaxed">
                    Built a full NLP system for PDAM (a project I started during my internship there),
                    covering sentiment analysis, question/statement classification, and monthly
                    complaint summarization. Used fine-tuned IndoBERT and Llama via Groq, achieving
                    93.48% classification accuracy and 85.12% BERTScore F1 for summarization.
                    All figures shown are dummy data for confidentiality.
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <TechTag>IndoBERT</TechTag>
                    <TechTag>Llama</TechTag>
                    <TechTag>FastAPI</TechTag>
                    <TechTag>PostgreSQL</TechTag>
                    <TechTag>React</TechTag>
                    <TechTag>Tailwind</TechTag>
                  </div>

                  <a
                    href="https://github.com/rapunzie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-xs
                      sm:text-sm
                      font-medium
                      text-[#5B7FC4]
                      inline-flex
                      items-center
                      gap-1
                      group-hover:translate-x-1
                      transition-transform
                    "
                  >
                    View project ↗
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Project 4: Stunting Prevalence Dashboard, NTT */}
            <GlassCard className="overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 reveal">
              <ProjectPreview
                images={[docStunting1, docStunting2]}
                alt="Stunting Prevalence Dashboard"
              />

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3
                      className="
                        text-lg
                        font-medium
                        tracking-[-0.015em]
                        text-[#263B5C]
                        group-hover:text-[#4569A8]
                        transition-colors
                      "
                    >
                      Stunting Prevalence Dashboard, NTT
                    </h3>

                    <span className="font-mono text-xs text-[#7890B3] shrink-0">
                      2023
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#526C96] leading-relaxed">
                    Built a Power BI dashboard analyzing stunting prevalence across NTT (2018–2022),
                    combining national comparisons, provincial trends, and cluster mapping to surface
                    where the problem is concentrated. The dashboard also generates program
                    recommendations tied to clean water and sanitation access.
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <TechTag>Python</TechTag>
                    <TechTag>Power BI</TechTag>
                    <TechTag>DAX</TechTag>
                  </div>

                  <a
                    href="https://github.com/rapunzie/stunting-ntt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-xs
                      sm:text-sm
                      font-medium
                      text-[#5B7FC4]
                      inline-flex
                      items-center
                      gap-1
                      group-hover:translate-x-1
                      transition-transform
                    "
                  >
                    View project ↗
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

            {/* Temporarily disabled: Website Audience Analytics, detikcom
            <GlassCard className="overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 reveal">
              <ProjectPreview
                src="/images/project-placeholder.svg"
                alt="Website Audience Analytics, detikcom"
              />

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3
                      className="
                        text-lg
                        font-medium
                        tracking-[-0.015em]
                        text-[#263B5C]
                        group-hover:text-[#4569A8]
                        transition-colors
                      "
                    >
                      Website Audience Analytics, detikcom
                    </h3>

                    <span className="font-mono text-xs text-[#7890B3] shrink-0">
                      Aug 2024
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#526C96] leading-relaxed">
                    Power BI dashboard categorizing page titles
                    into nine content groups, surfacing that
                    Entertainment drove the most traffic but
                    also the highest bounce, with strategy
                    recommendations to balance sources.
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <TechTag>Power BI</TechTag>
                  </div>

                  <a
                    href="https://github.com/rapunzie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-xs
                      sm:text-sm
                      font-medium
                      text-[#5B7FC4]
                      inline-flex
                      items-center
                      gap-1
                      group-hover:translate-x-1
                      transition-transform
                    "
                  >
                    View project ↗
                  </a>
                </div>
              </div>
            </GlassCard>
            */}
         </section>


        {/* ---------------------------------------------------------------- */}
        {/* CONTACT                                                          */}
        {/* ---------------------------------------------------------------- */}

        <ContactSection />
      </main>

      {/* ------------------------------------------------------------------ */}
      {/* FOOTER                                                             */}
      {/* ------------------------------------------------------------------ */}

      <footer
        className="
          border-t
          border-[#D4E1F2]
          bg-white/65
          backdrop-blur-md
          py-8
          relative
          z-10
        "
      >
        <div
          className="
            max-w-[1120px]
            mx-auto
            px-6
            sm:px-8
            flex
            justify-center
            items-center
            text-xs
            text-[#7890B3]
            text-center
          "
        >
          <span>
            © 2026 Deesya Lovely Susanto. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}