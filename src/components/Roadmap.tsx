// src/components/Roadmap.tsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface RoadmapItem {
	phase: string;
	title: string;
	items: string[];
	completed?: boolean;
}

const roadmapData: RoadmapItem[] = [
	{
		phase: "Phase 1",
		title: "The Crawl Begins (Q4 2024 - Q1 2025)",
		items: [
			"Token Launch: Officially launch SNeL on Snek.fun",
			"Community Build-Up: Create the SNeL Discord, Twitter, TikTok, and Telegram",
			"Branding & Identity: Finalize branding, logos, and website (snel.fun)",
			"Bonding Curve Milestone: Get past the bonding curve on Snek.fun to secure long-term stability",
			"Verification & Listings: Apply for token verification on leading Cardano platforms (TapTools)",
		],
		completed: true,
	},
	{
		phase: "Phase 2",
		title: "Slow and Steady Gains (Q1 - Q2 2025)",
		items: [
			"Get the buy bot working",
			"Get SNeL ElizaOS working with the news API plugin",
			"Add our SNeL ElizaOS character to have capability to talk in discord with a /snel or @snel",
			"Have our SNeL ElizaOS character write blog posts on the website",
		],
		completed: false,
	},
];

export default function Roadmap() {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<section id='roadmap' className='w-full bg-primary py-16'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h2 className='text-4xl font-bold text-center text-black mb-12'>
					Roadmap
				</h2>

				<div className='relative' ref={containerRef}>
					{/* Timeline line */}
					<div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black/20' />

					<div className='space-y-12'>
						{roadmapData.map((phase, index) => (
							<motion.div
								key={phase.phase}
								initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, ease: "easeOut" }}
								className={`relative flex ${
									index % 2 === 0 ? "flex-row" : "flex-row-reverse"
								} items-center`}
							>
								{/* Content */}
								<div className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
									<div className='bg-silver p-6 rounded-lg shadow-lg'>
										<div className='flex items-center mb-4'>
											<h3 className='text-2xl font-bold text-black'>
												{phase.phase}
											</h3>
											{phase.completed && (
												<span className='ml-2 text-green-500'>✓</span>
											)}
										</div>
										<h4 className='text-lg font-semibold text-black mb-4'>
											{phase.title}
										</h4>
										<ul className='space-y-3'>
											{phase.items.map((item, itemIndex) => (
												<motion.li
													key={itemIndex}
													initial={{ opacity: 0, y: 20 }}
													whileInView={{ opacity: 1, y: 0 }}
													viewport={{ once: true }}
													transition={{ delay: itemIndex * 0.2 }}
													className='flex items-start text-black'
												>
													<span className='mr-2'>•</span>
													{item}
												</motion.li>
											))}
										</ul>
									</div>
								</div>

								{/* Timeline dot */}
								<div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-black' />
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
