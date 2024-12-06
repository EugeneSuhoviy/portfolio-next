"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from '@contentful/rich-text-types';
import { motion } from "motion/react"

interface ReachTextJsonProps {
    reachTextJson: Document
}

const Description: React.FC<ReachTextJsonProps> = ({ reachTextJson }) => {
    return (
        <motion.div
            initial={{ y: 7, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}>
            { documentToReactComponents(reachTextJson) }
        </motion.div>
            
    
    );
}

export default Description;