import React, { useContext, useState } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { UserContext } from '../../App'
import { Navigate } from 'react-router-dom'
import Api, { endpoints, authAxios } from '../../configs/Api'
import cookies from 'react-cookies'
import { Grid } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    // const [errMsg, setErrMsg] = useState(null)
    const [user, dispatch] = useContext(UserContext)

    const login = async (event) => {
        event.preventDefault()

        // lay token
        try {
            // clearAuthLS();
            const info = await Api.get(endpoints['oauth2-info']);
            // console.log(info)
            const res = await Api.post(endpoints['login'], {
                'client_id': info.data.client_id,
                'client_secret': info.data.client_secret,
                'username': username,
                'password': password,
                'grant_type': "password",
            })

            // console.info(res.data.access_token)
            // console.log(res)
            if (res.status === 200) {
                toast.success('Đăng nhập thành công')

                cookies.save('access_token', res.data.access_token)

                // lay current user
                const user = await authAxios().get(endpoints['current_user'])

                cookies.save('current_user', user.data)
                dispatch({
                    "type": "login",
                    "payload": user.data
                })
            }
            if (res.status === 400) {
                toast.warning('Sai tài khoản hoặc mật khẩu')
            }

            // else {
            //     toast.error('Sai tài khoản hoặc mật khẩu')
            // }
        } catch (error) {
            toast.error('Đã xảy ra lỗi')
        }
    }

    // Xu ly khi dang nhap thanh cong
    if (user != null)
        return <Navigate to="/" />

    
    // xử lý thông báo
    // const notify = () => {
    //     console.log(messs)
    //     if(messs)
    //         toast.success(messs);
    // };
        
    return (
        <Container maxWidth="sm">
            <h1 className="text-center text-danger">Đăng Nhập</h1>

            {/* xử lý thông báo */}
            {/* <AlertSuccess content={messSuc} open={openSuccess} handleClose={handleCloseSuc} />
            <AlertWarning content={messErr} open={openError} handleClose={handleClose} /> */}

            {/* {errMsg !== null && <Alert key='danger' variant='danger'>
                {errMsg}
            </Alert>} */}

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    class="img-fluid" alt="Phone image"/>
              </Grid>
              <Grid item xs={6                                                                                                                                                                                                                                                                                                                                                                                  }>
                  <Form onSubmit={login}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="test" value={username} onChange={evt => setUsername(evt.target.value)} placeholder="Nhap username..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={evt => setPassword(evt.target.value)} placeholder="Nhap password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Dang nhap
                    </Button>
                  </Form>
              </Grid>
            </Grid>

        </Container>
    )
}

export default Login