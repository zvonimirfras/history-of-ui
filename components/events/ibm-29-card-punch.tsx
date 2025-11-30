import { Image } from '../image';
import Link from 'next/link';

import type { Event } from './types';

export const ibm_29_card_punch: Event = {
	id: 'ibm-29-card-punch',
	time: '1964-10-14',
	name: 'IBM 29 card punch',
	companies: ['IBM'],
	labels: ['key-point'],
	thumbnail: '/images/IBM_card_punch_machine_29-320px.jpg',
	thumbnailAlt: 'IBM 029 card punch machine in 2016 at Instituut voor Nederlandse Lexicologie' +
		'(Leiden, the Netherlands)',
	summary: 'The IBM 29 card punch and its companion, the IBM 59 card verifier, were used to' +
		'record and check information in punched cards. The cards were then read and' +
		'processed by a computer or an accounting machine.',
	description: <>
		<Image src='/images/IBM_card_punch_machine_29-640px.jpg' srcFull='/images/IBM_card_punch_machine_29.jpg'
			alt='IBM 029 card punch machine in 2016 at Instituut voor Nederlandse Lexicologie (Leiden, the Netherlands)' />

		<p>The <strong>IBM 29 card punch</strong> and its companion, the IBM 59 card verifier, were
			used to record and check information in punched cards. The cards were then read and
			processed by a computer or an accounting machine.</p>

		<h3>Interface Design</h3>
		<p>The IBM 29 featured a typewriter-like keyboard that was a significant UI improvement
			over earlier models. As operators typed, the machine would punch rectangular holes in
			80-column cards, display the character being punched, automatically advance to the next
			column, and allow corrections and program cards for repetitive data. The interface was
			familiar: if you could type, you could punch cards. This familiarity made computing
			more accessible, even if the underlying process remained mysterious.</p>

		<h3>Data Entry Paradigm</h3>
		<p>The punch card system established a fundamental computing pattern: <strong>batch
			processing</strong>. Users would prepare stacks of cards offline, then submit them for
			processing. This workflow (prepare data, submit job, wait for results) dominated
			computing until the era of interactive terminals and <Link href="/event/xerox-alto">graphical interfaces</Link>.
			The batch processing model shaped how people thought about computing for decades:
			computers weren&apos;t interactive tools but remote oracles you submitted questions to
			and waited for answers.</p>

		<h3>Cultural Impact</h3>
		<p>The phrase <strong>&quot;Do not fold, spindle, or mutilate&quot;</strong> printed on
			punch cards became a symbol of impersonal computerization in the 1960s-70s. Punch cards
			represented the computer age&apos;s promises and anxieties. They were simultaneously
			magical (storing data in holes!) and dehumanizing (reducing people to numbers). The
			phrase became a rallying cry for the counterculture, symbolizing resistance to being
			treated as mere data points.</p>
	</>
};
