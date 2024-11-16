
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <div className="container mx-auto p-6 flex-grow">
          <h1 className="text-4xl font-bold text-center my-10">Welcome to My Portfolio</h1>
          <AboutMe />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;


