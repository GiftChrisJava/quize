import VideoPlayer from "./VideoPlayer";

function VideoComponent({ video }) {
  return (
    <div>
      <div className="">
        <div className="container mx-auto px-1 -mt-11 sm:p-12">
          <VideoPlayer video={video} />
        </div>
      </div>
    </div>
  );
}

export default VideoComponent;
