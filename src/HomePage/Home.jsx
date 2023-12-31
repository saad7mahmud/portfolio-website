import Projects from "../Projects/Projects";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Timeline from "./Timeline";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Skills></Skills>
      <Timeline></Timeline>
      <Projects></Projects>
      <Experiences></Experiences>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
