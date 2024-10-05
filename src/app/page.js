import Image from "next/image";
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
const Home = () => {
  
  return (
   
      <div>
          <Header />
          <main> <br></br>
              <h1 style={{textAlign:"center",color:"red",fontWeight: 'bold'}}>WELCOME to my  portfolio</h1>  <br></br> <br></br>
              
              <div className="flex justify-center">
                    <a 
                        href="/path/to/your-cv.pdf" 
                        download 
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Télécharger mon CV
                    </a>
                </div> <br></br>
              <p className="text-center mb-6">
                    Pour toute question ou information supplémentaire, vous pouvez nous contacter à l'adresse email suivante : 
                    <a href="mailto:houssem@gomycode.com" className="text-blue-600 underline"> houss@gomycode.com</a>
                </p>
                <div className="flex justify-center mb-6">
                    <img 
                        src="https://www.macapflag.com/blog/wp-content/uploads/2021/05/le-metier-de-developpeur-870x600.jpg" 
                        alt="Image de l'équipe" 
                        className="rounded-lg shadow-md"
                    />
                </div>
                
            
          </main>
          <Footer />
      </div>
  );
};

export default Home;