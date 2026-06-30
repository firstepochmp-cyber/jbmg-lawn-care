import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
} from "lucide-react";
import logoAsset from "@/assets/jbmg-logo.png.asset.json";

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
    text: "I've been using JBMG for over a month now. They are very detailed and always respond quickly to texts and questions. My wife is particular about how the edging gets done, and these guys do it right. Their work is on point.",
  },
  {
    name: "Shane Parsons",
    meta: "6 reviews",
    text: "I was out of town for a few weeks and the yard got out of control. I was just planning a one-time clean-up since I'm kind of cheap, but they did such a great job and were affordable enough that I kept them on a schedule. Would recommend to anyone.",
  },
];

const areas = ["Orem", "Provo", "Lindon", "Vineyard", "Pleasant Grove", "American Fork", "Lehi", "Springville"];


function Home() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
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
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold">
              <span className="flex h-2 w-2 rounded-full" style={{ backgroundColor: BRAND }} />
              Locally owned · Orem, UT
            </div>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Orem's Most Trusted <span style={{ color: BRAND }}>Lawn Care</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Reliable mowing, fertilization, and seasonal care for residential and commercial properties.
              Eco-friendly practices, sharp results, and people who actually show up.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:opacity-90"
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
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">5.0</span> · 11 Google reviews
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl border border-border bg-white p-2 shadow-lift">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl" style={{ background: `linear-gradient(160deg, ${INK} 0%, #2a2a2a 100%)` }}>
                <div className="flex h-full flex-col items-center justify-center p-10 text-center">
                  <svg viewBox="0 0 24 24" className="h-32 w-32" fill="none" stroke={BRAND} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 17h13a3 3 0 0 0 3-3V9h2" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="16" cy="19" r="2" />
                    <path d="M5 13l2-5h7l2 5" />
                    <path d="M9 5l1-2M13 5l1-2" />
                  </svg>
                  <div className="mt-6 text-4xl font-extrabold tracking-tight text-white">JBMG</div>
                  <div className="mt-1 text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: BRAND }}>
                    Lawn Care
                  </div>
                  <div className="mt-8 h-px w-16" style={{ backgroundColor: BRAND }} />
                  <p className="mt-6 max-w-xs text-sm text-white/70">Serving Orem and Utah County with sharp, sustainable lawn care.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-white p-4 shadow-card md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: `${BRAND}1a` }}>
                  <CheckCircle2 className="h-5 w-5" style={{ color: BRAND }} />
                </div>
                <div>
                  <div className="text-xs font-semibold">Free Estimates</div>
                  <div className="text-xs text-muted-foreground">No-pressure quotes</div>
                </div>
              </div>
            </div>
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
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-widest" style={{ color: BRAND }}>What We Do</div>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Full-service lawn care, done right.</h2>
          <p className="mt-4 text-muted-foreground">From a single mow to a full-season program, we keep your yard healthy and looking sharp.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="card-lift group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: `${BRAND}1a` }}>
                <s.icon className="h-6 w-6" style={{ color: BRAND }} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition group-hover:gap-2.5" style={{ color: BRAND }}>
                Get a Quote <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-secondary/50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl" style={{ background: `linear-gradient(135deg, ${BRAND} 0%, #2a8a2c 100%)` }}>
              <div className="flex h-full items-center justify-center">
                <Leaf className="h-48 w-48 text-white/20" strokeWidth={1} />
              </div>
            </div>
            <div className="absolute -right-4 -top-4 rounded-2xl bg-white p-5 shadow-lift">
              <div className="text-4xl font-extrabold" style={{ color: BRAND }}>5.0★</div>
              <div className="text-xs font-medium text-muted-foreground">11 verified reviews</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest" style={{ color: BRAND }}>About JBMG</div>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Quality work from people who care.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              JBMG Lawn Care is a locally owned and operated lawn service proudly serving Orem and the surrounding Utah County communities.
              We built JBMG on three things: showing up when we say we will, doing careful work, and using sustainable practices that are
              healthier for your family, your pets, and the environment.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Reliable scheduling", "Sustainable methods", "Sharp, even cuts", "Honest pricing"].map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="h-5 w-5" style={{ color: BRAND }} /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-widest" style={{ color: BRAND }}>Reviews</div>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">5.0 stars on Google.</h2>
          <p className="mt-4 text-muted-foreground">A few words from Orem homeowners we work with.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="card-lift flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">"{r.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: INK }}>
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Verified Google Review</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="text-xs font-bold uppercase tracking-widest" style={{ color: BRAND }}>Service Area</div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Proudly serving Orem, Utah and surrounding areas.</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {areas.map((a) => (
              <span key={a} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold shadow-card">
                <MapPin className="h-3.5 w-3.5" style={{ color: BRAND }} /> {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="text-xs font-bold uppercase tracking-widest" style={{ color: BRAND }}>Get a Free Quote</div>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Tell us about your lawn.</h2>
            <p className="mt-4 text-muted-foreground">Fill out the form and we'll get back to you with a no-pressure quote, usually within the same day.</p>

            {sent ? (
              <div className="mt-8 rounded-2xl border-2 p-8 text-center" style={{ borderColor: BRAND, backgroundColor: `${BRAND}10` }}>
                <CheckCircle2 className="mx-auto h-12 w-12" style={{ color: BRAND }} />
                <h3 className="mt-4 text-xl font-bold">Thanks — we got it.</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll be in touch shortly. For anything urgent, give us a call at (801) 380-0475.</p>
              </div>
            ) : (
              <form
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
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:opacity-90"
                  style={{ backgroundColor: BRAND }}
                >
                  Request My Free Quote <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
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
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16 md:py-20" style={{ backgroundColor: INK }}>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Ready for a <span style={{ color: BRAND }}>Greener Lawn?</span>
            </h2>
            <p className="mt-4 text-white/70">Give us a call today — we'll have your yard looking sharp before you know it.</p>
            <a
              href="tel:18013800475"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90"
              style={{ backgroundColor: BRAND }}
            >
              <Phone className="h-5 w-5" /> Call (801) 380-0475
            </a>
          </div>
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
