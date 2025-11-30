import Link from 'next/link';

import type { Event } from './types';

export const eisa: Event = {
	id: 'eisa',
	time: '1988',
	name: 'EISA',
	companies: ['Compaq', 'AST', 'Epson', 'Hewlett-Packard', 'NEC', 'Olivetti', 'Tandy', 'Wyse', 'Zenith'],
	labels: ['key-point'],
	summary: 'IBM got a lot of competition from IBM-compatible devices so they came up with Micro' +
		'Channel architecture, their own copyrighted standard - no longer compatible with' +
		'their older versions. It backfired. Nine leading competitors created their own' +
		'standard called Extended Industry Standard Architecture (EISA). EISA was compatible' +
		'with previous versions and easily available for companies to purchase.',
	description: <>
		<h3>IBM&apos;s Strategic Mistake</h3>
		<p>In 1987, IBM released PS/2 computers with <strong>Micro Channel Architecture
			(MCA)</strong>, requiring expensive licensing fees and breaking compatibility with
			existing ISA expansion cards. This alienated the PC clone market that <Link href="/event/ibm-pc">IBM had inadvertently created</Link>.</p>

		<h3>The &quot;Gang of Nine&quot;</h3>
		<p>In response, nine major PC manufacturers, nicknamed the <strong>&quot;Gang of
			Nine&quot;</strong>, collaborated to create EISA in 1988: Compaq (leader of the
			consortium), AST, Epson, Hewlett-Packard, NEC, Olivetti, Tandy, Wyse, and Zenith. It
			was a remarkable show of industry cooperation against IBM&apos;s attempt to regain
			control.</p>

		<h3>Technical Advantages</h3>
		<p>EISA was backward compatible, working with existing ISA cards. It offered 32-bit data
			transfer for improved performance. Bus mastering let devices control the bus directly.
			Automatic configuration simplified setup. These technical improvements mattered, but
			the real victory was strategic: showing that the industry could unite against
			proprietary standards.</p>

		<h3>Strategic Victory</h3>
		<p>This decision to prioritize <strong>compatibility over proprietary control</strong> proved
			crucial. While EISA cards were more expensive and never dominated the market (eventually
			being superseded by PCI), the EISA consortium&apos;s success demonstrated the power of
			industry cooperation and open standards.</p>

		<h3>Power Shift</h3>
		<p>EISA marked a <strong>turning point where IBM lost control</strong> of PC architecture
			standards to the broader industry. It showed that open standards backed by industry
			cooperation could defeat proprietary systems, even from computing giants. This philosophy
			would continue with USB, PCI Express, and other open standards.</p>
	</>
};
