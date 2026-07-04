import Link from "next/link";
import { navigation } from "@/src/config/navigation";

export default function NavLinks() {
  return (
    <nav className="hidden lg:flex items-center gap-2">
      {navigation.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}