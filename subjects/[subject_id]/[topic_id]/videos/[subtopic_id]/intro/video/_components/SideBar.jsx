function SideBar() {
  const comments = [
    { id: 1, name: "Gift Chris", comment: "I find it easy to understand" },

    { id: 2, name: "Joel Ulaya", comment: "very well explained" },

    { id: 3, name: "Philip Maulidi", comment: "Next time zoom the screen" },

    { id: 4, name: "Bertha Imbwa", comment: "Thank you so much" },

    { id: 5, name: "Emmanuel Mbewe", comment: "I love it" },

    {
      id: 6,
      name: "Medium Damiano",
      comment: "Last part was not clear for me",
    },
  ];
  return (
    <div className="px-4 py-1 bg-white shadow-sm border h-screen">
      <p className="font-bold text-green-600 text-lg">Feedback</p>
      <hr className="mt-1" />
      {/* comments list  */}
      <div className="mt-3">
        {comments.map((item) => (
          <div key={item.id} className="mb-2">
            <h2 className="text-sm text-gray-500 font-semibold">{item.name}</h2>
            <h5 className="text-sm text-gray-900">{item.comment}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
