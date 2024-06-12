import Header from "./_component/Header";

function layout({ children }) {
  return (
    <div>
      <Header className="px-12" />

      {children}
    </div>
  );
}

export default layout;
