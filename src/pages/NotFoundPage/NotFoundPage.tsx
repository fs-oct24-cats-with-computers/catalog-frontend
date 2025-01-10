import './NotFoundPage.scss';

export const NotFoundPage = () => {
  return (
    <div className="notFound">
      <img
        className="notFound__image"
        src="../../../public/img/page-not-found.png"
        alt="Error-cat for not found page"
      />
      <h2 className="notFound__title">Page not found</h2>
      <p className="notFound__description">
        The page you are looking for doesn&apos;t exist or an other error
        occured...
      </p>
    </div>
  );
};
