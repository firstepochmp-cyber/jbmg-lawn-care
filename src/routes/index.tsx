import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect, type MouseEvent } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Scissors,
  Sprout,
  Wind,
  Leaf,
  Star,
  Phone,
  MapPin,
  Clock,
  Mail,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
const logoAsset = { url: "/jbmg-logo.png" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JBMG Lawn Care | Orem's Most Trusted Lawn Care Service" },
      { name: "description", content: "Professional lawn care in Orem, UT. Mowing, fertilization, aeration & weed control. 5.0★ rated. Call (801) 380-0475." },
      { property: "og:title", content: "JBMG Lawn Care | Orem's Most Trusted Lawn Care" },
      { property: "og:description", content: "Eco-friendly residential & commercial lawn care in Orem, UT. 5.0★ Google rated." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "JBMG Lawn Care",
          image: logoAsset.url,
          telephone: "+1-801-380-0475",
          address: {
            "@type": "PostalAddress",
            streetAddress: "78 W 400 S",
            addressLocality: "Orem",
            addressRegion: "UT",
            postalCode: "84058",
            addressCountry: "US",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "11" },
          openingHours: "Mo-Sa 08:00-21:00",
        }),
      },
    ],
  }),
  component: Home,
});

const BRAND = "#3DB33F";
const INK = "#1A1A1A";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function Logo({ size = 44 }: { size?: number }) {
  return (
    <div className="inline-flex items-center gap-3">
      <img
        src={logoAsset.url}
        alt="JBMG Lawn Care logo"
        width={size}
        height={size}
        className="rounded-full object-cover"
        style={{ width: size, height: size }}
      />
      <div className="leading-tight">
        <div className="text-base font-extrabold tracking-tight" style={{ color: INK }}>JBMG Lawn Care</div>
        <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: BRAND }}>Orem, Utah</div>
      </div>
    </div>
  );
}

