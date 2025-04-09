// src/components/BlogList.tsx
import BlogPost from "./BlogPost";

interface BlogListProps {
	posts: Array<{
		id: string;
		title: string;
		content: string;
		author: string;
		createdAt: string;
		slug: string;
	}>;
}

export default function BlogList({ posts }: BlogListProps) {
	return (
		<div className='max-w-4xl mx-auto py-8'>
			{posts.map((post) => (
				<BlogPost key={post.id} post={post} isPreview />
			))}
		</div>
	);
}
