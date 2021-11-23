import { useState } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import tanks_map from '../img/tanks_map.jpg';
import handleWheelScale from '../tools/handleWheelScale';
import { MapWrapper } from './TanksMap.styles';
import fitStage from '../tools/fitStage';

const TanksMap = () => {
    const [image, status] = useImage(tanks_map);
    const [scale, setScale] = useState({
        stageScale: 1,
        stageX: 0,
        stageY: 0,
    });

    const onStageDragStart = (e) => {
        const container = e.target.getStage().container();
        container.style.cursor = 'grabbing';
    };

    const onStageDragEnd = (e) => {
        const container = e.target.getStage().container();
        container.style.cursor = 'default';
    };

    const onStageWheel = (e) => {
        e.evt.preventDefault();
        setScale(handleWheelScale(e));
    };

    const onStageDblClick = (e) => {
        e.evt.preventDefault();
        const stageScale = fitStage(e, window.innerWidth);
        setScale({
            stageScale,
            stageX: 0,
            stageY: 0,
        });
    };

    return (
        <MapWrapper>
            <Stage
                draggable
                onDragStart={onStageDragStart}
                onDragEnd={onStageDragEnd}
                width={window.innerWidth}
                height={window.innerHeight}
                scaleX={scale.stageScale}
                scaleY={scale.stageScale}
                onWheel={onStageWheel}
                onDblClick={onStageDblClick}
                x={scale.stageX}
                y={scale.stageY}
            >
                <Layer id='imageLayer'>
                    <Image image={image} />
                </Layer>
            </Stage>
        </MapWrapper>
    );
};

export default TanksMap;
