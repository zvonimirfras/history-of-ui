import Link from "next/link";

export const EventTile = ({ event }: any) => {
	const time = new Date(event.time);
	const dateOptions: any = {
		year: 'numeric',
		month: event.time.length > 4 ? 'short' : undefined,
		day: event.time.length > 7 ? 'numeric' : undefined
	};

	time.setTime(time.getTime() + 12 * 60 * 60 * 1000); // move to american timezone from GMT

	return <Link href={`event/${event.id}`}>
		<a
		className='rounded-lg mt-2 shadow-sm border-gray p-4 border-2 hover:shadow-md hover:shadow-slate-500 active:shadow-sm transition-all block relative bg-white'>
			<h2 className='text-xl font-bold mb-4'>{time.toLocaleDateString('en-US', dateOptions)}</h2>
			<h3 className='text-lg mb-2'>{event.name}</h3>
			<p>{event.summary}</p>
		</a>
	</Link>;
};
