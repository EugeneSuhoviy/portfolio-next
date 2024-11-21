import { getAboutPage } from "../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import TitleWithSubtitle from "@/components/title-with-subtitle";
import Footer from "@/components/footer";

export default async function Home() {
  const { data: { aboutPage: data } } = await getAboutPage();

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <TitleWithSubtitle title={data.title} subtitle={data.subTitle} />

      <div className="max-100">
        {documentToReactComponents(data.description.json)}
      </div>
      <Footer text="sdf" />
    </main>
  );
}
