import ProjectCard from '../components/ProjectCard.jsx';

const MusicAPI = () => {
  return (
    <ProjectCard
      title="Music API"
      problem="Music discovery and playlist management can feel fragmented, so the goal was to create one place where users could search music and organize what they find."
      contribution="I contributed to a team-based application where users can search for music, view artist information, and manage playlists, while also working with testing, feature development, and improving the overall user experience."
      techStack={['React', 'Node.js', 'Express', 'MongoDB', 'CSS']}
      githubUrl="https://github.com/Samuel6693/MusicAPI"
    />
  );
};

export default MusicAPI;
