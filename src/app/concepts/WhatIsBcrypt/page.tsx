export default function WhatIsBcrypt() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        What is bcrypt?
      </h1>

      {/* Definition */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          1. Definition
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          bcrypt is a library used to hash passwords securely before storing
          them in a database. It converts plain text passwords into encrypted
          form to protect user data.
        </p>
      </section>

      {/* Why Use */}
      <section className="mb-6 bg-red-50 border-l-4 border-red-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          2. Why We Use bcrypt
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Passwords are stored securely</li>
          <li>Prevents data breaches</li>
          <li>Protects against hacking attacks</li>
          <li>Uses salting to strengthen security</li>
        </ul>
      </section>

      {/* How it Works */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          3. How it Works
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>User enters password</li>
          <li>bcrypt hashes the password</li>
          <li>Hashed password is stored in DB</li>
          <li>During login → password is compared with hash</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          4. Example
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const bcrypt = require("bcrypt");

// Hash password
bcrypt.hash("mypassword", 10, (err, hash) => {
  console.log(hash);
});

// Compare password
bcrypt.compare("mypassword", hash, (err, result) => {
  console.log(result); // true or false
});`}
        </pre>
      </section>

      {/* Important Concept */}
      <section className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          5. Important Concept (Salt)
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Salt is a random value added to the password before hashing.
          It ensures that even if two users have the same password,
          their hashes will be different.
        </p>
      </section>

      {/* Advantages */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          6. Advantages
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Strong password security</li>
          <li>Built-in salting</li>
          <li>Prevents brute-force attacks</li>
          <li>Widely used in authentication systems</li>
        </ul>
      </section>

    </div>
  );
}