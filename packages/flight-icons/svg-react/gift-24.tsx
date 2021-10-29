import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconGift24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M3.5 4.25c0 .63.192 1.235.54 1.75H2.75A1.75 1.75 0 001 7.75v3.5c0 .966.784 1.75 1.75 1.75H3v7.25A2.75 2.75 0 005.75 23h12.5A2.75 2.75 0 0021 20.25V13h.25A1.75 1.75 0 0023 11.25v-3.5A1.75 1.75 0 0021.25 6h-.79c.348-.515.54-1.12.54-1.75 0-.88-.375-1.711-1.023-2.316A3.529 3.529 0 0017.571 1c-2.266 0-3.67 1.524-4.463 2.87a10.098 10.098 0 00-.842 1.858l-.016.047-.016-.047c-.17-.501-.44-1.177-.842-1.859C10.599 2.524 9.195 1 6.929 1c-.894 0-1.76.33-2.406.934A3.168 3.168 0 003.5 4.25zM6.929 2.5c-.528 0-1.024.196-1.383.53A1.669 1.669 0 005 4.25c0 .447.19.887.546 1.22.359.334.855.53 1.383.53h3.81a8.46 8.46 0 00-.64-1.37C9.42 3.477 8.413 2.5 6.93 2.5zM13.76 6h3.811c.528 0 1.024-.196 1.383-.53.356-.333.546-.773.546-1.22 0-.447-.19-.887-.546-1.22a2.029 2.029 0 00-1.383-.53c-1.484 0-2.49.976-3.17 2.13A8.46 8.46 0 0013.76 6zM13 7.5v4h8.25a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25H13zm-1.5 0v4H2.75a.25.25 0 01-.25-.25v-3.5a.25.25 0 01.25-.25h8.75zm8 12.75V13H13v8.5h5.25c.69 0 1.25-.56 1.25-1.25zm-8 1.25H5.75c-.69 0-1.25-.56-1.25-1.25V13h7v8.5z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
