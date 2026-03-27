export default function WhatIsRestAPI() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        What is REST API?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          REST API (Representational State Transfer) is a way to communicate
          between client and server using HTTP methods. It allows applications
          to send and receive data over the internet.
        </p>
      </section>

      {/* HTTP Methods */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. HTTP Methods
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li><b>GET:</b> Fetch data</li>
          <li><b>POST:</b> Create data</li>
          <li><b>PUT:</b> Update data</li>
          <li><b>DELETE:</b> Remove data</li>
        </ul>
      </section>

      {/* How it Works */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. How it Works
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Client sends HTTP request</li>
          <li>Server processes request</li>
          <li>Server sends response (JSON/XML)</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          4. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`// GET request example
GET /users

// Response
[
  { "id": 1, "name": "John" },
  { "id": 2, "name": "Jane" }
]`}
        </pre>
      </section>

      {/* Features */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Features
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Stateless (no session stored)</li>
          <li>Uses HTTP protocol</li>
          <li>Scalable and flexible</li>
          <li>Data format: JSON (most common)</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Easy to understand and use</li>
          <li>Works with any frontend</li>
          <li>Lightweight communication</li>
          <li>Highly scalable</li>
        </ul>
      </section>

    </div>
  );
}