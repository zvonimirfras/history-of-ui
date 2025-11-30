import type { Event } from './types';

export const material_design: Event = {
	id: 'material-design',
	time: '2014-06-25',
	name: 'Material Design',
	companies: ['Google'],
	people: ['Matias Duarte'],
	labels: ['key-point', 'design-system'],
	summary: 'Google&apos;s Material Design created a comprehensive design language based on' +
		'principles of physical materials, motion, and bold graphics that unified Google&apos;s' +
		'products and influenced modern UI design.',
	description: <>
		<p>Material Design, introduced at <strong>Google I/O 2014</strong>, was Google&apos;s
		answer to creating a unified design language across all platforms and devices. Led by
		<strong>Matias Duarte</strong>, it synthesized classic design principles with
		technology innovation, imagining digital interfaces as physical &quot;materials&quot;
		with depth, surface, and shadow.</p>

		<h3>Core Principles</h3>
		<p>Material Design established core principles that defined its approach: the material
		metaphor treated digital surfaces as having physical properties, bold colors created
		vibrant and intentional color palettes, meaningful motion used animation to guide and
		inform, elevation and shadows created depth through subtle layering, and typography
		hierarchy ensured clear, readable text structure. These principles weren&apos;t
		arbitrary: they were grounded in how people understand physical space.</p>

		<h3>Motion with Meaning</h3>
		<p>Unlike flat design, Material used <strong>subtle shadows and elevations</strong> to
			create hierarchy and depth, making interfaces more intuitive. Motion wasn&apos;t
			decorative: it provided meaning, guiding users&apos; attention and maintaining spatial
			awareness during transitions.</p>

		<h3>Comprehensive System</h3>
		<p>Material Design included comprehensive guidelines covering everything from color and
		typography to animation timing and responsive grid systems. Google provided
		<strong>extensive documentation, components, and tools</strong>, making it accessible
		to designers and developers worldwide.</p>

		<h3>Evolution & Impact</h3>
		<p>The system evolved beyond Google&apos;s products, becoming one of the <strong>most
		influential design languages in modern UI</strong>. Material Design proved that
		comprehensive design systems could unify products across platforms while remaining
		flexible and adaptable. It continues to evolve, with <strong>Material You
		(2021)</strong> introducing more personalization and dynamic color systems.</p>
	</>
};
