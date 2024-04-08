import { computerLiteracyTopics } from "../literacyTopics";

function LiterscyVideos({ params }) {
  const thumb_id = parseInt(params.thumb_id);

  // Function to retrieve object based on id
  const getObjectById = (id) => {
    return computerLiteracyTopics.find((topic) => topic.id === id);
  };

  // Retrieve the object based on the thumb_id
  const videoObject = getObjectById(thumb_id);

  return (
    <div>
      <section>
        <h2>{thumb_id}</h2>
      </section>
    </div>
  );
}

export default LiterscyVideos;
