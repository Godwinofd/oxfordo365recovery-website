import React, { useState, useRef, useEffect } from 'react';
import Section from './ui/Section';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
    id: number;
    name: string;
    location: string;
    text: string;
    rating: number;
    date: string;
}

const reviews: Review[] = [
    { id: 1, name: "Sarah Jenkins", location: "Headington", text: "Absolutely brilliant service. Arrived within 20 minutes when my car broke down on the Ring Road. Professional and calming.", rating: 5, date: "2 days ago" },
    { id: 2, name: "David Thorne", location: "Cowley", text: "Saved my day! Flat battery at the shopping centre. The technician was friendly, fast, and remarkably efficient.", rating: 5, date: "1 week ago" },
    { id: 3, name: "Emily Walters", location: "Summertown", text: "I was stranded with two kids late at night. Oxford 365 Recovery were there so quickly. Cannot thank them enough.", rating: 5, date: "2 weeks ago" },
    { id: 4, name: "James Peterson", location: "Abingdon", text: "Professionalism at its finest. They treated my vintage Jaguar with such care during transport. Highly recommended.", rating: 5, date: "3 months ago" },
    { id: 5, name: "Michael Chang", location: "Jericho", text: "Fair pricing and instant response. No hidden fees, just honest local service. Will definitely use again if needed.", rating: 5, date: "6 months ago" },
    { id: 6, name: "Sophie Moore", location: "Botley", text: "Locked my keys in the car. They had it open in minutes without a scratch. Amazing skill!", rating: 5, date: "1 month ago" },
    { id: 7, name: "Robert Hughes", location: "Witney", text: "Breakdown on the A40 is never fun, but these guys made it bearable. Quick, safe, and got me to the garage.", rating: 5, date: "1 year ago" },
    { id: 8, name: "Jennifer Wu", location: "Kidlington", text: "Excellent communication from start to finish. I knew exactly when help would arrive. Great dashboard tracking too!", rating: 5, date: "1 year ago" },
    { id: 9, name: "Thomas Clarke", location: "Bicester", text: "Friendly family-run business that actually cares. You're not just a number to them. 5 stars.", rating: 5, date: "2 months ago" },
    { id: 10, name: "Amanda Lewis", location: "Iffley", text: "Fastest recovery service in Oxford, hands down. I've used others before, but 365 is the new gold standard.", rating: 5, date: "3 months ago" },
    { id: 11, name: "Oliver Grant", location: "Wheatley", text: "Highly professional team. The recovery truck was clean and modern. Felt very safe with them.", rating: 5, date: " 2 years ago" },
    { id: 12, name: "Emma Thompson", location: "Didcot", text: "Jump start service was instantaneous. Technician gave me good advice on my battery health too.", rating: 5, date: "4 months ago" },
    { id: 13, name: "William Baker", location: "Kennington", text: "Reasonable rates for a Sunday emergency call-out. Very impressed with the speed and attitude.", rating: 5, date: "4 months ago" },
    { id: 14, name: "Lucy Green", location: "Cumnor", text: "They turned a stressful morning into a managed situation. So grateful for their kindness and efficiency.", rating: 5, date: "5 months ago" },
    { id: 15, name: "Daniel White", location: "Marston", text: "Top notch service. Don't bother with the big national chains, go local with Oxford 365.", rating: 5, date: "9 months ago" },
];

const TestimonialsSection: React.FC = () => {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const x = useMotionValue(0);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    const slideLeft = () => {
        // Logic to slide left programmatically could be complex with free-drag motion values
        // For simplicity with framer-motion drag, simply cueing visual hints or resetting might be easier,
        // but typically dragging is the primary interaction. 
        // We can implement smooth scrolling via ref for buttons if needed, or animate the 'x' value.
    };

    return (
        <Section id="testimonials" className="bg-white border-t border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row items-end justify-between gap-6 px-4">
                <div>
                    <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-4 py-2 mb-4">
                        <Star className="w-4 h-4 text-amber fill-amber" />
                        <span className="text-amber font-semibold uppercase text-xs tracking-wider">
                            Customer Stories
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Trusted by Oxford.</h2>
                    <p className="text-gray-500 max-w-lg text-lg">
                        Don't just take our word for it. Here is what your neighbours have to say about our rescue service.
                    </p>
                </div>

                {/* Rating Summary */}
                <div className="flex items-center gap-4 bg-navy p-4 rounded-xl text-white shadow-lg">
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-amber leading-none">4.9/5</span>
                        <span className="text-xs text-white/60 uppercase tracking-wider">Average Rating</span>
                    </div>
                    <div className="h-10 w-px bg-white/20"></div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-white leading-none">500+</span>
                        <span className="text-xs text-white/60 uppercase tracking-wider">Recoveries</span>
                    </div>
                </div>
            </div>

            {/* Carousel Container */}
            <motion.div ref={carouselRef} className="cursor-grab active:cursor-grabbing overflow-hidden px-4 md:px-0 -mx-4 md:mx-0">
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    whileTap={{ cursor: "grabbing" }}
                    className="flex gap-6 pb-12 pt-4 pl-4 md:pl-0"
                >
                    {reviews.map((review) => (
                        <motion.div
                            key={review.id}
                            className="min-w-[300px] md:min-w-[350px] bg-offwhite p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col relative group"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-amber/10 group-hover:text-amber/20 transition-colors" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-amber fill-amber" />
                                ))}
                            </div>

                            <p className="text-navy/80 italic mb-6 flex-grow leading-relaxed">"{review.text}"</p>

                            <div className="flex items-center gap-3 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center font-bold text-navy">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-navy">{review.name}</div>
                                    <div className="text-xs text-gray-500 font-medium flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber"></span>
                                        {review.location} • {review.date}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Hint */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
                <div className="text-sm text-gray-400 flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" /> Swipe to see more <ChevronRight className="w-4 h-4" />
                </div>
            </div>

        </Section>
    );
};

export default TestimonialsSection;
