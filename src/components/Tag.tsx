export default function Tag({ tag }: { tag: string }) {
  return (
    <span className="rounded-full bg-stone-500 text-stone-950 dark:text-stone-50 px-3 py-1 text-xs font-semibold border border-stone-400/50">
      {tag.trim()}
    </span>
  );
}
