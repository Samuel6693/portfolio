import ProjectCard from '../components/ProjectCard.jsx';
import dashboard from '../assets/productivity/dashboard.png';
import tasks from '../assets/productivity/tasks.png';
import habits from '../assets/productivity/habits.png';
import events from '../assets/productivity/events.png';


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
      screenshots={[
        {
          src: dashboard,
          alt: 'Dashboard overview of the Productivity Assistant app.',
          caption: 'Dashboard view showing an overview of incomplete tasks, top habits, and upcoming events.',
        },
        {
          src: tasks,
          alt: 'Task management interface with filtering and sorting options.',
          caption: 'Task management view with CRUD operations, status toggling, categories, deadlines, filtering, and sorting.',
        },
        {
          src: habits,
          alt: 'Habit tracking interface with priorities and repetition counters.',
          caption: 'Habit tracking view with priorities, repetition counters, reset controls, filtering, and ranking.',
        },
        {
          src: events,
          alt: 'Event planning interface with datetime validation and formatted dates.',
          caption: 'Event planning view with datetime validation, upcoming/past filters, formatted dates, and event counts.',
        },
      ]}
      techStack={['React', 'Vite', 'React Router', 'JavaScript', 'CSS', 'localStorage', 'ESLint']}
      githubUrl="https://github.com/Samuel6693/productivity-assistant-portfolio"
      demoUrl="https://productivity-assistant-portfolio.vercel.app/"
      featured
    />
  );
};

export default ProductivityAssistantApp;
