import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import './style.css';



export default function RegisterForm() {
    const history = useHistory();
    const [RegisterData, setRegisterData] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",

        isvalid: false,
        ispassvalid: false,
        ismatched: false,
    });

    const [errors, setErrors] = useState({
        nameErr: null,
        emailErr: null,
        usernameErr: null,
        passwordErr: null,
        confirmPasswordErr: null,
    });

    const [DisplayPassword, setDisplayPassword] = useState(false);

    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+.com$/;

    const changeData = (e) => {

        if (e.target.name === "email") {
            setRegisterData({
                ...RegisterData,
                email: e.target.value,
            });

            if (e.target.value.match(emailRegex)) {
                RegisterData.isvalid = true;
            }

            setErrors({
                ...errors,
                emailErr:
                    e.target.value.length === 0
                        ? "This field is required!"
                        : e.target.value.length < 3
                            ? "Minimum length is 3 characters"
                            : RegisterData.isvalid == false
                                ? "Invalid Email! ,Ex: abc@abc.com"
                                : null,
            });
        }

        else if (e.target.name === "password") {
            setRegisterData({
                ...RegisterData,
                password: e.target.value,
            });

            if (e.target.value.match(passRegex)) {
                RegisterData.ispassvalid = true;
            }

            setErrors({
                ...errors,
                passwordErr:
                    e.target.value === 0
                        ? "This field is required!"
                        : e.target.value.length < 8
                            ? "Minimum length is 8 characters"
                            : RegisterData.ispassvalid == false
                                ? "The Password Must Contain at least one lowercase [a-z], one uppercase [A-Z], one digit [1-9] and special character !@#$%^&*"
                                : null,
            });
        }

        else if (e.target.name === "confirmPassword") {
            setRegisterData({
                ...RegisterData,
                confirmPassword: e.target.value,
            });

            setErrors({
                ...errors,
                confirmPasswordErr:
                    e.target.value === 0
                        ? "This field is required!"
                        : e.target.value.length < 8
                            ? "Minimum length is 8 characters"
                            : e.target.value !== RegisterData.password
                                ? "Passwords do not match!"
                                : null,
            });
        }

        else if (e.target.name === "name") {
            setRegisterData({
                ...RegisterData,
                name: e.target.value,
            });

            setErrors({
                ...errors,
                nameErr:
                    e.target.value.length === 0
                        ? "This field is required!"
                        : e.target.value.length < 3
                            ? "Minimum length is 3 characters"
                            : null,
            });
        }

        else if (e.target.name === "username") {
            setRegisterData({
                ...RegisterData,
                username: e.target.value,
            });

            const spaceRegex = /\s/g;

            function space(s) {
                return spaceRegex.test(s);
            }

            let checkSpace = space(RegisterData.username);

            setErrors({
                ...errors,
                usernameErr:
                    e.target.value.length === 0
                        ? "This field is required!"
                        : e.target.value.length < 3
                            ? "Minimum length is 3 characters"
                            : checkSpace === true
                                ? "Usernames can't have spaces"
                                : null,
            });
        }
    };

    const submitRegisterData = (e) => {
        e.preventDefault();
        if (!errors.emailErr && !errors.passwordErr) {
            history.push('/')
            console.log(RegisterData);
        }
    };

    const togglePassword = () => {
        setDisplayPassword(!DisplayPassword);
    };

    return (
        <div className="container py-5">
            <h1 className="head">Registration</h1>
            <div className="form-group">
                <form onSubmit={(e) => submitRegisterData(e)}>
                    <div className="mb-3">
                        <label htmlFor="nameID" className="form-label">
                            Name:
                        </label>
                        <input
                            type="text"
                            className={`form-control ${errors.nameErr ? "border-danger" : ""
                                }`}
                            id="nameID"
                            aria-describedby="name"
                            value={RegisterData.name}
                            onChange={(e) => changeData(e)}
                            name="name"
                        />
                        <div id="name" className="form-text text-danger">
                            {errors.nameErr}
                        </div>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="emailID" className="form-label">
                            E-mail Address:
                        </label>
                        <input
                            type="email"
                            className={`form-control ${errors.emailErr ? "border-danger" : ""
                                }`}
                            id="emailID"
                            aria-describedby="email"
                            value={RegisterData.email}
                            onChange={(e) => changeData(e)}
                            name="email"
                        />
                        <div id="email" className="form-text text-danger">
                            {errors.emailErr}
                        </div>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="usernameID" className="form-label">
                            Username:
                        </label>
                        <input
                            type="text"
                            className={`form-control ${errors.usernameErr ? "border-danger" : ""
                                }`}
                            id="usernameID"
                            aria-describedby="username"
                            value={RegisterData.username}
                            onChange={(e) => changeData(e)}
                            name="username"
                        />
                        <div id="username" className="form-text text-danger">
                            {errors.usernameErr}
                        </div>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="passwordID" className="form-label">
                            Password:
                        </label>
                        <div className="passWord">
                            <input
                                type={DisplayPassword ? "text" : "password"}
                                className={`form-control ${errors.passwordErr ? "border-danger" : ""
                                    }`}
                                id="passwordID"
                                value={RegisterData.password}
                                onChange={(e) => changeData(e)}
                                name="password"
                            />
                            <p>
                                <FontAwesomeIcon className="icon" icon={faEye} onClick={togglePassword} />
                            </p>
                        </div>
                        <div id="password" className="form-text text-danger">
                            {errors.passwordErr}
                        </div>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="confirmPasswordID" className="form-label">
                            Confirm Password:
                        </label>
                        <div className="passWord">
                            <input
                                type={DisplayPassword ? "text" : "password"}
                                className={`form-control ${errors.confirmPasswordErr ? "border-danger" : ""
                                    }`}
                                id="confirmPasswordID"
                                value={RegisterData.confirmPassword}
                                onChange={(e) => changeData(e)}
                                name="confirmPassword"
                            />
                            <p>
                                <FontAwesomeIcon className="icon" icon={faEye} onClick={togglePassword} />
                            </p>
                        </div>
                        <div id="confirmPassword" className="form-text text-danger">
                            {errors.confirmPasswordErr}
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={
                            errors.passwordErr ||
                            errors.emailErr ||
                            errors.nameErr ||
                            errors.confirmPasswordErr ||
                            errors.usernameErr
                        }
                        className="btn btn-danger"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}