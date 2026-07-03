import { o as __toESM } from "../_runtime.mjs";
import { a as require_react, o as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { a as motion, r as useMotionValue, t as useSpring } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Magnetic-BI7i_mLA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Magnetic({ children, strength = .35 }) {
	const ref = (0, import_react.useRef)(null);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
