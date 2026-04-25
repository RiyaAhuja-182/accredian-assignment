import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-50 text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_14%,rgba(125,211,252,0.045),transparent_44%),radial-gradient(circle_at_84%_12%,rgba(148,163,184,0.05),transparent_40%)]" />
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-sky-300/10 blur-3xl" />
        <div className="absolute right-[-5rem] top-[-3rem] h-80 w-80 rounded-full bg-slate-300/9 blur-3xl" />
        <div className="absolute bottom-16 right-1/4 h-64 w-64 rounded-full bg-sky-200/10 blur-3xl" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
