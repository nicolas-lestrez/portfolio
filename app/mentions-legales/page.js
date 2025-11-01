export default function mentionslegalesPage() {
  return (
    <main>
      <section className="portfolio py-5">
        <div className="container text-center">
          <h1 className="fw-bold mb-2">Mentions légales</h1>
          <div className="underline mx-auto mb-5"></div>
        </div>
      </section>
      <section className="container col-lg-8 mx-auto my-4">
        <div className="accordion" id="accordionMentions">
          {/* first accordion */}

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Editeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionMentions"
            >
              <div className="accordion-body">
                <address className="fs-6">
                  <strong className="h5 d-block mb-3">John Doe</strong>
                  <i className="bi bi-map me-2"></i> 40 rue Laure Diebold
                  <br />
                  <i className="bi bi-geo-alt me-2"></i> 69009 Lyon, France
                  <br />
                  <i className="bi bi-phone me-2"></i>
                  <a href="tel:+331020304050" className="text-decoration-none">
                    10&nbsp;20&nbsp;30&nbsp;40&nbsp;50
                  </a>
                  <br />
                  <i className="bi bi-envelope-at me-2"></i>
                  <a
                    href="mailto:john.doe@gmail.com"
                    className="text-decoration-none"
                  >
                    john.doe@gmail.com
                  </a>
                </address>
              </div>
            </div>
          </div>
          {/* second accordion */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionMentions"
            >
              <div className="accordion-body">
                <h3 className="fw-bold h4">alwaysdata</h3>
                <address className="fs-6">
                  91 Rue du Faubourg Saint-Honoré, 75008 Paris
                  <br />
                  <i className="bi bi-globe me-1"></i>
                  <a
                    href="https://www.alwaysdata.com"
                    className="text-primary text-decoration-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.alwaysdata.com
                  </a>
                </address>
              </div>
            </div>
          </div>
          {/* third accordion */}

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionMentions"
            >
              <div className="accordion-body">
                <h3 className="fw-bold h4">Crédits</h3>
                <p>
                  Ce site est réalisé par John Doe, étudiant au{" "}
                  <a
                    href="https://www.centre-europeen-formation.fr/"
                    className="text-primary text-decoration-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Centre Européen de Formation
                  </a>
                  .
                </p>
                <p className="fst-italic">
                  Les images utilisées sur ce site sont libres de droits et ont
                  été obtenues sur le site{" "}
                  <a
                    href="https://pixabay.com/fr/"
                    className="text-primary text-decoration-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pixabay
                  </a>
                </p>
                <p className="fst-italic">
                  Le favicon de ce site a été fournie par{" "}
                  <a
                    href="https://www.flaticon.com/de/kostenlose-icons/john-doe"
                    className="text-primary text-decoration-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    John doe Icons erstellt von Freepik - Flaticon
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
