export default function Tag({ tag }: { tag: string }) {
  return (
    <span className="rounded-full select-none bg-black dark:bg-neutral-100 dark:text-black text-white px-3 py-1 text-xs font-semibold border border-neutral-400/50">
      {tag.trim()}
    </span>
  );
}
