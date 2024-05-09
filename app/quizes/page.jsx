import Image from "next/image";
import imageb from "../../public/b.jpg";
import imaged from "../../public/d.jpg";
import Link from "next/link";

function Quizes() {
  const formThree = "Form_three";
  const formFour = "Form_four";
  return (
    <main className="max-container mt-6 h-[60vh]">
      <h1 className="font-bold text-3xl text-center text-gray-800">
        Select Class
      </h1>
      <div className=" mt-10 md:flex flex-col md:flex-row align-middle justify-center items-center">
        <article className="mb-2 mx-auto max-w-sm md:mb-0">
          <Link href={`/quizes/${formFour}`}>
            <Image
              src={imageb}
              alt="image"
              height={200}
              width={400}
              className="group hover:opacity-25 hover:duration-100 border hover:border-slate-600"
            />
            <p className="text-red-600 font-bold text-4xl -mt-14 p-2 ">
              Form 4
            </p>
          </Link>
        </article>
        <article className="md:px-1 mb-2 mx-auto max-w-sm md:mb-0 md:max-w-full">
          <Link href={`/quizes/${formThree}`}>
            <Image
              src={imaged}
              alt="image"
              height={300}
              width={570}
              className="group hover:opacity-25 hover:duration-100 border hover:border-slate-600"
            />
            <p className="text-green-600 font-bold text-4xl -mt-14 p-2 ">
              Form 3
            </p>
          </Link>

          <p className="md:text-lg text-sm text-gray-900 mt-3 md:w-[520px] w-[400px]">
            Click on the image to find and attemp a quiz available under each
            topic for the selected class
          </p>
        </article>
      </div>
    </main>
  );
}

export default Quizes;
