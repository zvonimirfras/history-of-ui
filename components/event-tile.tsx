import Link from "next/link";

export const EventTile = ({ event }: any) => {
	return <Link href={`event/${event.id}`}>
		<a
		className='rounded-lg mt-2 shadow-sm border-gray p-4 border-2 hover:shadow-md hover:shadow-slate-500 active:shadow-sm transition-all block relative bg-white'>
			<h2 className='text-xl font-bold mb-4'>{event.time}</h2>
			<h3 className='text-lg'>{event.name}</h3>
			<p>{event.description}</p>
		</a>
	</Link>;
};
