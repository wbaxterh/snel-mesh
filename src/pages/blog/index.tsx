// src/pages/blog/index.tsx
import BlogList from "@/components/BlogList";

// Temporary sample data until we connect to a backend
const SAMPLE_POSTS = [
	{
		id: "1",
		title: "The Journey of SNeL",
		content:
			"In the vast landscape of cryptocurrencies, SNeL emerged as a unique memecoin with a compelling story. Born from the immortal snail meme, this Cardano-based token represents persistence, community, and inevitable progress...",
		author: "SNeL Team",
		createdAt: new Date().toISOString(),
		slug: "journey-of-snel",
	},
	{
		id: "2",
		title: "Understanding SNeLenomics",
		content:
			"A deep dive into the economic model behind SNeL. Learn about our tokenomics, distribution strategy, and long-term vision for the project...",
		author: "SNeL Team",
		createdAt: new Date().toISOString(),
		slug: "understanding-snelenomics",
	},
	{
		id: "3",
		title: "Community Updates: Q2 2024",
		content:
			"Exciting developments in the SNeL ecosystem and community initiatives...",
		author: "SNeL Team",
		createdAt: new Date().toISOString(),
		slug: "community-updates-q2-2024",
	},
	{
		id: "4",
		title: "The Technology Behind SNeL",
		content:
			"Exploring the technical foundations of SNeL and its implementation on Cardano...",
		author: "SNeL Team",
		createdAt: new Date().toISOString(),
		slug: "technology-behind-snel",
	},
];

export default function BlogIndex() {
	return (
		<div className='min-h-screen bg-gray-50'>
			<header className='bg-primary shadow-sm'>
				<div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
					<h1 className='text-4xl font-bold text-black'>SNeL Blog</h1>
					<p className='text-gray-600 mt-2'>
						Latest updates from the SNeL team
					</p>
				</div>
			</header>
			<main className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{SAMPLE_POSTS.map((post) => (
						<article
							key={post.id}
							className='bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300'
						>
							<div className='p-6'>
								<h2 className='text-xl font-bold text-gray-900 mb-2'>
									{post.title}
								</h2>
								<div className='text-sm text-gray-600 mb-4'>
									<span>{post.author}</span>
									<span className='mx-2'>•</span>
									<span>{new Date(post.createdAt).toLocaleDateString()}</span>
								</div>
								<p className='text-gray-600 mb-4 line-clamp-3'>
									{post.content}
								</p>
								<a
									href={`/blog/${post.slug}`}
									className='text-blue-600 hover:text-blue-800 font-medium inline-flex items-center'
								>
									Read more
									<svg
										className='w-4 h-4 ml-1'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
											clipRule='evenodd'
										/>
									</svg>
								</a>
							</div>
						</article>
					))}
				</div>
			</main>
		</div>
	);
}
