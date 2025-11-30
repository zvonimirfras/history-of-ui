import type { Event } from './types';

export const macintosh: Event = {
	id: 'macintosh',
	time: '1984-01-24',
	name: 'The Macintosh (OS System 1.0)',
	companies: ['Apple'],
	labels: ['key-point', 'operating-system'],
	summary: 'Window based system with icons. First version of Apple Macintosh operating system' +
		'and the beginning of the classic Mac OS series. Even though other personal' +
		'computers came before it, Macintosh changed the way people thought about personal' +
		'computers.',
	description: <>
		<p>The original Macintosh, introduced with the famous <strong>&quot;1984&quot; Super Bowl
			commercial</strong> directed by Ridley Scott, brought the graphical user interface to
			the mass consumer market.</p>

		<h3>Groundbreaking Interface</h3>
		<p>System 1.0 featured revolutionary UI elements that made computing intuitive.
			Overlapping windows let you manage multiple documents at once. A menu bar provided
			consistent command organization across all applications. Dialog boxes offered interactive
			confirmations and options. The trash can icon created a visual metaphor for file
			deletion. The desktop metaphor treated files as documents and folders as folders,
			concepts so natural that we forget they had to be invented.</p>

		<h3>Bundled Software</h3>
		<p>It came with <strong>MacPaint and MacWrite</strong>, demonstrating the power of WYSIWYG
			(What You See Is What You Get) computing. At <strong>$2,495</strong>, it was affordable
			compared to Apple&apos;s Lisa ($9,995). The Mac proved that GUIs could be both powerful
			and affordable, bringing them to consumers and small businesses.</p>

		<h3>Industry Revolution</h3>
		<p>The Mac&apos;s user-friendly interface, combined with desktop publishing capabilities
			that emerged soon after, revolutionized industries like <strong>graphic design,
			publishing, and education</strong>. Its influence on personal computing and UI design
			cannot be overstated. The Mac established interaction patterns still used today. The Mac
			didn&apos;t just change computing; it changed what computing could be.</p>
	</>
};
