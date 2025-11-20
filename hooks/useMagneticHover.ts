"use client";
import { useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export function useMagneticHover(strength: number = 12) {
	const ref = useRef<HTMLDivElement | null>(null);
	const mx = useSpring(0, { stiffness: 300, damping: 20, mass: 0.3 });
	const my = useSpring(0, { stiffness: 300, damping: 20, mass: 0.3 });

	const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const dx = e.clientX - (rect.left + rect.width / 2);
		const dy = e.clientY - (rect.top + rect.height / 2);
		mx.set((dx / rect.width) * strength);
		my.set((dy / rect.height) * strength);
	};

	const onMouseLeave = () => {
		mx.set(0);
		my.set(0);
	};

	return { ref, mx, my, onMouseMove, onMouseLeave };
}
