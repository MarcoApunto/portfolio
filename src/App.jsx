import Header from "./components/Header.jsx";
import SkillSection from "./components/Skills.jsx";
import ProjectSection from "./components/Projects.jsx";
import ContactSection from "./components/Contact.jsx";

function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default App;
