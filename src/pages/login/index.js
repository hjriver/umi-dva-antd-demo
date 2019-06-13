import React from 'react';
import router from 'umi/router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import  styles from './index.less'
const FormItem = Form.Item;

class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
            // this.props.appStore.toggleLogin(true, {username: values.username})
            sessionStorage.setItem("token", values)
            // const {from} = this.props.location.state || {from: {pathname: '/'}}
            router.push('/')
        }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
            return (
                <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
                        <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                        )}
                        </FormItem>
                        <FormItem>
                        {/* {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )} */}
                        {/* <a className="login-form-forgot" href="###">Forgot password</a> */}
                        <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                            Log in
                        </Button>
                    </FormItem>
                </Form>
            );
    }
}
(Form.create()(Login));

export default Form.create()(Login);
