import './App.css'
import Pokemon from './Projects/Pokemon.jsx';
import ProductivityAssistantApp from './Projects/ProductivityAssistantApp.jsx';
import Webshop from './Projects/Webshop.jsx';
import AboutMe from './components/AboutMe.jsx';
import Hero from './components/Hero.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <a href="#" className="site-logo">Samuel Soumi</a>
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="page">
        <Hero />
        <AboutMe />

        <section id="projects" className="projects section">
          <div className="section-heading">
            <p className="section-kicker">Selected work</p>
            <h2>Projects that show how I build, learn, and solve problems.</h2>
            <p>
              A mix of school projects, API work, frontend applications, and fullstack
              practice focused on practical product thinking and clean implementation.
            </p>
          </div>

          <div className="project-list">
            <Pokemon />
            <ProductivityAssistantApp />
            <Webshop />
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}

export default App
