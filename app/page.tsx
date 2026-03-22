import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Purpose } from "@/components/sections/Purpose";
import { Approach } from "@/components/sections/Approach";
import { Proposals } from "@/components/sections/Proposals";
import { Resources } from "@/components/sections/Resources";
import { Events } from "@/components/sections/Events";
import { Contact } from "@/components/sections/Contact";
import { getEvents } from "@/lib/content";

export default function Home() {
  const events = getEvents();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Purpose />
        <Approach />
        <Proposals />
        <Resources />
        <Events events={events} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
