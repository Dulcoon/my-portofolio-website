import '../styles/glass.css';
const GlassCard = ({ children, style, className = '', hover = false }) => {
  const baseClass = hover ? 'glass-card glass-card-hover' : 'glass-card';
  
  return (
    <div 
      className={`${baseClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
export default GlassCard;