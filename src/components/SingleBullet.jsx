import { useEffect, useState } from 'react';
import { Group, Image } from 'react-konva';
import useImage from 'use-image';
import bullet_image from '../img/bullet.png';

const SingleBullet = ({ bullet }) => {
    const [image] = useImage(bullet_image);
    const [ref, setRef] = useState(null);

    useEffect(() => {
        if (ref) {
            let rotation = 0;
            switch (bullet.facing) {
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
                x: bullet.x + (ref.width() || 0),
                y: bullet.y + (ref.height() || 0),
                offsetX: (ref.width() || 0) / 2,
                offsetY: (ref.height() || 0) / 2,
                rotation,
                duration: 0.5,
            });
        }
    }, [ref, bullet]);

    return (
        <Group>
            <Image
                ref={(node) => setRef(node)}
                image={image}
                offsetX={(ref?.width() || 0) / 2}
                offsetY={(ref?.height() || 0) / 2}
                x={bullet.prevState.x + (ref?.width() || 0)}
                y={bullet.prevState.y + (ref?.height() || 0)}
            />
        </Group>
    );
};

export default SingleBullet;
