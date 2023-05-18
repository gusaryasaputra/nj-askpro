export default function Footer() {
  return (
    <footer className="d-flex justify-content-center align-items-center bg-dark text-white">
      <div className="container p-3 mt-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="d-block text-center">
              <a
                className="navbar-brand fst-italic fs-2 fw-bold brand-name-footer"
                href="#"
              >
                Ask<span>Pro.</span>
              </a>
              <span className="d-block">@Copyright AskPro. 2023</span>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              repellendus officia, sed adipisci quas aliquam amet. Sequi,
              aperiam! Expedita, eos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
