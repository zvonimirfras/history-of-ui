import Link from 'next/link';

import type { Event } from './types';

export const apple_newton: Event = {
	id: 'apple-newton',
	time: '1993-08-03',
	name: 'Apple Newton',
	companies: ['Apple'],
	people: ['John Sculley'],
	labels: ['key-point', 'mobile'],
	summary: 'First personal digital assistant (PDA) to feature handwriting recognition. Had inconsistent results.',
	description: <>
		<p>The Apple Newton MessagePad was one of the first PDAs and pioneered the concept of a
			handheld computer with handwriting recognition. CEO <strong>John Sculley</strong> coined
			the term <strong>&quot;Personal Digital Assistant&quot;</strong> for the device.</p>

		<h3>Innovative Features</h3>
		<p>The Newton featured a touchscreen interface with pen-based input using a stylus.
			Handwriting recognition was ambitious but problematic. Object-oriented data created
			intelligent data relationships. Infrared communication enabled beaming data between
			devices. Third-party applications made it an extensible platform. Intelligent assist
			provided contextual help and actions. These features were visionary, but the execution
			was the problem.</p>

		<h3>The Handwriting Problem</h3>
		<p>The Newton&apos;s handwriting recognition was <strong>notoriously unreliable at
			launch</strong>, leading to widespread mockery including a famous <strong>Doonesbury
			comic strip</strong> that became synonymous with the Newton&apos;s problems. The phrase
			&quot;Egg Freckles&quot; (a misrecognition of &quot;Egg Fettuccine&quot;) entered popular
			culture as shorthand for the Newton&apos;s failures.</p>

		<h3>Ahead of Its Time</h3>
		<p>Despite the initial failures, the Newton was actually ahead of its time in many ways. It
			understood dates, phone numbers, and addresses with intelligent recognition.
			Auto-routing recognized &quot;lunch with Bob&quot; and could schedule it. Printing
			support enabled wireless printing via infrared. Synchronized data worked with desktop
			computers. Later Newton models (MessagePad 2000 and 2100) dramatically improved
			handwriting recognition, but by then the damage to the brand was done.</p>

		<h3>Legacy</h3>
		<p><strong>Steve Jobs discontinued</strong> the Newton line when he returned to Apple in
			1998, focusing resources on the iMac. However, many of its ideas were resurrected in
			the <Link href="/event/iphone">iPhone</Link> and <Link href="/event/ipad">iPad</Link>: touchscreen input,
			intelligent data recognition, app ecosystem, and synchronization with computers.</p>

		<p>The Newton proved that handwriting recognition technology needed more time to mature, but
			the concept of a personal handheld computing device was sound. Some Newton enthusiasts
			still use their MessagePads today, testament to the device&apos;s build quality and
			ahead-of-its-time design.</p>
	</>
};
