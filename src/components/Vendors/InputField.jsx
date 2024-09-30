const InputField = ({ label, name, value, onChange }) => (
  <div className="relative mb-4 lg:mb-6">
    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
      {label}
    </label>
    <input
      type="text"
      name={name}
      className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
      value={value}
      onChange={onChange} // Ensure the onChange is set here
    />
  </div>
);

export default InputField;
