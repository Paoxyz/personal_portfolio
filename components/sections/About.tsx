import { profile } from "@/data/profile";

export default function About() {
  return (
    <section className="mx-auto mt-24 w-[92%] max-w-5xl">
      <p className="max-w-2xl font-display text-2xl font-medium leading-snug text-mist/90 md:text-3xl">
        {profile.objective}
      </p>
    </section>
  );
}
