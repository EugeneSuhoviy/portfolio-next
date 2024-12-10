"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from '@contentful/rich-text-types';

interface ReachTextJsonProps {
    reachTextJson: Document
}

const Description: React.FC<ReachTextJsonProps> = ({ reachTextJson }) => {
    return (
        <div style={{ "--stagger": 2 }} data-animate>
            { documentToReactComponents(reachTextJson) }
            <p style={{ "--stagger": 5 }} data-animate>1111</p>
            <p style={{ "--stagger": 6 }} data-animate>2222</p>
        </div>
            
    
    );
}

export default Description;