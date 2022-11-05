import Link from "next/link";
import { prettyDate } from "../tools";

export const EventTile = ({ event, side='left' }: any) => {
	return <Link href={`event/${event.id}`}>
		<a
		className='rounded-lg mt-2 shadow-sm border-gray p-4 border-2 hover:shadow-md hover:shadow-slate-500 active:shadow-sm transition-all block relative bg-white'>
			<h2 className='text-xl font-bold mb-4'>{prettyDate(event.time)}</h2>
			<h3 className='text-lg mb-2'>{event.name}</h3>
			<div className='flex'>
				{ side === 'left' && event.thumbnail && <img src={event.thumbnail} alt={event.thumbnailAlt} className='mr-6' />}
				{event.summary}
				{ side === 'right' && event.thumbnail && <img src={event.thumbnail} alt={event.thumbnailAlt} className='ml-6' />}
			</div>
		</a>
	</Link>;
};
