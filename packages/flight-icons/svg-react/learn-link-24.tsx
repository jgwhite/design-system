import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconLearnLink24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = title
            ? 'title-' + Math.random().toString(36).substr(2, 9)
            : undefined;
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M18.75 1a.75.75 0 000 1.5h1.69l-2.97 2.97a.75.75 0 001.06 1.06l2.97-2.97v1.69a.75.75 0 001.5 0v-3.5a.75.75 0 00-.75-.75h-3.5z" />
                    <path
                        fillRule="evenodd"
                        d="M11.856 5.09a.75.75 0 00-.712 0l-9.75 5.25a.75.75 0 000 1.32l2.627 1.415A.752.752 0 004 13.25v5.333a.75.75 0 00.067.31l.683-.31-.683.31v.002l.002.003.003.006.007.016a1.657 1.657 0 00.094.168c.061.101.151.234.277.387.251.308.643.694 1.23 1.072C6.857 21.306 8.772 22 11.82 22c3.043 0 4.827-.692 5.87-1.487.52-.397.838-.806 1.029-1.138a2.714 2.714 0 00.244-.557c.005-.018.01-.034.012-.048l.005-.018.001-.007.001-.004v-.001s0-.002-.733-.157l.734.155a.752.752 0 00.016-.155V13.25c0-.06-.007-.12-.02-.175l2.626-1.415a.75.75 0 000-1.32l-9.75-5.25zM17.5 13.87l-5.644 3.04a.75.75 0 01-.712 0L5.5 13.87v4.508c.028.04.064.09.11.146.158.192.434.472.882.761.892.575 2.513 1.214 5.33 1.214 2.823 0 4.253-.641 4.959-1.18a2.41 2.41 0 00.64-.695c.039-.067.064-.121.079-.159v-4.595zm-6 1.527L3.332 11 11.5 6.602 19.668 11 11.5 15.398z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
