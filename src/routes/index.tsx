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

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const PHONE = "03075395951";
const PHONE_INTL = "923075395951";
const ADDRESS =
  "Plaza #22, N Block Market, 1st Floor, Khayaban-e-Amin, Lahore";

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-solar-gradient shadow-sm">
            <Sun className="h-5 w-5 text-navy" strokeWidth={2.5} />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-[15px] font-bold leading-tight text-foreground">
              Professional Energie
            </span>
            <span className="block truncate text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
              Company
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
            <BadgeCheck className="h-3.5 w-3.5 text-accent" />
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

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-full bg-solar-gradient px-6 py-3.5 text-sm font-semibold text-navy shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
            >
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
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
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-solar-gradient">
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
            Professional Energie Company is a Lahore-based solar solutions
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
              Why choose Professional Energie?
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

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
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
  const [tariff, setTariff] = useState<number>(50);

  const result = useMemo(() => {
    const monthlyUnits = Math.max(1, Math.round(bill / tariff));
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
  }, [bill, tariff]);

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

            <label className="mt-6 block text-sm font-medium text-foreground">
              Monthly Electricity Bill (PKR)
            </label>
            <div className="mt-2 flex items-center rounded-xl border border-input bg-background focus-within:ring-2 focus-within:ring-ring">
              <span className="pl-4 pr-2 text-sm font-semibold text-muted-foreground">
                Rs.
              </span>
              <input
                type="number"
                min={0}
                value={bill}
                onChange={(e) => setBill(Math.max(0, Number(e.target.value) || 0))}
                className="w-full bg-transparent py-3 pr-4 text-lg font-semibold text-foreground outline-none"
              />
            </div>
            <input
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

            <label className="mt-8 block text-sm font-medium text-foreground">
              Avg. Tariff (PKR / unit)
            </label>
            <input
              type="number"
              min={10}
              value={tariff}
              onChange={(e) => setTariff(Math.max(10, Number(e.target.value) || 10))}
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-lg font-semibold text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Typical residential slab tariff in Pakistan is Rs. 40–60 / unit.
            </p>
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

function Projects() {
  const slots = [
    { title: "Residential Rooftop — DHA Lahore", size: "10 kW" },
    { title: "Commercial Warehouse — Sundar Estate", size: "80 kW" },
    { title: "Farmhouse Hybrid — Bedian Road", size: "15 kW + Battery" },
    { title: "Textile Factory — Kot Lakhpat", size: "250 kW" },
    { title: "Villa Installation — Bahria Town", size: "12 kW" },
    { title: "School Rooftop — Model Town", size: "35 kW" },
  ];
  const logoSlots = Array.from({ length: 6 });
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

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((p, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative flex aspect-[4/3] items-center justify-center border-b border-dashed border-border bg-secondary/60">
                <div className="text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-background text-muted-foreground shadow-sm">
                    <ImageIcon className="h-6 w-6" />
                  </span>
                  <p className="mt-3 px-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Admin: Upload project photo
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground/70">
                    Recommended 1200×900 · JPG or PNG
                  </p>
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                  Placeholder
                </span>
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

        <div className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Trusted Partners & Brands
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Admin: upload official partner / manufacturer logos below.
              </p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {logoSlots.map((_, i) => (
              <div
                key={i}
                className="flex aspect-[3/2] items-center justify-center rounded-xl border border-dashed border-border bg-card"
              >
                <div className="text-center">
                  <Building2 className="mx-auto h-5 w-5 text-muted-foreground" />
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Upload logo
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

function Testimonials() {
  const reviews = [
    {
      name: "Ahmed Raza",
      role: "Homeowner · DHA Lahore",
      quote:
        "The team handled everything — from site survey to net metering. My bill dropped from Rs. 38,000 to under Rs. 3,000. Truly professional service.",
    },
    {
      name: "Sana Malik",
      role: "Business Owner · Gulberg",
      quote:
        "Extremely knowledgeable engineers and clean installation. Their after-sales support is what makes them stand out.",
    },
    {
      name: "Bilal Khan",
      role: "Factory Manager · Kot Lakhpat",
      quote:
        "Our 250 kW system was commissioned on time and is exceeding projected yields. Highly recommend Professional Energie.",
    },
    {
      name: "Fatima Iqbal",
      role: "Homeowner · Bahria Town",
      quote:
        "Transparent pricing, quality panels and no hidden charges. Payback is exactly on track with what they promised.",
    },
    {
      name: "Usman Sheikh",
      role: "School Administrator",
      quote:
        "Excellent workmanship. Our monthly electricity spend has effectively become zero during sunny months.",
    },
  ];
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-start">
          <div>
            <SectionTag>Testimonials & Reviews</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Loved by homeowners & businesses across Lahore.
            </h2>

            <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                  ))}
                </div>
                <span className="font-display text-3xl font-bold text-foreground">5.0</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Based on <span className="font-semibold text-foreground">5 verified reviews</span>
              </p>
              <div className="mt-5 rounded-xl bg-accent/15 p-4 text-sm text-foreground">
                <p className="font-semibold">100% recommendation rate</p>
                <p className="mt-1 text-muted-foreground">
                  Every reviewer would recommend Professional Energie Company to
                  a friend.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                    {r.name[0]}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {r.name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">{r.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-hero-gradient py-20 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionTag>Free Consultation</SectionTag>
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
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
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
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
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
    <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur transition hover:bg-white/10">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-solar-gradient text-navy">
        <Icon className="h-5 w-5" />
      </span>
      <p className="min-w-0 pt-1.5 text-sm font-medium text-white">{label}</p>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
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
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-solar-gradient">
              <Sun className="h-5 w-5 text-navy" strokeWidth={2.5} />
            </span>
            <div>
              <p className="font-display text-base font-bold">Professional Energie</p>
              <p className="text-[11px] uppercase tracking-widest text-white/60">Company</p>
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
          <p>© {new Date().getFullYear()} Professional Energie Company. All rights reserved.</p>
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
        "Hi Professional Energie, I'd like a free solar consultation.",
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
