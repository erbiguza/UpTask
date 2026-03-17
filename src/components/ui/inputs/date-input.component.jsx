function DateInput({ value, setValue }) {
    return (
        <div className="input-container">
            <label
                htmlFor="date"
                style={{ color: "rgb(var(--color-text-secondary))" }}
            >
                Due Date
            </label>
            <input
                id="date"
                min={new Date().toISOString().split("T")[0]}
                className="normal-input"
                type="date"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}

export default DateInput;
