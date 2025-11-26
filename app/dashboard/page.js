"use client";

export default function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #ffd6e8, #ffeaf4)",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          color: "#d63384",
          textShadow: "1px 1px 2px white",
          fontSize: "3rem",
          marginBottom: "20px",
        }}
      >
        🌸 Anime Figures Dashboard 🌸
      </h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "24px" }}>
        Welcome to your Sakura-themed admin panel.
      </p>

      <div style={{ display: "flex", gap: "12px" }}>
        <a
          href="/dashboard/figures"
          style={{
            padding: "12px 20px",
            background: "#ff78b9",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          Manage Anime Figures →
        </a>

        <a
          href="/api/auth/logout"
          style={{
            padding: "12px 20px",
            background: "#f03e3e",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          Logout
        </a>
      </div>
    </div>
  );
}
