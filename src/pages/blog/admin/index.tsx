// src/pages/blog/admin/index.tsx
export default function AdminDashboard() {
	// This will be replaced with actual data fetching
	const posts = [
		{
			id: "1",
			title: "Sample Blog Post",
			createdAt: new Date().toISOString(),
			slug: "sample-blog-post",
		},
	];

	return (
		<div className='min-h-screen bg-gray-50'>
			<header className='bg-white shadow-sm'>
				<div className='max-w-4xl mx-auto py-6 px-4'>
					<div className='flex justify-between items-center'>
						<h1 className='text-3xl font-bold text-gray-900'>Blog Admin</h1>
						<a
							href='/blog/admin/new'
							className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'
						>
							New Post
						</a>
					</div>
				</div>
			</header>
			<main className='max-w-4xl mx-auto py-6 px-4'>
				<div className='bg-white shadow rounded-lg'>
					<table className='min-w-full divide-y divide-gray-200'>
						<thead className='bg-gray-50'>
							<tr>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Title
								</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Date
								</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Actions
								</th>
							</tr>
						</thead>
						<tbody className='bg-white divide-y divide-gray-200'>
							{posts.map((post) => (
								<tr key={post.id}>
									<td className='px-6 py-4 whitespace-nowrap'>{post.title}</td>
									<td className='px-6 py-4 whitespace-nowrap'>
										{new Date(post.createdAt).toLocaleDateString()}
									</td>
									<td className='px-6 py-4 whitespace-nowrap'>
										<a
											href={`/blog/admin/edit/${post.id}`}
											className='text-blue-600 hover:text-blue-900 mr-4'
										>
											Edit
										</a>
										<button className='text-red-600 hover:text-red-900'>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</main>
		</div>
	);
}
