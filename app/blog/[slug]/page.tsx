import { getPostById } from "@/lib/api";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug;
    const postData = await getPostById(slug);

    return <section className="max-w-3xl mx-auto">
        <h1 className="no-animation">{postData.data.postCollection.items[0].title}</h1>
        <div className="slide-enter-content">
            {documentToReactComponents(postData.data.postCollection.items[0].content.json)}
        </div>

    </section>
}