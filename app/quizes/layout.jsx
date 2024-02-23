import NavBar from "./_components/NavBar";

function layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

export default layout;
