// Reusable Input component
export default function Input({ type = 'text', placeholder, value, onChange, className = '', name, required = false }) {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`px-5 py-3 border-2 border-gray-200 rounded-full text-[15px] outline-none focus:border-[#0052FF] transition-colors bg-white w-full text-gray-900 placeholder-gray-400 ${className}`}
      />
    )
  }
  