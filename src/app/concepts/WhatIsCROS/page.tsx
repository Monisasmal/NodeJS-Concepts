export default function WhatIsCORS() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        What is CORS?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          CORS (Cross-Origin Resource Sharing) is a security feature implemented
          by browsers that restricts web applications from making requests to a
          different domain (origin) than the one that served the webpage.
        </p>
      </section>

      {/* Why CORS */}
      <section className="mb-6 bg-red-50 border-l-4 border-red-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Why CORS Exists
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Prevents unauthorized access</li>
          <li>Protects user data</li>
          <li>Avoids malicious cross-site requests</li>
        </ul>
      </section>

      {/* Example Problem */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          3. Example Problem
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`// Frontend (localhost:3000)
fetch("http://api.example.com/data")

// ❌ Error: Blocked by CORS policy`}
        </pre>
      </section>

      {/* Solution */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          4. Solution (Enable CORS)
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`// Using cors package
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("CORS enabled");
});

app.listen(3000);`}
        </pre>
      </section>

      {/* How it Works */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. How it Works
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Browser sends request to another origin</li>
          <li>Server responds with CORS headers</li>
          <li>Browser allows or blocks request based on headers</li>
        </ul>
      </section>

      {/* Important Header */}
      <section className="mb-6 bg-purple-50 border-l-4 border-purple-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Important Header
        </h2>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm">
{`Access-Control-Allow-Origin: *`}
        </pre>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          7. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Enhances security</li>
          <li>Controls API access</li>
          <li>Prevents unauthorized requests</li>
        </ul>
      </section>

    </div>
  );
}