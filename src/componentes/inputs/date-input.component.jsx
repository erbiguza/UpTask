function DateInput({ value, setValue }) {
    return (
        <div className="input-container">
            <label htmlFor="date">Due Date</label>
            <input
                id="date"
                placeholder="Date"
                min={new Date().toISOString().split("T")[0]}
                className="normal-input"
                type="date"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {value ? "" : ""}
        </div>
    );
}

export default DateInput;
