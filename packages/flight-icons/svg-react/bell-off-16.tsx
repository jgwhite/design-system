import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconBellOff16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M8 2.5c-.546 0-1.033.12-1.457.326a.75.75 0 01-.655-1.35A4.802 4.802 0 018 1c3.093 0 5 2.665 5 5.405v1.78a.75.75 0 01-1.5 0v-1.78C11.5 4.275 10.062 2.5 8 2.5z" />
                    <path
                        fillRule="evenodd"
                        d="M3.343 4.404L1.22 2.28a.75.75 0 011.06-1.06l12.5 12.5a.75.75 0 11-1.06 1.06L10.94 12H1.75a.75.75 0 010-1.5c.462 0 1.25-.386 1.25-1.72V6.405c0-.691.118-1.37.343-2.001zM9.44 10.5H4.113c.242-.468.387-1.043.387-1.72V6.405c0-.264.023-.524.067-.777L9.439 10.5z"
                        clipRule="evenodd"
                    />
                    <path d="M5.872 12.602a.75.75 0 011.026.27c.219.374.63.628 1.102.628.473 0 .883-.254 1.102-.628a.75.75 0 011.296.756A2.773 2.773 0 018 15a2.773 2.773 0 01-2.398-1.372.75.75 0 01.27-1.026z" />
                </g>
            </svg>
        );
    }
);
