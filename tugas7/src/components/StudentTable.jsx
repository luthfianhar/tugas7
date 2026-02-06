import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

export default function StudentTable() {
  const { students, dispatch } = useContext(StudentContext);

  function handleDelete(id) {
    dispatch({ type: "DELETE_STUDENT", payload: id });
  }

  function handleEdit(student) {
    const nama = prompt("Nama baru:", student.nama);
    const umur = prompt("Umur baru:", student.umur);
    const kelas = prompt("Kelas baru:", student.kelas);

    if (!nama || !umur || !kelas) return;

    dispatch({
      type: "UPDATE_STUDENT",
      payload: { id: student.id, nama, umur, kelas },
    });
  }

  return (
    <div className="overflow-hidden rounded-xl border">
      <table className="w-full">
        <thead className="bg-slate-100 text-slate-600">
          <tr>
            <th className="p-4 text-left">Nama</th>
            <th className="p-4 text-center">Umur</th>
            <th className="p-4 text-center">Kelas</th>
            <th className="p-4 text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 && (
            <tr>
              <td
                colSpan="4"
                className="text-center p-6 text-slate-400"
              >
                Belum ada data siswa
              </td>
            </tr>
          )}

          {students.map((s, i) => (
            <tr
              key={s.id}
              className={`border-t hover:bg-slate-50 transition ${
                i % 2 === 0 ? "bg-white" : "bg-slate-50/40"
              }`}
            >
              <td className="p-4">{s.nama}</td>
              <td className="p-4 text-center">{s.umur}</td>
              <td className="p-4 text-center">{s.kelas}</td>
              <td className="p-4 text-center space-x-2">
                <button
                  onClick={() => handleEdit(s)}
                  className="px-3 py-1 rounded-lg bg-yellow-400/90 hover:bg-yellow-400 text-slate-800 text-sm transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(s.id)}
                  className="px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm transition"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
