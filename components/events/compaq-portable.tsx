import Link from 'next/link';

import type { Event } from './types';

export const compaq_portable: Event = {
	id: 'compaq-portable',
	time: '1983-03',
	name: 'The Compaq Portable',
	companies: ['Compaq'],
	labels: ['key-point'],
	summary: 'Portable computer that was like an IBM PC in a luggage form.',
	description: <>
		<p>The Compaq Portable was the first <strong>100% IBM PC-compatible</strong> computer and
			launched Compaq as a major player in the PC industry. It proved that companies could
			successfully compete with <Link href="/event/ibm-pc">IBM</Link> by offering compatible
			alternatives.</p>

		<h3>Physical Design</h3>
		<p>Weighing <strong>28 pounds</strong>, it was &quot;portable&quot; in the sense that it had
			a handle and could be transported, though it was more <strong>luggable than truly
			portable</strong>. The machine featured a 9-inch green CRT screen that folded down over
			the keyboard for transport, two 5.25-inch floppy drives built into the front panel,
			sewing-machine styling with a heavy-duty carrying handle, and an Intel 8088 processor,
			the same as the IBM PC. You could carry it, but you wouldn&apos;t want to carry it far.</p>

		<h3>Perfect Compatibility</h3>
		<p>The Compaq could run <strong>all IBM PC software without modification</strong>. This
			compatibility was achieved through <strong>clean-room reverse engineering</strong> of
			the IBM PC BIOS: one team studied the IBM BIOS and wrote specifications, then a
			completely separate team implemented it without seeing IBM&apos;s code. This legal
			approach avoided copyright infringement and became the template for the entire PC clone
			industry.</p>

		<h3>Commercial Triumph</h3>
		<p>The Compaq Portable was a huge commercial success, with Compaq achieving first-year sales
			of <strong>$111 million</strong>, a record for an American business startup at the time.
			It proved that the PC compatible market was viable and profitable. IBM had created the
			platform, but Compaq showed that anyone could build on it.</p>

		<h3>Market Impact</h3>
		<p>The Compaq&apos;s success opened the floodgates for &quot;IBM compatible&quot; or &quot;PC
			clone&quot; manufacturers. This competition drove prices down, accelerated innovation, and
			ensured that the PC platform, rather than any single manufacturer, would dominate
			personal computing. IBM lost control of the market they created, but the platform
			thrived.</p>
	</>
};
