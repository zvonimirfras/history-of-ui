export const prettyDate = (dateString: string) => {
	const dateOptions: any = {
		year: 'numeric',
		month: dateString.length > 4 ? 'short' : undefined,
		day: dateString.length > 7 ? 'numeric' : undefined
	};

	const date = new Date(dateString);

	date.setTime(date.getTime() + 12 * 60 * 60 * 1000); // move to american timezone from GMT

	return date.toLocaleDateString('en-US', dateOptions);
};
