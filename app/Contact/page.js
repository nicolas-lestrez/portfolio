export default function contactPage() {
  return (
    <main>
      <section className="contact py-5">
        <div className="container text-center">
          <h1 className="fw-bold mb-2">Contact</h1>
          <h2 className="h6 mb-4">
            Pour me contacter en vue d'une entretien ou d'une future
            collaboration, merci de remplir le formulaire de contact
          </h2>
          <div className="underline mx-auto mb-5"></div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row shadow p-4 g-4">
          <div className="col-md-6">
            <h3 className="fw-bold">Formulaire de contact</h3>
            <div className="underline1 mb-4"></div>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Votre adresse e-mail"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Votre numéro de téléphone"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Sujet"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  rows="20"
                  className="form-control"
                  placeholder="Votre message"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold">Mes coordonnées</h3>
            <div className="underline1 mb-4"></div>
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

            <div className="ratio ratio-1x1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4059.6526279037066!2d4.795459606231288!3d45.77869953170455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e1!3m2!1sfr!2sfr!4v1761992334537!5m2!1sfr!2sfr"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
