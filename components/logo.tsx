'use client';

import config from '@/rfc.config';

interface LogoProps {
  size?: number;
  className?: string;
  variant?: 'color' | 'white' | 'mono';
}

// Zoo logo SVG embedded directly to avoid local path dependency
const LOGO_SETTINGS = {
  color: {
    outerRadius: 270,
    outerX: 512,
    outerY: 511,
    circleRadius: 234,
    greenX: 513,
    greenY: 369,
    redX: 365,
    redY: 595,
    blueX: 643,
    blueY: 595
  },
  mono: {
    outerRadius: 283,
    outerX: 508,
    outerY: 510,
    strokeWidth: 33,
    outerStrokeWidth: 36
  }
};

function getColorSVG() {
  const s = LOGO_SETTINGS.color;
  return `<svg width="100%" height="100%" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="outerCircleColor">
        <circle cx="${s.outerX}" cy="${s.outerY}" r="${s.outerRadius}"/>
      </clipPath>
      <clipPath id="greenClip">
        <circle cx="${s.greenX}" cy="${s.greenY}" r="${s.circleRadius}"/>
      </clipPath>
      <clipPath id="redClip">
        <circle cx="${s.redX}" cy="${s.redY}" r="${s.circleRadius}"/>
      </clipPath>
      <clipPath id="blueClip">
        <circle cx="${s.blueX}" cy="${s.blueY}" r="${s.circleRadius}"/>
      </clipPath>
    </defs>
    <g clip-path="url(#outerCircleColor)">
      <circle cx="${s.greenX}" cy="${s.greenY}" r="${s.circleRadius}" fill="#00A652"/>
      <circle cx="${s.redX}" cy="${s.redY}" r="${s.circleRadius}" fill="#ED1C24"/>
      <circle cx="${s.blueX}" cy="${s.blueY}" r="${s.circleRadius}" fill="#2E3192"/>
      <g clip-path="url(#greenClip)">
        <circle cx="${s.redX}" cy="${s.redY}" r="${s.circleRadius}" fill="#FCF006"/>
      </g>
      <g clip-path="url(#greenClip)">
        <circle cx="${s.blueX}" cy="${s.blueY}" r="${s.circleRadius}" fill="#01ACF1"/>
      </g>
      <g clip-path="url(#redClip)">
        <circle cx="${s.blueX}" cy="${s.blueY}" r="${s.circleRadius}" fill="#EA018E"/>
      </g>
      <g clip-path="url(#greenClip)">
        <g clip-path="url(#redClip)">
          <circle cx="${s.blueX}" cy="${s.blueY}" r="${s.circleRadius}" fill="#FFFFFF"/>
        </g>
      </g>
    </g>
  </svg>`;
}

function getMonoSVG() {
  const c = LOGO_SETTINGS.color;
  const m = LOGO_SETTINGS.mono;
  return `<svg width="100%" height="100%" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="outerCircleMono">
        <circle cx="${m.outerX}" cy="${m.outerY}" r="${m.outerRadius}"></circle>
      </clipPath>
    </defs>
    <g clip-path="url(#outerCircleMono)">
      <circle cx="${c.greenX}" cy="${c.greenY}" r="${c.circleRadius}" fill="none" stroke="black" stroke-width="${m.strokeWidth}"></circle>
      <circle cx="${c.redX}" cy="${c.redY}" r="${c.circleRadius}" fill="none" stroke="black" stroke-width="${m.strokeWidth}"></circle>
      <circle cx="${c.blueX}" cy="${c.blueY}" r="${c.circleRadius}" fill="none" stroke="black" stroke-width="${m.strokeWidth}"></circle>
      <circle cx="${m.outerX}" cy="${m.outerY}" r="${m.outerRadius - m.outerStrokeWidth / 2}" fill="none" stroke="black" stroke-width="${m.outerStrokeWidth}"></circle>
    </g>
  </svg>`;
}

function getWhiteSVG() {
  return getMonoSVG().replace(/stroke="black"/g, 'stroke="white"');
}

export function Logo({ size = 24, className = '', variant = 'color' }: LogoProps) {
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

  return (
    <div
      className={className}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: svg }}
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
