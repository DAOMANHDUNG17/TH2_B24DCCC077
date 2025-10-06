import { useEffect, useState } from "react";
import axios from "axios";

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

function Bai2Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setStudents(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;

  // ✅ Nếu người dùng đã bấm vào tên → hiển thị chi tiết sinh viên
  if (selectedStudent) {
    return (
      <div
        style={{
          width: "70%",
          margin: "30px auto",
          background: "#f9f9f9",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Chi tiết sinh viên</h2>
        <p>
          <b>Tên:</b> {selectedStudent.name}
        </p>
        <p>
          <b>Email:</b> {selectedStudent.email}
        </p>
        <p>
          <b>Điện thoại:</b> {selectedStudent.phone}
        </p>
        <p>
          <b>Website:</b>{" "}
          <a
            href={`https://${selectedStudent.website}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            {selectedStudent.website}
          </a>
        </p>

        <button
          onClick={() => setSelectedStudent(null)}
          style={{
            background: "none",
            border: "none",
            color: "purple",
            textDecoration: "underline",
            cursor: "pointer",
            padding: 0,
            fontSize: "16px",
            marginTop: "10px",
          }}
        >
          ⬅ Quay lại danh sách
        </button>
      </div>
    );
  }

  // ✅ Nếu chưa chọn ai → hiển thị danh sách gạch đầu dòng
  return (
    <div
      style={{
        width: "70%",
        margin: "30px auto",
        background: "#f9f9f9",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Danh sách sinh viên</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id} style={{ marginBottom: "6px" }}>
            <span
              style={{
                color: "blue",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => setSelectedStudent(s)}
            >
              {s.name}
            </span>{" "}
            - {s.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bai2Students;
