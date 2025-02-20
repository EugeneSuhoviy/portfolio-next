import { getPostById } from "@/lib/api";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug;
    const postData = await getPostById(slug);

    console.log("params ______________________", slug);


    return <>

        <pre>{JSON. stringify(postData, null, 2)}</pre>


        <div className="no-animation">My Post: {slug}</div>
    </>
}