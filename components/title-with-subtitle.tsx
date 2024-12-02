"use client";

import { Document, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import Link from 'next/link';
import { motion } from "motion/react"

interface TitleWithSubtitleProps {
    title: string,
    subtitle: { json: Document }
}

const TitleWithSubtitle: React.FC<TitleWithSubtitleProps> = ({ title, subtitle }) => {
    const RICHTEXT_OPTIONS = {
        renderNode: {
            [INLINES.HYPERLINK]: (node: unknown, children: React.ReactNode) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                return <Link className="underline hover:no-underline text-red-500" href={node.data.uri}>{children}</Link>
            }
        }
    }

    return (
        <>
            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0, duration: 1, ease: "easeInOut" }}
                className="text-4xl">
                {title}
            </motion.h1>
            <br />
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}>
                {documentToReactComponents(subtitle.json, RICHTEXT_OPTIONS)}
            </motion.div>
        </>
    );
};

export default TitleWithSubtitle;
