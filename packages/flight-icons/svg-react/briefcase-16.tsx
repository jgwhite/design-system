import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconBriefcase16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = title
            ? 'title-' + Math.random().toString(36).substr(2, 9)
            : undefined;
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M5.75 1A1.75 1.75 0 004 2.75V4H2.25A2.25 2.25 0 000 6.25v6.5A2.25 2.25 0 002.25 15h11.5A2.25 2.25 0 0016 12.75v-6.5A2.25 2.25 0 0013.75 4H12V2.75A1.75 1.75 0 0010.25 1h-4.5zm6.75 12.5h1.25a.75.75 0 00.75-.75v-6.5a.75.75 0 00-.75-.75H12.5v8zm-1.5-8v8H5v-8h6zm-7.5 8v-8H2.25a.75.75 0 00-.75.75v6.5c0 .414.336.75.75.75H3.5zm7-9.5V2.75a.25.25 0 00-.25-.25h-4.5a.25.25 0 00-.25.25V4h5z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
