import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
        <SignUp path="/sign-up" className="ml-6"/>
    </div>
  )
}