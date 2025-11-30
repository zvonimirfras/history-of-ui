import type { Event } from './types';

export const ibm_pc: Event = {
	id: 'ibm-pc',
	time: '1981-08-12',
	name: 'IBM Personal Computer',
	companies: ['IBM'],
	people: ['Don Estridge'],
	labels: ['key-point', 'first-computer'],
	summary: 'The first microcomputer released in the IBM PC model line and the basis for the IBM' +
		'PC compatible de facto standard. IBM recruited Charlie Chaplin to advertise their' +
		'more approachable side. The IBM PC revolutionized business computing by becoming' +
		'the first PC to gain widespread adoption by industry.',
	description: <>
		<p>Led by <strong>Don Estridge</strong>, IBM&apos;s entry into the personal computer market
			legitimized the PC for business use. The IBM PC featured an <strong>Intel 8088
			processor</strong>, 16KB of RAM (expandable to 256KB), and ran PC DOS (Microsoft&apos;s
			version of MS-DOS).</p>

		<h3>Revolutionary Open Architecture</h3>
		<p>What made it revolutionary was IBM&apos;s decision to use an <strong>open
			architecture</strong> with off-the-shelf components and publish technical
			specifications. This allowed other companies to create compatible hardware and software,
			spawning the &quot;IBM PC compatible&quot; industry that dominated personal computing
			for decades.</p>

		<h3>Marketing & Cultural Impact</h3>
		<p>IBM&apos;s marketing campaign featuring <strong>Charlie Chaplin&apos;s &quot;Little
			Tramp&quot;</strong> character made computers seem less intimidating to average users.
			It was a brilliant move that humanized technology for the mass market.</p>

		<h3>Legacy</h3>
		<p>The IBM PC set standards for hardware interfaces, software compatibility, and business
			computing that persist today. Within two years, it became the <strong>best-selling
			computer in the United States</strong>.</p>
	</>
};
