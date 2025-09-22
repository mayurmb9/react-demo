import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const WithAuth = (WrappedComponent) => {



    const ComponentWithAuth = (props) => {
        const navigate = useNavigate()

        const [isAuth, setIsAuth] = useState(localStorage.getItem('auth'));

        useEffect(() => {
            if (!isAuth) {
                navigate('/hoc/login');
            }
        }, [isAuth, navigate]);


        // const isAuth = localStorage.getItem('auth')
        // useEffect(() => {
        //     if (!isAuth) {
        //         navigate('/hoc/login')
        //     }
        // }, [isAuth, navigate]);


        return isAuth ? <WrappedComponent {...props} /> : null
    }
    return ComponentWithAuth
}
export default WithAuth
