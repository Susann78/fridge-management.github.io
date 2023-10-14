function Input({ name, value, placeholder, type, onChange, label }) {
    return (
        <label>
            {label}
            <input
                name={name}
                value={value}
                placeholder={placeholder}
                type={type}
                required
                onChange={onChange}
            />
        </label>
    )
}
export default Input;