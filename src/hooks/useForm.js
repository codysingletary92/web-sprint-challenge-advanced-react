import {useState} from 'react';
export const useForm = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
    };

    const [values, setValues] = useState(initialValues);

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

const clearForm = e => {
    e.preventDefault();
    setValues(initialValues)
}

    return [values, handleChanges, clearForm];
};

export default useForm;