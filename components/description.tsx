import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from '@contentful/rich-text-types';

interface ReachTextJsonProps {
    reachTextJson: Document
}

const Description: React.FC<ReachTextJsonProps> = ({ reachTextJson }) => {
    return (
        <>
            {documentToReactComponents(reachTextJson)}
        </>
    );
}

export default Description;