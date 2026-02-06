export function studentReducer(draft, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      draft.push({
        id: Date.now(),
        nama: action.payload.nama,
        umur: action.payload.umur,
        kelas: action.payload.kelas,
      });
      break;

    case "DELETE_STUDENT":
      return draft.filter((s) => s.id !== action.payload);

    case "UPDATE_STUDENT":
      const student = draft.find((s) => s.id === action.payload.id);
      if (student) {
        student.nama = action.payload.nama;
        student.umur = action.payload.umur;
        student.kelas = action.payload.kelas;
      }
      break;

    default:
      break;
  }
}
