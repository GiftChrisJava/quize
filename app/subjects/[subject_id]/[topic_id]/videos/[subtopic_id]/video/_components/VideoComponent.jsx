import VideoPlayer from "./VideoPlayer";

function VideoComponent({ video }) {
  return (
    <div>
      {" "}
      <div className="min-h-screen bg-gray-900 text-gray-300">
        <div className="container mx-auto p-6 sm:p-12">
          <div className="flex justify-between items-start mb-11">
            <h1 className="text-2xl md:text-2xl font-bold text-gray-200 mb-6">
              My Videos
            </h1>
            <form action="../auth/signout" method="post">
              <button
                type="submit"
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign out
              </button>
            </form>
          </div>

          <VideoPlayer video={video} />
        </div>
      </div>
    </div>
  );
}

export default VideoComponent;
