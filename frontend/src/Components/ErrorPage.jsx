import React from "react";

export const ErrorPage = () => {
  return (
    <div className="d-flex flex-column h-100">
        <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <a className="navbar-brand" href="/">Chat</a>
                <button type="button" className="btn btn-primary">Выйти</button>
            </div>
        </nav>
        <div className="text-center">
            <img alt="Страница не найдена" className="img-fluid h-25" src="./404.png" />
            <h1 className="h4 text-muted">Страница не найдена</h1>
            <p className="text-muted">Но вы можете перейти <a href="/">на главную страницу</a></p>
        </div>
    </div>
  );
}