function Selector({ options, selectedOption, setSelectedOption }) {
    return (
        <div className="input-container">
            <select
                style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    width: "100%",
                    color: "rgb(var(--color-text-primary))",
                }}
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
            >
                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                        style={{ color: "rgb(0, 0, 0)" }}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Selector;
