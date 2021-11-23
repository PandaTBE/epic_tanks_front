/**
 * Функция. Служит для втискивания плана в Stage по ширине.
 * @param e Событие
 * @param {number} containerWidth - Ширина панели Draw
 */
const fitStage = (e, containerWidth) => {
    const layersArr = Array.from(e.currentTarget.children);
    const imageWidth = layersArr.filter((item) => item.attrs.id === 'imageLayer')[0].children[0].attrs.image
        ?.naturalWidth;
    const stageScale = containerWidth / imageWidth / 2;
    return stageScale;
};

export default fitStage;
