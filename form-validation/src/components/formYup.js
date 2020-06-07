import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormYup = () => {

    const formik = useFormik({
        initialValues: {
            userName : '',
            email : '',
            password : ''
        },
        validationSchema : Yup.object({
            userName : Yup.string()
            .required('Required'),
            email : Yup.string()
            .min(6 , 'Must be more 6 characher')
            .required('Required'),
            password : Yup.string()
            .min(6 , 'Must be 6 character')
            .required('Required')
        }),
        onSubmit : values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return(
        <div className="mt-5">

            <form onSubmit={ formik.handleSubmit }> 
            <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <input 
                type="text" 
                className="form-control" 
                id="userName" 
                name="userName"
                aria-describedby="emailHelp"
                placeholder="user name"
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                value={ formik.values.userName }/>
                {
                    formik.touched.userName && formik.errors.userName ? 
                    (<small style={ {'color' : 'red'} }>{ formik.errors.userName }</small>) : null
                }
            </div>

            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="email"
                name="email" 
                aria-describedby="emailHelp"
                placeholder="email"
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                value={ formik.values.email }/>   
                {
                    formik.touched.email && formik.errors.email ? 
                    (<small style={ {'color' : 'red'} }>{ formik.errors.email }</small>) : null
                }
            </div>


            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="password"
                name='password'
                placeholder="password"
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                value={ formik.values.password }
                />
                {
                    formik.touched.password && formik.errors.password ? 
                    (<small style={ {'color' : 'red'} }>{ formik.errors.password }</small>) : null
                }
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>

        </div>
    );
};

export default FormYup;
