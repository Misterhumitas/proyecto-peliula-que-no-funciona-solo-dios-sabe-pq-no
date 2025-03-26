export function Button({ children, onClick, disabled }) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-4 py-2 rounded ${
          disabled ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {children}
      </button>
    );
  }
  