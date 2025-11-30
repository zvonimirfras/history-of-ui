import Link from 'next/link';

import type { Event } from './types';

export const windows_phone_metro: Event = {
	id: 'windows-phone-metro',
	time: '2010-10-21',
	name: 'Windows Phone 7 (Metro Design)',
	companies: ['Microsoft'],
	labels: ['key-point', 'mobile', 'flat-design', 'operating-system'],
	summary: 'Windows Phone 7 introduced Metro design language with its bold typography, flat' +
		'colors, and live tiles, pioneering flat design principles years before iOS 7 and' +
		'influencing modern interface design.',
	description: <>
		<p>Windows Phone 7, launched in October 2010, introduced <strong>Metro design language</strong>
			(later called Modern UI), a radically different approach to mobile interfaces that
			emphasized <strong>typography, flat design, and motion</strong> over skeuomorphism.</p>

		<h3>Authentically Digital</h3>
		<p>Metro&apos;s philosophy was &quot;authentically digital&quot;: no fake textures or
			materials, no pretending pixels were leather or wood. Typography became the hero with
			large, bold Segoe font. Flat, colorful tiles replaced gradients and shadows.
			Grid-based layouts provided clean, organized structure. Content mattered more than
			chrome: UI elements were minimized. Motion design with smooth transitions and animations
			brought everything to life.</p>

		<h3>Live Tiles: Information at a Glance</h3>
		<p>Windows Phone&apos;s Live Tiles were revolutionary. Unlike static app icons, tiles
			updated with real information: your calendar showed upcoming appointments, weather
			showed current conditions, photos cycled through recent images. You could resize tiles
			(small, medium, or large) and arrange your start screen however you wanted. Live Tiles
			made the home screen informative, not just decorative, a concept that influenced
			Android widgets and iOS&apos;s later widget system.</p>

		<h3>Flat Design, Three Years Early</h3>
		<p>Metro embraced flat design three years before <Link href="/event/ios-7">iOS 7</Link>. No
			skeuomorphism, no leather, no wood, no fake materials. Bold, flat colors with vibrant
			accents. Minimal shadows: depth came through layering, not fake 3D. Clean iconography
			with simple, geometric shapes. While Apple and Google were still rendering realistic
			textures, Microsoft was already living in the flat design future.</p>

		<h3>Typography as Interface</h3>
		<p>Metro made typography the primary design element. Huge headers often extended
			off-screen, hinting at more content. The clean, modern Segoe font was everywhere. Type
			hierarchy through size and weight conveyed importance without decoration. Words were
			preferred over symbols where possible. It was bold, confident, and unlike anything else
			in mobile.</p>

		<p>Windows Phone introduced horizontal panoramic views where content extended beyond the
			screen (swipe to see more). Parallax scrolling made headers move slower than content,
			creating a sense of depth. The UI felt expansive, not cramped, giving you a sense of
			space even on a small screen.</p>

		<h3>The App Gap That Killed It</h3>
		<p>Despite brilliant design, Windows Phone failed. The &quot;app gap&quot; was fatal:
			Instagram, Snapchat, and all Google apps were missing. Microsoft arrived late to a
			market where iOS and Android were already dominant. Developers resisted supporting a
			third ecosystem. Hardware partners struggled: Nokia bet everything on Windows Phone and
			lost, while other manufacturers remained uncommitted. Microsoft discontinued Windows
			Phone in 2017.</p>

		<h3>Design Philosophy That Won</h3>
		<p>Metro&apos;s design principles influenced the entire industry. <Link
			href="/event/ios-7">iOS 7</Link> adopted flat design. <Link
			href="/event/material-design">Material Design</Link> followed suit. Modern web design
			embraced flat, typography-focused interfaces. Windows 8/10/11 evolved Metro into
			Fluent Design. Windows Phone proved that mobile interfaces didn&apos;t have to mimic
			physical objects. Metro showed that digital interfaces could be &quot;authentically
			digital&quot;, embracing the medium rather than imitating the physical world.</p>

		<p>Though Windows Phone failed, its design philosophy won, influencing every major platform.
			Metro demonstrated that bold typography, flat colors, and motion could create
			beautiful, functional interfaces. It was ahead of its time, pioneering flat design when
			everyone else was still doing skeuomorphism. Windows Phone&apos;s design was so good
			that its failure is often cited as proof that great design alone can&apos;t save a
			product.</p>
	</>
};
