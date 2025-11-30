import type { Event } from './types';

export const windows_1: Event = {
	id: 'windows-1',
	time: '1985-11-20',
	name: 'Windows 1.0',
	companies: ['Microsoft'],
	labels: ['key-point', 'operating-system'],
	summary: 'Microsoft&apos;s first attempt at a graphical user interface operating environment for' +
		'MS-DOS. It introduced tiled windows, scroll bars, icons, dialog boxes, and menus.' +
		'Programs included Calculator, Calendar, Cardfile, Clipboard viewer, Clock, Control' +
		'Panel, Notepad, Paint, Reversi, Terminal, and Write.',
	description: <>
		<p>Windows 1.0 was Microsoft&apos;s first attempt to create a graphical operating
			environment that ran on top of MS-DOS. Unlike the Macintosh with its overlapping
			windows, Windows 1.0 used <strong>tiled windows</strong> that couldn&apos;t overlap
			(partly due to Apple&apos;s legal concerns about copying their interface).</p>

		<h3>Interface Features</h3>
		<p>Windows 1.0 introduced drop-down menus for organized command structure, scroll bars for
			navigating long documents, icons as visual program representations, dialog boxes for
			user interactions and confirmations, and mouse support (still uncommon for PC users at
			the time). These features brought GUI concepts to the massive installed base of
			IBM-compatible PCs, even if the implementation was clunky.</p>

		<h3>Bundled Applications</h3>
		<p>Included programs: <strong>Calculator, Calendar, Cardfile, Clipboard viewer, Clock,
			Control Panel, Notepad, Paint, Reversi, Terminal, and Write</strong>. Though simple,
			these established software categories that remain standard today. Reversi (a game) was
			included to demonstrate mouse control and make the GUI less intimidating.</p>

		<h3>Significance</h3>
		<p>While primitive compared to later versions and commercially unsuccessful initially,
			Windows 1.0 was significant because it marked Microsoft&apos;s commitment to GUI-based
			computing. It supported <strong>cooperative multitasking</strong>, allowing users to
			switch between programs. Windows 1.0 laid the groundwork for the Windows operating
			system that would eventually dominate the PC market. It wasn&apos;t good, but it was the
			start of something that would become dominant.</p>
	</>
};
