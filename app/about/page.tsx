'use client';

export default function About() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#0077b6', marginBottom: '30px' }}>About Person App</h1>
      
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Architecture</h2>
        <div style={{ lineHeight: '1.6' }}>
          <h3 style={{ color: '#666', marginBottom: '10px' }}>Frontend</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Built with Next.js 13 using the new App Router</li>
            <li>React Server Components for improved performance</li>
            <li>Client Components for interactive features</li>
            <li>Responsive design with modern CSS</li>
          </ul>

          <h3 style={{ color: '#666', marginBottom: '10px' }}>Backend</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Next.js API Routes for serverless functionality</li>
            <li>MongoDB for data persistence</li>
            <li>Auth.js (NextAuth) v5 for authentication</li>
            <li>Model Context Protocol (MCP) server integration</li>
          </ul>

          <h3 style={{ color: '#666', marginBottom: '10px' }}>Authentication & Authorization</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Secure session management with Auth.js</li>
            <li>OAuth integration for social login</li>
            <li>Route protection for authenticated users</li>
            <li>Data ownership and access control</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Features</h2>
        <div style={{ lineHeight: '1.6' }}>
          <h3 style={{ color: '#666', marginBottom: '10px' }}>Person Management</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Create, read, update, and delete person records</li>
            <li>Real-time validation of inputs</li>
            <li>Optimistic UI updates</li>
            <li>Error handling and feedback</li>
          </ul>

          <h3 style={{ color: '#666', marginBottom: '10px' }}>MCP Integration</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Full CRUD operations via MCP server</li>
            <li>Interactive demo interface</li>
            <li>Comprehensive documentation</li>
            <li>Authentication integration</li>
          </ul>

          <h3 style={{ color: '#666', marginBottom: '10px' }}>User Experience</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li>Clean and intuitive interface</li>
            <li>Responsive layout for all devices</li>
            <li>Loading states and transitions</li>
            <li>Comprehensive error messaging</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Technical Stack</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
          padding: '20px',
          background: '#f5f5f5',
          borderRadius: '4px'
        }}>
          {[
            'Next.js 13',
            'React 18',
            'TypeScript',
            'MongoDB',
            'Auth.js v5',
            'Model Context Protocol',
            'React Hook Form',
            'SWR'
          ].map((tech, index) => (
            <div key={index} style={{
              padding: '10px 20px',
              background: 'white',
              borderRadius: '4px',
              textAlign: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              {tech}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
