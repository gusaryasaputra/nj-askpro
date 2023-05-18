import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";

import Layout from "@/components/Layout";
import Hero from "@/components/Home/Hero";
import { SERVICES } from "@/public/constant/service";

export default function Home() {
  function serviceIcon(iconName: string) {
    if (iconName == "globe") {
      return <Icon.Globe className="service-icon" size={32} />;
    } else if (iconName == "monitor") {
      return <Icon.Monitor className="service-icon" size={32} />;
    } else if (iconName == "smartphone") {
      return <Icon.Smartphone className="service-icon" size={32} />;
    }
  }

  return (
    <>
      <Hero />
      <Layout title="Home">
        <section className="promotion text-light">
          <div className="container">
            <h1 className="text-center fw-bold pt-5">
              <span>Promo</span> Kami
            </h1>
            <div className="row row-cols-1 text-center">
              <div className="col">
                <div className="card my-5">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-semibold">
                      <span>Website</span> Diskon 25%
                    </h4>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title pricing-card-title">
                      <span className="text-decoration-line-through">
                        Rp2.000.000
                      </span>
                    </h5>
                    <h3 className="card-title pricing-card-title">
                      Rp.1.500.000
                    </h3>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li className="mb-2">
                        <Icon.CheckCircle
                          className="promotion-icon"
                          size={20}
                        />
                        Rp2.000.000 pada tahun pertama
                      </li>
                      <li className="mb-2">
                        <Icon.CheckCircle
                          className="promotion-icon"
                          size={20}
                        />
                        Rp1.500.000 pada tahun-tahun selanjutnya
                      </li>
                      <li className="mb-2">
                        <Icon.CheckCircle
                          className="promotion-icon"
                          size={20}
                        />
                        Design website simple dan responsive
                      </li>
                      <li className="mb-2">
                        <Icon.CheckCircle
                          className="promotion-icon"
                          size={20}
                        />
                        1 Email profesional dengan nama domain
                      </li>
                      <li className="mb-2">
                        <Icon.CheckCircle
                          className="promotion-icon"
                          size={20}
                        />
                        Revisi website sebanyak maksimal 3 kali
                      </li>
                      <li className="mb-2">
                        <Icon.CheckCircle
                          className="promotion-icon"
                          size={20}
                        />
                        Revisi minor/kecil bebas tanpa batasan{" "}
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="w-25 btn btn-lg askpro-btn"
                    >
                      Pilih
                    </button>
                    <span className="d-block fst-italic mt-5">
                      * biaya yang dikeluarkan adalah per tahun
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service" id="service">
          <div className="container">
            <h1 className="text-center fw-bold pt-5">
              <span>Servis</span> Kami
            </h1>
            <div className="row row-cols-1 row-cols-md-3 my-5">
              {SERVICES.map((service) => {
                return (
                  <div
                    className="col d-flex align-items-start mb-5"
                    key={service.slug}
                  >
                    <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                      {serviceIcon(service.icon)}
                    </div>
                    <div>
                      <h3 className="fs-2">{service.title}</h3>
                      <p>{service.description}</p>
                      <Link href={`/services/${service.slug}`}>
                        <span className="btn askpro-btn w-50">Detail</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
