import type { NextPage } from "next";
import AboutSection from "../organisms/AboutSection";
import HeaderSection from "../organisms/HeaderSection";
import ProjectSection from "../organisms/ProjectSection";

const Home: NextPage = () => {
  return (
    <div>
      <HeaderSection />
      <ProjectSection />
      <AboutSection />
    </div>
  );
};

export default Home;
