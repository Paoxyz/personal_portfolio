import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mx-auto mt-24 w-[92%] max-w-5xl pb-10 pt-8 text-sm text-mist/50">
      <div className="flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
        
        <div className="flex items-center gap-4">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-mist/90 transition-colors">GitHub</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-mist/90 transition-colors">LinkedIn</a>
          <a href={profile.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-mist/90 transition-colors">Facebook</a>
          <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-mist/90 transition-colors">Instagram</a>
        </div>

        <p>{profile.email} · {profile.location}</p>
      </div>
    </footer>
  );
}