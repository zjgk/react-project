
import React, { PureComponent } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { connect } from "react-redux";
import userModel from "store/reducers/userM";
import "./login.scss"

const FormItem = Form.Item;
const Login = Form.create()(
    class extends PureComponent {
        handleSubmit = e => {
            const { login, history } = this.props;
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    login(values);
                }
            });
        };
        render() {
            const { getFieldDecorator } = this.props.form;
            return (
                <div className="login-container">
                    <div className="box-area">
                        <Form onSubmit={this.handleSubmit} className="form-box">
                            <FormItem>
                                {getFieldDecorator("username", {
                                    rules: [{ required: false, message: "Please enter your account number" }]
                                })(
                                    <Input size="large"
                                        prefix={
                                            <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                                        }
                                        placeholder="Please enter your account number"
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator("password", {
                                    rules: [{ required: false, message: "Please enter your password" }]
                                })(
                                    <Input size="large"
                                        prefix={
                                            <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                                        }
                                        type="password"
                                        placeholder="Please enter your password"
                                    />
                                )}
                            </FormItem>
                            <FormItem className="checkbox-item">
                                {getFieldDecorator("remember_me", {
                                    valuePropName: "checked",
                                    initialValue: true
                                })(<Checkbox>auto login</Checkbox>)}

                            </FormItem>
                            <FormItem>
                                <Button
                                    type="primary" shape="round" block size="large"
                                    htmlType="submit"
                                    className="login-form-button"
                                >
                                    login
                             </Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            );
        }
    }
);

export default connect(
    null,
    { ...userModel.actions }
)(Login);
