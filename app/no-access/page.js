export default function NoAccessPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #ffe3f0, #ffd0e2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "16px",
          textAlign: "center",
          maxWidth: "400px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ color: "#d63384", marginBottom: "10px" }}>
          ❌ Access Denied
        </h1>

        <p style={{ color: "#4a3b47", marginBottom: "20px" }}>
          You must be logged in to view this page.
        </p>

        <a
          href="/login"
          style={{
            padding: "10px 16px",
            background: "#ff79c6",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          Go to Login
        </a>
      </div>
    </div>
  );
}
