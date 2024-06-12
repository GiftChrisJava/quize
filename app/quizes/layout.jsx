import HomeFooter from "../_components/HomeFooter";
import NavBar from "./_components/NavBar";

function layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <HomeFooter/>
    </div>
  );
}

export default layout;
