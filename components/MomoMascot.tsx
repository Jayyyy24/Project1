import React from "react";
interface MomoMascotProps { className?: string; size?: number; }
export const MomoMascot: React.FC<MomoMascotProps> = ({ className = "", size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transform hover:scale-110 transition-transform duration-300 ${className}`}>
    <ellipse cx="50" cy="90" rx="35" ry="6" fill="#14532d" opacity="0.12"/>
    <path d="M 50 15 C 65 15, 88 35, 88 62 C 88 80, 72 86, 50 86 C 28 86, 12 80, 12 62 C 12 35, 35 15, 50 15 Z"
      fill="#FFFDF7" stroke="#E2E8F0" strokeWidth="2.5"/>
    <path d="M 50 15 C 45 30, 30 50, 22 62" stroke="#F1F5F9" strokeWidth="2" strokeLinecap="round"/>
    <path d="M 50 15 C 48 32, 40 55, 36 66" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round"/>
    <path d="M 50 15 C 52 32, 60 55, 64 66" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round"/>
    <path d="M 50 15 C 55 30, 70 50, 78 62" stroke="#F1F5F9" strokeWidth="2" strokeLinecap="round"/>
    <path d="M 45 18 C 48 10, 52 10, 55 18 C 52 16, 48 16, 45 18 Z" fill="#FFE4E6" stroke="#FF5C8D" strokeWidth="1.5"/>
    <circle cx="38" cy="52" r="4.5" fill="#14532D"/>
    <circle cx="62" cy="52" r="4.5" fill="#14532D"/>
    <circle cx="40" cy="50" r="1.5" fill="#FFFFFF"/>
    <circle cx="64" cy="50" r="1.5" fill="#FFFFFF"/>
    <ellipse cx="30" cy="57" rx="5" ry="3.5" fill="#FF85A1" opacity="0.65"/>
    <ellipse cx="70" cy="57" rx="5" ry="3.5" fill="#FF85A1" opacity="0.65"/>
    <path d="M 44 59 Q 50 66 56 59" stroke="#14532D" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M 53 10 C 58 4, 64 6, 62 12 C 57 14, 54 12, 53 10 Z" fill="#4ADE80" stroke="#16A34A" strokeWidth="1"/>
    <path d="M 76 22 L 78 26 L 82 28 L 78 30 L 76 34 L 74 30 L 70 28 L 74 26 Z" fill="#FF5C8D" opacity="0.8"/>
  </svg>
);
