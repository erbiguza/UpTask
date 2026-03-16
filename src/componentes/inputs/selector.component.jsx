function Selector({ options, selectedOption, setSelectedOption }) {
    return (
        <div className="input-container">
            <select
                style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    width: "100%",
                }}
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Selector;
