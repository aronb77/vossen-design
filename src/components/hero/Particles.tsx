"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Particles() {
    const count = 5000;
    const mesh = useRef<THREE.Points>(null);
    const { mouse } = useThree();

    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
            // eslint-disable-next-line react-hooks/purity
            p[i] = (Math.random() - 0.5) * 10;
        }
        return p;
    }, [count]);

    const positions = useRef(points);

    useFrame((state) => {
        if (!mesh.current) return;

        const time = state.clock.getElapsedTime();
        const positionsArray = mesh.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const x = positions.current[i3];
            const y = positions.current[i3 + 1];
            // const z = positions.current[i3 + 2]; // Unused

            // Movement based on time
            positionsArray[i3] = x + Math.sin(time * 0.3 + y) * 0.5;
            positionsArray[i3 + 1] = y + Math.cos(time * 0.2 + x) * 0.5;

            // Mouse interaction
            const dx = mouse.x * 5 - positionsArray[i3];
            const dy = mouse.y * 5 - positionsArray[i3 + 1];
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 2) {
                positionsArray[i3] += dx * 0.01;
                positionsArray[i3 + 1] += dy * 0.01;
            }
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={points.length / 3}
                    array={points}
                    itemSize={3}
                    args={[points, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#FF4500"
                sizeAttenuation={true}
                transparent={true}
                opacity={0.8}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
