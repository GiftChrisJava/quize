import TutorNav from "./_components/TutorNav";

function layout({ children }) {
  return (
    <div>
      <TutorNav />
      {children}
    </div>
  );
}

export default layout;
