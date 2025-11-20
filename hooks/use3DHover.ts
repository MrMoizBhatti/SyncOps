"use client";
import { useRef } from 'react';
import { useMotionValue, useTransform } from 'framer-motion';

export function use3DHover(tilt: number = 10) {
	const ref = useRef<HTMLDivElement | null>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const rotateX = useTransform(y, [0, 1], [tilt, -tilt]);
	const rotateY = useTransform(x, [0, 1], [-tilt, tilt]);

	const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const px = (e.clientX - rect.left) / rect.width; // 0..1
		const py = (e.clientY - rect.top) / rect.height; // 0..1
		x.set(px);
		y.set(py);
	};

	const onMouseLeave = () => {
		x.set(0.5);
		y.set(0.5);
	};

	return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}
