const Dropdown = ({ closeDropdown }) => {
    const handleItemClick = (item) => {
        console.log(`Clicked on: ${item}`); // Log clicked item (optional)
        closeDropdown(); // Close the dropdown
    };
    return (
        <div className="rounded shadow p-3 w-60 mt-2 z-9 absolute">
        {["Cloud services", "Infrastructure Management.", "Academy"].map((item) => (
            <div
                key={item}
                onClick={() => handleItemClick(item)}
                className="bg-sky p-2 rounded cursor-pointer hover:text-blue"
            >
                <p>{item}</p>
            </div>
        ))}
    </div>
    )
}

export default Dropdown;