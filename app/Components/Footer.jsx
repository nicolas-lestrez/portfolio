
import Link from "next/link";

export default function Footer() {


  return (
    <footer className="site-footer bg-dark text-light py-5">
      {/* 👉 Ajoute ici tes classes Bootstrap (ex: bg-dark text-light py-5) */}
      <div className="container">
        <div className="row g-4">

            {/* first col */}
            <section className="col-md-4 text-center text-md-start">
                <address className="fs-6">
                <strong className="h5 d-block mb-3 fw-bold">John Doe</strong>
                <i className="bi bi-map me-2"></i> 40 rue Laure Diebold
                <br />
                <i className="bi bi-geo-alt me-2"></i> 69009 Lyon, France
                <br />
                <i className="bi bi-phone me-2"></i>
                <a href="tel:+331020304050" className="text-decoration-none">10&nbsp;20&nbsp;30&nbsp;40&nbsp;50</a>
                <br />
                <i className="bi bi-envelope-at me-2"></i>
                <a href="mailto:john.doe@gmail.com" className="text-decoration-none">john.doe@gmail.com</a>
            </address> 
            <div className="rs h4">
                <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer nofollow" aria-label="GitHub">
                    <i className="bi bi-github"></i>
                </a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer nofollow" aria-label="Twitter X">
                    <i className="bi bi-twitter-x px-3"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer nofollow" aria-label="Linkedin">
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>
            </section>

            {/* second col */}
            <section className="col-md-4 text-center text-md-start">
                <h5 className="fw-bold">Liens utiles</h5>
                <ul className="m-0 list-unstyled">
                    <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/mentions-legales">Mentions légales</Link></li>
                </ul>
            </section>

            {/* second col */}
            <section className="col-md-4 text-center text-md-start">
                <h5 className="fw-bold">Mes dernières réalisations</h5>
                <ul className="m-0 list-unstyled">
                    <li><Link href="/portfolio">Fresh food</Link></li>
                    <li><Link href="/portfolio">Restaurant Akira</Link></li>
                    <li><Link href="/portfolio">Espace bien-être</Link></li>
                    <li><Link href="/portfolio">SEO</Link></li>
                    <li><Link href="/portfolio">Création d'un API</Link></li>
                    <li><Link href="/portfolio">Maquette d'un site</Link></li>
                </ul>
            </section>
            
            
        </div>
      </div>
    </footer>
  );
}
