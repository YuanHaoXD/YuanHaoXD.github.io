export type FriendLink = {
	name: string;
	url: string;
	kind: 'github' | 'bilibili' | 'project';
	github?: string;
	bilibili?: string;
	type?: 'github' | 'bilibili';
	avatar?: string;
	description?: string;
	tags?: string[];
	status?: 'active' | 'inactive';
};

export const links: FriendLink[] = [
	{
		name: 'Dan Arnoux',
		kind: 'github',
		github: 'Dancncn',
		url: 'https://danarnoux.com',
		description: 'Research, Engineering & Technical Notes（本站设计参考来源）',
		tags: ['Design Reference', 'Astro', 'Blog'],
		status: 'active',
	},
];
