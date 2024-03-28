/* eslint-disable react/prop-types */
function Input({ type, id, name, placeholder }) {
  return (
    <>
      <input
        className="border rounded-md"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
