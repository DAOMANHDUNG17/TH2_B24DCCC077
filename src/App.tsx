import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Bai1Weather from "./components/Bai1Weather";
import Bai2Students from "./components/Bai2Students";
import Bai3News from "./components/Bai3News";

function App() {
  return (
    <Router>
      {/* Thanh điều hướng */}
      <nav style={navStyle}>
        <div style={navContainer}>
          <div style={linkGroup}>
            <Link to="/" style={linkStyle}>Trang chủ</Link>
            <Link to="/bai1" style={linkStyle}>Bài 1</Link>
            <Link to="/bai2" style={linkStyle}>Bài 2</Link>
            <Link to="/bai3" style={linkStyle}>Bài 3</Link>
          </div>
        </div>
      </nav>

      {/* Nội dung */}
      <div style={contentWrapper}>
        <div style={cardStyle}>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h2>Bài thực hành React TH02_B24DCCC077</h2>
                  <p>- Bài 1: Ứng dụng Thời tiết</p>
                  <p>- Bài 2: Danh sách Sinh viên</p>
                  <p>- Bài 3: Tin tức</p>
                </div>
              }
            />
            <Route path="/bai1" element={<Bai1Weather />} />
            <Route path="/bai2" element={<Bai2Students />} />
            <Route path="/bai3" element={<Bai3News />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

/* ===== CSS inline ===== */
const navStyle: React.CSSProperties = {
  backgroundColor: "#007bff",
  padding: "10px 0",
  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
};

const navContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "0 30px",
};

const linkGroup: React.CSSProperties = {
  display: "flex",
  gap: "25px",
};

const linkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
};

const contentWrapper: React.CSSProperties = {
  backgroundColor: "#f5f6f7",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingTop: "40px",
};

const cardStyle: React.CSSProperties = {
  backgroundColor: "white",
  padding: "25px 40px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  width: "800px",
  textAlign: "left",
};

export default App;
