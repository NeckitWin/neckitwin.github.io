import { useEffect, useState, useRef } from "react";

interface RandomBackgroundProps {
    emoji: string;
    colors: string[];
    count?: number;
    fontSize?: string;
}

const RandomBackground = ({ emoji, colors, count = 20, fontSize = "1rem" }: RandomBackgroundProps) => {
    const [positions, setPositions] = useState<Array<{ x: number; y: number; rotation: number; color: string }>>([]);
    const positionsRef = useRef(positions);

    useEffect(() => {
        if (positionsRef.current.length === 0) {
            const generatePositions = () => {
                const generatedPositions = Array.from({ length: count }).map(() => ({
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    rotation: Math.random() * 360,
                    color: colors[Math.floor(Math.random() * colors.length)],
                }));
                positionsRef.current = generatedPositions;
                setPositions(generatedPositions);
            };

            generatePositions();
        }
    }, [colors, count]);

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            pointerEvents: "none",
        }}>
            {positions.map((pos, index) => (
                <span
                    key={index}
                    style={{
                        position: "absolute",
                        top: `${pos.y}%`,
                        left: `${pos.x}%`,
                        transform: `rotate(${pos.rotation}deg)`,
                        color: pos.color,
                        fontSize,
                    }}
                >
                    {emoji}
                </span>
            ))}
        </div>
    );
};

export default RandomBackground;
