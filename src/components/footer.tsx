const Footer = () => {
	return (
		<footer className='p-8 text-center bg-primary'>
			<p>
				<small>
					Token Policy ID:
					067cac6082f8661b6e14909b40590120bf0bf02c21f5d07ee03d0e02
				</small>
				<br />
				<br />© {new Date().getFullYear()} SNeL. Built with ❤️ by the community.{" "}
				<br />
				<small>
					SNeL is a memecoin with no intrinsic value or expectation of financial
					return. There is no formal team or roadmap. The coin is for
					entertainment purposes only.
				</small>
			</p>
		</footer>
	);
};

export default Footer;
