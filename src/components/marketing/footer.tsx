import Link from "next/link";
import Container from "@/src/components/shared/container";

export default function Footer() {
  return (
 <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-zinc-950 to-black">
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

<div className="absolute left-1/2 top-0 h-56 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-4">
          {/* Brand */}
          <div>
           <h3 className="text-3xl font-extrabold tracking-tight">
              CubeMaster
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                {" "}AI
              </span>
            </h3>

            <p className="mt-5 leading-7 text-zinc-400">
  CubeMaster AI combines artificial intelligence,
  computer vision, and interactive 3D graphics to
  help anyone solve and master the Rubik's Cube.
</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold tracking-wide text-white">
              Navigation
            </h4>

            <ul className="mt-5 space-y-3 text-zinc-400">
              <li>
                <Link
                  href="/"
                 className="group inline-flex transition-all duration-300 hover:text-cyan-400"
                >
               <span className="relative">
  Home
  <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
</span>
                </Link>
              </li>

              <li>
                <Link
                  href="#features"
             className="group inline-flex transition-all duration-300 hover:text-cyan-400"
                >
                <span className="relative">
  Features
  <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
</span>
                </Link>
              </li>

              <li>
                <Link
                  href="#how-it-works"
                 className="group inline-flex transition-all duration-300 hover:text-cyan-400"
                >
            <span className="relative">
  How it Works
  <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
</span>
                </Link>
              </li>

              <li>
                <Link
                  href="#learning"
                 className="group inline-flex transition-all duration-300 hover:text-cyan-400"
                >
                 <span className="relative">
  Learning
  <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white">
              Resources
            </h4>

            <ul className="mt-5 space-y-3 text-zinc-400">
              <li>
                <Link
                  href="#"
                  className="group inline-flex transition-all duration-300 hover:text-cyan-400"
                >
                 <span className="relative">
  Documentation
  <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
</span>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                 className="group inline-flex transition-all duration-300 hover:text-cyan-400"
                >
              <span className="relative">
  Algorithms
  <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
</span>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                className="group inline-flex transition-all duration-300 hover:text-cyan-400"
                >
                  <span className="relative">
  Support
  <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
</span>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="group inline-flex transition-all duration-300 hover:text-cyan-400"
                >
                 <span className="relative">
  Contact
  <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Built With */}
          <div>
            <h4 className="font-semibold text-white">
              Built With
            </h4>

     
           <ul className="mt-5 space-y-3 text-zinc-400">
  <li>Next.js 16</li>
  <li>React Three Fiber</li>
  <li>Tailwind CSS</li>
  <li>TypeScript</li>
  <li>Framer Motion</li>
</ul>
            
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-zinc-500">
        
          © {new Date().getFullYear()} CubeMaster AI | All Rights Reserved | Built with ❤️ using
          Next.js, React Three Fiber & AI.
        </div>
      </Container>
    </footer>
  );
}