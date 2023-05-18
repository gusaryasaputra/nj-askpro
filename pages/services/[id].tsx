import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import { SERVICES } from "@/public/constant/service";

export default function Service() {
  const router = useRouter();
  const { id } = router.query;

  const service = SERVICES.find(({ slug }) => slug === id);

  return (
    <Layout title="Service Detail">
      <section className="service-detail">
        <div className="container text-center">
          <h1>{service!.title} Detail</h1>

          <p>{service!.description}</p>
        </div>
      </section>
    </Layout>
  );
}
