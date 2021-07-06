import Head from "next/head";
import Image from "next/image";
import BlogSection from "./components/BlogSection";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hostginie</title>
        <meta name="description" content="Hostginie | The secured web hosting solution on world's trusted cloud platforms " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <div className="md:max-w-7xl mx-auto h-0.5 bg-blue-400 rounded-lg"></div>
      <Cta />
      <div className="md:max-w-7xl mx-auto h-0.5 bg-blue-400 rounded-lg"></div>
      <Pricing />
      <div className="md:max-w-7xl mx-auto h-0.5 bg-blue-400 rounded-lg"></div>
      <Features />
      <div className="md:max-w-7xl mx-auto h-0.5 bg-blue-400 rounded-lg"></div>
      <BlogSection />
      <div className="md:max-w-7xl mx-auto h-0.5 bg-blue-400 rounded-lg"></div>
      <Footer />
    </div>
  );
}
