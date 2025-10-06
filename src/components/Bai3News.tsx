import { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  id: number;
  title: string;
  image_url: string;
  summary: string;
  published_at: string;
  url: string;
}

function Bai3_News() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then((res) => {
        setArticles(res.data.results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Đang tải tin tức...</p>;

  return (
    <div style={{ width: "80%", margin: "30px auto" }}>
      <h2 style={{ marginBottom: "20px" }}>Tin tức</h2>
      {articles.map((a) => (
        <div
          key={a.id}
          style={{
            display: "flex",
            alignItems: "flex-start",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "25px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            gap: "20px",
          }}
        >
          <img
            src={a.image_url}
            alt={a.title}
            style={{
              width: "200px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "8px",
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: "0 0 10px" }}>{a.title}</h3>
            <p style={{ marginBottom: "10px" }}>
              {a.summary.length > 200
                ? a.summary.slice(0, 200) + "..."
                : a.summary}
            </p>
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "purple", textDecoration: "underline" }}
            >
              Đọc thêm tại SpaceNews
            </a>
            <p style={{ fontSize: "14px", color: "#555", marginTop: "6px" }}>
              Ngày đăng: {new Date(a.published_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bai3_News;
