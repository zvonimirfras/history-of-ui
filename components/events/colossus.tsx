import { Image } from '../image';

import type { Event } from './types';

export const colossus: Event = {
	id: 'colossus',
	time: '1943-12',
	name: 'Colossus',
	companies: ['General Post Office'],
	labels: ['key-point'],
	thumbnail: '/images/Colossus-320px.jpg',
	thumbnailAlt: 'Two female code breakers working on the Colossus computers',
	summary: 'A set of computers developed by British codebreakers in the years 1943-1945 to help' +
		'in the cryptanalysis of the Lorenz cipher.',
	description: <>
		<Image src='/images/Colossus-640px.jpg' srcFull='/images/Colossus.jpg' alt='Two female code breakers working on the Colossus computers' />

		<p>Colossus was a set of computers developed by British codebreakers at <strong>Bletchley
			Park</strong> in the years 1943-1945 to help in the cryptanalysis of the Lorenz cipher
			used by the German High Command during World War II.</p>

		<h3>Revolutionary Technology</h3>
		<p>Colossus was the first programmable electronic computer, though not general-purpose. It
			used 1,500-1,600 vacuum tubes, making it incredibly fast for its time. It could process
			5,000 characters per second. An optical tape reader could read paper tape at high speed,
			feeding encrypted messages into the machine for analysis. These specifications sound
			modest now, but in 1943, they represented the cutting edge of what was technologically
			possible.</p>

		<h3>Interface & Operation</h3>
		<p>While primitive by modern standards, Colossus had a control panel with switches and dials
			that operators (mostly women) used to set the machine&apos;s parameters. The output was
			displayed on a typewriter and indicator lamps. This represented an early form of
			human-computer interaction, where operators needed to understand both the mathematics and
			the machine&apos;s operation. Programming Colossus meant understanding cryptanalysis,
			mathematics, and the machine&apos;s physical operation. It was a demanding combination.</p>

		<h3>Historical Impact</h3>
		<p>Colossus remained classified until the 1970s, so its influence on computer development
			was indirect. However, many of the engineers who worked on Colossus went on to build
			later computers, carrying forward their knowledge of electronic computing. Ten Colossus
			machines were built, significantly shortening WWII and saving countless lives. The
			machines were so secret that most were destroyed after the war, and their existence
			wasn&apos;t publicly acknowledged for decades.</p>
	</>
};
