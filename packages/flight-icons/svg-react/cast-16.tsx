import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCast16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M3.25 2A2.25 2.25 0 001 4.25v1.23a.75.75 0 001.5 0V4.25a.75.75 0 01.75-.75h9.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H9.724a.75.75 0 000 1.5h3.026A2.25 2.25 0 0015 11.75v-7.5A2.25 2.25 0 0012.75 2h-9.5z" />
                    <path d="M1.833 7.505a.75.75 0 10-.166 1.49 4.91 4.91 0 014.338 4.338.75.75 0 101.49-.166 6.41 6.41 0 00-5.662-5.662z" />
                    <path d="M1.9 10.062a.75.75 0 00-.3 1.47A2.394 2.394 0 013.468 13.4a.75.75 0 101.47-.3A3.894 3.894 0 001.9 10.062z" />
                </g>
            </svg>
        );
    }
);
