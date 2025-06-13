import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "providers/convex-provider";
import { TopNav } from "~/components/TopNav";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <ConvexClientProvider>
        <TopNav />
        {children}
      </ConvexClientProvider>
    </ClerkProvider>
  );
}
