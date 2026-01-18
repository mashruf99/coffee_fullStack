const Input = ({ label, name, type = "text", value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#caa27c]"
      />
    </div>
  );
};

export default Input;
