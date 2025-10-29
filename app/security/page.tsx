export default function Security() {
  return (
    <div>
      <h2>Security</h2>
      <p>This page lists security features and protected routes.</p>
      <ul>
        <li>Google OAuth via Auth.js (NextAuth v5)</li>
        <li>Protected CRUD routes under <code>/persons</code> require authentication</li>
        <li>Server-side API routes check session and owner of resources</li>
        <li>MCP server endpoint under <code>/api/mcp</code> is protected and requires a valid session token</li>
      </ul>
    </div>
  )
}
