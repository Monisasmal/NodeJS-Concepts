export const metadata = {
  title: "Nodejs Concepts & Projects",
  description:
    "Learn Node js concepts with clear explanations, real-world examples, and practical projects.",
};


export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-blue-600">
          Learn Nodejs the Right Way
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Clear explanations of Nodejs fundamentals, advanced types, 
          and real-world examples to make you confident in modern development.
        </p>
      </section>

      {/* Feature Cards */}
      <section className="grid md:grid-cols-3 gap-8 mt-16">
        
        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">
            Strong Type System
          </h3>
          <p className="text-gray-600">
            Understand how TypeScript improves code safety and prevents bugs 
            before runtime.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">
            Real World Examples
          </h3>
          <p className="text-gray-600">
            Every concept is explained with practical examples you can apply 
            in real projects.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">
            Interview Ready
          </h3>
          <p className="text-gray-600">
            Structured explanations help you prepare for frontend and 
            full-stack developer interviews.
          </p>
        </div>

      </section>

    </div>
  );
}