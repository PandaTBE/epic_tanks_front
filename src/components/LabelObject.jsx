import { useEffect, useRef } from 'react';
import { Label, Tag, Text } from 'react-konva';
import scaleTransform from '../tools/scaleTransform';

const LabelObject = ({ x, y, text, prevX, prevY, scale = 1 }) => {
    const ref = useRef();
    useEffect(() => {
        ref.current.to({
            x: x,
            y: y,
            duration: 0.5,
        });
    }, [x, y, prevX, prevY]);
    return (
        <Label ref={ref} x={prevX} y={prevY} opacity={0.75}>
            <Tag pointerWidth={scaleTransform(20, scale)} pointerHeight={scaleTransform(20, scale)} fill={'white'} />
            <Text fontSize={scaleTransform(30, scale)} text={text} padding={scaleTransform(5, scale)} fill={'black'} />
        </Label>
    );
};

export default LabelObject;
