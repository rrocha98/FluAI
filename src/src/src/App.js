import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return alert("Por favor, insira seu email");
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-6 text-white">
      <h1 className="text-5xl font-bold mb-4">FluAi</h1>
      <p className="mb-8 max-w-xl text-center text-lg">
        Aprenda idiomas com inteligência artificial via WhatsApp.  
        Seja fluente com prática diária e personalizada.
      </p>

      {submitted ? (
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-2">Obrigado pelo interesse!</h2>
          <p>Em breve entraremos em contato com você no email {email}.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md">
          <input
            type="email"
            placeholder="Seu melhor email"
            className="p-3 rounded-md text-gray-900 w-full mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-white text-blue-700 font-bold px-6 py-3 rounded-md w-full hover:bg-gray-100 transition"
          >
            Quero saber mais
          </button>
        </form>
      )}

      <a
        href="https://wa.me/5527999999999?text=Ol%C3%A1%2C+quero+saber+mais+sobre+o+FluAi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg text-2xl"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
