function Button({
  label,
  onClick,
  variant = "primary",
  children,
}) {
  const styles = {
    primary:
      "bg-green-800 text-white hover:bg-green-900",
    danger:
      "bg-red-700 text-white hover:bg-red-800",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition ${styles[variant]}`}
    >
      {children || label}
    </button>
  );
}

export default Button;