

const PrimaryButton = ({width = "w-37", children, type, onClick}) => {
    return (
        <button className={`h-10.5 bg-blue text-white py-2.5 border-transparent outline-none font-hanken ${width}`} onClick={onClick} type={type}>{children}</button>
    )
  };



export default PrimaryButton;

