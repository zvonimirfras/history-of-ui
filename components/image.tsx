export const Image = ({ src, srcFull, alt, className }: any) => {
	return <img src={src} alt={alt} className={`m-auto mb-6 ${className}`} />;
};
