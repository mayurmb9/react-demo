import { useState } from 'react';

export default function Login() {

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;




    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({})

    const [touched, setTouched] = useState({});



    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched({ ...touched, [name]: true });
    }

    const resetTouched = (value = false) => {
        console.log("Touched =>", touched)
        return Object.keys(touched).reduce((acc, key) => {
            acc[key] = value;
            return acc;
        }, {});
    }

    const resetErrors = (value = "") => {
        return Object.keys(errors).reduce((acc, key) => {
            acc[key] = value;
            return acc;
        }, {});
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        resetTouched(true);

        if (validateForm()) {
            console.log("Form Submitted:", formData);
            setFormData({ email: "", password: "", confirmPassword: "" })
            setTouched(resetTouched(false));
            setErrors(resetErrors(""));
        }
    }

    const validateForm = () => {
        let isValid = true;
        let newErrors = resetErrors("");
        console.log(newErrors)

        if (!formData.email) {
            newErrors.email = "Email is required.";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Email is not in valid format.";
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = "Password is required.";
            isValid = false;
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = "Password is not in valid format.";
            isValid = false;
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm password is required."
            isValid = false;
        } else if (!passwordRegex.test(formData.confirmPassword) || formData.password != formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm password is either invalid or mismatched from the password."
            isValid = false;
        }

        setErrors(newErrors);


        return isValid;

    }

    return (
        <div style={{ padding: "1rem" }}>
            <h2>Login</h2>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: "1rem"
                }}>


                <input
                    name='email'
                    type='text'
                    placeholder='Email'
                    className='input-field'
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={touched.email && !formData.email ? { border: "1px solid red" } : {}}
                />

                {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}

                <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    className='input-field'
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={touched.password && !formData.password ? { border: "1px solid red" } : {}}
                />

                {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}

                <input
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirm Password'
                    className='input-field'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={touched.confirmPassword && !formData.confirmPassword ? { border: "1px solid red" } : {}}
                />

                {errors.confirmPassword && <span style={{ color: "red" }}>{errors.confirmPassword}</span>}

                <button type='submit'
                    className='btn btn-primary'

                >Login</button>

            </form>
        </div>
    )
}
