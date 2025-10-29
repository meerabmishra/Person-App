export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f0f4f8', color: '#333' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#0077b6' }}>Welcome to the Person App</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
        Manage your contacts securely with OAuth-powered authentication.
      </p>
      {/* <img
        src="/hero-image.png"
        alt="Hero Diagram"
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', marginBottom: '30px' }}
      /> */}
      <p style={{ fontSize: '1rem', color: '#555' }}>
        Use the <strong>People</strong> link to view and manage your contacts. Sign in to get started!
      </p>
    </div>
  );
}
