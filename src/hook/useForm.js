import { useState } from 'react';
import { validate } from '../selector/validate';


export const useForm = ( initialState = {} ) => {
    // const [error, setError] = useState({})

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });
        // let resError = validate({
        //     ...values,
        //     [target.name]: target.value
        //   })
        //   setError(resError)
    }

    return [ values, handleInputChange, reset ];

}