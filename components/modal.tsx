import { Close } from '@carbon/icons-react';

export const Modal = ({ isModalOpen, setIsModalOpen, children }: any) => {
	if (!isModalOpen) {
		return <></>;
	}

	return <div className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
		<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

		<div className='fixed inset-0 overflow-y-auto'>
			<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
				<div className={`relative transform overflow-hidden rounded-lg bg-white text-left 
					shadow-xl transition-all max-w-[calc(100vw-4rem)] max-h-[calc(100vh-4rem)]`}>
					<button
						onClick={() => setIsModalOpen(false)}
						className='absolute right-0 top-0 p-2 bg-white'>
						<Close size='32' />
					</button>
					<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
						{children}
					</div>
				</div>
			</div>
		</div>
	</div>;
};
