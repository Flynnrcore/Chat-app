import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center">
      <img src="./404.png" className="img-fluid h-25" alt={t('notFound.link')} />
      <h1 className="h4 text-muted">{t('notFound.header')}</h1>
      <p className="text-muted">
        {t('notFound.message')}
        <a href="/">{t('notFound.link')}</a>
      </p>
    </div>
  );
};

export default ErrorPage;
