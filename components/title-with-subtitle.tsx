import { Document, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import Link from 'next/link';

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
            <h1 className="text-4xl font-bold no-animation" >
                {title}
            </h1>
            <br />
            <div>
                {documentToReactComponents(subtitle.json, RICHTEXT_OPTIONS)}
            </div>
            <br />
        </>
    );
};

export default TitleWithSubtitle;
