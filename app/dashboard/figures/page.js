"use client";

import { useEffect, useState } from "react";

export default function FiguresDashboard() {
  const [figures, setFigures] = useState([]);
  const [search, setSearch] = useState("");

  async function load() {
    const res = await fetch("/api/figures");
    const data = await res.json();
    setFigures(data);
  }

  useEffect(() => {
    load();
  }, []);

  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #ffe3f0, #ffd0e2)",
    padding: "40px",
    fontFamily: "Arial, system-ui, sans-serif",
    color: "#4a3b47",
  };

  const cardStyle = {
    padding: "15px",
    background: "white",
    borderRadius: "12px",
    marginBottom: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    display: "flex",
    gap: "15px",
    alignItems: "center",
  };

  const buttonLink = {
    padding: "8px 14px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "0.95rem",
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ color: "#c91873", fontSize: "2.5rem", marginBottom: "10px" }}>
        🌸 Manage Anime Figures
      </h1>

      <p style={{ marginBottom: "20px" }}>
        View, search, edit, and manage all anime figures in your collection.
      </p>

      <input
        type="text"
        placeholder="🔍 Search by name, anime, or brand..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "12px",
          borderRadius: "12px",
          border: "1px solid #ffb3d9",
          marginBottom: "20px",
          fontSize: "1rem",
          color: "#4a3b47",
          backgroundColor: "white",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        }}
      />

      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <a
          href="/dashboard"
          style={{
            ...buttonLink,
            background: "#f8bbd0",
            color: "#581845",
          }}
        >
          ← Back to Dashboard
        </a>

        <a
          href="/dashboard/figures/create"
          style={{
            ...buttonLink,
            background: "#ff79c6",
            color: "white",
          }}
        >
          + Add New Figure
        </a>
      </div>

      <div style={{ marginTop: "10px" }}>
        {figures
          .filter((f) => {
            if (!search) return true;
            const text = search.toLowerCase();
            return (
              f.name.toLowerCase().includes(text) ||
              f.anime_title.toLowerCase().includes(text) ||
              f.brand.toLowerCase().includes(text)
            );
          })
          .map((f) => (
            <div
              key={f.id}
              style={cardStyle}
              className="figure-card"   
            >
              {f.image_url && (
                <img
                  src={f.image_url}
                  alt={f.name}
                  className="figure-image" 
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    border: "2px solid #ffb3d9",
                  }}
                />
              )}

              <div style={{ flex: 1 }}>
                <h2
                  style={{
                    color: "#d63384",
                    marginBottom: "6px",
                    fontSize: "1.25rem",
                  }}
                >
                  {f.name}
                </h2>

                <p style={{ marginBottom: 4, color: "#4a3b47" }}>
                  <strong>Anime:</strong> {f.anime_title}
                </p>

                <p style={{ marginBottom: 4, color: "#4a3b47" }}>
                  <strong>Brand:</strong> {f.brand}
                </p>

                <p style={{ marginBottom: 4, color: "#4a3b47" }}>
                  <strong>Price:</strong> {f.price} THB
                </p>

                <p style={{ marginBottom: 4, color: "#4a3b47" }}>
                  <strong>Stock:</strong> {f.stock}
                </p>
              </div>

              <div>
                <a
                  href={`/dashboard/figures/edit/${f.id}`}
                  style={{
                    padding: "8px 12px",
                    background: "#ff79c6",
                    borderRadius: "8px",
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                  }}
                >
                  Edit
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
