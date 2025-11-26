"use client";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #ffeaf4, #ffd6e8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "Arial, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px 26px",
          borderRadius: "20px",
          boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
          maxWidth: "420px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            color: "#c91873",
            marginBottom: "10px",
          }}
        >
          🌸 Anime Figures Manager
        </h1>

        <p
          style={{
            marginBottom: "22px",
            color: "#4a3b47",
            fontSize: "0.98rem",
          }}
        >
          Manage your anime figure collection with a soft Sakura-themed
          dashboard. Login to continue or create a new account.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <a
            href="/login"
            style={{
              padding: "10px 16px",
              background: "#ff79c6",
              color: "white",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1rem",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          >
            Login
          </a>

          <a
            href="/register"
            style={{
              padding: "10px 16px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1rem",
              background: "#fff0f6",
              color: "#c91873",
              border: "1px solid #ffc1e3",
            }}
          >
            Create Account
          </a>
        </div>

        <p
          style={{
            marginTop: "18px",
            fontSize: "0.85rem",
            color: "#7b3b63",
          }}
        >
          Tip: Use the dashboard to add, edit, and manage real anime scale
          figures and prize figures.
        </p>
      </div>
    </div>
  );
}
