type InputProps = {
    handleChange: () => any;
    value: string;
    title: string;
    name: string;
};

export function MyInput ({ handleChange, value, title, name }: InputProps) {
    return (
        <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value={value} name={name} />
            <span style={{width: 'max-content'}}>{title}</span>
        </label>
    );
};
