import Image from "next/image";

export default function PhotoFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-28 w-28 overflow-hidden rounded-[10px] border border-white/15 bg-[#111111]">
      <Image src={src} alt={alt} fill sizes="112px" className="object-cover" priority />
    </div>
  );
}