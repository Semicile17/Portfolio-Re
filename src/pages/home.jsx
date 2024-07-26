// src/components/Home.jsx
import Monitor from "../components/monitor";
import Typewriter from "../components/typeWriter"; // Assuming you'll create this component

function Home() {
  return (
    <div id="home" className="section">
      <div className="home-container flex flex-wrap justify-between p-4">
        <div className=" p-20 w-full md:w-1/2 flex items-center justify-center">
          <Typewriter
            words={[
              "           ",
              "Hello World",
              "Welcome to my website",
              "I am Rohit Mahant . A Full Stack Web Developer",
            ]}
          />
        </div>
        <div className="monitor-side w-full md:w-1/2 flex items-center justify-center">
          <Monitor />
        </div>
      </div>
    </div>
  );
}

export default Home;
