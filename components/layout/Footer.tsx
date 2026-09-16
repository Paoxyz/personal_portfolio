import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mx-auto mt-24 w-[92%] max-w-5xl pb-10 pt-8 text-sm text-mist/50">
      <div className="flex flex-col gap-2 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
        <p>{profile.email} · {profile.location}</p>
      </div>
    </footer>
  );
}
