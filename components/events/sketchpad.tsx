import type { Event } from './types';

export const sketchpad: Event = {
	id: 'sketchpad',
	time: '1963',
	name: 'Sketchpad',
	companies: ['MIT'],
	people: ['Ivan Sutherland'],
	labels: ['key-point', 'first-gui'],
	summary: 'Ivan Sutherland&apos;s Sketchpad was the first program to use a graphical user' +
		'interface, pioneering concepts like object-oriented programming and computer-aided' +
		'design.',
	description: <>
		<p>Sketchpad, created by Ivan Sutherland for his PhD thesis at MIT in 1963, was
			revolutionary. It was the first program to use a complete graphical user interface.
			Users could draw directly on a computer screen using a <strong>light pen</strong>,
			manipulating geometric shapes with unprecedented intuitive control.</p>

		<h3>Concepts Decades Ahead</h3>
		<p>Sketchpad introduced concepts that became fundamental to computing. Objects and
			constraints laid the foundation for object-oriented programming. Direct manipulation let
			you touch and move things on screen, which was revolutionary when computers were still
			programmed with punch cards. Master objects and instances created the first prototyping
			system, where you could define a template and create copies. Hierarchical structures
			organized complex designs. These concepts were so advanced they wouldn&apos;t become
			mainstream for another 20 years.</p>

		<h3>Revolutionary Interface</h3>
		<p>The interface let users create, copy, move, resize, and manipulate graphical objects in
			real-time. You could draw a line, then tell Sketchpad it should be horizontal, and it
			would adjust automatically. You could create a shape, then duplicate it dozens of
			times with slight variations. Sketchpad influenced Alan Kay&apos;s work on Smalltalk
			and object-oriented programming, and its ideas about direct manipulation shaped modern
			graphical interfaces.</p>

		<h3>Legacy</h3>
		<p>Though few people saw Sketchpad in action (it ran on the expensive TX-2 computer, one of
			only a handful in existence), its influence on computer graphics, CAD, and user
			interface design was enormous. Sutherland won the <strong>Turing Award in 1988</strong>
			for this groundbreaking work, 25 years after creating Sketchpad. This was proof of how
			far ahead of its time it was.</p>
	</>
};
