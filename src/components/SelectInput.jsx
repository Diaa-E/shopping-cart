export default function SelectInput({ options, onChange, selected, id, name })
{
    return (
        <>
            <select onChange={onChange} value={selected} name={name} id={id}>
            {
                options.map(option => {

                    return <option key={option.name} value={option.value}>{option.name}</option>
                })
            }
            </select>
        </>
    )
}