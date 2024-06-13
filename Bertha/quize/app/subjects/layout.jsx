import HomeFooter from "../_components/HomeFooter";

function layout({ children }) {
  return (
    <div>
      {children}
      <HomeFooter/>
    </div>
  );
}

export default layout;
