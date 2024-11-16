import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <div className="container mx-auto p-6 flex-grow">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
          <p className="text-lg text-center">Email: ualyualy7082@gmail.com</p>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Contact;

