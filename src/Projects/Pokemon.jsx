import ProjectCard from '../components/ProjectCard.jsx';
import homeImage from '../assets/pokemon/Home.png';
import searchImage from '../assets/pokemon/Search.png';
import detailsImage from '../assets/pokemon/Details.png';

const Pokemon = () => {
  return (
    <ProjectCard
      eyebrow="Featured case study"
      title="Pokedex Explorer"
      summary="A React-based Pokedex app where users can search, select, and explore the original 151 Pokemon through a responsive interface with clear UI feedback and structured API-driven content."
      problem="Turn a simpler school assignment into a portfolio-ready frontend case that feels more complete, polished, and realistic from a user experience perspective."
      contribution="I rebuilt the experience around cleaner React structure, a searchable and alphabetically sorted Pokemon list, a richer detail view, clearer loading, error and empty states, and lightweight caching to avoid unnecessary repeat API requests."
      highlights={[
        'Searchable and alphabetically sorted Pokemon list for the original 151 Pokemon.',
        'Detailed card view with artwork, types, abilities, weight, height, and base stats.',
        'Clear loading, error, and empty states to improve the overall user experience.',
        'Separated API layer and custom hook structure for more maintainable frontend code.',
        'In-memory caching for detail requests to make repeat interactions feel faster.',
      ]}
      screenshots={[
        {
          src: homeImage,
          alt: 'Homepage view of the Pokedex Explorer application.',
          caption: 'Landing view with the main project presentation and entry point into the app.',
        },
        {
          src: searchImage,
          alt: 'Search interface showing the Pokemon selection flow.',
          caption: 'Searchable Pokemon list that helps users quickly find and select a Pokemon.',
        },
        {
          src: detailsImage,
          alt: 'Detailed Pokemon card with stats and metadata.',
          caption: 'Detailed Pokemon view with artwork, stats, types, and supporting metadata.',
        },
      ]}
      techStack={['React', 'JavaScript', 'CSS', 'Vite', 'Fetch API', 'PokeAPI']}
      githubUrl="https://github.com/Samuel6693/PokemonApplication"
      demoUrl="https://pokedex-explorer-sandy.vercel.app/"
      featured
    />
  );
};

export default Pokemon;
