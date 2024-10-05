// app/projects/page.js
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import ProjectCard from '../../../Components/ProjectCard';

const ProjectsPage = () => {
    const projects = [
        {
            id: 1,
            Image: 'https://dropinblog.net/34253577/files/featured/telechargement__2_.jpeg',
            title: 'Réseau et système informatique',
            description: 'Techniques de Réseau et système informatique',
        },
        {
            id: 2,
            Image: 'https://dropinblog.net/34253577/files/featured/telechargement__2_.jpeg',
            title: 'Développement Web',
            description: 'Collage d\'arrière-plan de programmation',
        },
        // Ajoute d'autres projets ici
    ];

    return (
        <div>
            <Header />
            <main className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">Mes Projets</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProjectsPage;
