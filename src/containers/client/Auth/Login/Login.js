import React,{useEffect} from 'react'
import './Login.scss'
import {withFormik} from 'formik'
import * as Yup from 'yup'
import { Link ,useHistory,Redirect} from 'react-router-dom'
import {Button,Spinner} from 'react-bootstrap'
import {postLoginAction} from '../../../../store/action/authAction'
import {useSelector,connect} from 'react-redux'
 function Login(props) {
     const history = useHistory()
     const {isloading,isloaduser,userpost} = useSelector(state=>state.authReducer)
     useEffect(() => {
         if(isloaduser){
             history.push('/')
         }
     }, [history,isloaduser])
     if(userpost){
         return <Redirect to="/"/>
     }
    const {
        touched,
        errors,
        handleChange,
        handleSubmit,
    } = props;
    return (
        <div className="bg">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input onChange={handleChange} type="text" name="taiKhoan" required />
                        <label>Username</label>
                        {errors.taiKhoan && (<p className="font-italic text-danger">{errors.taiKhoan}</p>)}
                    </div>
                    <div className="user-box">
                        <input onChange={handleChange} type="password" name="matKhau" required />
                        <label>Password</label>
                        {errors.matKhau && (<p className="font-italic text-danger">{errors.matKhau}</p>)}
                    </div>
                    <div className="flexbtn">
                    {!isloading ? (<button className="btnAuth" type="submit">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </button>) : (
                    <Button className="btnAuthLoad" disabled>
                    <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                    Loading...
                </Button>
                    
                )}
                <Link to="/register" style={isloading ? {pointerEvents:"none"}: {pointerEvents:'inherit'}}><Button className="btnAuth" disabled={isloading ? true : false}>
                <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Register
                </Button>
                    
                </Link>
                    
                    </div>
                </form>
            </div>
        </div>
    )
}
const FormLoginFormik = withFormik({
    mapPropsToValues: () => ({
        taiKhoan: '',
        matKhau: ''
    }),

    // Custom sync validation


    validationSchema: Yup.object().shape({
        taiKhoan: Yup.string()
            .required('Username is required'),
        matKhau: Yup.string()
            .required('Password is required')
    }),

    handleSubmit: (values, { props, setSubmitting }) => {
        console.log(values)
        props.dispatch(postLoginAction(values))
    },

    displayName: 'Register',
})(Login);

export default connect()(FormLoginFormik);