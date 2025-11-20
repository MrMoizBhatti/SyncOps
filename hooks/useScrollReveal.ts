"use client";
import { useMemo } from 'react';
import { fadeUp, viewport } from "../lib/motionConfig";

export function useScrollReveal(distance: number = 24) {
	return useMemo(() => ({
		variants: fadeUp(distance),
		initial: 'initial' as const,
		whileInView: 'animate' as const,
		viewport
	}), [distance]);
}
