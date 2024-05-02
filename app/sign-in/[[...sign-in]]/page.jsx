import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
// import logo from "../../../public/meep.png"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
        <SignIn path="/sign-in" />
    </div>
  );
}


// Error: Clerk: The "/subjects/2/1/videos/1/intro/video" route is not a catch-all route. It is recommended to convert this route to a catch-all route, eg: "/subjects/2/1/videos/1/intro/video/[[...rest]]/page.tsx". Alternatively, update the SignIn component to use hash-based routing by setting the "routing" prop to "hash".