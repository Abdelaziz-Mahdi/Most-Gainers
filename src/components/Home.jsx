export default function Home() {
  return (
    <section>
      <div className="d-flex flex-column gap-3">
        <figure className="container mb-2 border rounded p-3 bg-success-subtle">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <h3>Stock Market Most Gainers API</h3>
              <form action="" className="text-center">
                <div className=" d-flex justify-content-center">
                  <div className="col-6">
                    <input type="text" className="form-control" placeholder="Enter a Company Name" />
                  </div>
                </div>
              </form>
            </div>
            <div className="row col-12">
              <div className="card col-6">
                <div className="card-body">
                  <h5 className="card-title">Company Name</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Company Symbol</h6>
                  <p className="card-text">Company Description</p>
                  <a href="google.com" className="card-link">Company Website</a>
                </div>
              </div>
              <div className="card col-6">
                <div className="card-body">
                  <h5 className="card-title">Company Name</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Company Symbol</h6>
                  <p className="card-text">Company Description</p>
                  <a href="google.com" className="card-link">Company Website</a>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
