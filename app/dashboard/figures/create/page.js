"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateFigurePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    anime_title: "",
    brand: "",
    price: "",
    stock: "",
    scale: "",
    release_date: "",
    image_url: "",
  });
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/figures", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Error creating figure");
      return;
    }

    router.push("/dashboard/figures");
  }

  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #ffeaf4, #ffd6e8)",
    padding: "40px",
    fontFamily: "Arial, system-ui, sans-serif",
    color: "#4a3b47",
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ffb3d9",
    color: "#4a3b47",
    backgroundColor: "white",
    fontSize: "0.95rem",
  };

  const labelStyle = {
    fontSize: "0.9rem",
    fontWeight: "bold",
    color: "#7b3b63",
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ color: "#c91873", fontSize: "2rem", marginBottom: "20px" }}>
        🌸 Add New Anime Figure
      </h1>

      <a
        href="/dashboard/figures"
        style={{
          padding: "8px 14px",
          background: "#f8bbd0",
          borderRadius: "8px",
          textDecoration: "none",
          color: "#581845",
          fontWeight: "bold",
        }}
      >
        ← Back
      </a>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "20px",
          background: "white",
          padding: "20px",
          borderRadius: "16px",
          maxWidth: "520px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div>
          <div style={labelStyle}>Figure Name</div>
          <input
            style={inputStyle}
            placeholder="e.g. Gojo Satoru 1/7 Scale"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div>
          <div style={labelStyle}>Anime Title</div>
          <input
            style={inputStyle}
            placeholder="e.g. Jujutsu Kaisen"
            value={form.anime_title}
            onChange={(e) =>
              setForm({ ...form, anime_title: e.target.value })
            }
          />
        </div>

        <div>
          <div style={labelStyle}>Brand</div>
          <input
            style={inputStyle}
            placeholder="e.g. Good Smile Company"
            value={form.brand}
            onChange={(e) => setForm({ ...form, brand: e.target.value })}
          />
        </div>

        <div>
          <div style={labelStyle}>Price (THB)</div>
          <input
            style={inputStyle}
            placeholder="e.g. 3500"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
        </div>

        <div>
          <div style={labelStyle}>Stock</div>
          <input
            style={inputStyle}
            placeholder="e.g. 5"
            value={form.stock}
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
          />
        </div>

        <div>
          <div style={labelStyle}>Scale</div>
          <input
            style={inputStyle}
            placeholder="e.g. 1/7, Nendoroid"
            value={form.scale}
            onChange={(e) => setForm({ ...form, scale: e.target.value })}
          />
        </div>

        <div>
          <div style={labelStyle}>Release Date</div>
          <input
            type="date"
            style={inputStyle}
            value={form.release_date}
            onChange={(e) =>
              setForm({ ...form, release_date: e.target.value })
            }
          />
        </div>

        <div>
          <div style={labelStyle}>Image URL</div>
          <input
            style={inputStyle}
            placeholder="Paste image link"
            value={form.image_url}
            onChange={(e) =>
              setForm({ ...form, image_url: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px 16px",
            background: "#ff79c6",
            border: "none",
            color: "white",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Save Figure
        </button>

        {message && <p style={{ color: "red" }}>{message}</p>}
      </form>
    </div>
  );
}
