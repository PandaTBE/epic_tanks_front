import { Group, Image } from 'react-konva';
import tank_image from '../img/tank.png';
import useImage from 'use-image';
import { useEffect, useState } from 'react';

const SingleTank = ({ tank }) => {
    const [image] = useImage(tank_image);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        switch (tank.facing) {
            case 'right':
                setRotation(90);
                break;

            case 'left':
                setRotation(-90);
                break;
            case 'up':
                setRotation(0);
                break;
            case 'down':
                setRotation(180);
                break;

            default:
                setRotation(0);
                break;
        }
    }, [tank]);

    return (
        <Group >
            <Image rotation={rotation} image={image} x={tank.x} y={tank.y} />
        </Group>
    );
};

export default SingleTank;
