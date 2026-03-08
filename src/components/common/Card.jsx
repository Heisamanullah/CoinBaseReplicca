// Reusable Card component
export default function Card({ children, className = '', onClick, hover = false }) {
    return (
      <div
        onClick={onClick}
        className={`bg-white rounded-3xl overflow-hidden ${hover ? 'cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-200' : ''} ${className}`}
      >
        {children}
      </div>
    )
  }
  