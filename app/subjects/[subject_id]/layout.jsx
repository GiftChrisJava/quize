import Header from "./_component/Header";

function layout({ children }) {
  return (
    <div>
      <Header className="sticky" />

      {children}
    </div>
  );
}

export default layout;
