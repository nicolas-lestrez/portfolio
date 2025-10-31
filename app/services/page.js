export default function ServicesPage() {
  return (
    <main>
      <section className="banner">
        <img
          src="/img/banner.webp"
          alt="Bannière service"
          className="w-100 d-block"
        />
      </section>
      <section className="services py-5">
        <div className="container text-center">
          <h1 className="fw-bold mb-2">Mon offre des services</h1>
          <h2 className="h6 mb-4">
            Voici les prestations sur lesquelles je peux intervenir
          </h2>
          <div className="underline mx-auto mb-5"></div>
          <div className="row g-4 mt-6">
            <article className="col-md-4 mt-5">
              <div className="card p-4 h-100">
                <i className="bi bi-brush text-primary fs-2 mb-3"></i>
                <h3 className="h5 fw-bold">UX Design</h3>
                <p className="small">
                  L’UX Design est une discipline qui consiste à concevoir des
                  produits (sites web, applications mobiles, logiciels, objets
                  connectés, etc.) en plaçant l'utilisateur au centre des
                  préocupations. L'objectif est de rendre l'expérience
                  utilisateur la plus fuide et agréable possible.
                </p>
              </div>
            </article>
            <article className="col-md-4 mt-5">
              <div className="card p-4 h-100">
                <i className="bi bi-code-slash text-primary fs-2 mb-3"></i>
                <h3 className="h5 fw-bold">Développement Web</h3>
                <p className="small">
                  Le développement de sites web consiste à créer des sites
                  internet en utilisant des languages de programmation (HTML,
                  CSS, JavaScript, PHP, etc.) et des framework (Bootstrap,
                  React, Angular, etc.).
                </p>
              </div>
            </article>
            <article className="col-md-4 mt-5">
              <div className="card p-4 h-100">
                <i className="bi bi-search text-primary fs-2 mb-3"></i>
                <h3 className="h5 fw-bold">Référencement</h3>
                <p className="small">
                  Le référencement naturel (SEO) est une technique qui consiste
                  à optimiser un site web pour le faire remonter dans les
                  résultats des moteurs de recherche (Google, Bing, Yahoo, etc.)
                  L'objectif est d'attirer un maximum de visiteurs qualifiés sur
                  le site.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
