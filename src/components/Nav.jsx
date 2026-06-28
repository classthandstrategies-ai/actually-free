export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        border: "1px solid #e4e4d0",
        borderRadius: "14px",
        padding: "12px 16px",
        zIndex: 50,
      }}
    >
      <div
        style={{
          fontFamily: "Figtree",
          fontWeight: 600,
          fontSize: "16px",
          color: "#1a1a1a",
        }}
      >
        Actually Free
      </div>
      <a
        href="https://github.com"
        style={{
          fontFamily: "Figtree",
          fontWeight: 500,
          fontSize: "14px",
          color: "#1a1a1a",
          textDecoration: "none",
        }}
      >
        GitHub
      </a>
    </nav>
  );
}
