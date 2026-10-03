import { useState } from 'react';

// Screenshots are exported at this size (16:10), so the frame never shifts layout.
const WIDTH = 1600;
const HEIGHT = 1000;

// A project screenshot. Until the file exists in /public/projects/, a soft
// gradient holds its place at the same size.
export default function ProjectImage({ project }) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return <div aria-hidden="true" className="image-placeholder aspect-[16/10]" />;
  }

  // A wide screenshot is shown whole, in a browser window centred on the same
  // 16:10 frame, rather than cropped to fit it.
  if (project.image.frame === 'browser') {
    return (
      <div className="image-placeholder flex aspect-[16/10] items-center justify-center p-[6%]">
        <div className="w-full overflow-hidden rounded-[10px] border border-line bg-raised shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
          <div aria-hidden="true" className="flex h-[clamp(0.875rem,2.4vw,1.5rem)] items-center gap-[0.4em] px-[0.75em] text-[clamp(0.375rem,1vw,0.625rem)]">
            <span className="size-[1em] rounded-full bg-[#ff5f57]" />
            <span className="size-[1em] rounded-full bg-[#febc2e]" />
            <span className="size-[1em] rounded-full bg-[#28c840]" />
          </div>
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            decoding="async"
            onError={() => setMissing(true)}
            className="block h-auto w-full"
          />
        </div>
      </div>
    );
  }

  return (
    <img
      src={project.image.src}
      alt={project.image.alt}
      width={WIDTH}
      height={HEIGHT}
      loading="lazy"
      decoding="async"
      onError={() => setMissing(true)}
      className="block h-auto w-full bg-raised"
    />
  );
}

// The project's headline figures, as solid chips laid over its image.
// Labels, not controls, so they stay off the glass layer.
export function MetricChips({ highlights }) {
  return (
    <ul className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
      {highlights.map((item) => (
        <li
          key={item.label}
          className="rounded-full border border-line bg-raised/90 px-3 py-1.5 text-xs leading-tight text-fg"
        >
          <span className="font-semibold tabular-nums">{item.value}</span> {item.label}
        </li>
      ))}
    </ul>
  );
}
