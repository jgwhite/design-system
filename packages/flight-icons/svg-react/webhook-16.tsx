import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconWebhook16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M6.032 4.132c0-1.039.843-1.882 1.886-1.882.709 0 1.328.39 1.65.97a.75.75 0 101.311-.728A3.385 3.385 0 007.918.75a3.383 3.383 0 00-3.386 3.382c0 .94.385 1.79 1.003 2.402l-2.054 3.594a1.25 1.25 0 00.151 2.49h.007a1.25 1.25 0 001.146-1.75l2.369-4.144a.75.75 0 00-.249-1.005 1.879 1.879 0 01-.873-1.587z" />
                    <path d="M7.793 5.375a1.25 1.25 0 01.125-2.494h.006a1.25 1.25 0 011.157 1.725l2.159 3.572a3.383 3.383 0 014.51 3.19 3.383 3.383 0 01-4.23 3.275.75.75 0 11.373-1.452 1.883 1.883 0 002.357-1.822 1.883 1.883 0 00-2.897-1.588.75.75 0 01-1.045-.245l-2.515-4.16z" />
                    <path d="M2.002 10.429a.75.75 0 00-1.298-.752 3.383 3.383 0 002.932 5.073c1.61 0 2.96-1.124 3.301-2.632h4.42c.229.304.592.5 1.001.5h.007a1.25 1.25 0 000-2.5h-.007c-.409 0-.772.197-1 .5H6.271a.75.75 0 00-.75.75 1.883 1.883 0 01-1.886 1.882 1.883 1.883 0 01-1.633-2.821z" />
                </g>
            </svg>
        );
    }
);
