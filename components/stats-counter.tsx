"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface StatsCounterProps {
  value: number
  suffix?: string
  label: string
}

export function StatsCounter({ value, suffix = "", label }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startValue = 0
      const duration = 2000
      const step = (value / duration) * 10

      const counter = setInterval(() => {
        startValue += step

        if (startValue > value) {
          setCount(value)
          clearInterval(counter)
        } else {
          setCount(startValue)
        }
      }, 10)

      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      })

      return () => clearInterval(counter)
    }
  }, [isInView, value, controls])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls} className="text-center p-4">
      <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F04339] to-[#FF6B5B]">
        {count.toFixed(value % 1 === 0 ? 0 : 2)}
        {suffix}
      </div>
      <div className="text-[#484848] mt-2">{label}</div>
    </motion.div>
  )
}
