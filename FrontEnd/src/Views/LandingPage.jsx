import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <section className="bg-slate-100  w-full  lg:fixed h-full">
        <div className="justify-center items-center text-left p-8">
          <h1 className="text-4xl text-blue-700 font-mono font-semibold">
            OAuth 2.0
            <span className="text-3xl text-gray-900 font-sans text-center">
              {" "}
              y{" "}
            </span>
            <span className="text-5xl text-gray-900 font-sans font-extrabold">
              FaceBook
            </span>{" "}
          </h1>
        </div>

        <div>
          <div className=" grid  mx-auto lg:grid-cols-12 pt-2">
            <div className=" col-span-6 pt-16  ">
              <div className="p-8">
                <h2 className="text-3xl text-gray-900 font-sans text-center">
                  ¡Bienvenido a la Demo de Autenticación con{" "}
                  <span className="text-4xl text-blue-700 font-mono font-semibold">
                    FaceBook
                  </span>
                  !
                </h2>
              </div>
              <div className="p-6">
                <p className="font-sans text-center">
                  Bienvenido a nuestra demo interactiva que muestra cómo
                  funciona la autenticación con FaceBook utilizando el protocolo
                  OAuth 2.0. Esta demo te permitirá experimentar de primera mano
                  cómo los usuarios pueden iniciar sesión de forma segura en
                  aplicaciones utilizando sus cuentas de FaceBook.
                </p>
              </div>
              <div className="flex justify-end items-end ">
                <Link
                  to={`/crear-cuenta`}
                  className="text-lg font-medium bg-purple-300 px-4  text-black text-center rounded-xl hover:bg-purple-400 "
                >
                  Crear Cuenta
                </Link>
              </div>
            </div>
            <div className=" col-span-6 pb-7 ">
              <div className="flex justify-end items-end pr-32">
                <svg
                  className="h-56 w-56 items-end"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Auth0</title>
                  <path d="M21.98 7.448L19.62 0H4.347L2.02 7.448c-1.352 4.312.03 9.206 3.815 12.015L12.007 24l6.157-4.552c3.755-2.81 5.182-7.688 3.815-12.015l-6.16 4.58 2.343 7.45-6.157-4.597-6.158 4.58 2.358-7.433-6.188-4.55 7.63-.045L12.008 0l2.356 7.404 7.615.044z" />
                </svg>
              </div>
              <div className="flex justify-start items-start pl-32 pb-64">
                <svg className="h-56 w-56" viewBox="0 0 48 48">
                  <title>FaceBook</title>
                  <path
                    fill="#3F51B5"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { LandingPage };
