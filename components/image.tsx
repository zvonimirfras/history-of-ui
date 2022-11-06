import { useState } from "react";
import { Modal } from "./modal";

export const Image = ({ src, srcFull, alt, className }: any) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return <>
		<img
			src={src || srcFull}
			alt={alt}
			tabIndex={0}
			className={`m-auto mb-6 cursor-pointer ${className}`}
			onClick={() => setIsModalOpen(true)} />;

		<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
			<img src={srcFull || src} />
			{
				alt
				&& <div className='mt-3 text-center'>{alt}</div>
			}
		</Modal>
	</>;
};
