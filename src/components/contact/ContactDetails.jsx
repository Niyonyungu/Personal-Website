import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { PopupModal, useCalendlyEventListener } from "react-calendly";
import { useState } from 'react';

const contacts = [
	{
		id: 1,
		name: 'Kigali, Rwanda',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'vainqueurmg@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+250784998214',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	const [isOpen, setIsOpen] = useState(false);

	// Optional: Handle Calendly events
	useCalendlyEventListener({
		onEventScheduled: (e) => {
			console.log(e.data.payload);
			setIsOpen(false);
		},
	});

	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Schedule a Meeting/call with me !
				</h2>

				<button
					onClick={() => setIsOpen(true)}
					className="font-general-medium flex items-center px-6 py-3 rounded shadow-lg hover:shadow-xl bg-black hover:bg-[#3e6653] text-white text-lg"
				>
					Schedule a Call
				</button>

				<PopupModal
					url="https://calendly.com/vainqueurmg"
					onModalClose={() => setIsOpen(false)}
					open={isOpen}
					rootElement={document.getElementById("root")
					}
				/>
			</div>
		</div>
	);
};

export default ContactDetails;