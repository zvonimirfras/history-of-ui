import Link from 'next/link';

import type { Event } from './types';

export const windows_3: Event = {
	id: 'windows-3',
	time: '1990-05-22',
	name: 'Windows 3.0',
	companies: ['Microsoft'],
	labels: ['key-point', 'operating-system'],
	summary: 'Windows 3.0 was the first version of Windows to achieve broad commercial success,' +
		'bringing GUI computing to the mainstream PC market and establishing Windows as a' +
		'viable platform.',
	description: <>
		<p>Windows 3.0 was the breakthrough release that made Microsoft Windows a commercial
			success. After the failures of <Link href="/event/windows-1">Windows 1.0</Link> and 2.0,
			Windows 3.0 finally delivered a GUI experience that PC users wanted.</p>

		<h3>Finally, a Windows That Worked</h3>
		<p>Windows 3.0 fixed everything that was wrong with its predecessors. Performance improved
			dramatically through better memory management. Graphics looked sharper with 16-color VGA
			support and redesigned icons. The new Program Manager organized applications into
			logical groups, while File Manager provided a visual way to browse files and
			directories, concepts that seem obvious now but were revolutionary for DOS users
			accustomed to typing cryptic commands.</p>

		<p>The system could adapt to your hardware, running in three modes: Real mode for ancient
			8086 processors, Standard mode for 286 machines, and 386 Enhanced mode that took full
			advantage of newer processors with virtual memory. Windows 3.1, released in 1992, added
			TrueType scalable fonts, making text look beautiful at any size.</p>

		<h3>Games That Taught Computing</h3>
		<p>Windows 3.0 came with Write for word processing, Paintbrush for graphics, Notepad for
			quick text editing, and Calculator with standard and scientific modes. But the genius
			was including Solitaire and Minesweeper, games that taught users how to use a mouse.
			Dragging cards in Solitaire trained millions in drag-and-drop. These &quot;frivolous&quot;
			games were actually brilliant onboarding tools.</p>

		<h3>Commercial Triumph</h3>
		<p>Windows 3.0 sold 10 million copies in its first two years, a massive success that
			legitimized Windows as a platform. Software developers who had ignored previous
			versions now flocked to create Windows applications. Businesses that had been
			skeptical about GUI computing were convinced. Windows 3.0 made GUI computing mainstream
			on PCs, established Windows as the dominant platform, and proved Microsoft could
			compete with <Link href="/event/macintosh">Apple&apos;s Macintosh</Link>.</p>

		<p>Windows 3.0 (and the refined 3.1) established the foundation for <Link
			href="/event/windows-95">Windows 95</Link> and Microsoft&apos;s dominance of the PC
			market. It brought millions of users from the DOS command line to graphical computing,
			fundamentally changing how people interacted with computers.</p>
	</>
};
