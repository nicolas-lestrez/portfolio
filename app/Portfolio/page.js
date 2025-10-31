export default function PortfolioPage() {
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
          <h1 className="fw-bold mb-2">Portfolio</h1>
          <h2 className="h6 mb-4">Voici quelques unes de mes réalisations</h2>
          <div className="underline mx-auto mb-5"></div>
          <div className="row g-4 mt-6">
            <article className="col-md-4 mt-5">
              <div className="card h-100">
                <img
                  src="/img/fresh-food.webp"
                  alt="Aperçu du site Fresh Food"
                />
                <div className="card-body">
                  <h3 className="h5 fw-bold">Fresh Food</h3>
                  <p className="small">
                    Site de vente de produits frais en ligne
                  </p>
                  <button type="button" className="btn btn-primary">
                    Voir le site
                  </button>
                </div>
                <div className="card-footer bg-light small text-muted">
                  Site réalisé avec PHP et MySQL
                </div>
              </div>
            </article>

            <article className="col-md-4 mt-5">
              <div className="card h-100">
                <img
                  src="/img/restaurant-japonais.webp"
                  alt="Aperçu du site Restaurant Akira"
                />
                <div className="card-body">
                  <h3 className="h5 fw-bold">Restaurant Akira</h3>
                  <p className="small">
                    Site de vente de produits frais en ligne
                  </p>
                  <button type="button" className="btn btn-primary">
                    Voir le site
                  </button>
                </div>
                <div className="card-footer bg-light small text-muted">
                  Site réalisé avec WordPress
                </div>
              </div>
            </article>

            <article className="col-md-4 mt-5">
              <div className="card h-100">
                <img
                  src="/img/espace-bien-etre.webp"
                  alt="Page d'accueil du site Espace Bien-être"
                />
                <div className="card-body">
                  <h3 className="h5 fw-bold">Espace bien-être</h3>
                  <p className="small">Site de vitrine de relaxation</p>
                  <button type="button" className="btn btn-primary">
                    Voir le site
                  </button>
                </div>
                <div className="card-footer bg-light small text-muted">
                  Site réalisé avec LARAVEL
                </div>
              </div>
            </article>

            <article className="col-md-4 mt-5">
              <div className="card h-100">
                <img
                  src="/img/seo.webp"
                  alt="Optimisation SEO d'un site e-commerce"
                />
                <div className="card-body">
                  <h3 className="h5 fw-bold">SEO</h3>
                  <p className="small">
                    Amélioration du référencement d'un site e-commerce
                  </p>
                  <button type="button" className="btn btn-primary">
                    Voir le site
                  </button>
                </div>
                <div className="card-footer bg-light small text-muted">
                  Utilisation des outils SEO
                </div>
              </div>
            </article>

            <article className="col-md-4 mt-5">
              <div className="card h-100">
                <img src="/img/coder.webp" alt="Illustration API RESTful" />
                <div className="card-body">
                  <h3 className="h5 fw-bold">Création d'une API</h3>
                  <p className="small">Création d'un API RESTFULL publique</p>
                  <button type="button" className="btn btn-primary">
                    Voir le site
                  </button>
                </div>
                <div className="card-footer bg-light small text-muted">
                  PHP -SYMPHONY
                </div>
              </div>
            </article>

            <article className="col-md-4 mt-5">
              <div className="card h-100">
                <img
                  src="/img/screens.webp"
                  alt="Prototype de site créé avec Figma"
                />
                <div className="card-body">
                  <h3 className="h5 fw-bold">Maquette d'un site web</h3>
                  <p className="small">Création du prototype d'un site</p>
                  <button type="button" className="btn btn-primary">
                    Voir le site
                  </button>
                </div>
                <div class="card-footer bg-light small text-muted">
                  Réalisé avec FIGMA
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
