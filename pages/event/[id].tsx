import { useRouter } from "next/router";

const Event = () => {
	const router = useRouter();
	const { id } = router.query;

	return <div>
		{id}
	</div>;
};

export default Event;
