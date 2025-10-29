export default function AuthSetup() {
  return (
    <div>
      <h2>Auth Setup</h2>
      <p>Follow these steps to configure Google OAuth and Auth.js:</p>
      <ol>
        <li>Create OAuth credentials in Google Cloud Console and add the authorized redirect URI: <code>https://YOUR_VERCEL_URL/api/auth/callback/google</code></li>
        <li>Copy the Client ID and Client Secret into <code>.env.local</code> as <code>GOOGLE_CLIENT_ID</code> and <code>GOOGLE_CLIENT_SECRET</code>.</li>
        <li>Set <code>NEXTAUTH_SECRET</code> to a strong random value.</li>
        <li>Deploy to Vercel and add Environment Variables in your Vercel project settings.</li>
      </ol>
      <p>This page documents where to place credentials and update redirect URIs.</p>
    </div>
  )
}
