import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Separator from "../components/Separator";
import BackToTopButton from "../components/BacktoTopButton";

const App: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Luís Branco</title>
        <meta
          name="description"
          content="Personal Portfolio website of Luís Branco"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Home />
      <Separator />
      <About />
      <Separator />
      <Skills />
      <Separator />
      <Projects />
      <Separator />
      <Contact />
      <Separator />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
