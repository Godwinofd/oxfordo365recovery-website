import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'light' }) => {
    const textColor = variant === 'light' ? '#FFFFFF' : '#0A1628';
    const accentColor = '#F59E0B'; // Amber
    const truckColor = variant === 'light' ? '#FFFFFF' : '#0A1628';

    return (
        <svg
            viewBox="0 0 520 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Tow Truck Icon */}
            <g transform="translate(0, 20)">
                {/* Truck Body */}
                <rect x="60" y="15" width="50" height="35" fill={truckColor} rx="2" />

                {/* Truck Cab */}
                <path d="M 110 15 L 130 15 L 130 35 L 110 35 Z" fill={truckColor} />
                <rect x="115" y="8" width="10" height="7" fill={accentColor} rx="1" />

                {/* Tow Crane */}
                <line x1="65" y1="15" x2="45" y2="35" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
                <line x1="65" y1="15" x2="75" y2="15" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />

                {/* Hook */}
                <circle cx="45" cy="38" r="3" fill={accentColor} />
                <line x1="45" y1="35" x2="45" y2="41" stroke={accentColor} strokeWidth="2" />

                {/* Wheels */}
                <circle cx="75" cy="50" r="8" fill={truckColor} stroke={accentColor} strokeWidth="2" />
                <circle cx="75" cy="50" r="4" fill={accentColor} />

                <circle cx="120" cy="50" r="8" fill={truckColor} stroke={accentColor} strokeWidth="2" />
                <circle cx="120" cy="50" r="4" fill={accentColor} />

                {/* Undercarriage */}
                <line x1="60" y1="50" x2="130" y2="50" stroke={truckColor} strokeWidth="4" strokeLinecap="round" />
            </g>

            {/* OXFORD Text */}
            <text x="180" y="50" fontFamily="system-ui, -apple-system, sans-serif" fontSize="42" fontWeight="800" fill={textColor} letterSpacing="-1">
                OXFORD
            </text>

            {/* 365 RECOVERY Text */}
            <text x="180" y="90" fontFamily="system-ui, -apple-system, sans-serif" fontSize="42" fontWeight="800" fill={textColor} letterSpacing="-1">
                365 <tspan fill={accentColor}>RECOVERY</tspan>
            </text>

            {/* Tagline with Accent Line */}
            <line x1="0" y1="115" x2="520" y2="115" stroke={accentColor} strokeWidth="3" />

            <text x="0" y="140" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="600" fill={textColor} letterSpacing="2">
                BREAKDOWN ASSIST
            </text>
            <text x="210" y="140" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="600" fill={textColor} letterSpacing="2">
                •
            </text>
            <text x="230" y="140" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="600" fill={textColor} letterSpacing="2">
                ROADSIDE RECOVERY
            </text>
        </svg>
    );
};

export default Logo;
