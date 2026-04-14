/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";


export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
  
        <Footer />
      </main>

      <WhatsAppButton />
    </div>
  );
}
