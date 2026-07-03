/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: 'hsl(217 60% 10%)',          // navy profundo #0A1628
        foreground: '#FBF9F3',                    // marfil brillante
        primary:   { DEFAULT: 'hsl(217 60% 10%)', foreground: '#FBF9F3' },
        secondary: { DEFAULT: 'hsl(39 38% 93%)',  foreground: 'hsl(217 60% 10%)' },
        accent:    { DEFAULT: '#B6AC97', foreground: 'hsl(217 60% 10%)' }, // greige — house accent
        card:      { DEFAULT: 'hsl(217 55% 8%)', foreground: '#FBF9F3' },
        muted:     { DEFAULT: 'hsl(228 11% 26%)', foreground: 'hsl(39 25% 70%)' },
        border: 'rgb(182 172 151 / 0.18)',
        // Named brand palette
        navy:   '#0A1628',
        ivory:  '#F4F0E8',
        stone:  '#C8B99A',
        greige: '#B6AC97',
        slate:  '#3A3D4A',
        ink:    '#0D0D0D',
        flood:  '#7FA6C9',   // floodlight blue — sport accent (replaces golf green)
        pista:  '#2E8C74',   // court teal — secondary sport accent
      },
      fontFamily: {
        data:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Fraunces"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero:    'clamp(3.5rem, 9vw + 1rem, 9rem)',
        section: 'clamp(2.25rem, 3.2vw + 1rem, 3.25rem)',
        sub:     'clamp(1.5rem, 2vw + 1rem, 2rem)',
        body:    'clamp(1rem, 1.4vw, 1.125rem)',
        data:    'clamp(0.72rem, 0.8vw, 0.82rem)',
      },
      letterSpacing: { wordmark: '0.14em' },
      borderRadius: { DEFAULT: '0' },
    },
  },
  plugins: [],
}
