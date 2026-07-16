import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Sun,
  Zap,
  ShieldCheck,
  Wrench,
  BatteryCharging,
  PhoneCall,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Leaf,
  BadgeCheck,
  ImageIcon,
  Building2,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import logoImg from "@/assets/logo.png";
import ogCover from "@/assets/og-cover.png";
import { Preloader } from "@/components/Preloader";

const SITE_URL = "https://solar-shine-gateway.lovable.app";
const PAGE_TITLE = "Professional Energiez — Solar Solutions in Lahore";
const PAGE_DESC =
  "Professional Energiez Company designs, installs and maintains premium solar energy systems in Lahore. Free consultation, savings calculator, 24/7 support.";
const OG_IMAGE = `${SITE_URL}${ogCover}`;

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Professional Energiez Company",
          description: PAGE_DESC,
          url: SITE_URL,
          telephone: "+92-307-5395951",
          image: OG_IMAGE,
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Plaza #22, N Block Market, 1st Floor, Khayaban-e-Amin",
            addressLocality: "Lahore",
            addressCountry: "PK",
          },
          openingHours: "Mo-Su 09:00-21:00",
          areaServed: "Lahore, Pakistan",
        }),
      },
    ],
  }),
});

const PHONE = "03075395951";
const PHONE_INTL = "923075395951";
const ADDRESS =
  "Plaza #22, N Block Market, 1st Floor, Khayaban-e-Amin, Lahore";

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Preloader />
      <TopBar />
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Calculator />
      <Projects />
      <Testimonials />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/* ---------------- Header ---------------- */

function TopBar() {
  return (
    <div className="hidden md:block bg-navy text-navy-foreground text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <div className="flex items-center gap-6 opacity-90">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-accent" /> {ADDRESS}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-accent" /> Open 24/7
          </span>
        </div>
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-2 font-medium hover:text-accent transition-colors"
        >
          <PhoneCall className="h-3.5 w-3.5 text-accent" /> {PHONE}
        </a>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#calculator", label: "Calculator" },
    { href: "#projects", label: "Projects" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 md:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <img
            src={logoImg}
            alt="Professional Energiez Company"
            className="h-11 w-11 shrink-0 object-contain"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-[15px] font-bold leading-tight text-foreground sm:text-base">
              Professional Energiez
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            Free Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-lg border border-border text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#calculator"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-gradient text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 md:px-6 md:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur">
            <span className="icon-radiate grid h-5 w-5 place-items-center rounded-full bg-accent text-navy">
              <BadgeCheck className="h-3 w-3" />
            </span>
            Trusted Solar Experts in Lahore
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            Power your future with <span className="text-solar-gradient">premium solar</span> energy.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Cut your electricity bill by up to 90%. We engineer, install and
            maintain high-efficiency solar systems built to perform for
            decades — backed by 24/7 support.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#calculator"
              className="inline-flex min-w-[240px] items-center justify-center gap-2 rounded-full bg-solar-gradient px-6 py-3.5 text-sm font-semibold text-navy shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
            >
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex min-w-[240px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4" /> {PHONE}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
            <Stat value="500+" label="Installations" />
            <Stat value="25 yr" label="Panel Warranty" />
            <Stat value="24/7" label="Support" />
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60">Live estimate</p>
                <p className="mt-1 font-display text-2xl font-bold">Your Solar Savings</p>
              </div>
              <span className="icon-radiate grid h-12 w-12 place-items-center rounded-full bg-solar-gradient">
                <Sun className="h-6 w-6 text-navy" />
              </span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <MiniCard label="Avg. Monthly Savings" value="Rs. 32,000" />
              <MiniCard label="Payback Period" value="3–4 yrs" />
              <MiniCard label="25-yr Savings" value="Rs. 96 Lakh+" />
              <MiniCard label="CO₂ Offset" value="4.2 t/yr" />
            </div>
            <a
              href="#calculator"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-navy transition hover:bg-white/90"
            >
              Calculate My Savings <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-40 w-40 rounded-full bg-solar-gradient opacity-40 blur-3xl md:block" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-bold text-accent sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs text-white/70 sm:text-sm">{label}</p>
    </div>
  );
}

function MiniCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <p className="text-[11px] uppercase tracking-wide text-white/60">{label}</p>
      <p className="mt-1 font-display text-lg font-bold text-white">{value}</p>
    </div>
  );
}

