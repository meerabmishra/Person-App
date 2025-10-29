'use client';

export default function MCPSetupPage() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#0077b6', marginBottom: '30px' }}>MCP Server Setup Guide</h1>
      
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Prerequisites</h2>
        <ul style={{ lineHeight: '1.6', marginBottom: '20px' }}>
          <li>Claude Desktop application (latest version)</li>
          <li>MongoDB database connection string</li>
          <li>Google OAuth credentials configured</li>
          <li>Node.js 16.8 or later</li>
        </ul>
        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '5px', marginTop: '10px' }}>
          <h3 style={{ color: '#666', marginBottom: '10px' }}>Note on Claude Desktop</h3>
          <p>Ensure you have the latest version of Claude Desktop installed, which supports MCP server integration. The MCP server enables Claude to perform CRUD operations on your Person database directly.</p>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Configuration Steps</h2>
        <ol style={{ lineHeight: '1.6' }}>
          <li style={{ marginBottom: '25px' }}>
            <strong>Environment Setup</strong>
            <p>Add the following to your .env.local file:</p>
            <pre style={{ background: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
              {`DATABASE_URL=your_mongodb_url
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
MCP_SERVER_URL=http://localhost:3000/api/mcp
AUTH_SECRET=your-auth-secret-key
AUTH_URL=http://localhost:3000`}
            </pre>
          </li>

          <li style={{ marginBottom: '25px' }}>
            <strong>MCP Server Configuration</strong>
            <p>The MCP server endpoint supports these operations:</p>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '5px', marginTop: '10px' }}>
              <pre style={{ margin: '0' }}>{`GET    /api/mcp     - List all persons
POST   /api/mcp     - Create new person
PUT    /api/mcp     - Update person
DELETE /api/mcp     - Remove person

Example POST body:
{
  "name": "John Doe",
  "email": "john@example.com"
}`}</pre>
            </div>
          </li>

          <li style={{ marginBottom: '25px' }}>
            <strong>Claude Desktop Integration</strong>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '5px' }}>
              <p style={{ marginBottom: '10px' }}>1. Open Claude Desktop Settings</p>
              <p style={{ marginBottom: '10px' }}>2. Navigate to "MCP Servers" section</p>
              <p style={{ marginBottom: '10px' }}>3. Add new MCP server with these details:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Name: Person App MCP</li>
                <li>URL: https://your-app-url/api/mcp</li>
                <li>Authentication: Session-based</li>
              </ul>
              <p style={{ marginTop: '10px' }}>4. Save and verify connection status</p>
            </div>
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Verify Integration</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#666', marginBottom: '10px' }}>Testing Steps</h3>
          <ol style={{ lineHeight: '1.6' }}>
            <li>Sign in to the application with your Google account</li>
            <li>Visit the <a href="/mcp-demo" style={{ color: '#0077b6' }}>MCP Demo page</a> to test basic operations</li>
            <li>Open Claude Desktop and connect to your MCP server</li>
            <li>Try these example commands in Claude Desktop:</li>
          </ol>
          <pre style={{ background: '#f5f5f5', padding: '15px', borderRadius: '5px', marginTop: '10px' }}>
{`# Create a new person
Create a person named "Alice Smith" with email "alice@example.com"

# List all persons
Show me all persons in the database

# Update a person
Update person with ID "..." to have name "Alice Jones"

# Delete a person
Delete person with ID "..."`}</pre>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Troubleshooting</h2>
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '5px' }}>
          <h3 style={{ color: '#666', marginBottom: '15px' }}>Common Issues</h3>
          <div style={{ marginBottom: '15px' }}>
            <h4 style={{ color: '#333', marginBottom: '10px' }}>Authentication Errors</h4>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Verify you're signed in to the application</li>
              <li>Check if your Google OAuth session is valid</li>
              <li>Ensure AUTH_SECRET and AUTH_URL are set correctly</li>
            </ul>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <h4 style={{ color: '#333', marginBottom: '10px' }}>Connection Issues</h4>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Confirm MongoDB connection string is valid</li>
              <li>Check if the MCP server URL is accessible</li>
              <li>Verify Claude Desktop can reach your application URL</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#333', marginBottom: '10px' }}>Data Operations</h4>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Ensure correct data format in requests</li>
              <li>Check MongoDB logs for operation errors</li>
              <li>Verify user permissions for the operation</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Need Help?</h2>
        <p style={{ lineHeight: '1.6' }}>
          If you're still experiencing issues, check the <a href="/github" style={{ color: '#0077b6' }}>GitHub repository</a> for 
          detailed documentation or open an issue for support.
        </p>
      </section>
    </div>
  );
}