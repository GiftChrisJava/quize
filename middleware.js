import { clerkMiddleware } from "@clerk/nextjs/server";

// this is a public route
export default clerkMiddleware({
  publicRoutes : ["/"]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
