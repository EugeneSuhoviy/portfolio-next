import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface ProjectProps {
    projectDescription: { json: Document }
    projectTitle: string
    projectDate: string
    projectUrl: string
    projectImage: { url: string }
}

const Project: React.FC<ProjectProps> = (props) => {
    const { projectDescription, projectTitle, projectDate, projectUrl, projectImage } = props;

    return <>

        <Card className='max-w-sm m-5'>
            <CardHeader>
                <Image src={projectImage.url} className="w-full" alt={projectTitle} width={600} height={600} />
                <CardTitle>{projectTitle}</CardTitle>
                <CardDescription><a href={projectUrl} className='mb-3 block'>{projectUrl}</a></CardDescription>
            </CardHeader>
            <CardContent>
                {documentToReactComponents(projectDescription.json)}
            </CardContent>
            <CardFooter>
                {projectDate}
            </CardFooter>
        </Card>
        {/* <li className="max-w-sm rounded overflow-hidden shadow-lg m-5">
            <Image src={projectImage.url} className="w-full" alt={projectTitle} width={600} height={600} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{projectTitle}</div>
                <a href={projectUrl} className='mb-3 block'>{projectUrl}</a>
                Role: {projectRole}
                <div className="text-gray-700 text-base">
                    {documentToReactComponents(projectDescription.json)}
                </div>
                <pre>{projectDate}</pre>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </li> */}
    </>



}

export default Project;
