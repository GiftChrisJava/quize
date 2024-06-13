import { SignIn } from "@clerk/nextjs";
// import logo from "../../../public/meep.png"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
        <SignIn path="/sign-in" />
    </div>
  );
}


