import React from 'react';
import { useFormik } from 'formik';

const validate = values =>{
    const errors = {};

    if (!values.userName)
    {
        errors.userName = 'Required';
    }
    
    if(!values.email)
    {
        errors.email = 'Required';
    }
    else if(values.email.length < 6)
    {
        errors.email = 'Must be more than 6 charater';
    }

    if(!values.password)
    {
        errors.password = 'Required';
    }
    else if(values.password.length < 6)
    {
        errors.password = 'Must be more than 6 charater';
    }

    return errors;
}

const Form = ()=>{

    const formik = useFormik({
        initialValues: {
            userName : '',
            email : '',
            password : ''
        },
        validate,
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


export default Form;