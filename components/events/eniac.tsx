import { Image } from '../image';
import Link from 'next/link';

import type { Event } from './types';

export const eniac: Event = {
	id: 'eniac',
	time: '1946-02-15',
	name: 'ENIAC',
	companies: ['Eckert-Mauchly Computer Corporation'],
	labels: ['key-point'],

	thumbnail: '/images/Eniac-314px.jpg',
	thumbnailAlt: 'ENIAC in Philadelphia, Pennsylvania. Glen Beck (background) and Betty Snyder' +
		'(foreground) program the ENIAC in building 328 at the Ballistic Research Laboratory',
	summary: 'ENIAC was the first programmable, electronic, general-purpose digital computer,' +
		'completed in 1945. There were other computers that had these features, but the' +
		'ENIAC had all of them in one package. It was Turing-complete and able to solve &quot;a' +
		'large class of numerical problems&quot; through reprogramming.',
	description: <>
		<Image src='/images/Eniac-628px.jpg' srcFull='/images/Eniac.jpg'
			alt='ENIAC in Philadelphia, Pennsylvania. Glen Beck (background) and Betty Snyder
			(foreground) program the ENIAC in building 328 at the Ballistic Research Laboratory' />

		<p>ENIAC (Electronic Numerical Integrator and Computer) was the first programmable,
			electronic, general-purpose digital computer, completed in <strong>1945</strong>. There
			were other computers that had these features, but ENIAC had all of them in one
			package.</p>

		<h3>A Monster Machine</h3>
		<p>ENIAC was massive in every sense. It used 17,468 vacuum tubes, making it prone to
			frequent failures. Tubes would burn out regularly, requiring constant maintenance. The
			machine weighed 30 tons and occupied 1,800 square feet of floor space. It consumed 150
			kilowatts of power, enough to power 150 homes. Legend has it that lights dimmed across
			Philadelphia when ENIAC was switched on. Despite these challenges, it could perform
			5,000 operations per second, which was incredibly fast for its era.</p>

		<h3>Programming by Women</h3>
		<p>The ENIAC&apos;s &quot;programmers&quot; were six women: <strong>Betty Snyder, Jean
			Bartik, Kay McNulty, Marlyn Wescoff, Ruth Lichterman, and Frances Bilas</strong>.
			Programming meant physically rewiring the machine by repositioning cables and setting
			switches. There was no stored program yet. These women essentially created the field
			of programming, though they received little recognition at the time. They were initially
			classified as &quot;subprofessionals&quot; despite doing groundbreaking work that defined
			a new discipline.</p>

		<h3>User Interface</h3>
		<p>The interface consisted of 3,000 switches, dozens of cables, and digit trays.
			Programming required physically walking around the massive machine to set switches and
			plug cables. It could take days to program a new calculation. This physical programming
			method would influence the design of later computers like <Link href="/event/ibm-29-card-punch">punch card systems</Link>,
			which sought to make programming less physically demanding.</p>

		<h3>Legacy</h3>
		<p>ENIAC was Turing-complete and able to solve &quot;a large class of numerical
			problems&quot; through reprogramming. It proved that electronic computing was feasible and
			influenced the development of stored-program computers. ENIAC showed that the future of
			computing was electronic, not mechanical, setting the stage for everything that
			followed.</p>
	</>
};
