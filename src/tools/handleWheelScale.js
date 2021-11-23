/**
 * Зум колесом мыши.
 */
const handleWheelScale = (e) => {
    const wheelScaleCoeff = 1.05;

    const stage = e.target.getStage();
    const pointerPosition = stage?.getPointerPosition();
    if (stage && pointerPosition) {
        const oldScale = stage.scaleX();
        const mousePointTo = {
            x: pointerPosition.x / oldScale - stage.x() / oldScale,
            y: pointerPosition.y / oldScale - stage.y() / oldScale,
        };

        let newScale = oldScale;
        newScale = e.evt.deltaY < 0 ? oldScale * wheelScaleCoeff : oldScale / wheelScaleCoeff;

        return {
            stageScale: newScale,
            stageX: -(mousePointTo.x - pointerPosition.x / newScale) * newScale,
            stageY: -(mousePointTo.y - pointerPosition.y / newScale) * newScale,
        };
    } else
        return {
            stageScale: 1,
            stageX: 0,
            stageY: 0,
        };
};

export default handleWheelScale;
