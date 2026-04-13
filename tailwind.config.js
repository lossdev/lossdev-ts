export default {
  content: ['./index.html', './src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-grayblue': '#262c39',
      },
      height: {
        '15pct': '15%',
        '85pct': '85%',
      },
    },
    fontFamily: {
      'jbmono-light': ['JetBrainsMono-Light'],
      'jbmono': ['JetBrainsMono-Regular'],
      'jbmono-bold': ['JetBrainsMono-Bold'],
    },
  },
  plugins: [],
}
