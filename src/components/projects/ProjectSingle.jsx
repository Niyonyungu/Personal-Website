import { motion } from 'framer-motion';
import { FiLink } from "react-icons/fi";

const ProjectSingle = ({ title, category, livelink, image, isPrivate }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<div className="rounded-xl shadow-lg hover:shadow-xx mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
				<div>
					<img
						src={image}
						className="rounded-t-xl border-none w-full h-64"
						alt="Single Project"
					/>
				</div>
				<div className="text-center px-4 py-6 flex flex-col items-center gap-2">
					<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light">
						{title}
					</p>
					<span className="text-lg text-ternary-dark dark:text-ternary-light">
						{category}
					</span>
					<div className='flex flex-row items-center justify-between gap-1'>
						{isPrivate && <h6 className='border-2 border-ternary-dark dark:border-ternary-light text-sm text-red-600 p-1'>Private</h6>}
						<a href={livelink} aria-label="Project Link" title='View' target="_blank" rel="noreferrer" className='cursor-pointer flex flex-row justify-center items-center gap-2 bg-slate-500 py-1 px-3 rounded'><FiLink /> Preview</a>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectSingle;