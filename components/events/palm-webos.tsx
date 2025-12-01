import Link from 'next/link';

import type { Event } from './types';

export const palm_webos: Event = {
	id: 'palm-webos',
	time: '2009-01-08',
	name: 'Palm webOS',
	companies: ['Palm'],
	people: ['Jon Rubinstein', 'Matias Duarte'],
	labels: ['key-point', 'mobile', 'smartphone', 'operating-system'],
	summary: 'Palm webOS introduced the revolutionary "cards" multitasking interface and gesture' +
		'navigation, pioneering interaction patterns that influenced modern mobile operating' +
		'systems.',
	description: <>
		<p>Palm webOS, unveiled with the Palm Pre at CES 2009, introduced revolutionary interface
			concepts that were years ahead of their time. Led by <strong>Jon Rubinstein</strong>
			(former Apple executive) and designed by <strong>Matias Duarte</strong> (who later led
			Android design), webOS pioneered interaction patterns that would influence iOS and
			Android.</p>

		<h3>Cards You Could Touch</h3>
		<p>webOS&apos;s most iconic feature was the cards multitasking system. Each app appeared as
			a visual card you could see. Pinch to zoom out and see all running apps at once, like
			spreading cards on a table. Swipe a card up to close it, like flicking a playing card
			away. Fluid transitions and smooth animations made everything feel alive. This made
			multitasking visual and intuitive in a way that iOS&apos;s (then) app-switching and
			Android&apos;s notification drawer weren&apos;t. You could literally see your apps and
			manipulate them like physical cards.</p>

		<h3>Gestures Before They Were Cool</h3>
		<p>webOS pioneered gesture navigation before it was common. Swipe up from the gesture area
			to return to card view. Swipe from right to left to go back. No physical buttons needed:
			everything was gesture-driven with fluid, physics-based animations. The iPhone
			wouldn&apos;t adopt this approach until the iPhone X in 2017, nearly a decade later.</p>

		<h3>Synergy: The Phone That Understood You</h3>
		<p>webOS&apos;s Synergy system unified data from multiple sources in a way that felt
			magical. It merged your Facebook, Google, and Exchange contacts into one unified list.
			All your calendars appeared in one view. SMS, instant messages, and social messages
			threaded together in conversations. &quot;Just Type&quot; provided universal search
			from anywhere. This was revolutionary: your phone understood that &quot;John Smith&quot;
			on Facebook was the same person as in your email contacts. It seems obvious now, but
			in 2009, it was mind-blowing.</p>

		<h3>Web Apps, Native Feel</h3>
		<p>webOS apps were built with web technologies (HTML, <Link href="/event/css">CSS</Link>,
			<Link href="/event/javascript">JavaScript</Link>), making it easy for web developers to
			create native-feeling apps. This approach predated <Link href="/event/pwa">Progressive
			Web Apps</Link> by years and showed that web technologies could power real mobile
			applications.</p>

		<h3>Brilliant Design, Terrible Timing</h3>
		<p>Despite brilliant design, webOS failed. The Palm Pre had build quality issues: the
			slider mechanism felt cheap and broke easily. The app ecosystem couldn&apos;t compete
			with iOS and Android&apos;s growing libraries. Palm couldn&apos;t match Apple&apos;s
			marketing prowess. And Palm was struggling financially, unable to invest in the
			platform&apos;s future. HP acquired Palm in 2010, killed webOS hardware in 2011, and
			open-sourced the OS in 2012. It was over.</p>

		<h3>Ideas That Won</h3>
		<p>webOS&apos;s innovations live on everywhere. iOS adopted card-based app switching.
			Android&apos;s recent apps use a card-based interface. The iPhone X and later models
			adopted webOS-style gesture navigation. LG smart TVs still use webOS today. Matias
			Duarte took webOS&apos;s design philosophy to Android, where he led the development of
		<Link href="/event/material-design">Material Design</Link>. The cards metaphor, smooth
		animations, and gesture-based interactions that defined webOS influenced a generation
		of mobile interfaces.</p>

		<p>webOS proved that mobile interfaces could be beautiful, intuitive, and powerful
			simultaneously. It showed that the best interfaces feel physical and natural, even on
			glass screens. Though webOS failed commercially, its ideas won: they&apos;re now
			standard on billions of devices.</p>
	</>
};
