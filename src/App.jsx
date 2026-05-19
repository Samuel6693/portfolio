import './App.css'
import Pokemon from './Projects/Pokemon.jsx';
import ProductivityAssistantApp from './Projects/ProductivityAssistantApp.jsx';
import Webshop from './Projects/Webshop.jsx';
import AboutMe from './components/AboutMe.jsx';
import Hero from './components/Hero.jsx';
import Contact from './components/Contact.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {
  return (
    <div className='portfolio-shell'>
      <Sidebar />

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
            <div id='project-pokedex' className='project-anchor'>
              <Pokemon />
            </div>

            <div id='project-productivity' className='project-anchor'>
              <ProductivityAssistantApp />
            </div>

            <div id='project-webshop' className='project-anchor'>
              <Webshop />
            </div>
            
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
}

export default App
