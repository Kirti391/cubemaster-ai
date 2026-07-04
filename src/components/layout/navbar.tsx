import Logo from "@/src/components/shared/logo";
import NavLinks from "./nav-links";
import StatusBadge from "@/src/components/ui/status-badge";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-6 z-50 px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
        {/* Left */}
        <Logo />

        {/* Center */}
        <div className="hidden lg:flex items-center gap-6">
          <NavLinks />
          <StatusBadge />
        </div>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost">
            Login
          </Button>

          <Button>
            Solve Cube

            <ArrowRight
              size={18}
              className="ml-2"
            />
          </Button>
        </div>

        {/* Mobile */}
        <button className="lg:hidden rounded-xl p-2 hover:bg-white/10">
            ☰
        </button>
      </div>
    </header>
  );
}