import React from 'react';
import { useForm } from 'react-hook-form';

function SignUpUser() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        alert(JSON.stringify(data, null, 2));
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="hook">

            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    {...register("firstName", { required: true })}
                />
            </div>

            <div>
                {errors.firstName && (
                    <p className="hook_error">First Name is required</p>
                )}
            </div>

            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                    <p className="hook_error">Last Name is required</p>
                )}
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && (
                    <p className="hook_error">Email is required and must be valid</p>
                )}
            </div>

            <div>
                <label>Password:</label>
                <input
                    type="password"
                    {...register("password", { required: true })}
                />
                {errors.password && <p className="hook_error">Password is required</p>}
            </div>

            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && (
                    <p className="hook__error">Confirm Password is required</p>
                )}
            </div>

            <div>
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
}


export default SignUpUser;