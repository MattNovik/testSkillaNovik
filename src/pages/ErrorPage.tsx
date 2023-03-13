import { useRouteError } from 'react-router';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div className="error-page">
      <div className="error-page__container">
        <div className="error-page__text-wrapper">
          <h1 className="error-page__title">{'Что-то пошло не так('}</h1>
          <p className="error-page__text">
            Возможно, вы перешли по неработающей ссылке или неверно ввели адрес.
            <br />
            Попробуйте вернуться на главную
          </p>
          {error && error.status ? (
            <p className="error-page__error">{error.status}</p>
          ) : null}
          <NavLink to="/" className="error-page__link-home">
            на главную
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
