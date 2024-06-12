"use client"
import Image from "next/image";
import { subtopicNotes } from "../constant/subtopicNotes";
import store from "store2";

function Notes({ params }) {
 const video = store.get("video");
 const topic = store.get("topic");
 
 const contentCreatorId = topic.contentCreator;

  // let note = video.notes[0];
  let note = [];

  return (
    <div>
      {( note.size < 2) ? (<div className="max-container max-w-xl mx-auto p-4">
      <section className="flex gap-[60px] items-center">
        <article>
          <div className="h-16 w-16 rounded-full overflow-hidden border border-gray-200">
            <Image
              src={note.author_img_url}
              alt="Profile picture"
              width={64} // This is the size of the container (h-16 w-16 in TailwindCSS is 4rem which is 64px)
              height={64}
              className="object-cover object-center"
            />
          </div>
        </article>

        <article>
          <h2 className="text-2xl font-bold text-gray-700"> {note.title}</h2>
          <small>By {note.author}</small>
        </article>
      </section>

      <section className="mt-8">{note.introduction}</section>

      <section className="mt-4">{note.paragraph1}</section>

      <section className="mt-4">{note.paragraph2}</section>

      <section className="mt-4">{note.paragraph3}</section>

      <section className="mt-4">{note.paragraph4}</section>

      <section className="mt-8 ">{note.conclusion}</section>

      <article className="mt-28">
        <form
          action=""
          className="flex flex-col align-middle justify-center gap-2"
        >
          <input
            type="text"
            className="px-2 py-3 text-sm focus:outline-none bor"
            placeholder="Write your comment here.."
          />
          <button className="mt-1 px-3 py-2 font-semibold text-sm bg-slate-600 hover:text-green-600 text-gray-200 w-38">
            Submit
          </button>
        </form>
      </article>
    </div>) : (<div className="max-container max-w-xl mx-auto p-4"><h2 className="font-bold justify-center items-center text-gray-700 p-8"></h2>Not Available for now</div>)}
    </div>
  );
}

export default Notes;
