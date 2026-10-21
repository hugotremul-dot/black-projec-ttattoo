import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CursorTrail } from "@/components/CursorTrail";
import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import logo from "@/assets/logo.jpg";
import tattoo1 from "@/assets/tattoo-1.jpg";
import tattoo2 from "@/assets/tattoo-2.jpg";
import tattoo3 from "@/assets/tattoo-3.jpg";
import piercing1 from "@/assets/piercing-1.jpg";
import piercing2 from "@/assets/piercing-2.jpg";
import piercing3 from "@/assets/piercing-3.jpg";

const TITLE = "Black Project Tattooshop — Tatuajes y Piercings";
const DESCRIPTION =
  "Estudio de tatuajes y piercings Black Project Tattooshop. Mira nuestro trabajo y llama al 722 57 01 97.";
const PHONE_DISPLAY = "722 57 01 97";
const PHONE_LINK = "tel:722570197";
const INSTAGRAM_URL = "https://www.instagram.com/blackprojecttattooshop/";
const FACEBOOK_URL = "https://www.facebook.com/blackprojecttattooshop";
const MAPS_URL =
  "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x83007bbc985d647d:0x96f4cce502fc6d8d";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=Black+Project+Tattooshop&z=16&output=embed";
// Horario tomado de la ficha de Google del estudio.
const HORARIO = [
  { dias: "Lunes — Viernes", horas: "10:00 – 14:00 · 17:00 – 20:00" },
  { dias: "Sábado", horas: "10:00 – 14:00 · 17:00 – 20:00" },
  { dias: "Domingo", horas: "Cerrado" },
];

