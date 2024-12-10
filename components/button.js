

const Button = () => {
    return (
        <button class="h-4">{children}</button>
    )
  };


// const TextInput = forwardRef(
//   (
//     {
//       type,
//       placeholder,
//       width,
//       defaultValue,
//       name,
//       label,
//       id,
//       disable,
//       mt,
//       mb,
//       onChange,
//       border,
//       errors,
//       testid,
//       onBlur,
//       isReadOnly,
//       hidden,
//       value,
//       errorMsg,
//       borderColor,
//       color,
//       require,
//     },
//     ref,
//   ) => (
//     <>
//       <FormControl id={id}>
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
//     </>
//   ),
// );

export default Button;

