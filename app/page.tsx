import { getAboutPage } from "../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import TitleWithSubtitle from "@/components/title-with-subtitle";

export default async function Home() {
  const { data: { aboutPage: data } } = await getAboutPage();

  return (
    <main className="max-w-3xl mx-auto">
        <TitleWithSubtitle title={data.title} subtitle={data.subTitle} />

        <div className="max-100">
          {documentToReactComponents(data.description.json)}
        </div>
    </main>
  );
}
