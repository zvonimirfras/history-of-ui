import type { Event } from './types';

export const android: Event = {
	id: 'android',
	time: '2008-09-23',
	name: 'Android',
	companies: ['Google', 'HTC'],
	people: ['Andy Rubin'],
	labels: ['key-point', 'operating-system', 'mobile'],
	summary: 'Android, Google&apos;s open-source mobile operating system, launched with the HTC' +
		'Dream/G1, creating an alternative to iOS and democratizing smartphone technology.',
	description: <>
		<p>Android, unveiled with the HTC Dream (T-Mobile G1), was Google&apos;s answer to the iPhone
			and became the world&apos;s most popular mobile operating system. Founded by <strong>Andy
			Rubin</strong> and acquired by Google in 2005, Android took a different approach from iOS:
			it was <strong>open-source</strong>, available to any manufacturer, and highly
			customizable.</p>

		<h3>Key Innovations</h3>
		<p>Android introduced several UI concepts that became standard. The notification drawer pulled
			down from the top for system alerts, a more elegant solution than iOS&apos;s initial
			approach. A back button provided consistent navigation across all apps. Home screen widgets
			offered at-a-glance information without opening apps. System-wide sharing enabled seamless
			content sharing between apps. Tight Google integration connected everything to Google
			services. These features gave Android a distinct identity separate from iOS.</p>

		<h3>Open Platform Strategy</h3>
		<p>While early Android versions were rougher than iOS, the platform&apos;s openness
			attracted dozens of manufacturers, creating a diverse ecosystem of devices at various
			price points. This approach allowed manufacturers to customize the interface and enabled
			innovation in form factors.</p>

		<h3>Global Impact</h3>
		<p>By 2023, Android powers over <strong>70% of smartphones globally</strong>. It
			democratized smartphone technology, making it accessible in emerging markets and proving
			that open-source platforms could compete with proprietary systems.</p>
	</>
};
