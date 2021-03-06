import {useState} from 'react'

export const useForm = ( initialSate = {}) => {

    const [values, setValues] = useState(initialSate)

    const reset = ()=>{
        setValues (initialSate)
    }

    const handleInputChange = ({target}) =>{
        setValues({
            ...values,
            [target.name] : target.value
        })
    }

    return [values, handleInputChange, reset]
}
