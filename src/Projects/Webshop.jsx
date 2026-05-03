import ProjectCard from '../components/ProjectCard.jsx';

const Webshop = () => {
  return (
    <ProjectCard
      title="Sole Search"
      eyebrow="Sneaker drop webshop - Backend/API"
      summary="A deployed sneaker drop webshop built in a cross-class project where our backend class provided the API and a separate frontend class built the customer-facing store."
      problem="The store needed to support limited sneaker drops where products can be shown as upcoming, saved to a wishlist before release, become available when the drop starts, and disappear or sell out when the drop window ends."
      contribution="Our backend group built the Express and MongoDB API behind the drop-based webshop, including product and variant endpoints, drop status handling, JWT authentication, user profiles, wishlists, stock-aware order creation, admin-protected routes, Server-Sent Events for live product updates, seeded product data, Postman checks, and Vercel deployment configuration. We also coordinated closely with the frontend class through shared standups, Trello, Discord, and API documentation in Google Docs."
      highlights={[
        'Built a REST API with Node.js, Express, MongoDB, and Mongoose.',
        'Supported a drop-based sneaker shop flow with upcoming products, wishlist saves, live availability, and sold-out states.',
        'Implemented JWT authentication with access and refresh tokens.',
        'Created product, variant, user, wishlist, and order data models.',
        'Added stock validation and automatic stock reduction when orders are created.',
        'Used Server-Sent Events so the frontend could react to product changes, deletions, stock updates, sold-out states, and scheduled publishing.',
        'Worked with the frontend class through three weekly standups, a shared Trello board, daily Discord communication, and Google Docs API documentation.',
        'Protected admin routes for managing products, variants, users, and orders.',
        'Configured Vercel deployment support, cron publishing, and Postman API checks.',
      ]}
      techStack={['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'SSE', 'Postman', 'Vercel']}
      githubUrl="https://github.com/Samuel6693/webbshop-2026-be"
      githubLabel="Backend Repo"
      repoLinks={[
        {
          href: 'https://github.com/BassamR14/webbshop-2026-fe',
          label: 'Frontend Repo',
        },
      ]}
      featured
    />
  );
};

export default Webshop;
