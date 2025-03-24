import { getAboutPage } from "@/lib/api";
import TitleWithSubtitle from "@/components/title-with-subtitle";
import Description from "@/components/description";

export default async function Home() {
  const { data: { aboutPage: data } } = await getAboutPage();

  return (
    <section className="max-w-3xl mx-auto slide-enter-content">
      <TitleWithSubtitle title={data.title} subtitle={data.subTitle} />
      <Description reachTextJson={data.description.json} />
    </section>
  );
}
