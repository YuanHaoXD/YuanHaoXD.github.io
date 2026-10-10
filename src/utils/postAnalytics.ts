import type { CollectionEntry } from 'astro:content';

export function getPostLang(post: CollectionEntry<'blog'>): 'cn' | 'en' | undefined {
	const lang = post.data.lang;
	if (lang === 'cn' || lang === 'en') return lang;
	const matched = post.id.match(/-(cn|en)$/)?.[1];
	if (matched === 'cn' || matched === 'en') return matched;
	// no explicit marker: a "CN" tag or Chinese in the title means a Chinese post
	if ((post.data.tags ?? []).some((t) => t.toLowerCase() === 'cn')) return 'cn';
	if (/[\u4e00-\u9fff]/.test(post.data.title)) return 'cn';
	return undefined;
}
