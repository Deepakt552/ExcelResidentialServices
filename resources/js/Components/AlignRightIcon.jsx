import { motion, useAnimation } from "framer-motion";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export const AlignRightIcon = forwardRef(
    ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
        const controls = useAnimation();
        const isControlledRef = useRef(false);

        const DEFAULT_TRANSITION = {
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.3,
        };

        useImperativeHandle(ref, () => {
            isControlledRef.current = true;

            return {
                startAnimation: () => controls.start("animate"),
                stopAnimation: () => controls.start("normal"),
            };
        });

        const handleMouseEnter = useCallback(
            (e) => {
                if (isControlledRef.current) {
                    onMouseEnter?.(e);
                } else {
                    controls.start("animate");
                }
            },
            [controls, onMouseEnter]
        );

        const handleMouseLeave = useCallback(
            (e) => {
                if (isControlledRef.current) {
                    onMouseLeave?.(e);
                } else {
                    controls.start("normal");
                }
            },
            [controls, onMouseLeave]
        );

        return (
            <div
                className={cn(className)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                {...props}
            >
                <svg
                    fill="none"
                    height={size}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width={size}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.line
                        animate={controls}
                        transition={DEFAULT_TRANSITION}
                        variants={{
                            normal: { x1: 3 },
                            animate: { x1: 3 },
                        }}
                        x1="3"
                        x2="21"
                        y1="6"
                        y2="6"
                    />

                    <motion.line
                        animate={controls}
                        transition={DEFAULT_TRANSITION}
                        variants={{
                            normal: { x1: 9 },
                            animate: { x1: 5 },
                        }}
                        x1="9"
                        x2="21"
                        y1="12"
                        y2="12"
                    />

                    <motion.line
                        animate={controls}
                        transition={DEFAULT_TRANSITION}
                        variants={{
                            normal: { x1: 7 },
                            animate: { x1: 12 },
                        }}
                        x1="7"
                        x2="21"
                        y1="18"
                        y2="18"
                    />
                </svg>
            </div>
        );
    }
);

AlignRightIcon.displayName = "AlignRightIcon";
