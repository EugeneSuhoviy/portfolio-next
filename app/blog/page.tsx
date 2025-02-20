import { getPosts } from "@/lib/api";


export default async function Blog() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="no-animation">BLOG</h1>
      <ul>
        {posts.data.postCollection.items.map((item: PostItem) => (
          <li key={item.sys.id}>
            <a href={`/blog/${item.postUrl}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
