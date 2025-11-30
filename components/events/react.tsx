import type { Event } from './types';

export const react: Event = {
	id: 'react',
	time: '2013-05-29',
	name: 'React',
	companies: ['Facebook (Meta)'],
	people: ['Jordan Walke'],
	labels: ['key-point', 'web'],
	summary: 'React revolutionized web development with its component-based architecture and' +
		'virtual DOM, establishing patterns that define modern web application interfaces.',
	description: <>
		<p>React, created by <strong>Jordan Walke</strong> at Facebook and open-sourced in 2013,
			revolutionized web development with a <strong>component-based architecture</strong> and
			innovative rendering approach. It fundamentally changed how developers build user
			interfaces.</p>

		<h3>Rethinking Everything</h3>
		<p>React introduced core innovations that changed web development: component-based
			architecture treating UI as reusable, composable components; virtual DOM for efficient
			updates by diffing virtual trees; declarative programming where you describe what UI
			should look like, not how to build it; unidirectional data flow for predictable state
			management; and JSX, a JavaScript syntax extension for writing HTML-like code. These
			weren&apos;t just features: they were a completely different way of thinking about
			interfaces.</p>

		<h3>The Virtual DOM Magic</h3>
		<p>React&apos;s virtual DOM solved a critical performance problem. Its diffing algorithm
			compared virtual DOM trees to find minimal changes. Batch updates grouped DOM changes
			for efficiency. Reconciliation intelligently updated only what changed. This made
			complex, dynamic UIs performant without manual optimization. You could build sophisticated
			interfaces without worrying about performance: React handled it.</p>

		<h3>Components All the Way Down</h3>
		<p>React popularized thinking about UIs as hierarchies of components. Write once, use
			everywhere: that&apos;s reusability. Build complex UIs from simple pieces through
			composition. Components manage their own state through encapsulation. Pass data down
			the component tree with props. This component thinking became so fundamental that
			it&apos;s hard to remember web development before it.</p>

		<p>Hooks arrived in 2019 and revolutionized React development. useState brought state to
			functional components. useEffect handled side effects and lifecycle. Custom hooks
			enabled reusable stateful logic. You no longer needed class components: functional
			components with hooks were simpler and more powerful.</p>

		<h3>An Entire Ecosystem</h3>
		<p>React spawned a massive ecosystem. React Native let you build native mobile apps with
			React. Next.js added server-side rendering and static generation. Redux provided
			predictable state management. Gatsby enabled static site generation. React Router
			handled client-side routing. React wasn&apos;t just a library: it was a platform.</p>

		<p>React&apos;s success inspired alternatives. Vue.js offered a progressive framework with
			a gentler learning curve. Angular provided Google&apos;s full-featured framework.
			Svelte compiled away the framework at build time. Solid brought fine-grained reactivity.
			Competition made everyone better.</p>

		<h3>Total Dominance</h3>
		<p>React became the dominant UI library. Facebook, Instagram, and WhatsApp used it.
			Netflix, Airbnb, and Uber built on it. Millions of developers learned it. React skills
			became highly valued in the job market. React wasn&apos;t just popular: it defined
			modern web development.</p>

		<p>React changed how interfaces are built. Single-page applications became smooth,
			app-like experiences. Component libraries like Material-UI, Ant Design, and Chakra UI
			flourished. Design systems found their implementation in React components. Hot reloading
			and dev tools made iteration faster. React made building complex UIs not just possible,
			but enjoyable.</p>

		<h3>Lasting Legacy</h3>
		<p>React proved that <strong>functional, declarative programming</strong> could work for
			UI development. It showed that the virtual DOM pattern could make complex UIs
			performant. React&apos;s component model influenced every modern framework, even those
			that don&apos;t use virtual DOM.</p>

		<p>React democratized advanced UI development patterns, making techniques that were once
			expert-only accessible to all developers. It established patterns (components, props,
			state, hooks) that define modern web development. React didn&apos;t just create a
			library; it created a new way of thinking about user interfaces.</p>
	</>
};
