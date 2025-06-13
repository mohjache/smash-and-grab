import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="bg-background text-foreground fixed top-0 right-0 left-0 z-50 flex h-16 justify-between px-4 lg:px-32">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Smash&apos;n Grab</span>
          </Link>
        </div>
        <div className="flex items-center justify-center"></div>
      </div>

      <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            Smash Hard. Win Big.
          </h1>
          <p className="mb-8 text-lg sm:text-xl">
            Competitive Badminton Match Making
          </p>
        </div>
      </div>
    </>
  );
}
