/**
 * Achievements View Component
 * Displays unlocked achievements and milestones
 */
function AchievementsView() {
  return (
    <div className="container section">
      <h1>Achievements</h1>
      <p className="responsive-text">Track your hiking milestones and unlock special badges</p>
      <div
        style={{
          marginTop: 'var(--spacing-xl)',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--color-card-bg)',
          border: '1px solid var(--color-card-border)',
          borderRadius: 'var(--radius-lg)',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Achievements component will be implemented here
        </p>
      </div>
    </div>
  );
}

export default AchievementsView;