function GrassModel({ size = 110 }: { size?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ width: size, height: size }} />;
  return (
    <model-viewer
      src="/models/grass-tuft.glb"
      alt="3D grass model"
      auto-rotate
      camera-controls={false}
      disable-zoom
      shadow-intensity="0"
      exposure="1.1"
      loading="eager"
      style={{ width: size, height: size, background: "transparent" }}
    />
  );
}

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };
  return (
    <div ref={ref} onMouseMove={handleMove} className={`spotlight-card ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

const services = [
  { icon: Scissors, title: "Lawn Mowing", desc: "Crisp, even cuts on a reliable weekly or bi-weekly schedule." },
  { icon: Sprout, title: "Fertilization", desc: "Seasonal nutrient programs that build thick, deep-green turf." },
  { icon: Wind, title: "Aeration", desc: "Core aeration to relieve compaction and boost root growth." },
  { icon: Leaf, title: "Weed Control", desc: "Targeted treatments that stop weeds without harming your lawn." },
];

const reviews = [
  {
    name: "Nick Pitts",
    meta: "7 reviews · 1 photo",
    text: "My yard was a mess and I had no idea where to start. I don't usually go looking for lawn care services, but JBMG was recommended to me — and they did an amazing job. The yard looks completely transformed.",
  },
  {
    name: "David Sorenson",
    meta: "1 review",
    text: "I've been using JBMG for over a month now. They are very detailed and always respond quickly to texts and questions. My wife is particular about how the edging gets done, and these guys do it right.",
  },
  {
    name: "Shane Parsons",
    meta: "6 reviews",
    text: "I was out of town for a few weeks and the yard got out of control. I was just planning a one-time clean-up, but they did such a great job and were affordable enough that I kept them on a schedule.",
  },
];

const areas = ["Orem", "Provo", "Lindon", "Vineyard", "Pleasant Grove", "American Fork", "Lehi", "Springville"];

function Home() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: aboutRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {["Services", "About", "Reviews", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
                {l}
              </a>
            ))}
          </nav>
          <a
            href="tel:18013800475"
            className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 md:inline-flex"
            style={{ backgroundColor: BRAND }}
          >
            <Phone className="h-4 w-4" /> (801) 380-0475
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {["Services", "About", "Reviews", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-sm font-medium">
                  {l}
                </a>
              ))}
              <a href="tel:18013800475" className="mt-2 rounded-full px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: BRAND }}>
                Call (801) 380-0475
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/40 via-white to-white" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(${INK} 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold">
              <span className="flex h-2 w-2 rounded-full" style={{ backgroundColor: BRAND }} />
              Locally owned · Orem, UT
            </motion.div>
            <motion.h1 variants={fadeUp} className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Orem's Most Trusted <span style={{ color: BRAND }}>Lawn Care</span>.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-muted-foreground">
              Reliable mowing, fertilization, and seasonal care for residential and commercial properties.
              Eco-friendly practices, sharp results, and people who actually show up.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:opacity-90 hover:scale-[1.03]"
                style={{ backgroundColor: BRAND }}
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:18013800475"
                className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3.5 text-sm font-semibold transition hover:bg-foreground hover:text-white"
                style={{ borderColor: INK, color: INK }}
              >
                <Phone className="h-4 w-4" /> Call Us Now
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">5.0</span> · 11 Google reviews
              </p>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-border bg-white p-3 shadow-lift"
            >
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src="/images/hero-mowing.jpg"
                  alt="JBMG Lawn Care technician mowing a lush green lawn"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-white/95 p-3 shadow-card backdrop-blur md:block"
            >
              <GrassModel />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -4 }}
              className="absolute -top-4 -right-4 hidden rounded-2xl border border-border bg-white p-4 shadow-card md:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: `${BRAND}1a` }}>
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold">5.0 on Google</div>
                  <div className="text-xs text-muted-foreground">11 verified reviews</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ backgroundColor: INK }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-6 py-5 text-sm font-medium text-white">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>5.0 Google Rating</span>
          </div>
          <div className="hidden h-4 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" style={{ color: BRAND }} /> Orem, UT</div>
          <div className="hidden h-4 w-px bg-white/20 sm:block" />
          <div>Residential & Commercial</div>
          <div className="hidden h-4 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-2"><Leaf className="h-4 w-4" style={{ color: BRAND }} /> Eco-Friendly</div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-xs font-bold uppercase tracking-widest" style={{ color: BRAND }}>What We Do</div>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Full-service lawn care, done right.</h2>
          <p className="mt-4 text-muted-foreground">From a single mow to a full-season program, we keep your yard healthy and looking sharp.</p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={fadeUp}>
              <SpotlightCard className="card-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: `${BRAND}1a` }}>
                  <s.icon className="h-6 w-6" style={{ color: BRAND }} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition group-hover:gap-2.5" style={{ color: BRAND }}>
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </a>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" ref={aboutRef} className="overflow-hidden bg-secondary/50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-3xl">
              <motion.img
                src="/images/lawn-texture.jpg"
                alt="Lush, freshly mowed green lawn"
                style={{ y: parallaxY, scale: 1.15 }}
                className="h-full w-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -right-4 -top-4 rounded-2xl bg-white p-5 shadow-lift"
            >
              <div className="text-4xl font-extrabold" style={{ color: BRAND }}>5.0★</div>
              <div className="text-xs font-medium text-muted-foreground">11 verified reviews</div>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-xs font-bold uppercase tracking-widest" style={{ color: BRAND }}>About JBMG</motion.div>
            <motion.h2 variants={fadeUp} className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Quality work from people who care.</motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground">
              JBMG Lawn Care is a locally owned and operated lawn service proudly serving Orem and the surrounding Utah County communities.
              We built JBMG on three things: showing up when we say we will, doing careful work, and using sustainable practices that are
              healthier for your family, your pets, and the environment.
            </motion.p>
            <motion.ul variants={stagger} className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Reliable scheduling", "Sustainable methods", "Sharp, even cuts", "Honest pricing"].map((p) => (
                <motion.li key={p} variants={fadeUp} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="h-5 w-5" style={{ color: BRAND }} /> {p}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* REVIEWS — marquee */}
      <section id="reviews" className="py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto max-w-2xl px-6 text-center"
        >
          <div className="text-xs font-bold uppercase tracking-widest" style={{ color: BRAND }}>Reviews</div>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">5.0 stars on Google.</h2>
          <p className="mt-4 text-muted-foreground">A few words from Orem homeowners we work with.</p>
        </motion.div>

        <div className="group relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((r, i) => (
              <figure key={i} className="flex w-[340px] shrink-0 flex-col rounded-2xl border border-border bg-card p-7 shadow-card">
                <div className="flex">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">"{r.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: INK }}>
                    {r.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.meta} · Google</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="text-xs font-bold uppercase tracking-widest" style={{ color: BRAND }}>Service Area</div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Proudly serving Orem, Utah and surrounding areas.</h2>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {areas.map((a) => (
              <motion.span
                key={a}
                variants={fadeUp}
                whileHover={{ scale: 1.06, y: -2 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold shadow-card"
              >
                <MapPin className="h-3.5 w-3.5" style={{ color: BRAND }} /> {a}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="text-xs font-bold uppercase tracking-widest" style={{ color: BRAND }}>Get a Free Quote</div>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Tell us about your lawn.</h2>
            <p className="mt-4 text-muted-foreground">Fill out the form and we'll get back to you with a no-pressure quote, usually within the same day.</p>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="mt-8 rounded-2xl border-2 p-8 text-center"
                  style={{ borderColor: BRAND, backgroundColor: `${BRAND}10` }}
                >
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1, type: "spring", stiffness: 200 }}>
                    <CheckCircle2 className="mx-auto h-12 w-12" style={{ color: BRAND }} />
                  </motion.div>
                  <h3 className="mt-4 text-xl font-bold">Thanks — we got it.</h3>
                  <p className="mt-2 text-sm text-muted-foreground">We'll be in touch shortly. For anything urgent, give us a call at (801) 380-0475.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="mt-8 grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-card sm:grid-cols-2"
                >
                  <Field label="Name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <div className="sm:col-span-2"><Field label="Address" name="address" /></div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Service Needed</label>
                    <select required className="mt-1.5 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20">
                      <option value="">Select a service…</option>
                      {services.map((s) => <option key={s.title}>{s.title}</option>)}
                      <option>Multiple / Full-season program</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Message</label>
                    <textarea rows={4} className="mt-1.5 w-full resize-none rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20" placeholder="Lot size, gate access, any details…" />
                  </div>
                  <button
                    type="submit"
                    className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:opacity-90 hover:scale-[1.01]"
                    style={{ backgroundColor: BRAND }}
                  >
                    Request My Free Quote <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <ContactCard icon={Phone} label="Call or Text" value="(801) 380-0475" href="tel:18013800475" highlight />
            <ContactCard icon={MapPin} label="Visit" value="78 W 400 S, Orem, UT 84058" href="https://maps.google.com/?q=78+W+400+S+Orem+UT" />
            <ContactCard icon={Clock} label="Hours" value="Mon – Sat · Open until 9 PM" />
            <ContactCard icon={Mail} label="Quick Quote" value="Use the form — same-day reply" />
          </aside>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16 md:py-20" style={{ backgroundColor: INK }}>
          <img
            src="/images/riding-mower.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(115deg, ${INK}f5 30%, ${INK}99 75%, ${INK}66 100%)` }} />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="relative mx-auto max-w-2xl"
          >
            <motion.div variants={fadeUp} className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" style={{ color: BRAND }} /> Free, no-pressure quotes
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Ready for a <span style={{ color: BRAND }}>Greener Lawn?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-white/70">Give us a call today — we'll have your yard looking sharp before you know it.</motion.p>
            <motion.a
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              href="tel:18013800475"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90"
              style={{ backgroundColor: BRAND }}
            >
              <Phone className="h-5 w-5" /> Call (801) 380-0475
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Locally owned lawn care serving Orem and Utah County. Reliable, eco-friendly, and sharp every visit.
            </p>
          </div>
          <div>
            <div className="text-sm font-bold">Explore</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Services", "About", "Reviews", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="transition hover:text-foreground">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="tel:18013800475" className="hover:text-foreground">(801) 380-0475</a></li>
              <li>78 W 400 S, Orem, UT 84058</li>
              <li>Mon – Sat · Until 9 PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row">
            <div>© {new Date().getFullYear()} JBMG Lawn Care. All rights reserved.</div>
            <div>Orem, Utah · Residential & Commercial</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20"
      />
    </div>
  );
}

function ContactCard({
  icon: Icon, label, value, href, highlight,
}: { icon: typeof Phone; label: string; value: string; href?: string; highlight?: boolean }) {
  const inner = (
    <div
      className={`card-lift flex items-start gap-4 rounded-2xl border p-5 shadow-card ${highlight ? "text-white" : "bg-card"}`}
      style={highlight ? { backgroundColor: BRAND, borderColor: BRAND } : { borderColor: "var(--border)" }}
    >
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${highlight ? "bg-white/20" : ""}`} style={highlight ? {} : { backgroundColor: `${BRAND}1a` }}>
        <Icon className="h-5 w-5" style={{ color: highlight ? "#fff" : BRAND }} />
      </div>
      <div>
        <div className={`text-xs font-semibold uppercase tracking-wide ${highlight ? "text-white/80" : "text-muted-foreground"}`}>{label}</div>
        <div className="mt-1 text-base font-semibold">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