/* ---------------- Trust Bar ---------------- */

function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Tier-1 Panels Only" },
    { icon: BadgeCheck, label: "NEPRA Compliant" },
    { icon: Wrench, label: "In-house Engineers" },
    { icon: Leaf, label: "Eco-Certified" },
  ];
  return (
    <section className="border-b border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-6 md:grid-cols-4 md:px-6">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/20 text-primary">
              <it.icon className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium text-foreground">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 md:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionTag>About Us</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
            Engineering Pakistan's transition to <span className="text-primary">clean, reliable power</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Professional Energiez Company is a Lahore-based solar solutions
            provider specializing in residential, commercial and industrial
            installations. From site survey to net-metering approval, our
            in-house engineers deliver end-to-end systems designed for
            maximum yield and long-term performance.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            We combine Tier-1 hardware with meticulous workmanship and 24/7
            after-sales support — because a solar investment should return
            value for decades, not seasons.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { k: "10+", v: "Years Experience" },
              { k: "5.0★", v: "Customer Rating" },
              { k: "500+", v: "Systems Installed" },
              { k: "24/7", v: "Service Support" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-card p-5">
                <p className="font-display text-2xl font-bold text-primary">{s.k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-border bg-secondary/60 p-8">
            <h3 className="font-display text-xl font-bold text-foreground">
              Why choose Professional Energiez?
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "Certified engineers & licensed installation crews",
                "Only Tier-1 panels and reputable inverters",
                "Free site survey and load analysis",
                "Complete net-metering paperwork handled",
                "10-year workmanship, 25-year performance warranty",
                "Round-the-clock monitoring & support",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <BadgeCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTag({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  const styles =
    tone === "dark"
      ? "border-white/30 bg-white/10 text-white backdrop-blur"
      : "border-primary/20 bg-primary/5 text-primary";
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border ${styles} px-3 py-1 text-xs font-semibold uppercase tracking-widest`}>
      <span className="icon-radiate h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

/* ---------------- Services ---------------- */

function Services() {
  const services = [
    {
      icon: Sun,
      title: "Residential Solar",
      desc: "Custom-designed rooftop systems that eliminate your monthly bill and future-proof your home.",
    },
    {
      icon: Building2,
      title: "Commercial & Industrial",
      desc: "Scalable C&I installations from 25kW to multi-MW with rapid payback and audited savings.",
    },
    {
      icon: Zap,
      title: "Net Metering",
      desc: "End-to-end LESCO / NEPRA net-metering approvals so you sell surplus power back to the grid.",
    },
    {
      icon: BatteryCharging,
      title: "Hybrid & Battery Backup",
      desc: "Advanced lithium storage systems for uninterrupted power, day and night.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Cleaning",
      desc: "Scheduled inspections, panel cleaning and performance tuning to protect your yield.",
    },
    {
      icon: ShieldCheck,
      title: "System Health Audit",
      desc: "Diagnose underperforming arrays, replace faulty components and restore full output.",
    },
  ];
  return (
    <section id="services" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTag>Our Services</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Complete solar solutions, under one roof.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From design and installation to lifetime maintenance — everything
            you need to switch to solar with confidence.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-solar-gradient group-hover:text-navy">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-all group-hover:bg-accent/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Calculator ---------------- */

function Calculator() {
  const [bill, setBill] = useState<number>(25000);

  const result = useMemo(() => {
    const avgTariff = 50;
    const monthlyUnits = Math.max(1, Math.round(bill / avgTariff));
    // ~4 sun-hours/day, 30 days -> 120 kWh per kW/month
    const systemKw = Math.max(1, +(monthlyUnits / 120).toFixed(1));
    const offsetPct = 90;
    const monthlySavings = Math.round(bill * (offsetPct / 100));
    const yearlySavings = monthlySavings * 12;
    const estCost = Math.round(systemKw * 165000); // Rs / kW indicative
    const paybackYears = +(estCost / yearlySavings).toFixed(1);
    const co2Tons = +(systemKw * 1.4).toFixed(1); // rough annual
    return {
      monthlyUnits,
      systemKw,
      monthlySavings,
      yearlySavings,
      estCost,
      paybackYears,
      co2Tons,
    };
  }, [bill]);

  const fmt = (n: number) => "Rs. " + n.toLocaleString("en-PK");

  return (
    <section id="calculator" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTag>Solar Savings Calculator</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            See how much you'll save.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Enter your average monthly electricity bill to estimate the system
            size, savings and payback period.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/5 lg:grid-cols-5">
          <div className="lg:col-span-2 bg-secondary/60 p-8">
            <h3 className="font-display text-xl font-bold text-foreground">
              Your bill
            </h3>

            <label htmlFor="calc-bill" className="mt-6 block text-sm font-medium text-foreground">
              Monthly Electricity Bill (PKR)
            </label>
            <div className="mt-2 flex items-center rounded-xl border border-input bg-background focus-within:ring-2 focus-within:ring-ring">
              <span className="pl-4 pr-2 text-sm font-semibold text-muted-foreground">
                Rs.
              </span>
              <input
                id="calc-bill"
                type="number"
                min={0}
                value={bill}
                onChange={(e) => setBill(Math.max(0, Number(e.target.value) || 0))}
                className="w-full bg-transparent py-3 pr-4 text-lg font-semibold text-foreground outline-none"
              />
            </div>
            <input
              id="calc-bill-range"
              aria-label="Monthly electricity bill in rupees"
              type="range"
              min={5000}
              max={500000}
              step={1000}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="mt-4 w-full accent-primary"
            />
            <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
              <span>Rs. 5k</span><span>Rs. 500k</span>
            </div>

          </div>

          <div className="lg:col-span-3 p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Recommended
                </p>
                <p className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  {result.systemKw} kW Solar System
                </p>
              </div>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-solar-gradient text-navy shadow">
                <Sun className="h-7 w-7" />
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <ResultCard label="Monthly Savings" value={fmt(result.monthlySavings)} highlight />
              <ResultCard label="Yearly Savings" value={fmt(result.yearlySavings)} />
              <ResultCard label="Est. System Cost" value={fmt(result.estCost)} />
              <ResultCard label="Payback Period" value={`${result.paybackYears} yrs`} />
              <ResultCard label="Monthly Units" value={`${result.monthlyUnits} kWh`} />
              <ResultCard label="CO₂ Offset / yr" value={`${result.co2Tons} tons`} />
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-primary/25 bg-primary/5 p-4 text-sm text-muted-foreground">
              Estimates are indicative and depend on roof size, shading and
              consumption patterns. Book a free site survey for a precise quote.
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(
                  `Hi, I'd like a quote for a ${result.systemKw} kW solar system. My monthly bill is Rs. ${bill}.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5"
              >
                Get Detailed Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                <PhoneCall className="h-4 w-4" /> Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultCard({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        "rounded-xl border p-4 " +
        (highlight
          ? "border-transparent bg-solar-gradient text-navy"
          : "border-border bg-secondary/40 text-foreground")
      }
    >
      <p className={"text-[11px] uppercase tracking-wide " + (highlight ? "text-navy/70" : "text-muted-foreground")}>
        {label}
      </p>
      <p className="mt-1 font-display text-lg font-bold sm:text-xl">{value}</p>
    </div>
  );
}

/* ---------------- Projects ---------------- */

import p26 from "@/assets/projects/IMG-20260710-WA0026.jpg";
import p27 from "@/assets/projects/IMG-20260710-WA0027.jpg";
import p28 from "@/assets/projects/IMG-20260710-WA0028.jpg";
import p29 from "@/assets/projects/IMG-20260710-WA0029.jpg";
import p30 from "@/assets/projects/IMG-20260710-WA0030.jpg";
import p31 from "@/assets/projects/IMG-20260710-WA0031.jpg";
import p32 from "@/assets/projects/IMG-20260710-WA0032.jpg";
import p33 from "@/assets/projects/IMG-20260710-WA0033.jpg";
import p34 from "@/assets/projects/IMG-20260710-WA0034.jpg";
import p35 from "@/assets/projects/IMG-20260710-WA0035.jpg";
import p36 from "@/assets/projects/IMG-20260710-WA0036.jpg";
import p37 from "@/assets/projects/IMG-20260710-WA0037.jpg";
import p38 from "@/assets/projects/IMG-20260710-WA0038.jpg";
import p39 from "@/assets/projects/IMG-20260710-WA0039.jpg";
import p40 from "@/assets/projects/IMG-20260710-WA0040.jpg";
import p41 from "@/assets/projects/IMG-20260710-WA0041.jpg";
import p42 from "@/assets/projects/IMG-20260710-WA0042.jpg";
import p43 from "@/assets/projects/IMG-20260710-WA0043.jpg";
import p44 from "@/assets/projects/IMG-20260710-WA0044.jpg";

function Projects() {
  const projects = [
    { img: p33, title: "Residential Rooftop Array — Lahore", size: "Rooftop Solar" },
    { img: p38, title: "Elevated Ground-Mount Array", size: "High-Yield Setup" },
    { img: p37, title: "Solar Carport Structure", size: "Dual-Purpose Shade + Power" },
    { img: p44, title: "Inverex Nitrox 12kW Hybrid — 3 Phase", size: "12 kW Hybrid" },
    { img: p39, title: "Inverex Nitrox 50kW + 12kW Hybrid Bank", size: "62 kW Combined" },
    { img: p42, title: "Inverex Nitrox 12kW-3P 5G Hybrid", size: "12 kW Hybrid" },
    { img: p41, title: "Huawei On-Grid Inverter Installation", size: "On-Grid System" },
    { img: p43, title: "MaxPower Inverter + Battery Bank", size: "Hybrid + Storage" },
    { img: p40, title: "Crown Nova + Lithium Battery Setup", size: "Hybrid + Lithium" },
    { img: p34, title: "Copper Earthing & Grounding Works", size: "Safety Compliance" },
    { img: p29, title: "Rooftop Panel Array — Residential", size: "Rooftop Solar" },
    { img: p27, title: "Large Rooftop Solar Installation", size: "Commercial Rooftop" },
    { img: p26, title: "High-Capacity Panel Deployment", size: "Rooftop Solar" },
    { img: p28, title: "MaxPower Hybrid Inverter + Battery", size: "Hybrid + Storage" },
    { img: p30, title: "Commercial Steel Structure Prep", size: "Ground-Mount Setup" },
    { img: p31, title: "Elevated Rooftop Solar Structure", size: "Custom Mounting" },
    { img: p32, title: "Growatt Hybrid Inverter Setup", size: "Hybrid Inverter" },
    { img: p35, title: "Solis S5 Series On-Grid Inverter", size: "On-Grid System" },
    { img: p36, title: "Solis Inverter + Distribution Panel", size: "Complete Installation" },
  ];
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 4);
  const remaining = projects.length - 4;

  return (
    <section id="projects" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTag>Our Projects</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Installations powering homes & businesses.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A selection of recently commissioned systems across Lahore and beyond.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((p, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary/60">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {p.size}
                </p>
                <h3 className="mt-1 font-display text-base font-bold text-foreground">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {remaining > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:opacity-90"
            >
              {showAll ? "Show Less" : `Show More Projects (+${remaining})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

function Testimonials() {
  const reviews = [
    { name: "Rao Irfan", role: "Verified Google Review", quote: "Good work 👍", rating: 5 },
    { name: "Ahmed", role: "Verified Google Review", quote: "Good work", rating: 5 },
    { name: "Rana Awais", role: "Verified Google Review", quote: "Excellent service and professional installation. Highly recommended!", rating: 5 },
    { name: "Zahoor Shah Khan", role: "Verified Google Review", quote: "Great experience with Professional Energiez Company.", rating: 5 },
    { name: "Rana Shahbaz", role: "Verified Google Review · 25 photos", quote: "Top quality work and very reliable team.", rating: 5 },
  ];
  const colors = ["bg-pink-600", "bg-orange-600", "bg-emerald-700", "bg-purple-600", "bg-blue-600"];
  const loop = [...reviews, ...reviews];
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="max-w-2xl">
          <SectionTag>Testimonials & Reviews</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Loved by homeowners & businesses across Lahore.
          </h2>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-display text-2xl font-bold text-foreground">5.0</span>
            <span className="text-sm text-muted-foreground">· Verified Google Reviews</span>
          </div>
        </div>
      </div>

      <div
        className="group relative mt-12 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-testimonial-marquee gap-5 group-hover:[animation-play-state:paused]">
          {loop.map((r, idx) => (
            <figure
              key={idx}
              className="flex w-[85vw] max-w-sm shrink-0 flex-col rounded-2xl border border-border bg-card p-6 sm:w-[380px]"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-display font-bold text-white ${colors[idx % colors.length]}`}>
                  {r.name[0]}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">{r.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{r.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-hero-gradient py-20 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:px-6 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionTag tone="dark">Free Consultation</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Ready to slash your electricity bill?
          </h2>
          <p className="mt-4 max-w-lg text-white/75">
            Book a free site survey. Our engineers will design a solar system
            tailored to your consumption, roof and budget — no obligations.
          </p>
          <div className="mt-8 space-y-3">
            <ContactRow icon={PhoneCall} label={PHONE} href={`tel:${PHONE}`} />
            <ContactRow icon={MapPin} label={ADDRESS} />
            <ContactRow icon={Clock} label="Open 24 hours · 7 days a week" />
          </div>
        </div>

        <form
          className="rounded-3xl border border-white/15 bg-white/95 p-6 text-foreground shadow-2xl backdrop-blur"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const msg = `Hi, I'd like a free consultation.%0AName: ${f.get("name")}%0APhone: ${f.get("phone")}%0AMonthly Bill: ${f.get("bill")}%0AMessage: ${f.get("message")}`;
            window.open(`https://wa.me/${PHONE_INTL}?text=${msg}`, "_blank");
          }}
        >
          <h3 className="font-display text-xl font-bold">Request a call back</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            We'll respond within 30 minutes.
          </p>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field name="name" label="Full Name" placeholder="Your name" required />
            <Field name="phone" label="Phone" placeholder="03xx-xxxxxxx" required />
          </div>
          <Field name="bill" label="Monthly Bill (PKR)" placeholder="e.g. 25000" className="mt-3" />
          <div className="mt-3">
            <label htmlFor="cta-message" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              id="cta-message"
              name="message"
              rows={3}
              placeholder="Tell us about your property…"
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
          >
            Send via WhatsApp <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  required,
  className = "",
}: {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={`field-${name}`} className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={`field-${name}`}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  href,
}: {
  icon: typeof PhoneCall;
  label: string;
  href?: string;
}) {
  const inner = (
    <div className="flex min-h-[68px] items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur transition hover:bg-white/10">
      <span className="icon-radiate grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-solar-gradient text-navy">
        <Icon className="h-5 w-5" />
      </span>
      <p className="min-w-0 text-sm font-medium leading-snug text-white">{label}</p>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
}

/* ---------------- Footer ---------------- */

function Footer() {
  const nav = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#calculator", label: "Calculator" },
    { href: "#projects", label: "Projects" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];
  const services = [
    "Residential Solar",
    "Commercial & Industrial",
    "Net Metering",
    "Hybrid & Battery Backup",
    "Maintenance & Cleaning",
    "System Health Audit",
  ];
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <img
              src={logoImg}
              alt="Professional Energiez Company"
              className="h-11 w-11 object-contain"
            />
            <div>
              <p className="font-display text-base font-bold">Professional Energiez</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Premium solar energy solutions — engineered, installed and
            maintained by certified experts in Lahore.
          </p>
          <div className="mt-4 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-xs text-white/70">5.0 · 5 reviews</span>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-accent">
            Sitemap
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-accent transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-accent">
            Services
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="hover:text-accent transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-accent">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{ADDRESS}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${PHONE}`} className="hover:text-accent transition-colors">
                {PHONE}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>Open 24 hours · 7 days a week</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/60 sm:flex-row md:px-6">
          <p>© {new Date().getFullYear()} Professional Energiez Company. All rights reserved.</p>
          <p>Powered by the sun ☀ Built in Lahore.</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- WhatsApp Float ---------------- */

function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(
        "Hi Professional Energiez, I'd like a free solar consultation.",
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-2xl"
    >
      <span className="relative grid h-6 w-6 place-items-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
        <MessageCircle className="relative h-6 w-6" fill="currentColor" strokeWidth={0} />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
    </a>
  );
}
