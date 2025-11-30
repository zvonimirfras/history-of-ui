import { useState } from 'react';
import { Modal } from './modal';

export const Image = ({ src, srcFull, alt, className }: any) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return <>
		{/* eslint-disable-next-line @next/next/no-img-element */}
		<img
			src={src || srcFull}
			alt={alt || ''}
			tabIndex={0}
			className={`m-auto mb-6 cursor-pointer ${className}`}
			onClick={() => setIsModalOpen(true)} />

		<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src={srcFull || src} alt={alt || ''} className='m-auto max-h-[calc(100vh-9rem)]' />
			{
				alt
				&& <div className='mt-3 text-center'>{alt}</div>
			}
		</Modal>
	</>;
};
