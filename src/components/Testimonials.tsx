import { useState } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
	{
		id: 1,
		name: 'David Martinez',
		position: 'Senior Project Manager, Turner Construction',
		image: 'https://randomuser.me/api/portraits/men/45.jpg',
		quote:
			'EstimatingHub’s team delivered precise estimates and valuable insights that helped us win several bids. Their professionalism and responsiveness are top-notch.',
		rating: 5,
		project: 'Downtown Office Tower',
	},
	{
		id: 2,
		name: 'Lisa Patel',
		position: 'Director of Development, UrbanBuild Group',
		image: 'https://randomuser.me/api/portraits/women/68.jpg',
		quote:
			'We relied on EstimatingHub for our residential projects and were impressed by their accuracy and quick turnaround. Highly recommended for any construction firm.',
		rating: 5,
		project: 'Greenview Apartments',
	},
	{
		id: 3,
		name: 'Robert Lee',
		position: 'CEO, Lee & Sons Contractors',
		image: 'https://randomuser.me/api/portraits/men/53.jpg',
		quote:
			'Their estimators are knowledgeable and detail-oriented. We’ve saved both time and money by partnering with EstimatingHub for our industrial builds.',
		rating: 4,
		project: 'Logistics Center Expansion',
	},
	{
		id: 4,
		name: 'Emily Thompson',
		position: 'Lead Architect, Visionary Designs',
		image: 'https://randomuser.me/api/portraits/women/72.jpg',
		quote:
			'The support and expertise from EstimatingHub made a real difference in our healthcare facility project. Their team is always available and ready to help.',
		rating: 5,
		project: 'Riverside Medical Center',
	},
];

const Testimonials = () => {
	const [activeTestimonial, setActiveTestimonial] = useState(1);

	return (
		<section
			id="testimonials"
			className="py-20 bg-gradient-to-br from-construction-blue to-construction-blue/90 relative overflow-hidden"
		>
			{/* Abstract background shapes */}
			<div className="absolute top-0 left-0 w-72 h-72 bg-construction-orange/10 rounded-full filter blur-3xl"></div>
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-construction-orange/10 rounded-full filter blur-3xl"></div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-16">
					<span className="text-white font-medium uppercase tracking-wider mb-2 block bg-construction-orange/30 py-1 px-4 rounded-full inline-block backdrop-blur-sm">
						Testimonials
					</span>
					<h2 className="text-3xl font-poppins font-bold mb-3 text-white">
						What Our Clients Say
					</h2>
					<div className="w-20 h-1 bg-construction-orange mx-auto mb-6"></div>
					<p className="text-lg text-gray-100 max-w-2xl mx-auto">
						Hear from the clients who've experienced the difference our services
						make
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="relative">
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.id}
								className={`transition-all duration-500 glass-card rounded-xl p-8 md:p-10 shadow-2xl ${
									activeTestimonial === testimonial.id
										? 'opacity-100 scale-100 z-20'
										: 'opacity-0 scale-95 absolute top-0 left-0 right-0'
								}`}
							>
								<Quote className="h-16 w-16 text-construction-orange/30 absolute top-6 right-6" />

								<div className="flex flex-col md:flex-row items-center md:items-start gap-6">
									<div className="flex-shrink-0">
										<img
											src={testimonial.image}
											alt={testimonial.name}
											className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover"
										/>
									</div>
									<div className="flex-1">
										<blockquote className="text-white text-lg md:text-xl mb-6 relative italic">
											"{testimonial.quote}"
										</blockquote>

										<div className="flex items-center gap-2 mb-3">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													size={18}
													className={
														i < testimonial.rating
															? 'fill-construction-orange text-construction-orange'
															: 'text-white/30'
													}
												/>
											))}
										</div>

										<div className="text-white">
											<p className="font-semibold text-xl">
												{testimonial.name}
											</p>
											<p className="text-gray-200 mb-1">
												{testimonial.position}
											</p>
											<p className="text-sm text-construction-orange">
												Project: {testimonial.project}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="flex justify-center mt-10 space-x-3">
						{testimonials.map((testimonial) => (
							<button
								key={testimonial.id}
								className={`transition-all ${
									activeTestimonial === testimonial.id
										? 'bg-white w-10 h-3 rounded-full'
										: 'bg-white/50 hover:bg-white/70 w-3 h-3 rounded-full'
								}`}
								onClick={() => setActiveTestimonial(testimonial.id)}
								aria-label={`View testimonial from ${testimonial.name}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