// Reseñas públicas de la ficha de Google del estudio.
const GOOGLE_RATING = "4,9";
const GOOGLE_REVIEW_COUNT = 30;
const REVIEWS = [
  {
    author: "Santiago Mené Peré",
    time: "Hace 1 mes",
    rating: 5,
    text: "Fui a por un tattoo y un cover. Ambos geniales. Muy contento con el resultado y el trato. Me ayudaban además con cualquier duda que tuviera. Recomiendo!!",
  },
  {
    author: "Marta Berné",
    time: "Hace 6 meses",
    rating: 5,
    text: "Llevo cuatro o cinco años tatuándome con Ana y es una maravilla: amable, majísima y los tatuajes que hace son increíbles. El local está muy bien montado y todos los que trabajan ahí son un encanto. Hoy fui a terminarme un tatuaje y estaba más nerviosa de lo habitual, pero me he sentido muy agusto y muy cuidada. Hugo, el dueño, es también un profesional y un amor. Muy recomendable! Os tratarán genial!",
  },
  {
    author: "Nicolás Escribano Castel",
    time: "Hace 5 meses",
    rating: 5,
    text: "Me tatuo anita y la verdad que rapidez y una bellisima persona. Un placer tatuarse asi y que el tatuaje salga tan bonito. Recomendado 100%",
  },
  {
    author: "Taz",
    time: "Hace 6 meses",
    rating: 5,
    text: "Nos perforó Dony, el dueño del estudio, e impecable: todo el tema sanitario, de higiene y esterilización impoluto. Las perforaciones salieron perfectas, yo 1 bridge y mi compi el de la ceja. Consejos y protocolo post-cuidado muy claros, con un seguimiento muy profesional. También nos revisaron otros pircings hechos en otros sitios que estaban algo infectados y nos dijeron qué era exactamente y cómo curarlos. El precio es muy razonable y totalmente justificado por el cuidado que te dan. 10/10, voy a volver.",
  },
  {
    author: "aaron barranco (Aaron el de los tops.)",
    time: "Hace 1 mes",
    rating: 5,
    text: "Me he tatuado ya varias veces en este estudio y no ha podido ser mejor el trato recibido y su trabajo. Sin duda, lo recomiendo y volveré",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-nosotros", label: "Sobre nosotros" },
  { id: "tatuajes", label: "Tatuajes" },
  { id: "piercings", label: "Piercings" },
  { id: "resenas", label: "Reseñas" },
  { id: "horario", label: "Horario" },
  { id: "contacto", label: "Contacto" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? "border-b border-border bg-surface/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:px-6">
        <a href="#inicio" className="min-w-0">
          <span className="block truncate font-display text-2xl tracking-wide sm:text-3xl">
            BLACK<span className="text-primary">·</span>PROJECT
          </span>
          <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Tattooshop
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-2">
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={PHONE_LINK}
            className="inline-flex items-center justify-center rounded-sm bg-primary px-4 py-2.5 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all hover:shadow-glow"
          >
            Llamar
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          >
            <span className="sr-only">Menú</span>
            <span aria-hidden="true" className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-surface px-4 pb-6 pt-2 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-4 font-display text-2xl tracking-wide text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-10">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-5xl sm:text-6xl">{title}</h2>
      <span className="mt-5 block h-1 w-16 bg-primary" />
    </Reveal>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <CursorTrail />
      <Header />

      {/* HERO */}
      <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden bg-surface">
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-16 pt-28 text-center sm:px-6 sm:pb-24">
          <h1 className="sr-only">Black Project Tattooshop</h1>
          <img
            src={logo}
            alt="Logo de Black Project Tattooshop"
            width={1080}
            height={1080}
            className="logo-fusion w-full max-w-md"
          />
          <p className="eyebrow mt-4">Tatuajes · Piercings</p>
          <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
            Tinta y acero, hechos con cuidado. Mira nuestro trabajo y reserva tu cita por teléfono.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-base font-bold uppercase tracking-widest text-primary-foreground transition-all hover:shadow-glow"
            >
              Llamar {PHONE_DISPLAY}
            </a>
            <a
              href="#tatuajes"
              className="inline-flex items-center justify-center rounded-sm border border-border px-8 py-4 text-base font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Ver trabajos
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="sobre-nosotros" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="max-w-2xl">
          <SectionTitle eyebrow="Sobre nosotros" title="EL ESTUDIO" />
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Black Project Tattooshop es un estudio especializado en tatuajes y piercings. Cada
              trabajo se realiza con atención al detalle, higiene y un trato cercano, de principio
              a fin.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Cuéntanos tu idea por teléfono y la trabajamos contigo hasta dejarla lista para la
              piel.
            </p>
            <a
              href={PHONE_LINK}
              className="mt-8 inline-flex items-center justify-center rounded-sm bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all hover:shadow-glow"
            >
              Llamar al estudio
            </a>
          </Reveal>
        </div>
      </section>

      {/* TATUAJES */}
      <section id="tatuajes" className="border-y border-border bg-surface py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="Galería" title="TATUAJES" />
          <Gallery
            items={[
              { src: tattoo1, alt: "Tatuaje de rata con llave y flor" },
              { src: tattoo2, alt: "Tatuaje blackwork en el brazo" },
              { src: tattoo3, alt: "Tatuaje de tren en puntillismo" },
            ]}
          />
        </div>
      </section>

      {/* PIERCINGS */}
      <section id="piercings" className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="Galería" title="PIERCINGS" />
          <Gallery
            items={[
              { src: piercing1, alt: "Piercing nasal dorado" },
              { src: piercing2, alt: "Piercing de labio" },
              { src: piercing3, alt: "Varios piercings nasales" },
            ]}
          />
        </div>
      </section>

      {/* RESEÑAS */}
      <section id="resenas" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="Lo que dicen de nosotros" title="RESEÑAS" />
          <Reveal className="mb-10">
            <div className="flex flex-wrap items-center gap-4 rounded-sm border border-border bg-card px-6 py-5">
              <span className="font-display text-5xl tracking-wide text-primary">
                {GOOGLE_RATING}
              </span>
              <span aria-hidden="true" className="text-2xl tracking-widest text-primary">
                ★★★★★
              </span>
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {GOOGLE_REVIEW_COUNT} reseñas en Google
              </span>
            </div>
          </Reveal>
          <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review, i) => (
              <Reveal key={review.author} delay={(i % 3) * 100}>
                <figure className="flex h-full flex-col rounded-sm border border-border bg-card p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span aria-hidden="true" className="text-lg tracking-widest text-primary">
                      {"★".repeat(review.rating)}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {review.time}
                    </span>
                  </div>
                  <blockquote className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                    “{review.text}”
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-semibold uppercase tracking-widest text-foreground">
                    {review.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-border px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Ver todas en Google
            </a>
          </Reveal>
        </div>
      </section>

      {/* HORARIO */}
      <section id="horario" className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionTitle eyebrow="Visítanos" title="HORARIO" />
          <Reveal>
            <div className="divide-y divide-border rounded-sm border border-border bg-card">
              {HORARIO.map((row) => (
                <div
                  key={row.dias}
                  className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-display text-2xl tracking-wide">{row.dias}</span>
                  <span
                    className={
                      row.horas === "Cerrado"
                        ? "text-lg font-semibold uppercase tracking-widest text-muted-foreground"
                        : "text-lg text-muted-foreground"
                    }
                  >
                    {row.horas}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Horario publicado en nuestra ficha de Google. Para festivos o cambios puntuales,
              llámanos o consúltalo en Google Maps.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-sm border border-border px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Ver en Google Maps
            </a>
          </Reveal>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="Contacto" title="VISÍTANOS" />
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal className="space-y-4">
              <div className="rounded-sm border border-border bg-card p-6">
                <p className="eyebrow">Teléfono</p>
                <a
                  href={PHONE_LINK}
                  className="mt-2 block font-display text-4xl tracking-wide text-foreground transition-colors hover:text-primary"
                >
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={PHONE_LINK}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-sm bg-primary px-6 py-4 text-base font-bold uppercase tracking-widest text-primary-foreground transition-all hover:shadow-glow"
                >
                  Llamar ahora
                </a>
              </div>

              <div className="rounded-sm border border-border bg-card p-6">
                <p className="eyebrow">Instagram</p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-xl font-semibold text-foreground transition-colors hover:text-primary"
                >
                  @blackprojecttattooshop
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-sm border border-border px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Visitar Instagram
                </a>
              </div>

              <div className="rounded-sm border border-border bg-card p-6">
                <p className="eyebrow">Facebook</p>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-xl font-semibold text-foreground transition-colors hover:text-primary"
                >
                  BlackProject Tattooshop Zaragoza
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-sm border border-border px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Visitar Facebook
                </a>
              </div>

              <div className="rounded-sm border border-border bg-card p-6">
                <p className="eyebrow">Ubicación</p>
                <p className="mt-2 text-muted-foreground">
                  Consulta la dirección en nuestra ficha de Google.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-sm border border-border px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    Ver en Google Maps
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-sm border border-border px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    Reseñas de Google
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-[420px] overflow-hidden rounded-sm border border-border shadow-card lg:h-full">
                <iframe
                  title="Ubicación de Black Project Tattooshop en Google Maps"
                  src={MAPS_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6">
          <p className="min-w-0 truncate font-display text-xl tracking-wide">
            BLACK<span className="text-primary">·</span>PROJECT TATTOOSHOP
          </p>
          <a
            href={PHONE_LINK}
            className="shrink-0 text-sm font-bold uppercase tracking-widest text-primary"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </footer>

      {/* CTA fijo en móvil */}
      <a
        href={PHONE_LINK}
        className="fixed inset-x-4 bottom-4 z-40 inline-flex items-center justify-center rounded-sm bg-primary px-6 py-4 text-base font-bold uppercase tracking-widest text-primary-foreground shadow-glow lg:hidden"
      >
        Llamar {PHONE_DISPLAY}
      </a>
    </div>
  );
}
