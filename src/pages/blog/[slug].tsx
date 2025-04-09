// src/pages/blog/[slug].tsx
import { useRouter } from "next/router";
import BlogPost from "@/components/BlogPost";

// Temporary sample data
const SAMPLE_POSTS = [
	{
		id: "1",
		title: "The Journey of SNeL",
		content: `In the vast landscape of cryptocurrencies, SNeL emerged as a unique memecoin with a compelling story. Born from the immortal snail meme, this Cardano-based token represents persistence, community, and inevitable progress...

		The concept behind SNeL is both simple and profound - much like the immortal snail that steadily pursues its target, SNeL represents unwavering determination in the crypto space. This philosophy has resonated deeply with our community, creating a movement that goes beyond mere speculation.

		Our journey began with a simple question posed on a podcast: "What if you were given immortality, but an immortal snail was always pursuing you?" This thought experiment captured the imagination of millions, and we saw in it a perfect metaphor for our approach to building a sustainable cryptocurrency project.

		The SNeL community has grown organically, united by our shared appreciation for patience, persistence, and long-term thinking. Unlike many other memecoins that promise overnight riches, SNeL embraces the 'slow and steady' approach, believing that true value is built over time through community engagement and genuine utility.`,
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
];

export default function BlogPostPage() {
	const router = useRouter();
	const { slug } = router.query;

	// Find the post that matches the slug
	const post = SAMPLE_POSTS.find((post) => post.slug === slug);

	if (!post) {
		return (
			<div className='min-h-screen bg-gray-50 flex items-center justify-center'>
				<div className='text-center'>
					<h1 className='text-2xl font-bold text-gray-900'>Post not found</h1>
					<a
						href='/blog'
						className='text-blue-600 hover:underline mt-4 inline-block'
					>
						← Back to blog
					</a>
				</div>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Header */}
			<header className='bg-primary shadow-sm mb-8'>
				<div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center'>
						<a
							href='/blog'
							className='text-black hover:text-gray-700 flex items-center'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5 mr-2'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path
									fillRule='evenodd'
									d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
									clipRule='evenodd'
								/>
							</svg>
							Back to blog
						</a>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<article className='bg-white rounded-xl shadow-sm overflow-hidden'>
					{/* Article Header */}
					<div className='px-8 py-10 border-b border-gray-200'>
						<h1 className='text-5xl font-bold text-gray-900 mb-6'>
							{post.title}
						</h1>
						<div className='flex items-center text-gray-600'>
							<img
								src='/graphics/SnelChillGuyBG.png'
								alt={post.author}
								className='h-10 w-10 rounded-full mr-3'
							/>
							<div>
								<p className='font-medium text-gray-900'>{post.author}</p>
								<p className='text-sm'>
									{new Date(post.createdAt).toLocaleDateString("en-US", {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</p>
							</div>
						</div>
					</div>

					{/* Article Content */}
					<div className='px-8 py-10'>
						<div className='prose prose-lg max-w-none'>
							{post.content.split("\n").map((paragraph, index) => (
								<p key={index} className='mb-6'>
									{paragraph.trim()}
								</p>
							))}
						</div>
					</div>
				</article>

				{/* Article Footer */}
				<div className='max-w-7xl mx-auto py-12'>
					<div className='flex justify-between items-center'>
						<a href='/blog' className='text-blue-600 hover:text-blue-800'>
							← Back to all posts
						</a>
						<div className='flex space-x-4'>
							<button className='text-gray-600 hover:text-blue-600'>
								Share on Twitter
							</button>
							<button className='text-gray-600 hover:text-blue-600'>
								Share on Discord
							</button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
