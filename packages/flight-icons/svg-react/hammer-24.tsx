import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconHammer24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M19.502 5.858C15.71 2.773 10.384.225 5.334 3.59a.75.75 0 00.269 1.36c1.292.258 2.317.466 3.309.888.814.346 1.625.846 2.52 1.67L1.03 17.909a2.25 2.25 0 000 3.182l.879.879a2.25 2.25 0 003.182 0l10.864-10.864c.212.322.24.532.247.66.004.065.002.13-.001.21l-.002.041c-.004.068-.009.16-.008.245.002.243.047.586.328.898.513.571 1.078 1.123 1.607 1.64.124.121.247.24.366.358a.75.75 0 001.06-.008l4.148-4.208a.75.75 0 00-.008-1.061c-.763-.752-1.224-1.196-1.866-1.814l-.21-.203c-.283-.273-.643-.316-.838-.327a4.072 4.072 0 00-.589.026l-.013.001-.209.019a6.363 6.363 0 01-.005-.263v-.031c-.002-.161-.003-.383-.034-.588-.03-.206-.108-.548-.388-.81a.74.74 0 00-.038-.033zM9.499 4.456a11.55 11.55 0 00-1.546-.523c3.597-1.278 7.34.464 10.493 3 .012.092.014.21.016.398v.013c.001.167.003.4.038.62.035.217.12.55.393.81.288.273.654.307.837.314.195.007.407-.013.56-.028l.029-.003c.162-.015.27-.024.35-.023l.117.113c.475.458.848.818 1.318 1.277l-3.095 3.14a32.343 32.343 0 01-1.318-1.343c0-.027.002-.056.004-.099l.004-.077a3.49 3.49 0 000-.363c-.034-.633-.299-1.343-1.169-2.212a.75.75 0 00-1.06 0L14 10.94 12.06 9l.97-.97a.75.75 0 00.007-1.053c-1.233-1.266-2.362-2.02-3.538-2.52zM11 10.061L2.091 18.97a.75.75 0 000 1.06l.879.879a.75.75 0 001.06 0L12.94 12 11 10.06zm9.74-1.021l-.01-.002a.04.04 0 01.01.002zm-.996-1.455l.013.002a.05.05 0 01-.013-.002z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
