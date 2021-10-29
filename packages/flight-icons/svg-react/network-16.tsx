import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconNetwork16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M6.25 0C5.56 0 5 .56 5 1.25v3.5C5 5.44 5.56 6 6.25 6H7v1H1a.75.75 0 000 1.5h2.5V10H2.25C1.56 10 1 10.56 1 11.25v3.5c0 .69.56 1.25 1.25 1.25h3.5C6.44 16 7 15.44 7 14.75v-3.5C7 10.56 6.44 10 5.75 10H5V8.5h6V10h-.75C9.56 10 9 10.56 9 11.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25H12.5V8.5H15A.75.75 0 0015 7H8.5V6h1.25C10.44 6 11 5.44 11 4.75v-3.5C11 .56 10.44 0 9.75 0h-3.5zm4.25 11.5v3h3v-3h-3zm-8 0v3h3v-3h-3zm7-7v-3h-3v3h3z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
