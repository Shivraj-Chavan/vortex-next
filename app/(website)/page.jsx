//app/page.tsx

import About from "./components/Home/About";
import Hero from "./components/Home/Hero";
import Services from "./components/Home/Services";
import Portfolio from "./components/Home/Portfolio";
import Contact from "./components/Home/Contact";
import RecentBlog from "./components/Home/RecentBlog";



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
       <RecentBlog/>
      <Contact />
    </main>
  );
}