// app/contact/page.js
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black"> {/* Changement à bg-black */}
            <Header />
            <main className="flex-grow container mx-auto p-4">
                
     

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-3xl font-bold text-center text-red-900 mb-6">Contactez-moi</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Nom
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Votre nom"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Votre email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Téléphone
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="Votre numéro de téléphone"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Envoyer
                        </button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
