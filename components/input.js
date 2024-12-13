const TextInput = (({type, label, id, placeholder, name, value, onChange, marginBottom, ErrorMessage, errorId, ref}) => {
    return (
        <div className={`${marginBottom}`}>
        <label class="text-grey text-xl font-medium" for={name}>
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
            class="w-full text-grey text-base font-normal bg-sky border-b border-gray outline-0 p-2"
        />
        <p
            id={errorId}
            class="hidden text-red text-sm mt-1"
        >
            {ErrorMessage}
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
        </p>

        </div>
    )
})

export default TextInput;
// className={`flex flex-row pt-10 px-20 justify-between ${bgColor}`}
// const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

//     if (!phoneRegex.test(phoneInput.value)) {
//       errorMessage.classList.remove('hidden'); // Show error message
//       phoneInput.classList.add('border-red-500'); // Highlight input field
//       phoneInput.classList.remove('border-grey');
//     } else {
//       errorMessage.classList.add('hidden'); // Hide error message
//       phoneInput.classList.remove('border-red-500'); // Reset input field styling
//       phoneInput.classList.add('border-grey');
//     }


   // <FormControl id={id}>
//         <FormLabel
//           color={color || "brand.dark"}
//           fontSize="14px"
//           fontWeight="500"
//           key={id}
//           id={id}
//         >
//           {!hidden && label}
//           {require && (<chakra.span color="brand.red" fontSize="16px">*</chakra.span>)}
//         </FormLabel>
//         {errors && errors[name] && <InputError text={errors[name]?.message} />}
//         <Input
//           type={type}
//           id={id}
//           placeholder={placeholder}
//           w={width}
//           h="48px"
//           ref={ref}
//           name={name}
//           defaultValue={defaultValue}
//           color="#272932"
//           onChange={onChange}
//           data-testid={testid}
//           fontSize="16px"
//           fontWeight="500"
//           borderRadius="2px"
//           bg="#FCFCFD"
//           disabled={disable}
//           border={border || "1px solid #F0F2F5"}
//           mt={mt}
//           onBlur={onBlur}
//           mb={mb}
//           hidden={hidden}
//           readOnly={isReadOnly}
//           borderColor={borderColor}
//           value={value}
//           boxSizing="border-box"
//           _focusWithin={{ border: '1px solid #0683FF' }}
//           _placeholder={{ color: '#DEE2E8', fontSize: '16px', fontWeight: '500' }}
//         />
//         <Text color="brand.red" textTransform="capitalize" mt="-15px">{errorMsg}</Text>
//       </FormControl>