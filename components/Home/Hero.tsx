import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="hero d-flex justify-content-center align-items-center"
      id="home"
    >
      <div className="container bg-white">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col d-flex justify-content-center align-items-center text-center">
            <div className="d-block welcome-text">
              <h1 className="fw-semibold mb-1">
                Ask<span>Pro.</span> Software
              </h1>
              <h5 className="fst-italic">
                Solusi terbaik untuk anda yang mencari website
                <span className="fw-bold"> simple</span> &
                <span className="fw-bold"> murah</span>
              </h5>
              <button type="button" className="btn btn-lg askpro-btn mt-4">
                Get Started
              </button>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center text-center">
            <Image
              className="vector-website"
              src="/img/vector-website.jpg"
              width={300}
              height={300}
              alt="Vector Website"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
