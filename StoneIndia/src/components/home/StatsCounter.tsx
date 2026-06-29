
const stats = [
  { id: 1, name: 'Years of Experience', value: '25+' },
  { id: 2, name: 'Countries Exported', value: '40+' },
  { id: 3, name: 'Premium Stone Varieties', value: '150+' },
  { id: 4, name: 'Satisfied Clients', value: '10k+' },
];

export default function StatsCounter() {
  return (
    <section style={{ padding: '64px 24px', backgroundColor: 'var(--code-bg)' }}>
      <div style={{ maxWidth: '100%', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '48px', fontSize: '32px' }}>Our Impact in Numbers</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '32px',
          textAlign: 'center'
        }}>
          {stats.map((stat) => (
            <div key={stat.id} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              padding: '24px',
              backgroundColor: 'var(--bg)',
              borderRadius: '8px',
              boxShadow: 'var(--shadow)',
              border: '1px solid var(--border)'
            }}>
              <div style={{ 
                fontSize: '48px', 
                fontWeight: 'bold', 
                color: 'var(--accent)',
                marginBottom: '8px',
                fontFamily: 'var(--heading)'
              }}>
                {stat.value}
              </div>
              <div style={{ 
                fontSize: '16px', 
                color: 'var(--text)',
                fontWeight: '500'
              }}>
                {stat.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
