import type { Event } from './types';

export const iphone: Event = {
	id: 'iphone',
	time: '2007-01-09',
	name: 'iPhone',
	companies: ['Apple'],
	people: ['Steve Jobs', 'Jonathan Ive', 'Scott Forstall'],
	labels: ['key-point', 'smartphone', 'mobile', 'touchscreen'],
	summary: 'The iPhone revolutionized mobile computing with its multi-touch interface,' +
		'eliminating the physical keyboard in favor of a pure touchscreen experience that' +
		'changed how we interact with technology.',
	description: <>
		<p>The iPhone, unveiled by Steve Jobs on <strong>January 9, 2007</strong>, was a
			revolutionary device that redefined user interfaces and created the modern smartphone
			industry. Jobs introduced it as <strong>three devices in one</strong>: an iPod, a phone,
			and an Internet communicator.</p>

		<h3>Revolutionary Multi-Touch Interface</h3>
		<p>What made it revolutionary was the interface: a <strong>3.5-inch multi-touch
			screen</strong> that replaced physical keyboards and styluses with natural finger
			gestures. Tap (select and activate), swipe (scroll and navigate), pinch-to-zoom (resize
			content), and double-tap (quick zoom). The interface was fluid and responsive, with
			smooth animations and <strong>physics-based scrolling</strong> that made digital content
			feel tangible. These gestures were so intuitive that even children and elderly users
			could master them without instruction.</p>

		<h3>Design Philosophy</h3>
		<p>Direct manipulation (touching objects on screen to move them) was intuitive in a way
			that stylus-based interfaces never were. The iPhone&apos;s visual design featured
			glossy, <strong>skeuomorphic elements</strong> that made digital objects look familiar
			and touchable. There was <strong>no manual</strong>: Jobs famously said if you needed
			one, they failed.</p>

		<h3>Interaction Patterns That Changed Everything</h3>
		<p>The iPhone introduced interaction patterns that became universal: slide to unlock
			(preventing accidental inputs), pull to refresh (updating content lists), swipe to
			delete (removing items), and tap to zoom (focusing on content). These gestures were so
			intuitive that they spread to every mobile platform and even influenced desktop
			interfaces.</p>

		<h3>Impact & Legacy</h3>
		<p>The iPhone didn&apos;t invent touchscreens or smartphones, but it perfected the
			execution and created a new paradigm. It spawned the <strong>app economy</strong>,
			changed photography, revolutionized mobile internet, and fundamentally altered how
			humans interact with computers. The iPhone is arguably the <strong>most influential UI
			innovation since the original Macintosh</strong>.</p>
	</>
};
