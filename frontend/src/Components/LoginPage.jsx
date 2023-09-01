import React from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

export const LoginPage = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
  <div className="d-flex flex-column h-100">
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">Chat</a>
        <button type="button" className="btn btn-primary">Выйти</button>
      </div>
    </nav>
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src="./login_image.png" className="rounded-circle" alt="Войти" />
              </div>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                  {() => (
                  <Form className="col-12 col-md-6 mt-3 mt-mb-0">
                    <h1 className="text-center mb-4">Войти</h1>
                    <div className="form-floating mb-3">
                      <Field 
                      name="username" 
                      autoComplete="username" 
                      required="" 
                      placeholder="Ваш ник" 
                      id="username" 
                      className="form-control"
                      />
                      <label htmlFor="username">Ваш ник</label></div><div className="form-floating mb-4">

                      <Field 
                      name="password" 
                      autoComplete="current-password" 
                      required="" 
                      placeholder="Пароль" 
                      type="password" 
                      id="password" 
                      className="form-control" 
                      />
                      <label className="form-label" htmlFor="password">Пароль</label>
                    </div>
                    <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
                  </Form>
                  )}
              </Formik>
            </div>
            <div className="card-footer p-4">
              <div className="text-center">
                <span>Нет аккаунта?</span> <a href="/signup">Регистрация</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
