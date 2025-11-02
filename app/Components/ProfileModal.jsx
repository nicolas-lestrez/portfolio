'use client';

import { useEffect, useState } from 'react';

export default function ProfileModal() {
  const [userData, setUserData] = useState(null);

  const getUsers = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json= await res.json();
    setUserData(json);
  };

  useEffect(() =>{
    getUsers();
  }, []);


  if (!userData) return null;

  return (
    <div className="modal fade" id="enSavoirPlusModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-dark text-light">
          {/* En-tête */}
          <div className="modal-header border-secondary">
            <h5 className="modal-title">Mon profil GitHub</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Fermer"
            />
          </div>

          {/* Corps : Image à gauche / infos à droite */}
          <div className="modal-body">
            <div className="row g-4 align-items-start">
              {/* Colonne gauche : avatar */}
              <div className="col-md-6 text-center">
                <img
                  src={userData.avatar_url}
                  alt={userData.login}
                  className="img-fluid rounded"
                  style={{ maxHeight: 340, objectFit: 'cover' }}
                />
              </div>

              {/* Colonne droite : infos */}
              <div className="col-md-6">
                <p className="mb-2">
                  <i className="bi bi-person me-2" />
                  <a
                    href={userData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-light fw-semibold"
                  >
                    {userData.name}
                  </a>
                </p>
                <hr className="modal-sep" />

                <p className="mb-2">
                  <i className="bi bi-geo-alt me-2" />
                  {userData.location}
                </p>
                <hr className="modal-sep" />

                <p className="mb-2">
                  <i className="bi bi-card-text me-2" />
                  {userData.bio}
                </p>
                <hr className="modal-sep" />

                <p className="mb-2">
                  <i className="bi bi-box-seam me-2" />
                  Repositories : {userData.public_repos}
                </p>
                <hr className="modal-sep" />

                <p className="mb-2">
                  <i className="bi bi-people me-2" />
                  Followers : {userData.followers}
                </p>
                <hr className="modal-sep" />

                <p className="mb-0">
                  <i className="bi bi-people me-2" />
                  Following : {userData.following}
                </p>
              </div>
            </div>
          </div>

          {/* Pied de modale */}
          <div className="modal-footer border-secondary justify-content-end">
            <button type="button" className="btn btn-light" data-bs-dismiss="modal">
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
