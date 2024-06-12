import React from "react";

function SubjectModel({ onclose, visible, image, name }) {
  if (!visible) return null;

  return (
    <main>
      <section className="fixed insert-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-2 rounded-md">{name}</div>
      </section>
    </main>
  );
}

export default SubjectModel;
