export const motionEasing = {
	primary: [0.2, 0.8, 0.2, 1],
	bounce: [0.34, 1.56, 0.64, 1],
	soft: [0.22, 1, 0.36, 1]
};

export const motionDurations = {
	short: 0.4,
	medium: 0.8,
	long: 1.2
};

export const stagger = {
	container: (staggerChildren = 0.08, delayChildren = 0) => ({
		initial: {},
		animate: {
			transition: {
				staggerChildren,
				delayChildren
			}
		}
	}),
	item: {
		initial: { opacity: 0, y: 20 },
		animate: {
			opacity: 1,
			y: 0,
			transition: { duration: motionDurations.short, ease: motionEasing.primary }
		}
	}
};

export const fadeUp = (distance = 24, duration = motionDurations.medium) => ({
	initial: { opacity: 0, y: distance },
	animate: { opacity: 1, y: 0, transition: { duration, ease: motionEasing.primary } },
	exit: { opacity: 0, y: -distance * 0.5, transition: { duration: motionDurations.short, ease: motionEasing.soft } }
});

export const scaleIn = (duration = motionDurations.short) => ({
	initial: { opacity: 0, scale: 0.96 },
	animate: { opacity: 1, scale: 1, transition: { duration, ease: motionEasing.soft } }
});

export const slideFromLeft = (distance = 60) => ({
	initial: { opacity: 0, x: -distance },
	animate: { 
		opacity: 1, 
		x: 0, 
		transition: { 
			type: 'spring',
			stiffness: 120,
			damping: 25,
			mass: 0.4
		} 
	},
	exit: { opacity: 0, x: -distance * 0.5, transition: { duration: motionDurations.short, ease: motionEasing.soft } }
});

export const slideFromRight = (distance = 60) => ({
	initial: { opacity: 0, x: distance },
	animate: { 
		opacity: 1, 
		x: 0, 
		transition: { 
			type: 'spring',
			stiffness: 120,
			damping: 25,
			mass: 0.4
		} 
	},
	exit: { opacity: 0, x: distance * 0.5, transition: { duration: motionDurations.short, ease: motionEasing.soft } }
});

export const springSoft = { type: 'spring', stiffness: 120, damping: 18, mass: 0.4 };

export const springBouncy = { type: 'spring', stiffness: 200, damping: 16, mass: 0.3 };

export const viewport = { once: true, amount: 0.25 };
