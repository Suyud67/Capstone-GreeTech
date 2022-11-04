import React from "react";
import ButtonSubmit from "../event/ButtonSubmit";

export default function FormTech() {
  return (
    <>
      <form className="mb-10 grid w-full grid-rows-1 pt-4">
        <input
          type="text"
          className="h-10 rounded-md border-solid border-black bg-slate-200 px-2 text-black"
          placeholder="Nama"
          required
        />
        <input
          type="email"
          className="mt-3 h-10 rounded-md border-solid border-black bg-slate-200 px-2 text-black"
          placeholder="Email"
          required
        />
        <textarea
          type="email"
          className="mt-3 h-60 rounded-md border-solid border-black bg-slate-200 px-2 text-black"
          placeholder="Ketik pesan anda disini.."
          required
        />
        <ButtonSubmit />
      </form>
    </>
  );
}
