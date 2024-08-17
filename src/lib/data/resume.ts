import { CodeIcon, Github, Globe, HomeIcon, NotebookIcon, Youtube } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import PeerListSvg from '$lib/imgs/peerlist.svg';
import PeerListDarkSvg from '$lib/imgs/peerlist-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

// import AtomicImg from '$lib/imgs/atomic.png';
// import ShopifyImg from '$lib/imgs/shopify.svg';
// import NvidiaImg from '$lib/imgs/nvidia.png';
// import SplunkImg from '$lib/imgs/splunk.svg';
// import LimeImg from '$lib/imgs/lime.svg';
// import MitreMediaImg from '$lib/imgs/mitremedia.png';
// import BuildSpaceImg from '$lib/imgs/buildspace.jpg';
// import WaterLooImg from '$lib/imgs/waterloo.png';
// import LaurierImg from '$lib/imgs/laurier.png';
// import IBImg from '$lib/imgs/ib.png';
import RbrainImg from '$lib/imgs/rbrain.jpg'
import AivleSchoolImg from '$lib/imgs/aivleschool.png'
import KMOUImg from '$lib/imgs/kmou.png'

// Your resume data
export const DATA = {
	name: 'Heo TaeHwan',
	initials: 'ormor',
	url: 'https://github.com/or-m-or',
	img: 'https://i.pinimg.com/564x/df/d2/76/dfd276448eed0f2b6094d1cb2c9d0269.jpg',
	location: 'Changwon, Korea',
	locationLink: 'https://www.google.com/maps/place/changwon',
	description:
		'안녕하세요 테스트 디스크립션입니다.',
	summary:
		'about 설명 테스트',
	avatarUrl: 'https://i.pinimg.com/564x/df/d2/76/dfd276448eed0f2b6094d1cb2c9d0269.jpg',
	skills: [
		'Python',
		'Java',
		'Langchain',
		'Llama-Index',
		'Keras',
		'Pytorch',
		'Scikit-Learn',
		'Pandas',
		'Numpy',
		'Postgres',
		'Redis',
		'Docker',
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '#', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		email: 'htth815@gmail.com',
		tel: '010.4844.7192',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/or-m-or',
				// // icon: Icons.github,
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/sikandar-bhide/',
				// // icon: Icons.linkedin,
				icon: LinkedinSvg,
				navbar: false,
				dark_icon: LinkedinDarkSvg
			},
			X: {
				name: 'X',
				url: 'https://twitter.com/Sikandar_Bhide',
				// // icon: Icons.x,
				icon: TwitterSvg,
				navbar: false,
				dark_icon: TwitterDarkSvg
			},
			PeerList: {
				name: 'PeerList',
				url: 'https://peerlist.io/bhide',
				// // icon: Icons.x,
				icon: PeerListSvg,
				navbar: false,
				dark_icon: PeerListDarkSvg
			},
			// Youtube: {
			// 	name: 'Youtube',
			// 	url: 'https://github.com/SikandarJODD',
			// 	// // icon: Icons.youtube,
			// 	icon: Youtube,
			// 	navbar: true
			// },
			email: {
				name: 'Send Email',
				url: 'mailto:htth815@gmail.com',
				// // icon: Icons.email,
				icon: GmailSvg,
				navbar: true,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: 'Rainbow Brain',
			href: 'https://rbrain.co.kr/',
			badges: [],
			location: '서울특별시 영등포구 여의도동',
			title: '인턴',
			logoUrl: RbrainImg,
			start: '2023.09',
			end: '2023.12',
			description:
				'설명 예시'
		}
	],
	education: [
		{
			school: 'KT AIVLE School',
			href: 'https://aivle.kt.co.kr/home/main/indexMain',
			degree: '에이블스쿨 AI 트랙 수료',
			logoUrl: AivleSchoolImg,
			start: '2024.01',
			end: '2024.08'
		},
		{
			school: 'Korea Maritime & Ocean University',
			href: 'https://www.kmou.ac.kr/kmou/main.do',
			degree: "인공지능공학부 컴퓨터공학전공 학사 학위",
			logoUrl: KMOUImg,
			start: '2018.03',
			end: '2024.08'
		},
	],
	projects: [
		{
			title: 'DoWA:DO : RAG 진로상담챗봇',
			href: '/blog/project-dowado',
			dates: '2024.07 - 2024.08',
			active: true,
			description:
				'도와도 설명',
			technologies: [
				'FastAPI',
				'Langchain',
				'Pgvector',
				'PostgreSQL',
				'React.js',
				'Finetuning'
			],
			links: [
				{
					type: 'Website',
					href: 'https://chatcollect.com',
					// icon: <Icons.globe className="size-3" />,
					icon: Globe
				},
				{
					type: 'Source',
					href: 'https://github.com/magicuidesign/magicui',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: '',
			video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4'
		},
		{
			title: 'ODEGO : 관광 가이드 챗봇',
			href: 'https://magicui.design',
			dates: '2023.03 - 2023.06',
			active: true,
			description: 'Designed, developed and sold animated UI components for developers.',
			technologies: [
				'FastAPI',
				'Ngrok',
				'Postgres',
				'Langchain',
				'React-Native',
				'Llama-7B',
				'Finetuning'
			],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/magicuidesign/magicui',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: '',
			video: 'https://cdn.magicui.design/bento-grid.mp4'
		},
		{
			title: '시계열 데이터 기반 상품 판매량 예측 모델링',
			href: 'https://llm.report',
			dates: 'April 2023 - September 2023',
			active: true,
			description:
				'Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Shadcn UI',
				'Magic UI',
				'Stripe',
				'Cloudflare Workers'
			],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/dillionverma/llm.report',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: '',
			video: 'https://cdn.llm.report/openai-demo.mp4'
		},
		{
			title: '쿨루프 시공 대상 여부 분류 모델링',
			href: 'https://automatic.chat',
			dates: 'April 2023 - March 2024',
			active: true,
			description:
				'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Shadcn UI',
				'Magic UI',
				'Stripe',
				'Cloudflare Workers'
			],
			links: [
				{
					type: 'Website',
					href: 'https://automatic.chat',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				}
			],
			image: '',
			video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4'
		}
	],
	hackathons: [
		{
			title: 'Hack Western 5',
			dates: 'November 23rd - 25th, 2018',
			location: 'London, Ontario',
			description:
				'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: []
		},
		{
			title: 'HackDavis',
			dates: 'January 20th - 21st, 2018',
			location: 'Davis, California',
			description:
				'Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png',
			win: 'Best Data Hack',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
			links: [
				{
					title: 'Devpost',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://devpost.com/software/my6footprint'
				},
				{
					title: 'ML',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/Wallet6/my6footprint-machine-learning'
				},
				{
					title: 'iOS',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/Wallet6/CarbonWallet'
				},
				{
					title: 'Server',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/Wallet6/wallet6-server'
				}
			]
		},

	]
};
