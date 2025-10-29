'use client';

export default function GitHub() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#0077b6', marginBottom: '30px' }}>GitHub Repository</h1>
      
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Repository Overview</h2>
        <div style={{ lineHeight: '1.6' }}>
          <p style={{ marginBottom: '20px' }}>
            This project is a modern Next.js application demonstrating best practices in full-stack development,
            including OAuth authentication, MongoDB integration, and MCP server implementation.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Getting Started</h2>
        <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '4px', marginBottom: '20px' }}>
          <h3 style={{ color: '#666', marginBottom: '10px' }}>Prerequisites</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Node.js 16.8 or later</li>
            <li>MongoDB running locally or connection string</li>
            <li>Google OAuth credentials</li>
          </ul>

          <h3 style={{ color: '#666', marginBottom: '10px' }}>Installation</h3>
          <pre style={{ background: '#272822', color: '#f8f8f2', padding: '15px', borderRadius: '4px', overflowX: 'auto' }}>
            {`# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start the development server
npm run dev`}
          </pre>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Key Features</h2>
        <div style={{ lineHeight: '1.6' }}>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li><strong>Auth.js Integration:</strong> Complete OAuth setup with Google authentication</li>
            <li><strong>Protected Routes:</strong> Server and API routes secured by session checks</li>
            <li><strong>MongoDB Integration:</strong> Mongoose models and CRUD operations</li>
            <li><strong>MCP Server:</strong> Full Model Context Protocol implementation</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Project Structure</h2>
        <pre style={{ background: '#272822', color: '#f8f8f2', padding: '15px', borderRadius: '4px', overflowX: 'auto' }}>
{`person-app/
├── app/                   # Next.js app directory
│   ├── api/              # API routes
│   ├── persons/          # Person management pages
│   ├── mcp-demo/         # MCP server demo
│   └── mcp-setup/        # Setup documentation
├── lib/                  # Shared utilities
├── components/           # React components
├── public/              # Static assets
└── types/               # TypeScript type definitions`}
        </pre>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Environment Variables</h2>
        <pre style={{ background: '#272822', color: '#f8f8f2', padding: '15px', borderRadius: '4px', overflowX: 'auto' }}>
{`# MongoDB
MONGODB_URI=mongodb://localhost:27017/person-app

# Auth.js
AUTH_SECRET=your-auth-secret
AUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret`}
        </pre>
      </section>

      <section>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Repository Link</h2>
        <p>
          <a href="#" style={{ 
            color: '#0077b6', 
            textDecoration: 'none',
            fontWeight: 'bold' 
          }}>
            (Add repository URL once pushed)
          </a>
        </p>
      </section>
    </div>
  );
}
