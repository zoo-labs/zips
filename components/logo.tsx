'use client';

import config from '@/rfc.config';
import { getColorSVG, getMonoSVG, getWhiteSVG } from '@zooai/logo';

interface LogoProps {
  size?: number;
  className?: string;
  variant?: 'color' | 'white' | 'mono';
}

export function Logo({ size = 24, className = '', variant = 'color' }: LogoProps) {
  // Get SVG string and modify it to be responsive
  let svg = '';
  switch (variant) {
    case 'mono':
      svg = getMonoSVG();
      break;
    case 'white':
      svg = getWhiteSVG();
      break;
    default:
      svg = getColorSVG();
  }

  // Remove hardcoded width/height from SVG and add 100% to fill container
  const responsiveSvg = svg
    .replace(/width="\d+"/, 'width="100%"')
    .replace(/height="\d+"/, 'height="100%"');

  return (
    <div
      className={className}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: responsiveSvg }}
    />
  );
}

export function LogoWithText({ size = 24 }: { size?: number }) {
  const shortName = config.shortName;
  const fullName = config.name;

  return (
    <div className="flex items-center gap-2 group logo-with-text">
      <Logo
        size={size}
        className="transition-transform duration-200 group-hover:scale-110"
      />
      <div className="relative h-6">
        <span className="font-bold text-lg inline-block transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-full">
          {shortName}s
        </span>
        <span className="font-bold text-lg absolute left-0 top-0 opacity-0 translate-y-full transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
          {fullName}
        </span>
      </div>
    </div>
  );
}

export function LogoStatic({ size = 24, text }: { size?: number; text?: string }) {
  const displayText = text || `${config.shortName}s`;

  return (
    <div className="flex items-center gap-2">
      <Logo size={size} />
      <span className="font-bold text-lg">{displayText}</span>
    </div>
  );
}
