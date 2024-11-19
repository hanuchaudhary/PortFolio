import Experience from "../components/Experience/Experience";
import Me from "../components/Me";

export default function About() {
  return (
    <div className="bg-darkBeige md:pt-40 pt-20 w-full md:px-40 px-2">
      <Me/>
      <Experience/>
    </div>
  );
}
