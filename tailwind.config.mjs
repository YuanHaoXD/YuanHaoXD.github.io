import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				// Chinese falls back to the system faces (a webfont would be ~16MB for CJK)
				sans: ['Inter', '"PingFang SC"', '"Hiragino Sans GB"', '"Microsoft YaHei"', '"Noto Sans CJK SC"', '"Source Han Sans SC"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
				serif: ['"Source Han Serif SC"', '"Noto Serif SC"', '"Songti SC"', 'serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
			},
		},
	},
	plugins: [typography],
};
