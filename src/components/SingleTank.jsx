import { Group, Image } from 'react-konva';
import tank_image from '../img/tank.png';
import useImage from 'use-image';
import { useEffect, useState } from 'react';
import LabelObject from './LabelObject';

const SingleTank = ({ tank, scale }) => {
    const [image] = useImage(tank_image);
    const [ref, setRef] = useState(null);

    useEffect(() => {
        if (ref) {
            let rotation = 0;
            switch (tank.facing) {
                case 'right':
                    rotation = 90;
                    break;

                case 'left':
                    rotation = -90;
                    break;
                case 'up':
                    rotation = 0;
                    break;
                case 'down':
                    rotation = 180;
                    break;

                default:
                    rotation = 0;
                    break;
            }
            ref.to({
                x: tank.x + (ref.width() || 0),
                y: tank.y + (ref.height() || 0),
                offsetX: (ref.width() || 0) / 2,
                offsetY: (ref.height() || 0) / 2,
                rotation,
                duration: 0.3,
            });
        }
    }, [ref, tank]);

    return (
        <Group>
            <Image
                ref={(node) => setRef(node)}
                image={image}
                offsetX={(ref?.width() || 0) / 2}
                offsetY={(ref?.height() || 0) / 2}
                x={tank.prevState.x + (ref?.width() || 0)}
                y={tank.prevState.y + (ref?.height() || 0)}
            />
            <LabelObject
                x={tank.x + (ref?.width() || 0) + 20}
                y={tank.y + (ref?.height() || 0) + 20}
                prevX={tank.prevState.x + (ref?.width() || 0) + 20}
                prevY={tank.prevState.y + (ref?.height() || 0) + 20}
                text={tank.entity_name}
                scale={scale}
            />
        </Group>
    );
};

export default SingleTank;
