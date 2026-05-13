"use client"

import { motion, type Variants, type HTMLMotionProps } from "framer-motion"
import { type ReactNode } from "react"

interface AnimatedWrapperProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

const getVariants = (direction: AnimatedWrapperProps["direction"]): Variants => {
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  }

  return {
    hidden: {
      opacity: 0,
      ...directionOffset[direction || "up"],
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  }
}

export function AnimatedDiv({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className,
  ...props
}: AnimatedWrapperProps) {
  return (
    <motion.div
      variants={getVariants(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedText({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className,
  ...props
}: AnimatedWrapperProps) {
  return (
    <motion.span
      variants={getVariants(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={{ display: "inline-block" }}
      {...props}
    >
      {children}
    </motion.span>
  )
}

// For staggered children animations
export function AnimatedContainer({
  children,
  className,
  staggerDelay = 0.1,
  ...props
}: AnimatedWrapperProps & { staggerDelay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: staggerDelay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedItem({
  children,
  className,
  direction = "up",
  ...props
}: Omit<AnimatedWrapperProps, "delay">) {
  return (
    <motion.div
      variants={getVariants(direction)}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
