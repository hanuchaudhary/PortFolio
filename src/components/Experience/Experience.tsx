import EducationExp, { EducationExpTypes } from "./Education-exp";

export default function Experience() {
  const data: EducationExpTypes[] = [
    {
      qualification:
        "Bachelor Of Technolgy and Engineering in Computer Science",
      description:
        "Relevant courses included Data Structures and Algorithms, Web Design, Cloud Computing, Artificial Neural Network, Operating Systems, OOPS, and Database Management.",
      duration: "2023-2027 | Aligarh",
      school: "Aligarh College of engineering and technology",
      link: "https://www.acetup.org/",
    },
    {
      qualification: "Intermediate {12th}",
      description:
        "Learned the basics of computer science and programming languages.",
      duration: "2022-23 | Aligarh",
      school: "GD Public Senior Secondary School",
      link: "http://gdpublicschoolaligarh.com/",
    },
    {
      qualification: "Matriculation {10th}",
      description: "Learned good values,dedication and disciplne.",
      duration: "2020-2021 | Aligarh",
      school: "GD Public Senior Secondary School",
      link: "http://gdpublicschoolaligarh.com/",
    },
  ];
  return (
    <div className="pt-32 pb-10">
      <h1 className="text-5xl dark:text-beige font-bold ">Education</h1>
      <div className="w-full pt-10">
        {data.map((e, idx) => (
          <div key={idx} className="py-10">
            <EducationExp {...e} />
          </div>
        ))}
      </div>
    </div>
  );
}
