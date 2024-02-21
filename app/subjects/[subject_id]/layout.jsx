import Header from "./_component/Header";

function layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default layout;
