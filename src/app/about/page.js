import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';

const About = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <main className="flex-grow container mx-auto p-6">
                <h2 className="text-4xl font-bold text-center text-red-900 mb-8">À propos de nous</h2>
              
                <p className="text-center mb-6">
                    Pour toute question ou information supplémentaire, vous pouvez nous contacter à l'adresse email suivante : 
                    <a href="mailto:houssem@gomycode.com" className="text-blue-600 underline"> houss@gomycode.com</a>
                </p>
                <div className="flex justify-center mb-6">
                    <img 
                        src="https://img.freepik.com/vecteurs-libre/banniere-developpement-site-web_33099-1687.jpg" 
                        alt="Image de l'équipe" 
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div className="flex justify-center">
                    <a 
                        href="/path/to/your-cv.pdf" 
                        download 
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Télécharger mon CV
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
