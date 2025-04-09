// src/components/BlogPost.tsx
interface BlogPost {
	id: string;
	title: string;
	content: string;
	author: string;
	createdAt: string;
	slug: string;
}

interface BlogPostProps {
	post: BlogPost;
	isPreview?: boolean;
}

export default function BlogPost({ post, isPreview }: BlogPostProps) {
	return (
		<article className='max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8'>
			<h2 className='text-3xl font-bold mb-4'>{post.title}</h2>
			<div className='text-gray-600 mb-4'>
				<span>By {post.author}</span>
				<span className='mx-2'>•</span>
				<span>{new Date(post.createdAt).toLocaleDateString()}</span>
			</div>
			<div className='prose max-w-none'>
				{isPreview ? post.content.slice(0, 200) + "..." : post.content}
			</div>
			{isPreview && (
				<a
					href={`/blog/${post.slug}`}
					className='text-blue-600 hover:underline mt-4 inline-block'
				>
					Read more →
				</a>
			)}
		</article>
	);
}
