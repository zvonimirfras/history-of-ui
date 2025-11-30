import Link from 'next/link';

import type { Event } from './types';

export const palm_pilot: Event = {
	id: 'palm-pilot',
	time: '1997-03',
	name: 'Palm Pilot',
	companies: ['Palm Computing', 'U.S. Robotics'],
	people: ['Jeff Hawkins', 'Donna Dubinsky'],
	labels: ['key-point', 'mobile', 'pda'],
	summary: 'The Palm Pilot revolutionized PDAs with its simple, elegant interface and Graffiti' +
		'handwriting recognition, becoming one of the most successful handheld devices of' +
		'the late 1990s.',
	description: <>
		<p>The Palm Pilot, created by <strong>Jeff Hawkins and Palm Computing</strong>, was the
			PDA that finally got everything right. Unlike the <Link
			href="/event/apple-newton">Apple Newton</Link>, the Palm Pilot succeeded through
			simplicity and focus.</p>

		<h3>Learning from Newton&apos;s Mistakes</h3>
		<p>The Palm Pilot featured Graffiti handwriting where users learned a simplified alphabet
			for 95%+ accuracy (instead of trying to recognize everyone&apos;s natural handwriting).
			A monochrome screen prioritized battery life over flashiness. Pocket-sized dimensions
			made it truly portable: it fit in a shirt pocket. Weeks of battery life ran on just
			two AAA batteries. Instant-on meant no boot time for immediate access. HotSync provided
			seamless desktop synchronization. Every design choice prioritized practicality over
			ambition.</p>

		<h3>Interface Philosophy</h3>
		<p>The Palm OS interface was revolutionary in its simplicity. Four silk-screened buttons
			provided direct access to Calendar, Contacts, To-Do, and Notes. Consistent gestures
			meant the same actions worked everywhere. Single-tap access ensured everything was two
			taps away maximum. Unified find let you search everything from one place. The interface
			was so intuitive that most users never needed the manual.</p>

		<h3>Jeff Hawkins&apos; Insight</h3>
		<p>Hawkins famously carried a <strong>wooden block</strong> in his shirt pocket for months
			to test if a PDA of that size would be practical. This user-centered approach (testing
			assumptions before building) informed every design decision. He designed the interface
			around <strong>immediate access to core functions</strong> rather than feature bloat.</p>

		<h3>Market Success</h3>
		<p>The Pilot sold over <strong>1 million units in its first 18 months</strong>, faster
			adoption than the VCR, color TV, or cell phone. It proved that mobile computing had a
			mass market if the execution was right.</p>

		<h3>Design Principles That Endured</h3>
		<p>The Palm Pilot established principles that endured: simplicity over features (do core
			things perfectly), instant responsiveness (no waiting, no lag), reliable synchronization
			(data everywhere you need it), and &quot;learn once, use everywhere&quot; (consistent
			interface patterns). These principles would influence mobile design for decades.</p>

		<h3>Influence on Future Devices</h3>
		<p>The Palm Pilot&apos;s UI influenced smartphones including early <Link
			href="/event/iphone">iPhone</Link> designs. Many iPhone designers were Palm alumni, and
			iOS inherited Palm&apos;s philosophy: simplicity, instant-on, gesture-based
			interaction, and seamless sync. The Palm Pilot demonstrated that successful mobile
			interfaces required <strong>different approaches than desktop computing</strong>, a
			lesson that shaped the entire mobile era.</p>
	</>
};
