import Link from "next/link";
import { profile } from "@/data/profile";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-auto mt-4 w-[92%] max-w-5xl">
      <nav className="glass-surface flex items-center justify-between rounded-full px-5 py-3">
        <Link href="/" className="font-display text-sm font-semibold tracking-tight">
          {profile.name}
        </Link>
        <ul className="hidden gap-6 text-sm text-mist/75 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-mist">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={profile.resumeFile}
          className="rounded-full bg-signal px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-signal2"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}