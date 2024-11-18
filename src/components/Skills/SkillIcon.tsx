interface SkillIcon {
  name: string;
  icon: string;
}
export default function SkillIcon({name, icon}: SkillIcon) {
  return (
    <div className="inline-block">
      <div className="flex items-center rounded-lg justify-center gap-1 bg-[#222222] py-2 px-6 border border-[#333333]">
        <img className="h-10 w-10" src={`/${icon}.svg`} alt="" />
        <h1 className="text-beige text-lg font-mono font-semibold">
          {name}
        </h1>
      </div>
    </div>
  );
}
