/**
 * Находит размер в зависимости от масштаба
 */
const scaleTransform = (size, scale, factor = 0.5) => {
    return size / Math.pow(scale, factor);
};

export default scaleTransform;
