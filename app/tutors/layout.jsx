import HomeFooter from "../_components/HomeFooter";
import TutorFooter from "./_components/TutorFooter";
import TutorNav from "./_components/TutorNav";

function layout({ children }) {
  return (
    <div>
      <TutorNav />
      {children}
      <TutorFooter />
      <HomeFooter/>
    </div>
  );
}

export default layout;
