import ProjectCard from '../components/ProjectCard.jsx';

const ProductivityAssistantApp = () => {
  return (
    <ProjectCard
      title="Productivity Assistant"
      eyebrow="React productivity dashboard"
      summary="A React/Vite app for managing tasks, habits, and events in one focused productivity dashboard."
      problem="Daily planning is often split across separate tools for tasks, habits, and scheduled events, which makes it harder to keep a clear overview."
      contribution="I continued a school group assignment independently as a portfolio project, refactoring the app structure, improving the UI/UX, adding localStorage persistence, and polishing the task, habit, and event workflows."
      highlights={[
        'Dashboard overview for incomplete tasks, top habits, and upcoming events.',
        'Task CRUD with status toggling, categories, deadlines, filtering, and sorting.',
        'Habit tracking with priorities, repetition counters, reset controls, filtering, and ranking.',
        'Event planning with datetime validation, upcoming/past filters, formatted dates, and event counts.',
        'Reusable localStorage state hook plus responsive dark UI, badges, forms, and empty states.',
      ]}
      techStack={['React', 'JavaScript', 'CSS', 'Vite', 'React Router', 'localStorage']}
      githubUrl="https://github.com/Samuel6693/productivity-assistant-portfolio"
      demoUrl="https://productivity-assistant-portfolio.vercel.app/"
      previewUrl="https://productivity-assistant-portfolio.vercel.app/"
      previewTitle="Productivity Assistant Live Preview"
      featured
    />
  );
};

export default ProductivityAssistantApp;
