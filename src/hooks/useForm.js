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
    const [showSuccessMessage, setShowSuccessMessage] = useState(true)
    const [values, setValues] = useState(initialValues);

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    return [values, handleChanges, handleSubmit, showSuccessMessage];
};

export default useForm;