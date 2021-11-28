import { useEffect, useRef } from 'react';
import { Label, Tag, Text } from 'react-konva';

const LabelObject = ({ x, y, text, prevX, prevY }) => {
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
            <Tag fill={'white'} />
            <Text text={text} padding={5} fill={'black'} />
        </Label>
    );
};

export default LabelObject;
