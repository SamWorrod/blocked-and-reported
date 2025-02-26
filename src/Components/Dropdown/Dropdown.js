import { useState } from 'react'
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
    const [value, setValue ] = useState()
    const handleSelect = (event) => {
        onSelect && onSelect(event.target.value)
    }
    return (
        <DropdownField onChange={handleSelect}>
            {options.map((option) => (
                <Option value={option.value}>{option.label}</Option>
            ))}
        </DropdownField>
    )
}