import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconGithub24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M12 2C6.477 2 2 6.476 2 11.997c0 4.417 2.865 8.163 6.839 9.485.5.092.682-.216.682-.482 0-.236-.008-.865-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.528 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.252-4.555-1.11-4.555-4.94 0-1.092.39-1.985 1.029-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.581 9.581 0 0112 6.834c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.393.1 2.646.64.698 1.028 1.591 1.028 2.682 0 3.84-2.339 4.686-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.414-.012 2.741 0 .268.18.58.688.482 3.97-1.325 6.833-5.07 6.833-9.485C22 6.476 17.522 2 12 2z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
