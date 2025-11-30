import type { ReactNode } from 'react';

export type Label =
	| 'key-point'
	| 'first-gui'
	| 'first-mouse'
	| 'first-computer'
	| 'first-laptop'
	| 'operating-system'
	| 'mobile'
	| 'web'
	| 'browser'
	| 'smartphone'
	| 'pda'
	| 'app-store'
	| 'tablet'
	| 'touchscreen'
	| 'flat-design'
	| 'design-system'
	| 'spatial-computing';

export interface Event {
	id: string;
	time: string;
	name: string;
	companies?: string[];
	people?: string[];
	labels: Label[];
	thumbnail?: string;
	thumbnailAlt?: string;
	summary: string;
	description?: ReactNode;
}

