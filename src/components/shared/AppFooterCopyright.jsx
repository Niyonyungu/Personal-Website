function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="/"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-semibold uppercase hover:underline hover:text-[#3e6653] dark:hover:text-[#3e6653] ml-1 "
				>
					Vainqueur
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
