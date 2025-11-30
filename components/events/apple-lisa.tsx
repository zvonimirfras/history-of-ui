import Link from 'next/link';

import type { Event } from './types';

export const apple_lisa: Event = {
	id: 'apple-lisa',
	time: '1983-01-19',
	name: 'Apple Lisa',
	companies: ['Apple'],
	people: ['Steve Jobs'],
	labels: ['key-point', 'operating-system'],
	summary: 'Apple&apos;s first commercial computer with a graphical user interface. Though' +
		'commercially unsuccessful due to its $9,995 price tag, the Lisa pioneered many GUI' +
		'concepts that would define the Macintosh and modern computing.',
	description: <>
		<p>The Apple Lisa, named after Steve Jobs&apos; daughter, was Apple&apos;s first attempt to
			bring the graphical user interface to market. Inspired by the <Link href="/event/xerox-apple-deal">visit to Xerox PARC</Link>,
			the Lisa was more advanced than anything else available to consumers.</p>

		<h3>A Revolutionary Interface</h3>
		<p>The Lisa introduced interface concepts that seem obvious now but were revolutionary in
			1983. You could run multiple applications simultaneously through cooperative
			multitasking, switching between them with ease. Protected memory meant one crashing
			application wouldn&apos;t bring down the entire system. Pull-down menus organized
			commands logically at the top of the screen. The clipboard let you copy text or graphics
			from one application and paste them into another, a workflow we now take for granted.</p>

		<p>You could drag files around visually, double-click to open them, and throw unwanted files
			into a trash can icon. These weren&apos;t just clever metaphors; they made computing
			intuitive in a way command-line interfaces never could.</p>

		<h3>A Complete Business Suite</h3>
		<p>The Lisa came with seven integrated business applications: LisaWrite for word processing
			with true WYSIWYG, LisaCalc for spreadsheets, LisaDraw for vector graphics, LisaGraph
			for business charts, LisaProject for project management, LisaList as a database, and
			LisaTerminal for communications. It was a complete business solution in one package.</p>

		<h3>Too Advanced, Too Expensive</h3>
		<p>At $9,995 (about $30,000 in today&apos;s money), the Lisa was simply too expensive for
			most businesses. Its 5MHz processor struggled to keep up with the demanding GUI, making
			it feel sluggish. Few third-party developers created applications for it, limiting its
			usefulness. Apple positioned it as a business computer but priced it out of reach for
			the businesses it targeted.</p>

		<p>Only about 10,000 Lisas were sold before it was discontinued in 1985. However, the
			Lisa&apos;s influence was profound. It served as the proving ground for the <Link href="/event/macintosh">Macintosh</Link>,
			which launched a year later at a fraction of the price. Many Lisa interface concepts
			became standard in the Mac and later in <Link href="/event/windows-1">Windows</Link>. The Lisa demonstrated that
			GUIs could work for business productivity, not just research. It proved the concepts;
			the Mac made them affordable.</p>
	</>
};
