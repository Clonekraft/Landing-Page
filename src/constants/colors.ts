import { useTheme } from "../contexts/ThemeContext";

export const useColors = () => {
    const { theme } = useTheme();

    const isDark = theme === 'dark';

    return {

        primary: '#C1A170',
        primaryHover: isDark ? '#E8D0A9' : '#A67C52',
        primaryGlow: 'rgba(193, 161, 112, 0.4)',


        background: isDark ? '#0a0a0a' : '#f8f8f8',
        surface: isDark ? '#111111' : '#ffffff',
        card: isDark ? '#111111' : '#ffffff',


        text: isDark ? '#ffffff' : '#1a1a1a',
        textSecondary: isDark ? '#aaaaaa' : '#666666',
        textMuted: isDark ? '#888888' : '#999999',


        neon: '#00ffea',
        border: isDark ? '#333333' : '#e0e0e0',
        shadow: isDark
            ? '0 10px 30px rgba(0, 0, 0, 0.6)'
            : '0 10px 30px rgba(0, 0, 0, 0.08)',


        glow: isDark
            ? '0 0 30px rgba(193, 161, 112, 0.6)'
            : '0 0 25px rgba(193, 161, 112, 0.3)',
    };
};


export const colors = {
    primary: '#C1A170',
    primaryLight: '#E8D9B8',
    primaryDark: '#A67C52',
    neon: '#00ffea',
    dark: {
        bg: '#0a0a0a',
        surface: '#111111',
        text: '#ffffff',
        textSecondary: '#aaaaaa',
    },
    light: {
        bg: '#f8f8f8',
        surface: '#ffffff',
        text: '#1a1a1a',
        textSecondary: '#666666',
    },
};