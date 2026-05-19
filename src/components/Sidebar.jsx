const Sidebar = () => {
    return (
        <aside className="sidebar" aria-label="Portfolio navigation">
            <a href="#" className="sidebar-logo">Samuel Soumi</a>

            <nav className="sidebar-nav">
                <a href="#about">About</a>
                <a
                    href="/Samuel_Soumi_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </a>
                <a href="#project-pokedex">Pokedex Explorer</a>
                <a href="#project-productivity">Productivity Assistant</a>
                <a href="#project-webshop">Sole Search</a>
                <a href="#contact">Contact</a>
            </nav>
        </aside>
    );
};

export default Sidebar;