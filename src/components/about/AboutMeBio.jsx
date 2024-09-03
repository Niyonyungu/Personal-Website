import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import me from "../../images/me.jpg";

const AboutMeBio = () => {

	const { aboutMe } = useContext(AboutMeContext);

	return (

		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">

			<div className="w-full sm:w-1/2 mb-7 sm:mb-0 flex justify-center ">

				<img src={me} className="rounded-lg w-80 h-96 " alt="" />

			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-10 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>



		</div>
	);
};

export default AboutMeBio;
