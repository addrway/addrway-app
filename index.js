export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1>Addrway App</h1>
      <p>This is the dashboard app. Next step: address validation.</p>

      <div style={{ marginTop: 16, padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
        <label style={{ display: "block", marginBottom: 8 }}>Enter an address</label>
        <input
          placeholder="123 Main St, City, ST 12345"
          style={{ width: "100%", padding: 12, borderRadius: 10, border: "1px solid #ccc" }}
        />
        <button style={{ marginTop: 12, padding: "10px 14px", borderRadius: 10, border: "none" }}>
          Validate
        </button>
      </div>
    </main>
  );
}
