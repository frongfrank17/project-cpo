import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../../Actions/user.Action'
import './css/Login.css'
import 'antd/dist/antd.css';
import { Form, Input, Button , Row , Col  } from 'antd';
import { useForm } from 'antd/lib/form/util';

class Login extends Component {
    constructor() {
        super()
        this.state = { username:"" , password:"" } 
    } 
    onChange = e => {
        this.setState( {[e.target.name]:e.target.value})
    }
    onLogin = () =>{
        let {username , password} = this.state 
        console.log("username:"+username+":"+"password"+password)
      //  if(username !="" && password !="")
        this.props.dispatch(Action.Login_Action( username , password )) 
    }
    render() {
        return (
            <div className=" container-fluid bg-login">
                <div className=" container-sm container-md container-lg container-xl" >
                 <Row className="login-containar">
                 <Col xs={5} sm={8} md={9} lg={11} xl={13} style={{textAlign:"center" ,backgroundColor:"#5DADE2" }}>  </Col>
                 <Col xs={21} sm={17} md={13} lg={9} xl={11}  >
                 <div className="text-title-form">
                    Log In <p>Station Oparater  </p>
                </div>
                 <Form className="login-form"  >
  
                    <Form.Item className="login-form-input"  name="username" rules={[ {required: true, message: 'Please input your Username!', } ]} >
                        <Input type="text" placeholder="Username" name="username" onChange={e=>this.onChange(e)} />
                    </Form.Item>
                    <Form.Item  className="login-form-input" name="password" rules={[ passwordEmpty ,]} >
                        <Input type="password" placeholder="Password" name="password" onChange={e=>this.onChange(e)}/>
                    </Form.Item>

                  
                        <Button type="primary"  className="login-form-button" onClick={() => this.onLogin()}>
                        Log in
                        </Button>
                         <a href="#Forget your password" className="login-forget" >forget your password</a>
                  
                    </Form>
                    </Col>
                    </Row>
                </div>
            </div>
    );
    }
}
const usernameEmpty = { required: true, message: 'Please input your Username!', }
const passwordEmpty = { required: true, message: 'Please input your Password!', }
export default connect()(Login);