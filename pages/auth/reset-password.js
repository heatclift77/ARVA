import React from "react";
import Swal from 'sweetalert2'
import * as Yup from 'yup';
import { useFormik, Formik } from "formik";
import Link from "next/link"
import axios from 'axios'

export default function ResetPassword() {
    const formik = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!")
        }),
        onSubmit: values => {
            axios.post(`https://be.arva-shop.xyz/v1/users/reset`, values)
                .then((res) => {
                    Swal.fire("Success", res.data.message, "success");
                })
                .catch((err) => {
                    Swal.fire("Something Error!", err.response.data.message, "error");
                });
        }
    });


    return (
        <div className="auth-login mt-4 mb-5">
            <div className="container">
                <div className="flex">
                    <img src="/img/logo.png" />
                </div>
                <h1 className="mt-4">Reset password</h1>
                <div className="tab-button-auth mt-4">

                    <form className="mt-4" onSubmit={formik.handleSubmit}>
                        <div className="form-group mt-3 mb-5">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.email && formik.touched.email && (
                                <p className="error">{formik.errors.email}</p>
                            )}
                        </div>

                        <button type="submit" className="btn-auth">
                            Send
                                </button>
                        <p className="text-center mt-4 text-account">Don’t have a shop.id account? <Link href="/auth/register"><a>Sign Up</a></Link> </p>
                    </form>
                </div>


                <style jsx>{`
                img{
                    margin-left:auto;
                    margin-right:auto;
                },
                h1 {
                    text-align:center;
                    font-family: Metropolis;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 18px;
                    color: #222222;
                },
                p{
                    font-family: Metropolis;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 14px;
                    color: #222222;
                },
                a{
                    font-family: Metropolis;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 14px;
                    color: #DB3022;
                }

                // pindahin ke component reusable
                .btn-auth{
                    border:none;
                    height: 48px;
                    width: 401px;
                    border-radius: 25px;
                    background: #DB3022;
                    font-family: Metropolis;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    text-align: center;
                    color: #FFFFFF;
                }
                .btn-active-auth{
                    border:none;
                    height: 48px;
                    width: 123px;
                    background: #DB3022;
                    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
                    border-radius: 0px ;
                    font-family: Metropolis;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    align-items: center;
                    color: #FFFFFF;
                }
                .btn-nonactive-auth{
                    height: 48px;
                    width: 123px;
                    border: 1px solid #9B9B9B;
                    box-sizing: border-box;
                    filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
                    border-radius: 0px;
                    font-family: Metropolis;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    align-items: center;
                    color: #9B9B9B;
                }
                // pindahin ke component reusable
                
                .form-group input{
                    height: 48px;
                    width: 400px;
                    margin-left:auto;
                    margin-right:auto;
                    border: 1px solid #9B9B9B;
                    box-sizing: border-box;
                    filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
                    border-radius: 4px;
                    font-family: Metropolis;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    color: #9B9B9B;
                    text-align:left;
                }
                .error{
                    margin-top:3px;
                    margin-left:-290px;
                    color: #d41a1a;
                    font-size: 12px;
                }
            `}
                </style>
            </div>
        </div >
    );
}
