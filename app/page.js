import ProfileModal from "./components/ProfileModal";

export default function Home() {
  return (
    <>
      <main>
        {/* Section Hero */}
        <section className="hero">
          <div>
            <h1 className="display-4 fw-bold">Bonjour, je suis John Doe</h1>
            <h2 className="h1">Développeur web full stack</h2>
            <button
              type="button"
              className="btn btn-danger mt-3"
              data-bs-toggle="modal"
              data-bs-target="#enSavoirPlusModal"
            >
              En savoir plus
            </button>
          </div>
        </section>
        {/* Section About */}
        <section className="about py-5">
          <div className="container shadow rounded my-3">
            <div className="row g-4">
              <div className="col-lg-6 mb-4">
                <h3 className="border-bottom border-2 border-primary py-2 mb-5 fw-bold">
                  A propos
                </h3>
                <img
                  src="/img/john-doe-about.webp"
                  alt="Portrait de John Doe"
                  className="img-fluid w-100 shadow-sm my-3"
                />

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit laudantium repudiandae exercitationem fuga, quo
                  aliquam, possimus libero, mollitia magnam facilis accusantium!
                  Odit ab harum repellat cum laudantium aperiam sint laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit laudantium repudiandae exercitationem fuga, quo
                  aliquam, possimus libero, mollitia magnam facilis accusantium!
                  Odit ab harum repellat cum laudantium aperiam sint laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit laudantium repudiandae exercitationem fuga, quo
                  aliquam, possimus libero, mollitia magnam facilis accusantium!
                  Odit ab harum repellat cum laudantium aperiam sint laborum.
                </p>
              </div>
              <div className="col-lg-6 mb-4">
                <h3 className="border-bottom border-2 border-primary py-2 mb-5 fw-bold">
                  Mes compétences
                </h3>
                <p className="mt-3 mb-1">HTML5 90%</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="mt-3 mb-1">CSS3 80%</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="mt-3 mb-1">JAVASCRIPT 70%</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="mt-3 mb-1">PHP 60%</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="mt-3 mb-1">REACT 50%</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ProfileModal />
    </>
  );
}
