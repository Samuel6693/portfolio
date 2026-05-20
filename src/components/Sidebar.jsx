import {
    FaCode,
    FaEnvelope,
    FaFileAlt,
    FaFolderOpen,
    FaGamepad,
    FaShoppingBag,
    FaTasks,
    FaUser,
} from 'react-icons/fa';

const Sidebar = () => {
    return (
        <aside className="sidebar" aria-label="Portfolio navigation">
            <a href="#" className="sidebar-logo">Samuel Soumi</a>

            <nav className="sidebar-nav">
                <a href="#about">
                    <FaUser aria-hidden="true" />
                    <span>About</span>
                </a>

                <a href="#skills">
                    <FaCode aria-hidden="true" />
                    <span>Skills</span>
                </a>

                <div className="sidebar-group">
                    <a href="#projects" className="sidebar-group-label">
                        <FaFolderOpen aria-hidden="true" />
                        <span>Projects</span>
                    </a>
                    <div className="sidebar-subnav">
                        <a href="#project-pokedex">
                            <FaGamepad aria-hidden="true" />
                            <span>Pokedex Explorer</span>
                        </a>
                        <a href="#project-productivity">
                            <FaTasks aria-hidden="true" />
                            <span>Productivity Assistant</span>
                        </a>
                        <a href="#project-webshop">
                            <FaShoppingBag aria-hidden="true" />
                            <span>Sole Search</span>
                        </a>
                    </div>
                </div>

                <a href="/Samuel_Soumi_CV.pdf" target="_blank" rel="noopener noreferrer">
                    <FaFileAlt aria-hidden="true" />
                    <span>Resume</span>
                </a>
                <a href="#contact">
                    <FaEnvelope aria-hidden="true" />
                    <span>Contact</span>
                </a>
            </nav>
        </aside>
    );
};

export default Sidebar;
