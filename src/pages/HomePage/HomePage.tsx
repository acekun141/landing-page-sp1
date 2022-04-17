import SectionIntro from "./components/SectionIntro";
import SectionSharing from "./components/SectionSharing";

const HomePage = () => {
  return (
    <div className="home-page">
      <SectionIntro />
      <SectionSharing />
    </div>
  )
}

export default HomePage;
