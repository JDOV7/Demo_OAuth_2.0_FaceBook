import React from "react";
import { Link } from "react-router-dom";

const CrearCuenta = () => {
  const scope = "email";
  const clienteId = import.meta.env.VITE_CLIENT_ID;
  console.log(clienteId);

  const url = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${clienteId}&redirect_uri=${encodeURIComponent(
    "http://localhost:5173/home"
  )}&auth_type=rerequest&scope=${scope}`;
  console.log(url);
  // console.log(url);
  return (
    <>
      <section className="bg-slate-100 ">
        <div className="justify-center items-center text-center pt-2">
          <h1 className="text-4xl text-blue-700 font-mono font-semibold">
            OAuth 2.0
            <span className="text-3xl text-gray-900 font-sans text-center">
              {" "}
              y{" "}
            </span>
            <a href="/" className="text-5xl text-gray-900 font-sans font-extrabold">
              FaceBook
            </a>{" "}
          </h1>
        </div>
        <div className="justify-center items-center text-center pt-6 pb-5">
          <h1 className="text-3xl font-sans font-bold">Crear Cuenta</h1>
        </div>
        <main className="flex justify-center items-center  ">
          <div className=" shadow-2xl px-10 flex justify-start items-start rounded-3xl bg-slate-400 ">
            <form action="">
              <div className="my-2">
                <label
                  htmlFor=""
                  className="uppercase font-bold text-gray-600 "
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="border w-full p-2 mt-4 bg-slate-100 rounded-xl"
                  placeholder="Nombre de Registro"
                  name="nombre"
                />
              </div>
              <div className="my-2">
                <label
                  htmlFor=""
                  className="uppercase font-bold text-gray-600 "
                >
                  Correo
                </label>
                <input
                  type="email"
                  className="border w-full p-2 mt-4 bg-slate-100 rounded-xl"
                  placeholder="Correo de Registro"
                  name="correo"
                />
              </div>
              <div className="my-2">
                <label
                  htmlFor=""
                  className="uppercase font-bold text-gray-600 "
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  className="border w-full p-2 mt-4 bg-slate-100 rounded-xl"
                  placeholder="Contraseña de Registro"
                  name="contrasena"
                />
              </div>
              <div className="flex justify-center items-center">
                <input
                  type="submit"
                  value="Crear Cuenta"
                  className="bg-slate-300 w-full py-2 text-center px-10 rounded-xl text-cuarto uppercase font-bold my-5  hover:cursor-pointer hover:bg-slate-500 md:w-auto "
                />
              </div>
            </form>
          </div>
        </main>
        <div className="text-center my-3">
          <p>O</p>
        </div>

        <div className=" flex justify-center items-center text-center">
          <Link
            to={url}
            className="bg-gray-300 hover:bg-gray-400  font-semibold  px-4 mb-4 rounded-2xl flex items-center text-black"
          >
            <span className="p-2">
              <svg className="h-6 w-6" viewBox="0 0 48 48">
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
            </span>

            <span>FaceBook</span>
          </Link>
          {/* <button class="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded flex items-center">
          <svg
            className="h-5 w-5 "
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Auth0</title>
            <path d="M21.98 7.448L19.62 0H4.347L2.02 7.448c-1.352 4.312.03 9.206 3.815 12.015L12.007 24l6.157-4.552c3.755-2.81 5.182-7.688 3.815-12.015l-6.16 4.58 2.343 7.45-6.157-4.597-6.158 4.58 2.358-7.433-6.188-4.55 7.63-.045L12.008 0l2.356 7.404 7.615.044z" />
          </svg>
          Iniciar Sesión con GitHub
        </button> */}
        </div>
      </section>
    </>
  );
};

export default CrearCuenta;
