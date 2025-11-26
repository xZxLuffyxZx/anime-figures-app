"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Error logging in");
      return;
    }

    router.push("/dashboard");
  }

  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #ffd6e8, #ffeaf4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, system-ui, sans-serif",
    padding: "20px",
  };

  const cardStyle = {
    background: "white",
    padding: "30px 26px",
    borderRadius: "18px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
    maxWidth: "380px",
    width: "100%",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ffb3d9",
    color: "#4a3b47",
    backgroundColor: "white",
    fontSize: "0.95rem",
  };

  const labelStyle = {
    fontSize: "0.85rem",
    fontWeight: "bold",
    color: "#7b3b63",
    marginBottom: "4px",
  };

  const linkStyle = {
    color: "#d63384",
    textDecoration: "underline",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1
          style={{
            fontSize: "1.8rem",
            color: "#c91873",
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          🌸 Welcome Back
        </h1>
        <p style={{ textAlign: "center", marginBottom: "18px", color: "#4a3b47" }}>
          Login to access your Anime Figures Dashboard.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <div>
            <div style={labelStyle}>Email</div>
            <input
              style={inputStyle}
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div>
            <div style={labelStyle}>Password</div>
            <input
              type="password"
              style={inputStyle}
              placeholder="••••••••"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
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
              width: "100%",
            }}
          >
            Login
          </button>
        </form>

        {message && (
          <p style={{ color: "red", marginTop: "10px", fontSize: "0.9rem" }}>
            {message}
          </p>
        )}

        <p
          style={{
            marginTop: "16px",
            fontSize: "0.9rem",
            textAlign: "center",
            color: "#4a3b47",
          }}
        >
          Don&apos;t have an account?{" "}
          <a href="/register" style={linkStyle}>
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
