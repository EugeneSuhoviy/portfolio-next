import { getPosts } from "@/lib/api";

type PostItem = {
  sys: {
    id: string;
  };
  slug: string;
  title: string;
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="no-animation text-3xl font-bold text-center">BLOG</h1>
      <ul className="slide-enter-content">
        {posts.data.postCollection.items.map((item: PostItem) => (
          <li key={item.sys.id}>
            <a href={`/blog/${item.slug}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
