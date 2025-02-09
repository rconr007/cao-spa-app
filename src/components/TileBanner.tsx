'use client'

import { useEffect, useRef } from 'react'

interface TileBannerProps {
    text: string
    speed?: number
}

export function TileBanner({ text, speed = 50 }: TileBannerProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        const content = contentRef.current
        if(!container || !content) return

        const clone = content.cloneNode(true) as HTMLDivElement
        container.appendChild(clone)

        let position = 0
        let lastTime = performance.now()
        let animationFrameId: number

        const animate = (currentTime: number) => {
            const deltaTime = currentTime - lastTime
            const pixelsPerFrame = (speed * deltaTime) / 1000

            position -= pixelsPerFrame
            if(-position >= content.offsetWidth) {
                position =0
            }
            container.style.transform = `translate3d(${-position}px, 0, 0)`

            lastTime = currentTime
            animationFrameId = requestAnimationFrame(animate)
        }

        animationFrameId = requestAnimationFrame(animate)

        return () => {
            if(animationFrameId) {
                cancelAnimationFrame(animationFrameId)
            }
        }
    }, [text, speed])

    return (
        <div
            className="fixed h-[100px] bg-black overflow-hidden"
            style={{
                bottom: '65%',
                right: '-48%',
                width: '150%',
                transform: 'rotate(-30deg) translateY(50%)',
                transformOrigin: 'bottom left',
                zIndex: 0
            }}
        >
            <div className="absolute inset-0 flex items-center">
                <div 
                    ref={containerRef} 
                    className="whitespace-nowrap"
                    style={{ willChange: 'transform'}}
                >
                    <div 
                        ref={contentRef} 
                        className="text-white text-3xl font-bold tracking-wider"
                    >
                        <span className="text-white text-3xl font-bold tracking-wider">
                            {text}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

TileBanner.displayName = 'TileBanner'
// export default TileBanner({ text: 'Welcome to Caonabo', speed: 50 })
