module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif',
    },
    fontSize: {
      'body-lg-600': [
        '1.5rem',
        {
          lineHeight: '2rem',
          fontWeight: '600',
        },
      ],
      'body-md-600': [
        '1.25rem',
        {
          lineHeight: '1.75rem',
          fontWeight: '600',
        },
      ],
      'body-md-500': [
        '1.25rem',
        {
          lineHeight: '1.75rem',
          fontWeight: '500',
        },
      ],
      'h-lg-700': [
        '1.875rem',
        {
          lineHeight: '2.25rem',
          fontWeight: '700',
        },
      ],
      'footer-md-600': [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '600',
        },
      ],
    },
    extend: {
      screens: {
        xs: '320px',
      },
      colors: {
        light: {
          DEFAULT: '#ffffff',
          secondary: '#d8d8d8',
        },
        dark: {
          'DEFAULT': '#090909',
          'secondary': '#939393',
          'alt': '#181818',
          'border': '#313131',
          'border-alt': '#4D4D4D',
        },
        hl: {
          'yellow': '#FFC657',
          'yellow-secondary': '#d8a849',
          'blue': '#3b82f6',
        },
      },
    },
  },
  plugins: [],
}
