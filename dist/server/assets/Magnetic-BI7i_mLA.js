import { useRef } from "react";
import { jsx } from "react/jsx-runtime";
import { motion, useMotionValue, useSpring } from "framer-motion";
//#region src/components/Magnetic.tsx
function Magnetic({ children, strength = .35 }) {
	const ref = useRef(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, {
		stiffness: 180,
		damping: 14,
		mass: .4
	});
	const sy = useSpring(y, {
		stiffness: 180,
		damping: 14,
		mass: .4
	});
	return /* @__PURE__ */ jsx(motion.div, {
		ref,
		style: {
			x: sx,
			y: sy
		},
		onMouseMove: (e) => {
			const el = ref.current;
			if (!el) return;
			const r = el.getBoundingClientRect();
			x.set((e.clientX - (r.left + r.width / 2)) * strength);
			y.set((e.clientY - (r.top + r.height / 2)) * strength);
		},
		onMouseLeave: () => {
			x.set(0);
			y.set(0);
		},
		className: "inline-block",
		children
	});
}
//#endregion
export { Magnetic as t };
