import AboutMeBio from '../components/about/AboutMeBio';
import AboutCounter from '../components/about/AboutCounter';
import AboutClients from '../components/about/AboutClients';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';

const About = () => {

	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>
			{/** Counter without paddings */}

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>

				<div className="container mx-auto flex gap-5 lg:flex-row flex-col  mt-14 justify-between">

					<div className='flex flex-col'>
						<h1 className='text-xl border-b-7 titleabout  mb-4'>Education</h1>
						<div>
							<h3 className='text-ternary-dark dark:text-ternary-light'>Iprc Kigali (2021-2023)</h3>
							<p>Biomedical Equipment Technology</p>
						</div>
						<div className='mt-3'>
							<h3 className='text-ternary-dark dark:text-ternary-light'>K-Lab Rwanda (2023)</h3>
							<p>Frontend Development</p>
						</div>
					</div>

					<div className='flex flex-col'>
						<h1 className='text-xl border-b-7 titleabout  mb-4'>Experience</h1>
						<div className='mb-2'>
							<h3 className='text-ternary-dark dark:text-ternary-light'>CINETIE</h3>
							<p>Frontend Developer</p>
						</div>
						<div className='mb-2'>
							<h3 className='text-ternary-dark dark:text-ternary-light'>Duhope Cbc</h3>
							<p>Software Developer</p>
						</div>
						<div className='mb-2'>
							<h3 className='text-ternary-dark dark:text-ternary-light'>K-Lab Rwanda</h3>
							<p>. Trainer (Future Koders Program)</p>
							<p>. Front-end Developer Trainee (TechUp Skills)</p>
						</div>
						<div className='mb-2'>
							<h3 className='text-ternary-dark dark:text-ternary-light'>Persist Ventures</h3>
							<p> Web Developer Internee </p>
						</div>
					</div>

					<div className='flex flex-col'>
						<h1 className='text-xl border-b-7 titleabout  mb-4'>Skills</h1>
						<p>. React Js</p>
						<p>. JavaScript & TypeScript</p>
						<p>. Html & Css</p>
						<p>. Git & Github</p>
						<p>. Figma</p>
					</div>

					<div className='flex flex-col'>
						<h1 className='text-xl border-b-7 titleabout  mb-4'>Competencies</h1>
						<p>. UI Design</p>
						<p>. Web Development</p>
						<p>. Front-End Development</p>
						<p>. API Integration</p>
					</div>

				</div>

			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutClients />
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
