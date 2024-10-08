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
		'안녕하세요 AI 엔지니어 허태환의 웹 포트폴리오에 오신 것을 환영합니다.',
	summary:
		'**안녕하세요! AI 엔지니어 허태환입니다.** \n\n **새로운 기술에 관심이 많으며, 특히 LLM, NLP 분야에 논문이나 기사를 찾아보고, 실제 프로젝트에 적용해보는 과정에서 흥미를 느낍니다.** \n **LLM을 활용한 프로젝트 경험이 다수 존재하며 성능 최적화, 사용자 경험을 개선하는 작업을 중요하게 생각합니다.** \n\n **맡은 업무의 목적을 우선적으로 고려하며, 원활한 협업을 위해 유지보수와 확장을 고려한 코드를 작성하려 늘 신경씁니다.** \n\n **좋아하니까, 재밌으니까, 몰입하며 즐겁게 일하고자 합니다.**',
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
			href: 'blog/intern-rbrain',
			badges: [],
			location: '서울특별시 영등포구 여의도동',
			title: '개발본부 솔루션개발팀, 인턴',
			logoUrl: RbrainImg,
			start: '2023.09',
			end: '2023.12',
			description: ''
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
			title: 'DoWA:DO : 학생들을 위한 AI 진로 상담 서비스',
			href: '/blog/project-dowado',
			dates: '2024.07 - 2024.08',
			active: true,
			description:
				'**DoWA:DO**는 전문가의 도움 없이도 챗봇을 통해 간편하게 진로 상담을 하고, 실시간으로 추천 받은 직업군과 상담 결과를 레포트 형태로 받아볼 수 있는 AI 직업 상담 및 추천 서비스입니다. \n\n**역할** : 팀 리더/ 백엔드 개발/ 채팅 및 레포트 생성에 필요한 RAG api 개발',
			technologies: [
				'FastAPI',
				'Langchain',
				'Pgvector',
				'PostgreSQL',
				'React.js',
				'klue/bert-base',
				'Finetuning'
			],
			links: [
				// {
				// 	type: 'Website',
				// 	href: 'https://chatcollect.com',
				// 	// icon: <Icons.globe className="size-3" />,
				// 	icon: Globe
				// },
				{
					type: 'Source',
					href: 'https://github.com/DoWA-DO/DoWADO-Web-Server/tree/ormor',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: 'https://pub-3a25cadc597e4ebbb8166e0e8f8a385f.r2.dev/dowado_.png',
			video: ''
		},
		{
			title: 'ODEGO : 검색증강생성을 활용한 관광가이드 챗봇 서비스',
			href: '/blog/project-odego',
			dates: '2023.03 - 2023.06',
			active: true,
			description: 'ODEGO는 RAG을 활용하여 사실에 기반한 관광 정보만을 제공할 수 있는 관광 가이드 챗봇 서비스입니다. \n\nChatGPT가 공개된 초창기에 생성형 AI의 할루시네이션 문제를 인지했고, 이를 극복하기 위해 개인이나 기업이 소유한 데이터에 기반한 올바른 답변 생성을 목표로 삼고 도전한 프로젝트입니다.',
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
					href: 'https://github.com/or-m-or/ChatOdego',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: 'https://pub-3a25cadc597e4ebbb8166e0e8f8a385f.r2.dev/odego_view.png',
			video: ''
		},
		// {
		// 	title: '시계열 데이터 기반 상품 판매량 예측 모델링',
		// 	href: 'https://llm.report',
		// 	dates: 'April 2023 - September 2023',
		// 	active: true,
		// 	description:
		// 		'Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.',
		// 	technologies: [
		// 		'Next.js',
		// 		'Typescript',
		// 		'PostgreSQL',
		// 		'Prisma',
		// 		'TailwindCSS',
		// 		'Shadcn UI',
		// 		'Magic UI',
		// 		'Stripe',
		// 		'Cloudflare Workers'
		// 	],
		// 	links: [
		// 		{
		// 			type: 'Source',
		// 			href: 'https://github.com/dillionverma/llm.report',
		// 			icon: Github
		// 			// icon: <Icons.github className="size-3" />,
		// 		}
		// 	],
		// 	image: '',
		// 	video: 'https://cdn.llm.report/openai-demo.mp4'
		// },
		// {
		// 	title: '쿨루프 시공 대상 여부 분류 모델링',
		// 	href: 'https://automatic.chat',
		// 	dates: 'April 2023 - March 2024',
		// 	active: true,
		// 	description:
		// 		'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
		// 	technologies: [
		// 		'Next.js',
		// 		'Typescript',
		// 		'PostgreSQL',
		// 		'Prisma',
		// 		'TailwindCSS',
		// 		'Shadcn UI',
		// 		'Magic UI',
		// 		'Stripe',
		// 		'Cloudflare Workers'
		// 	],
		// 	links: [
		// 		{
		// 			type: 'Website',
		// 			href: 'https://automatic.chat',
		// 			icon: Globe
		// 			// icon: <Icons.globe className="size-3" />,
		// 		}
		// 	],
		// 	image: '',
		// 	video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4'
		// }
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
