import { useRouter } from "next/router";
import { events } from "../../components/events";
import { prettyDate } from "../../tools";

const Event = () => {
	const router = useRouter();
	const { id } = router.query;

	const event = events.find((event) => event.id === id);

	return <div className='p-8'>
		{
			!event
			? "Don't know about that event."
			: <>
				<h1 className='text-3xl mb-4 font-bold'>{event.name}</h1>
				<h2 className='text-2xl mb-2'>{prettyDate(event.time)}</h2>
				<section>{event.description || event.summary}</section>
			</>
		}
	</div>;
};

export default Event;
