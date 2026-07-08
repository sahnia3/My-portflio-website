import Image from "next/image";

interface ScreenshotProps {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
}

export function Screenshot({ src, alt, label, priority }: ScreenshotProps) {
  return (
    <figure className="border border-line-bright bg-surface">
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        priority={priority}
        className="h-auto w-full"
      />
      {label && (
        <figcaption className="border-t border-line px-4 py-2.5 text-xs text-faint">
          {label}
        </figcaption>
      )}
    </figure>
  );
}
