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
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-7xl mx-auto slide-enter-content">
      <h1 className="no-animation text-3xl font-bold text-center w-full">Projects</h1>
      <div className="container">
        <ul className="flex flex-wrap slide-enter-content">
          {projects.data.pageProjects.projectCollection.items.map((item: ProjectItem) => (
            <Project key={item.sys.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
