import { Form, message } from "antd";
import Input from "antd/lib/input/Input";
import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.scss";
import axios from "axios";
import Spinner from "../components/Spinner";

// function to check user login credentials
function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5001/api/users/login",
        values
      );
      localStorage.setItem("user", JSON.stringify(response));
      setLoading(false);
      message.success("Login Successful");
      navigate("/");
    } catch (err) {
      setLoading(false);
      message.error("Login failed");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);

  // renders login page
  return (
    <div className="login">
      {loading && <Spinner />}
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div class="col-md-5">
          <Form layout="vertical" onFinish={onFinish}>
            <h1 className="heading">
              LOGIN
              <hr />
            </h1>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/register">Not Registered? Click HERE to Register</Link>
              <button className="primary" type="submit">
                LOGIN
              </button>
            </div>
          </Form>
        </div>
        <div className="col-md-5">
          <div className="login-img">
            <img
              class="login-img"
              src="https://www.freshbooks.com/wp-content/uploads/keeping-track-of-business-expenses.jpg"
              alt="image"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
