import Link from 'next/link';

import type { Event } from './types';

export const user_experience_architect: Event = {
	id: 'user-experience-architect',
	time: '1995',
	name: 'User Experience Architect',
	companies: ['Apple'],
	people: ['Don Norman'],
	labels: ['key-point'],
	// https://www.nngroup.com/articles/definition-user-experience/
	summary: 'During his time at Apple, Don Norman created the first &quot;User Experience' +
		'Architect&quot; position. &quot;It&apos;s the way you experience the world, it&apos;s the way you' +
		'experience your life, it&apos;s the way you experience service.&quot;',
	description: <>
		<p><strong>Don Norman</strong>, a cognitive scientist and usability consultant, joined
			Apple in 1993 and created the position of <strong>&quot;User Experience
			Architect&quot;</strong>, the first time the term &quot;User Experience&quot; (UX) was
			used in a job title.</p>

		<h3>Defining User Experience</h3>
		<p>Norman wanted a term that encompassed <strong>all aspects</strong> of a person&apos;s
			interaction with a company, its services, and its products. He argued that user
			experience went beyond just interface design or usability: it included product design
			(form, function, and interaction), packaging (the unboxing experience), documentation
			(manuals and help systems), customer support (getting help when needed), brand
			perception (emotional connection to the product), and the purchase experience (buying
			and setup process). This holistic view was radical. Most companies thought about these
			as separate concerns.</p>

		<h3>The Design of Everyday Things</h3>
		<p>Norman&apos;s work built on his influential book <strong>&quot;The Design of Everyday
			Things&quot;</strong> (originally titled &quot;The Psychology of Everyday Things&quot;),
			which explored how design affects usability. Key principles include affordances (objects
			should suggest how to use them), signifiers (clear indications of possible actions),
			feedback (users should know what happened), constraints (limiting actions to prevent
			errors), and mapping (logical relationships between controls and effects). These
			principles apply to everything from door handles to smartphone interfaces.</p>

		<h3>Professionalizing UX</h3>
		<p>By formalizing the role of UX architect, Norman helped establish <strong>user
			experience as a distinct professional discipline</strong>. Before this, usability work
			was scattered across industrial design, human factors engineering, and cognitive
			psychology. Norman united these under the UX umbrella.</p>

		<h3>Lasting Impact</h3>
		<p>Today, UX design is a <strong>critical field in technology</strong>, and Norman&apos;s
		principles continue to guide how products are designed. He later co-founded the
		<strong>Nielsen Norman Group</strong>, a leading UX research and consulting firm.
		Norman&apos;s philosophy (that good design makes products understandable and usable
		without instruction) continues to shape interface design from <Link
			href="/event/iphone">smartphones</Link> to <Link href="/event/material-design">design
			systems</Link>.</p>

		<p>The term &quot;UX&quot; has become so ubiquitous that it&apos;s easy to forget someone
			had to invent it. Norman gave a name to the discipline, elevating it from a concern to
			a career.</p>
	</>
};
