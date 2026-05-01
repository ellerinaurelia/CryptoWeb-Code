export default function AppSection() {
  return (
    <section className="section app active" id="app" aria-label="app" data-section>
      <div className="container">
        <div className="app-content">
          <h2 className="h2 section-title">Free Your Money & Invest With Confidence</h2>
          <p className="section-text">
            With Crypton, you can be sure your investment is safe.
          </p>
          <ul className="section-list">
            <li className="section-item">
              <div className="title-wrapper">
                <h3 className="h3 list-title">Manage your portfolio</h3>
              </div>
              <p className="item-text">
                Buy and sell popular digital currencies, keep track of them in the one place.
              </p>
            </li>
          </ul>
          <div className="app-wrapper">
            <img src="/images/googleplay.png" width="135" height="40" alt="get it on google play" />
            <img src="/images/appstore.png" width="135" height="40" alt="download on the app store" />
          </div>
        </div>
        <div className="app-banner">
          <img src="/images/app-banner.png" width="573" height="610" loading="lazy" alt="app banner" className="w-100" />
          <span className="span">Scan To Download</span>
        </div>
      </div>
    </section>
  );
}
