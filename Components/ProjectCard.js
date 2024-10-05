import Image from 'next/image';

const ProjectCard = ({ project }) => {
    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image src={project.Image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;