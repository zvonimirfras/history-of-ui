import Link from 'next/link';
import { prettyDate } from '../tools';

/**
 * Badge configuration for different label types
 *
 * To add a new badge:
 * 1. Add a new entry with the label key (must match labels in events.tsx)
 * 2. Set priority (1 = highest, shown first)
 * 3. Configure text, styling, and optional icon
 * 4. Badges are automatically displayed when events have matching labels
 *
 * Max 3 badges shown per event, sorted by priority
 */
const LABEL_BADGES: Record<string, { text: string; className: string; icon?: string; priority: number }> = {
	'key-point': {
		text: 'Milestone',
		className: 'px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold rounded-full shadow-sm',
		icon: '★',
		priority: 1
	},
	'first-mouse': {
		text: 'First Mouse',
		className: 'px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200',
		priority: 2
	},
	'first-gui': {
		text: 'First GUI',
		className: 'px-2 py-1 bg-sky-100 text-sky-800 text-xs font-semibold rounded-md border border-sky-200',
		priority: 2
	},
	'graphics': {
		text: 'Graphics',
		className: 'px-2 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-md border border-purple-200',
		priority: 3
	},
	'input-device': {
		text: 'Input Device',
		className: 'px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-md border border-blue-200',
		priority: 3
	},
	'operating-system': {
		text: 'OS',
		className: 'px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-md border border-indigo-200',
		priority: 3
	},
	'web': {
		text: 'Web',
		className: 'px-2 py-1 bg-cyan-100 text-cyan-800 text-xs font-semibold rounded-md border border-cyan-200',
		priority: 3
	}
};

export const EventTile = ({ event, side='left' }: any) => {
	// Get relevant badges for this event, sorted by priority
	const eventBadges = event.labels
		.map((label: string) => ({ label, config: LABEL_BADGES[label] }))
		.filter(({ config }: any) => config)
		.sort((a: any, b: any) => a.config.priority - b.config.priority)
		.slice(0, 3); // Show max 3 badges
	return <Link href={`event/${event.id}`}>
		<a className='group block'>
			<div className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl 
				transition-all duration-500 overflow-hidden border border-slate-200 
				hover:border-amber-400/50 hover:-translate-y-2 relative`}>
				{/* Subtle gradient overlay on hover */}
				<div className={`absolute inset-0 bg-gradient-to-br from-amber-50/30 to-transparent 
					opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

				{/* Card Header */}
				<div className='relative bg-gradient-to-r from-slate-50 to-amber-50/30 px-6 py-4 border-b border-slate-100'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center space-x-3'>
							<div className='relative'>
								<div className='w-2 h-2 bg-amber-600 rounded-full'></div>
							</div>
							<div>
								<div className='font-["Fraunces"] text-base font-semibold text-amber-900'>
									{prettyDate(event.time)}
								</div>
								<div className='text-xs text-slate-500 font-medium'>
									{new Date(event.time).getFullYear()}
								</div>
							</div>
						</div>
						<div className='flex items-center gap-2'>
							{eventBadges.map(({ label, config }: any) => (
								<span key={label} className={config.className}>
									{config.icon && <>{config.icon} </>}{config.text}
								</span>
							))}
						</div>
					</div>
				</div>

				{/* Card Content */}
				<div className='relative p-6 lg:p-7'>
					<h3 className={`font-["Fraunces"] text-2xl font-bold text-slate-900 mb-5 
						group-hover:text-amber-900 transition-colors duration-300 leading-snug`}>
						{event.name}
					</h3>

					{/* Content with text wrapping around image */}
					<div>
						{/* Mobile image - full width */}
						{event.thumbnail && (
							<div className='lg:hidden mb-6'>
								<div className={`relative overflow-hidden rounded-2xl shadow-2xl 
									group-hover:shadow-3xl transition-all duration-500`}>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src={event.thumbnail}
										alt={event.thumbnailAlt}
										className={`w-full h-48 object-cover group-hover:scale-110 
											transition-transform duration-700`}
									/>
									<div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent 
										to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
									<div className={`absolute bottom-4 left-4 right-4 text-white opacity-0 
										group-hover:opacity-100 transition-opacity duration-500`}>
										<div className='text-xs font-semibold bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2'>
											{event.thumbnailAlt}
										</div>
									</div>
								</div>
							</div>
						)}

						{/* Desktop: Image floated, text wraps around */}
						{event.thumbnail && (
							<div className={`hidden lg:block ${
								side === 'left' ? 'float-right ml-5 mb-4' : 'float-left mr-5 mb-4'
							} w-44`}>
								<div className={`relative overflow-hidden rounded-xl shadow-lg 
									group-hover:shadow-xl transition-all duration-500 border border-slate-200`}>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src={event.thumbnail}
										alt={event.thumbnailAlt}
										className={`w-full h-44 object-cover group-hover:scale-105 
											transition-transform duration-500`}
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent'></div>
								</div>
							</div>
						)}

						{/* Text content - wraps naturally around floated image */}
						<div>
							<p className='text-slate-700 leading-relaxed mb-5 text-base'>
								{event.summary}
							</p>

							{/* Companies and People */}
							{(event.companies?.length > 0 || event.people?.length > 0) && (
								<div className='space-y-3 clear-both pt-2'>
									{event.companies?.length > 0 && (
										<div>
											<h4 className='text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2'>
												Companies
											</h4>
											<div className='flex flex-wrap gap-2'>
												{event.companies.map((company: string, index: number) => (
													<span
														key={index}
														className={`px-3 py-1.5 bg-slate-100 text-slate-800 text-xs rounded-lg 
															font-medium border border-slate-200 hover:bg-slate-200 
															transition-colors duration-200`}>
														{company}
													</span>
												))}
											</div>
										</div>
									)}
									{event.people?.length > 0 && (
										<div>
											<h4 className='text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2'>
												Key People
											</h4>
											<div className='flex flex-wrap gap-2'>
												{event.people.map((person: string, index: number) => (
													<span
														key={index}
														className={`px-3 py-1.5 bg-amber-50 text-amber-900 text-xs rounded-lg 
															font-medium border border-amber-200 hover:bg-amber-100 
															transition-colors duration-200`}>
														{person}
													</span>
												))}
											</div>
										</div>
									)}
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Card Footer */}
				<div className='relative px-6 py-4 bg-slate-50/50 border-t border-slate-100'>
					<div className='flex items-center justify-between'>
						<span className='text-xs text-slate-500 font-medium'>Read full story</span>
						<div className='flex items-center space-x-2'>
							<div className={`w-7 h-7 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full 
								flex items-center justify-center transform group-hover:translate-x-1 
								group-hover:scale-110 transition-all duration-300 shadow-sm`}>
								<svg className='w-3.5 h-3.5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M9 5l7 7-7 7' />
								</svg>
							</div>
						</div>
					</div>
				</div>

			</div>
		</a>
	</Link>;
};
