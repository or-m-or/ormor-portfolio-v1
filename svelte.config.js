import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['vesper'],
				langs: ['javascript', 'typescript', 'svelte', 'py', 'python']
			});
			await highlighter.loadLanguage('javascript', 'typescript', 'svelte', 'py', 'python');
			await highlighter.loadTheme('vesper');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'vesper' }));
			return `{@html \`${html}\` }`;
		}
	}
};
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter({
			pages: 'build',   // 빌드 결과물이 저장될 디렉토리
			assets: 'build',  // 정적 파일이 저장될 디렉토리
			fallback: null    // SPA 라우팅을 위한 fallback 설정 (필요시 설정)
		}),
		paths: {
			base: '/ormor-portfolio-v1' // 배포되는 리포지토리의 이름 (예: '/your-repo-name')
		},
		prerender: {
			entries: ['*'] // 모든 페이지를 프리렌더링
		}
	}
};

export default config;
