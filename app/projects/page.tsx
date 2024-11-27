import { Document } from '@contentful/rich-text-types';
import { getProjects } from "@/lib/api";
import Project from "@/components/project";

interface ProjectItem {
  sys: { id: string };
  projectDescription: { json: Document }
  projectTitle: string
  projectRole: string
  projectDate: string
  projectUrl: string
  projectImage: { url: string }
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="container">
        <h1>Projects</h1>
        <ul className="flex flex-wrap">
          {projects.data.pageProjects.projectCollection.items.map((item: ProjectItem) => (
            <Project key={item.sys.id} {...item} />
          ))}
        </ul>
      </div>
    </main>
  );
}
