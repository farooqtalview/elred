import React from "react";

function Input(props) {
  const {
    max,
    min,
    htmlFor,
    id,
    labelInnerHtml,
    type,
    placeholder,
    name,
    disabled,
    onChange,
    required,
    value,
    price,
    styles,
  } = props;
 

  return (
    <>
      <label className="flex " htmlFor={htmlFor}>
        {labelInnerHtml}
      </label>
      <input
        id={id}
        price={price}
        type={type}
        placeholder={placeholder}
        value={value || ""}
        name={name}
        disabled={disabled}
        onChange={onChange}
        required={required}
        min={min}
        max={max}
        className={` w-full p-2 border-b  rounded-xl  ring-blue-100 bg-[#EFF2F8]    ${styles}`}
      />
    </>
  );
}

export default Input;
