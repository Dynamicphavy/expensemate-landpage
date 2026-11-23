import NavBar from "@/components/NavBar";
import Wrap from "@/components/Wrap";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Include from "@/components/sections/Include";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Wrap>
      <NavBar />
      <Hero />
      <HowItWorks />
      <Include />
      <Footer />
    </Wrap>
  );
}
