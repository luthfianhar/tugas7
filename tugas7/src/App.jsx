import { useImmerReducer } from "use-immer";
import { StudentContext } from "./context/StudentContext";
import { studentReducer } from "./reducer/studentReducer";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

export default function App() {
  const [students, dispatch] = useImmerReducer(studentReducer, []);

  return (
    <StudentContext.Provider value={{ students, dispatch }}>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-8">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-1">
            Manajemen Data Siswa
          </h1>
          <p className="text-slate-500 mb-6">
            CRUD menggunakan Context API & useImmerReducer
          </p>

          <StudentForm />
          <StudentTable />
        </div>
      </div>
    </StudentContext.Provider>
  );
}
