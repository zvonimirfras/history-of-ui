import { Search } from '@carbon/icons-react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState, useMemo } from 'react';
import { EventTile } from '../components/event-tile';
import { events, type Label } from '../components/events';

const Home: NextPage = () => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedDecade, setSelectedDecade] = useState('all');
	const [selectedLabel, setSelectedLabel] = useState('all');

	// decode fresh page load on github pages (from 404.html)
	useEffect(() => {
		const l = window.location;

		if (l.hostname !== 'historyofui.com' && l.hostname !== 'www.historyofui.com') {
			// we're not on github pages so we don't do the github pages hack
			return;
		}
		if (l.search[1] === '/') {
			const decoded = l.search.slice(1).split('&').map((s) => s.replace(/~and~/g, '&')).join('/');
			router.push(decoded);
		}
	}, [router]);

	// Memoized filtered events for performance
	const filteredEvents = useMemo(() => {
		return events.filter(event => {
			const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				event.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
				event.companies?.some(company => company.toLowerCase().includes(searchTerm.toLowerCase())) ||
				event.people?.some(person => person.toLowerCase().includes(searchTerm.toLowerCase()));

			const year = new Date(event.time).getFullYear();
			const decade = Math.floor(year / 10) * 10;
			const matchesDecade = selectedDecade === 'all' || decade.toString() === selectedDecade;

			const matchesLabel = selectedLabel === 'all' || event.labels.includes(selectedLabel as Label);

			return matchesSearch && matchesDecade && matchesLabel;
		}).sort((a, b) => a.time < b.time ? -1 : 1);
	}, [searchTerm, selectedDecade, selectedLabel]);

	// Memoized filter options for performance
	const filterOptions = useMemo(() => {
		const decades = Array.from(new Set(events.map(event => Math.floor(new Date(event.time).getFullYear() / 10) * 10))).sort();
		const labels = Array.from(new Set(events.flatMap(event => event.labels))).filter(Boolean);
		return { decades, labels };
	}, []);

	const hasActiveFilters = searchTerm || selectedDecade !== 'all' || selectedLabel !== 'all';

	const clearAllFilters = () => {
		setSearchTerm('');
		setSelectedDecade('all');
		setSelectedLabel('all');
	};

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
			{/* Search and Filter Controls */}
			<div className='mb-12'>
				<div className='bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200/50 overflow-hidden'>
					{/* Search Bar - Prominent */}
					<div className='p-6 pb-5 bg-gradient-to-br from-white to-amber-50/30'>
						<div className='relative group'>
							<div className='absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none'>
								<Search className='h-5 w-5 text-slate-400 group-focus-within:text-amber-600 transition-colors' />
							</div>
							<input
								type='text'
								placeholder='Search by name, company, or person...'
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className={`block w-full pl-12 pr-5 py-4 text-base border-2 border-slate-200 
									rounded-xl bg-white focus:ring-2 focus:ring-amber-400/50 focus:border-amber-500 
									transition-all duration-200 placeholder:text-slate-400 shadow-sm`}
							/>
							{searchTerm && (
								<button
									onClick={() => setSearchTerm('')}
									className={`absolute inset-y-0 right-0 pr-4 flex items-center 
										text-slate-400 hover:text-slate-600 transition-colors`}
									aria-label='Clear search'>
									<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
									</svg>
								</button>
							)}
						</div>
					</div>

					{/* Filters - Compact Pills */}
					<div className='px-6 py-5 border-t border-slate-100 bg-slate-50/50'>
						<div className='flex flex-wrap items-center gap-3'>
							<span className='text-xs font-semibold text-slate-500 uppercase tracking-wider'>Filter by:</span>

							{/* Decade Pills */}
							<div className='flex flex-wrap gap-2'>
								<button
									onClick={() => setSelectedDecade('all')}
									className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
										selectedDecade === 'all'
											? 'bg-amber-600 text-white shadow-sm'
											: 'bg-white text-slate-600 border border-slate-200 hover:border-amber-300 hover:bg-amber-50'
									}`}>
									All Eras
								</button>
								{filterOptions.decades.slice(0, 5).map(decade => (
									<button
										key={decade}
										onClick={() => setSelectedDecade(decade.toString())}
										className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
											selectedDecade === decade.toString()
												? 'bg-amber-600 text-white shadow-sm'
												: 'bg-white text-slate-600 border border-slate-200 hover:border-amber-300 hover:bg-amber-50'
										}`}>
										{decade}s
									</button>
								))}
								{filterOptions.decades.length > 5 && (
									<select
										value={selectedDecade}
										onChange={(e) => setSelectedDecade(e.target.value)}
									className={`px-3 py-1.5 text-xs font-medium rounded-full bg-white text-slate-600 
										border border-slate-200 hover:border-amber-300 hover:bg-amber-50 
										transition-all duration-200 cursor-pointer`}>
										<option value='all'>More...</option>
										{filterOptions.decades.slice(5).map(decade => (
											<option key={decade} value={decade.toString()}>
												{decade}s
											</option>
										))}
									</select>
								)}
							</div>

							<div className='w-px h-6 bg-slate-200'></div>

							{/* Category Pills */}
							<div className='flex flex-wrap gap-2'>
								<button
									onClick={() => setSelectedLabel('all')}
									className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
										selectedLabel === 'all'
											? 'bg-slate-700 text-white shadow-sm'
											: 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
									}`}>
									All Types
								</button>
								{filterOptions.labels.slice(0, 3).map(label => (
									<button
										key={label}
										onClick={() => setSelectedLabel(label)}
										className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
											selectedLabel === label
												? 'bg-slate-700 text-white shadow-sm'
												: 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
										}`}>
										{label.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
									</button>
								))}
								{filterOptions.labels.length > 3 && (
									<select
										value={selectedLabel}
										onChange={(e) => setSelectedLabel(e.target.value)}
									className={`px-3 py-1.5 text-xs font-medium rounded-full bg-white text-slate-600 
										border border-slate-200 hover:border-slate-300 hover:bg-slate-50 
										transition-all duration-200 cursor-pointer`}>
										<option value='all'>More...</option>
										{filterOptions.labels.slice(3).map(label => (
											<option key={label} value={label}>
												{label.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
											</option>
										))}
									</select>
								)}
							</div>
						</div>

						{/* Results & Clear */}
						<div className='mt-4 flex items-center justify-between'>
							<div className='text-sm text-slate-600'>
								<span className='font-semibold text-amber-700'>{filteredEvents.length}</span>
								<span className='mx-1.5'>of</span>
								<span className='font-medium'>{events.length}</span>
								<span className='ml-1'>events</span>
							</div>
							{hasActiveFilters && (
								<button
									onClick={clearAllFilters}
									className='text-xs font-medium text-slate-500 hover:text-amber-600 underline transition-colors'>
									Clear all filters
								</button>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Timeline Container */}
			<div className='relative'>
				{/* Central Timeline Line */}
				<div className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full 
					bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700`}></div>

				{/* Mobile Timeline Line */}
				<div className='lg:hidden absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700'></div>

				{/* Timeline Events */}
				<div className='space-y-16 lg:space-y-24'>
					{filteredEvents.map((event, index) => {
						const isLeft = index % 2 === 0;
						return (
							<div key={event.id} className='relative flex items-center'>
								{/* Desktop Timeline Marker - centered vertically */}
								<div className={`hidden lg:block absolute left-1/2 top-1/2 transform 
									-translate-x-1/2 -translate-y-1/2 z-10`}>
									<div className={`relative w-5 h-5 bg-gradient-to-br from-amber-500 to-amber-700 
										rounded-full shadow-lg border-2 border-white group cursor-pointer hover:scale-125 
										transition-transform duration-300`}>
										<div className={`absolute inset-0 bg-amber-400 rounded-full opacity-0 
											group-hover:opacity-50 blur-sm`}></div>
									</div>
								</div>

								{/* Mobile Timeline Marker */}
							<div className='lg:hidden absolute left-6 top-8 transform -translate-x-1/2 z-10'>
								<div className={`w-4 h-4 bg-gradient-to-br from-amber-500 to-amber-700 
									rounded-full shadow-md border-2 border-white`}></div>
								</div>

								{/* Event Card - positioned on left or right side */}
								<div className={`ml-14 lg:ml-0 ${
									isLeft ? 'lg:w-1/2 lg:pr-16' : 'lg:w-1/2 lg:pl-16 lg:ml-auto'
								}`}>
									<div className='animate-fade-in-up' style={{ animationDelay: `${index * 50}ms` }}>
										<EventTile event={event} side={isLeft ? 'left' : 'right'} />
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* Timeline Footer */}
			{filteredEvents.length === 0 && (
				<div className='text-center mt-16'>
					<div className='inline-block px-8 py-6 bg-amber-50 backdrop-blur-sm rounded-2xl border border-amber-200/50'>
						<p className='text-slate-600 text-sm'>
							No events match your search criteria.<br />
							Try adjusting your filters to explore more innovations.
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
