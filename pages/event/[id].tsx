import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowLeft } from "@carbon/icons-react";
import { events } from "../../components/events";
import { prettyDate } from "../../tools";

// Badge configuration for hero section - only show high priority badges here
const HERO_BADGE_CONFIG: Record<string, { text: string; className: string; icon?: string }> = {
	'key-point': {
		text: 'Key Milestone',
		className: 'px-4 py-1.5 bg-amber-500/20 backdrop-blur-sm text-amber-200 text-sm font-bold rounded-full border border-amber-400/30',
		icon: '★'
	}
};

const Event = () => {
	const router = useRouter();
	const { id } = router.query;

	const event = events.find((event) => event.id === id);

	if (!event) {
		return (
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<div className='text-center'>
					<div className='bg-amber-50 border border-amber-200 rounded-2xl p-8'>
						<h1 className='font-["Fraunces"] text-2xl font-bold text-amber-900 mb-4'>Event Not Found</h1>
						<p className='text-slate-600 mb-6'>We couldn't find the event you're looking for.</p>
						<Link href='/'>
							<a className='inline-flex items-center px-6 py-3 bg-gradient-to-br from-amber-600 to-orange-700 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium'>
								<ArrowLeft className='w-5 h-5 mr-2' />
								Back to Timeline
							</a>
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
			{/* Back Button */}
			<div className='mb-10'>
				<Link href='/'>
					<a className='inline-flex items-center text-amber-700 hover:text-amber-900 transition-colors duration-300 font-medium'>
						<ArrowLeft className='w-4 h-4 mr-2' />
						Back to Timeline
					</a>
				</Link>
			</div>

			{/* Event Header */}
			<div className='bg-white/95 rounded-2xl shadow-lg overflow-hidden border border-slate-200'>
				{/* Hero Section */}
				<div className='bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 px-8 py-10 text-white relative overflow-hidden'>
					<div className='absolute inset-0 opacity-10'>
						<div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full blur-3xl'></div>
					</div>
					<div className='relative'>
						<div className='flex flex-wrap items-center gap-4 mb-6'>
							<div className='flex items-center space-x-3'>
								<div className='w-2.5 h-2.5 bg-amber-400 rounded-full'></div>
								<span className='font-["Fraunces"] text-xl font-semibold'>
									{prettyDate(event.time)}
								</span>
							</div>
							{event.labels
								.map((label: string) => ({ label, config: HERO_BADGE_CONFIG[label] }))
								.filter(({ config }: any) => config)
								.map(({ label, config }: any) => (
									<span key={label} className={config.className}>
										{config.icon && <>{config.icon} </>}{config.text}
									</span>
								))
							}
						</div>
						<h1 className='font-["Fraunces"] text-4xl md:text-6xl font-bold mb-6 leading-tight'>
							{event.name}
						</h1>
						<p className='text-xl text-slate-200 leading-relaxed max-w-3xl'>
							{event.summary}
						</p>
					</div>
				</div>

				{/* Content Section */}
				<div className='p-8 lg:p-10'>
					{/* Companies and People */}
					{((event.companies && event.companies.length > 0) || (event.people && event.people.length > 0)) && (
						<div className='mb-10 p-6 bg-slate-50 rounded-xl border border-slate-100'>
							<h3 className='font-["Fraunces"] text-lg font-semibold text-slate-900 mb-5'>Key Players</h3>
							<div className='grid md:grid-cols-2 gap-6'>
								{event.companies && event.companies.length > 0 && (
									<div>
										<h4 className='text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3'>Companies</h4>
										<div className='flex flex-wrap gap-2'>
											{event.companies.map((company: string, index: number) => (
												<span key={index} className='px-3 py-2 bg-white text-slate-800 text-sm rounded-lg font-medium border border-slate-200'>
													{company}
												</span>
											))}
										</div>
									</div>
								)}
								{event.people && event.people.length > 0 && (
									<div>
										<h4 className='text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3'>Key People</h4>
										<div className='flex flex-wrap gap-2'>
											{event.people.map((person: string, index: number) => (
												<span key={index} className='px-3 py-2 bg-amber-50 text-amber-900 text-sm rounded-lg font-medium border border-amber-200'>
													{person}
												</span>
											))}
										</div>
									</div>
								)}
							</div>
						</div>
					)}

					{/* Main Content */}
					<div className='prose prose-lg max-w-none'>
						<div className='text-slate-700 leading-relaxed text-lg'>
							{event.description || event.summary}
						</div>
					</div>

					{/* Labels */}
					{event.labels.length > 0 && (
						<div className='mt-10 pt-8 border-t border-slate-200'>
							<h4 className='text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4'>Categories</h4>
							<div className='flex flex-wrap gap-2'>
								{event.labels.map((label: string, index: number) => (
									<span key={index} className='px-4 py-2 bg-slate-100 text-slate-700 text-sm rounded-lg font-medium border border-slate-200'>
										{label.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
									</span>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Event;
