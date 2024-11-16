import Image from "next/image";

const AboutMe = () => {
    return (
      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">About Me</h2>
        <div className="flex justify-center mb-6">
          <Image
            src="/images/image.png" 
            alt="Profile" 
            className="w-32 h-32 rounded-full border-4 border-blue-500" 
            width={700}
            height={200}
          />
        </div>
        <p className="text-lg text-gray-700 text-center mb-6">
          Hi I am Syeda Ureefa Ali a passionate developer with skills in modern web technologies.
        </p>
        <h3 className="text-2xl font-semibold text-center text-blue-500 mb-4">My Skills</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg">TypeScript</span>
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg">JavaScript</span>
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg">HTML</span>
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg">CSS</span>
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg">Next.js</span>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  
  