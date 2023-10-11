import { useState } from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onSUbmitButton = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <section className="h-screen grid place-items-center">
      <form
        onSubmit={onSUbmitButton}
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <input
          type="text"
          label="email"
          name="identifier"
          onChange={(e) =>
            setData({ [e.target.name]: e.target.value, ...data })
          }
          value={data.email}
        />
        <input
          type="password"
          label="password"
          name="password"
          onChange={(e) =>
            setData({ [e.target.name]: e.target.value, ...data })
          }
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
