import type { FormEvent } from "react";
import { useState, useRef } from "react";
import { Button } from "./button";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const SERVICE_ID = "service_j4595vr";
  const TEMPLATE_ID = "template_w360res";
  const PUBLIC_KEY = "rrjo2eNPhJcTFnlvh";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const regExp =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    const isValid = regExp.test(inputValue);

    if (isValid) {
      setLoading(true);
      setError(false);

      const templateParams = {
        user_email: inputValue,
        nombre: nameValue,
        title: "Web Simplifica Group",
        mensaje:
          "Este cliente ha solicitado contacto desde el formulario de la web.",
      };

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then(() => {
          setShowPopup(true);
          setInputValue("");
          setNameValue("");
        })
        .catch((err) => {
          console.error("Error de EmailJS:", err);
          alert("Hubo un error al enviar el correo.");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setError(true);
    }
  };

  return (
    <div className="mb-[300px] absolute top-[-250px] left-0 right-0 mx-auto text-center py-10 px-6 bg-Navy-850 rounded-[50px] w-[336px] md:w-[480px] xl:w-[720px] shadow-2xl transition-all">
      <h2 className="font-bold mb-4 text-[20px] text-white uppercase tracking-wider">
        Contáctanos
      </h2>

      <p className="text-sm mb-8 text-white/80">
        Déjanos tus datos y nos pondremos en contacto contigo muy pronto.
      </p>

      {/* Se añade noValidate para permitir que Playwright testee la validación de React */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-4 relative w-full items-center"
      >
        <div className="flex flex-col gap-4 w-full max-w-[400px]">
          <input
            onChange={(e) => setNameValue(e.target.value)}
            className="bg-white rounded-3xl placeholder:text-gray-400 text-center h-12 w-full text-Navy-800 border-2 border-transparent focus:border-orange-500 outline-none transition-all"
            type="text"
            placeholder="Tu nombre"
            required
            value={nameValue}
            disabled={loading}
          />

          <div className="flex flex-col w-full relative">
            <input
              onChange={(e) => {
                setInputValue(e.target.value);
                if (error) setError(false);
              }}
              className={`bg-white rounded-3xl placeholder:text-gray-400 text-center h-12 w-full text-Navy-800 border-2 transition-all outline-none ${
                error
                  ? "border-red-500 ring-2 ring-red-200"
                  : "border-transparent focus:border-orange-500"
              }`}
              type="email"
              placeholder="correo@ejemplo.com"
              required
              value={inputValue}
              disabled={loading}
            />
            {error && (
              <p className="text-red-400 text-[10px] mt-1 absolute -bottom-5 left-0 right-0 text-center font-medium">
                Por favor, ingresa un correo válido.
              </p>
            )}
          </div>
        </div>

        <Button
          styles={`w-full max-w-[200px] mt-2 transition-opacity ${
            loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-105 active:scale-95"
          }`}
          text={loading ? "Enviando..." : "Enviar"}
        />
      </form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] px-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

          <div className="relative bg-white p-8 rounded-[30px] shadow-2xl max-w-[400px] w-full transform transition-all animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-Navy-850 font-bold text-xl mb-2">
              ¡Correo enviado con éxito!
            </h3>
            <p className="text-gray-600 mb-6">
              Gracias por contactarnos. Te responderemos lo antes posible.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-Orange-800 text-white font-bold py-2 px-8 rounded-full hover:bg-Orange-700 transition-colors cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
