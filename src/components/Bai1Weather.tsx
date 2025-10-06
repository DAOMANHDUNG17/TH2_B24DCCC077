import { useState } from "react";
import axios from "axios";

function Bai1Weather() {
  const [city, setCity] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  // Hàm loại bỏ dấu tiếng Việt và chuyển về chữ thường
  const normalizeCityName = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .trim()
      .toLowerCase();
  };

  const getWeather = async () => {
    if (!city.trim()) {
      setError("Vui lòng nhập tên thành phố!");
      setData(null);
      return;
    }

    try {
      const cleanCity = normalizeCityName(city);
      const proxy = "https://api.allorigins.win/get?url=";
      const url = `https://wttr.in/${encodeURIComponent(cleanCity)}?format=j1`;
      const res = await axios.get(`${proxy}${encodeURIComponent(url)}`);

      const result = JSON.parse(res.data.contents);
      setData(result);
      setError("");
    } catch (e) {
      console.error(e);
      setError("Không tìm thấy dữ liệu cho thành phố này!");
      setData(null);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "10px" }}>Thời tiết</h2>

      <input
        type="text"
        placeholder="Nhập tên thành phố..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "6px", marginRight: "10px" }}
      />

      <button onClick={getWeather} style={{ padding: "6px 12px" }}>
        Xem
      </button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {data && (
        <div style={{ marginTop: "20px", lineHeight: "1.6" }}>
          <p>
            <strong>Nhiệt độ:</strong> {data.current_condition[0].temp_C}°C
          </p>
          <p>
            <strong>Thời tiết:</strong>{" "}
            {data.current_condition[0].weatherDesc[0].value}
          </p>
        </div>
      )}
    </div>
  );
}

export default Bai1Weather;
