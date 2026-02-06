import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

export default function StudentForm() {
  const { dispatch } = useContext(StudentContext);
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "ADD_STUDENT",
      payload: { nama, umur, kelas },
    });

    setNama("");
    setUmur("");
    setKelas("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
    >
      <input
        type="text"
        placeholder="Nama siswa"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        required
      />

      <input
        type="number"
        placeholder="Umur"
        value={umur}
        onChange={(e) => setUmur(e.target.value)}
        className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        required
      />

      <input
        type="text"
        placeholder="Kelas"
        value={kelas}
        onChange={(e) => setKelas(e.target.value)}
        className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white rounded-xl px-4 py-3 font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
      >
        + Tambah
      </button>
    </form>
  );
}
