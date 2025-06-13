import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "providers/convex-provider";
import { TopNav } from "~/components/TopNav";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider
      afterSignOutUrl={process.env.NEXT_PUBLIC_REDIRECT_AFTER_SIGNOUT_URL}
    >
      <ConvexClientProvider>
        <TopNav />
        {children}
      </ConvexClientProvider>
    </ClerkProvider>
  );
}
