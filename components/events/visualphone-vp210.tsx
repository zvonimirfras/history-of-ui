import Link from 'next/link';

import type { Event } from './types';

export const visualphone_vp210: Event = {
	id: 'visualphone-vp210',
	time: '1999-05',
	name: 'Visualphone VP210',
	companies: ['Kyocera Fineceramics'],
	labels: ['key-point', 'mobile'],
	summary: 'First phone with a front facing camera and the first mobile color videophone. It' +
		'could send 2 photos per second via Japan&apos;s PHS network system',
	description: <>
		<p>The Kyocera VP-210 VisualPhone was a groundbreaking device that introduced the
			<strong>front-facing camera</strong> to mobile phones, a feature that would later become
			ubiquitous with the rise of selfies and video calls.</p>

		<h3>World&apos;s First Mobile Videophone</h3>
		<p>Released in <strong>Japan in May 1999</strong>, the VP-210 was the world&apos;s first
			mobile videophone. It featured a 110,000-pixel CMOS camera positioned for self-view, a
			2-inch TFT color LCD with a rotatable display for different viewing angles, video calls
			at 2 frames per second over Japan&apos;s PHS network, storage for 20 images, and email
			capabilities to send photos and messages. These specs seem primitive now, but in 1999,
			they were revolutionary.</p>

		<h3>Ahead of the Infrastructure</h3>
		<p>The VP-210 faced the same problem as the <Link href="/event/ibm-simon">IBM Simon</Link>:
		the technology was ahead of the infrastructure. Japan&apos;s PHS network had limited
		bandwidth, making video calls choppy and expensive. The phone cost around
		<strong>$325</strong>, making it a premium device for early adopters.</p>

		<h3>Pioneering the Front Camera</h3>
		<p>The VP-210&apos;s most important contribution was proving that <strong>users wanted to see
			themselves</strong> when making video calls. The front-facing camera placement became
			standard for all future video-capable phones. This seemed obvious in hindsight but was
			innovative at the time. Most thought the camera should face outward to show what
			you&apos;re looking at.</p>

		<h3>Cultural Influence</h3>
		<p>While video calling didn&apos;t become mainstream until decades later with smartphones
		and apps like FaceTime and Skype, the VP-210 pioneered the concept in Japan. It
		demonstrated that mobile video communication was technically feasible and introduced the
		<strong>front-camera form factor</strong> that billions of people now use daily.</p>

		<h3>Legacy</h3>
		<p>Every <strong>selfie</strong>, every <strong>video call</strong>, and every <strong>face
			filter</strong> on modern smartphones owes a debt to the VP-210. It proved that
			front-facing cameras had value beyond video calls: they enabled self-photography,
			changing social media and visual communication forever. The VP-210 was a glimpse of
			our camera-everywhere future.</p>
	</>
};
