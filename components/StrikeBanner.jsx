const StrikeBanner = () => (
    <div className="banner">
        <div className="banner_container">
            <div className="banner_icon">⚠️</div>
            <div className="banner_label">
                <p className="banner_title">En raison d’un appel interprofessionnel à la grève contre la réforme des retraites, une partie de l’équipe ne travaille pas.</p>
                <p className="banner_subtitle">Les délais de réponse aux questions techniques pourront être perturbés pendant les prochains jours.</p>
            </div>
        </div>

        <style jsx>
            {`
                .banner {
                  width: 100%;
                  margin: 0;
                  padding: 16px;
                  color: #333;
                  background-color: #FEF3B8;
                  font-family: Helvetica, sans-serif;
                }

                .banner_container {
                  display: flex;
                  align-items: center;
                  max-width: 1024px;
                  margin: auto;
                }

                .banner_icon {
                  margin-right: 16px;
                  font-size: 30px;
                  opacity: 0.7;
                }

                .banner_title,
                .banner_subtitle {
                  margin: 0;
                  padding: 0;
                  line-height: 22px;
                }

                .banner_title {
                  font-weight: bold;
                }
            `}
        </style>
    </div>
)

export default StrikeBanner
