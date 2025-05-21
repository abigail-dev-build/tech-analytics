const TextInput = (({type, label, id, placeholder, name, value, onChange, marginBottom, ErrorMessage, errorId, ref}) => {
    return (
        <div className={`${marginBottom}`}>
        <label className="font-hanken text-grey text-base font-medium lg:text-xl" for={name}>
            {label}
        </label>
        <br />
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            ref={ref}
            className="w-full text-grey text-base font-normal bg-sky border-b border-gray outline-0 p-2"
        />
        <p
            id={errorId}
            className="hidden text-red text-sm mt-1"
        >
            {ErrorMessage}
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
        </p>

        </div>
    )
})

export default TextInput;
