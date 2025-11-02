export default function AuthSetup() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#1e40af', marginBottom: '20px' }}>🔐 OAuth Authentication Setup</h1>
      
      <section style={{ marginBottom: '30px' }}>
        <h2>Overview</h2>
        <p>This application uses <strong>Auth.js (NextAuth v4)</strong> with Google OAuth for secure authentication. All Person CRUD operations and MCP server access require authentication.</p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>📋 Setup Instructions</h2>
        
        <h3>1. Google Cloud Console Configuration</h3>
        <ol style={{ lineHeight: '1.8' }}>
          <li>Visit <a href="https://console.cloud.google.com/" target="_blank" rel="noopener">Google Cloud Console</a></li>
          <li>Create a new project or select an existing one</li>
          <li>Enable the <strong>Google+ API</strong></li>
          <li>Go to <strong>Credentials</strong> → <strong>Create Credentials</strong> → <strong>OAuth 2.0 Client ID</strong></li>
          <li>Configure OAuth consent screen with application details</li>
          <li>Add authorized redirect URIs:
            <ul style={{ marginTop: '10px' }}>
              <li><code>http://localhost:3000/api/auth/callback/google</code> (Development)</li>
              <li><code>https://YOUR_VERCEL_URL/api/auth/callback/google</code> (Production)</li>
            </ul>
          </li>
        </ol>

        <h3>2. Environment Variables</h3>
        <p>Create a <code>.env.local</code> file in the project root:</p>
        <pre style={{ background: '#f3f4f6', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`# Google OAuth
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=generate_random_string_here

# Database
MONGODB_URI=your_mongodb_connection_string`}
        </pre>

        <h3>3. Generate NEXTAUTH_SECRET</h3>
        <p>Run this command to generate a secure secret:</p>
        <pre style={{ background: '#f3f4f6', padding: '15px', borderRadius: '5px' }}>
openssl rand -base64 32
        </pre>

        <h3>4. Vercel Deployment</h3>
        <ol style={{ lineHeight: '1.8' }}>
          <li>Push your code to GitHub</li>
          <li>Import project in Vercel</li>
          <li>Add all environment variables in <strong>Settings</strong> → <strong>Environment Variables</strong></li>
          <li>Update <code>NEXTAUTH_URL</code> to your Vercel URL</li>
          <li>Update Google OAuth redirect URI with Vercel URL</li>
          <li>Deploy!</li>
        </ol>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>🔧 Technical Implementation</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Authentication Provider:</strong> Google OAuth 2.0</li>
          <li><strong>Session Strategy:</strong> Database sessions with MongoDB</li>
          <li><strong>Adapter:</strong> MongoDB Adapter for Auth.js</li>
          <li><strong>Protected Routes:</strong> /persons/* and /api/persons/* via middleware</li>
          <li><strong>Session Duration:</strong> 30 days with 24-hour refresh</li>
        </ul>
      </section>

      <section>
        <h2>📚 Resources</h2>
        <ul>
          <li><a href="https://next-auth.js.org/" target="_blank" rel="noopener">NextAuth.js Documentation</a></li>
          <li><a href="https://console.cloud.google.com/" target="_blank" rel="noopener">Google Cloud Console</a></li>
          <li><a href="https://vercel.com/docs/concepts/projects/environment-variables" target="_blank" rel="noopener">Vercel Environment Variables</a></li>
        </ul>
      </section>
    </div>
  )
}
