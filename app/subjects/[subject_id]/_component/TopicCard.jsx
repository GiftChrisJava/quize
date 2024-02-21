import Image from "next/image";

function TopicCard({ name, image }) {
  return (
    <div className="mt-6 hover:cursor-pointer shadow-xl bg-white rounded-md mx-auto max-w-[240px] md:max-w-[220px] ">
      <div>
        <Image
          src={image}
          height={200}
          width={220}
          alt="topic image"
          className="rounded-md hover:cursor-pointer object-contain md:h-54 md:w-84 rounded-b-none"
        />
      </div>

      <div className="mt-2  px-1">
        <div className="flex flex-row space-x-5 hover:cursor-pointer">
          <p className="font-semibold text-red-600 text-sm mb-2">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default TopicCard;
