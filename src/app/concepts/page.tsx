import Link from "next/link";

const concept = [
     {name: "What is Node js?", path:"/concepts/what-is-Nodejs"},
     
];

export default function Concepts(){
    
    return(
        <section>
         <h1 className="text-3xl font-bold mb-6">Nodejs Concepts</h1>
         <ul className="grid gap-4 sm:grid-cols-3">
        {concept.map(c => (
          <li key={c.name} className="bg-white p-4 rounded shadow">
            <Link href={c.path} className="font-semibold">
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
      </section>
    )
}