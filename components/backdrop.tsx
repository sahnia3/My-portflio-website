/*
 * Swiss grid furniture: two faint vertical rules marking the content
 * margins, like a printed poster's construction lines.
 */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="mx-auto h-full max-w-6xl border-x border-line/60 px-5 md:px-8" />
    </div>
  );
}
