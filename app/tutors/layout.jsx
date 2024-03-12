import TutorFooter from "./_components/TutorFooter";
import TutorNav from "./_components/TutorNav";

function layout({ children }) {
  return (
    <div>
      <TutorNav />
      {children}
      <TutorFooter />
    </div>
  );
}

export default layout;
