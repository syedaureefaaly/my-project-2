
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <div className="container mx-auto p-6 flex-grow">
          <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">CLI Calculator</h3>
              <p className="text-gray-700">A simple calculator made using CLI in Node.js.</p>
            </li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Number Guessing Game</h3>
              <p className="text-gray-700">A fun number guessing game made using JavaScript.</p>
            </li>
          </ul>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Projects;

