import Link from "next/link";
import { prettyDate } from "../tools";

export const EventTile = ({ event, side='left' }: any) => {
	return <Link href={`event/${event.id}`}>
		<a
		className='rounded-lg mt-2 shadow-sm border-gray p-4 border-2 hover:shadow-md hover:shadow-slate-500 active:shadow-sm transition-all block relative bg-white'>
			<h2 className='text-xl font-bold mb-4'>{prettyDate(event.time)}</h2>
			<h3 className='text-lg mb-2'>{event.name}</h3>
			<div className='flex flex-col xl:flex-row'>
				{
					side === 'left' && event.thumbnail
					&& <img
						src={event.thumbnail}
						alt={event.thumbnailAlt}
						className='h-fit w-fit m-auto mb-6 xl:mr-6 xl:mt-auto xl:mb-auto' />
				}
				{event.summary}
				{
					side === 'right' && event.thumbnail
					&& <img
						src={event.thumbnail}
						alt={event.thumbnailAlt}
						className='h-fit w-fit m-auto mt-6 xl:ml-6 xl:mt-auto xl:mb-auto' />
				}
			</div>
		</a>
	</Link>;
};
