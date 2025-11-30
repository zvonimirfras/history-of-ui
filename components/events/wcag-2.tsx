import Link from 'next/link';

import type { Event } from './types';

export const wcag_2: Event = {
	id: 'wcag-2',
	time: '2008-12-11',
	name: 'WCAG 2.0 (Web Content Accessibility Guidelines)',
	companies: ['W3C'],
	labels: ['key-point', 'web'],
	summary: 'WCAG 2.0 established comprehensive, testable standards for web accessibility,' +
		'fundamentally shaping how interfaces are designed to be usable by people with' +
		'disabilities.',
	description: <>
		<p>WCAG 2.0, published by the W3C&apos;s Web Accessibility Initiative, established
			comprehensive guidelines for making web content accessible to people with disabilities.
			It became the international standard for web accessibility, influencing laws and design
			practices worldwide.</p>

		<h3>POUR: Four Principles That Changed Design</h3>
		<p>WCAG 2.0 organized accessibility around four principles, memorably acronymed as POUR.
			Perceivable: users must be able to perceive information through text alternatives,
			captions, and adaptable layouts. Operable: users must be able to operate the interface
			via keyboard, with enough time, and without seizure-inducing content. Understandable:
			users must understand the information and interface through readable text, predictable
			behavior, and input assistance. Robust: content must work with current and future
			technologies, requiring valid code compatible with assistive technologies.</p>

		<p>Three conformance levels provided a roadmap: Level A covered minimum accessibility
			(essential), Level AA addressed major barriers (the target for most sites), and Level
			AAA represented the highest level (ideal but not always achievable).</p>

		<h3>Requirements That Shaped Design</h3>
		<p>WCAG&apos;s specific, testable requirements fundamentally changed how interfaces were
			designed. Color contrast ratios became mandatory: minimum 4.5:1 for normal text, 3:1 for
			large text. All functionality had to be accessible via keyboard. Focus indicators had to
			be visible. Images needed alt text. HTML had to be semantic with proper heading
			hierarchies and landmarks. Text had to be resizable up to 200% without loss of
			functionality. These weren&apos;t suggestions: they were requirements that designers had
			to build into their workflows.</p>

		<h3>The Law Catches Up</h3>
		<p>WCAG 2.0 was adopted by governments worldwide, giving it teeth. Section 508 in the USA
			required federal websites to meet WCAG 2.0 AA. The European Accessibility Act mandated
			WCAG compliance across EU member states. US courts began referencing WCAG in ADA
			lawsuits against inaccessible websites. Suddenly, accessibility wasn&apos;t just the
			right thing to do: it was legally required.</p>

		<p>WCAG 2.1 arrived in 2018 with 17 new criteria focused on mobile accessibility (touch
			targets, orientation, motion), low vision (better magnification and contrast support),
			and cognitive disabilities (timeouts, animations, input modalities). The web was
			evolving, and accessibility standards evolved with it.</p>

		<h3>Built Into Everything</h3>
		<p>WCAG influenced major design systems. <Link href="/event/material-design">Material
			Design</Link> built in accessibility guidelines. Apple&apos;s Human Interface Guidelines
			made accessibility a core principle. Microsoft&apos;s Fluent embraced inclusive design
			principles. WCAG&apos;s testable criteria enabled automated testing tools like axe,
			Lighthouse (Chrome&apos;s built-in accessibility audits), and WAVE. Accessibility became
			measurable and testable, not just aspirational.</p>

		<h3>Lasting Impact</h3>
		<p>WCAG 2.0 transformed accessibility from an afterthought to a fundamental design
			requirement. It proved that accessible design benefits everyone: keyboard navigation
			helps power users, captions help people in noisy environments, clear language helps
			non-native speakers. WCAG showed that inclusive design makes better products for all
			users.</p>
	</>
};
