import styled from 'styled-components'

const DropdownField = styled.select`
    width: 200px;
    height: 30px;
    margin: 10px;
`

const Option = styled.option`
    width: 200px;
    height: 30px;
`


export default function Dropdown( props) {
    const options = props.options
    const onSelect = props.onSelect
    const handleSelect = (event) => {
        onSelect && onSelect(event.target.value)
    }
    return (
        <DropdownField onChange={handleSelect}>
            {options.map((option, index) => (
                <Option key={'option ' + index.toString()}value={option.value}>{option.label}</Option>
            ))}
        </DropdownField>
    )
}