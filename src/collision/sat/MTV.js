export default class MTV
{
    /**
     * 최소 이동 벡터
     * Minimum Translation Vector (MTV)
     * @param axis
     * @param overlap
     */
    constructor(overlap = undefined, axis = undefined)
    {
        this.axis = axis;
        this.overlap = overlap;
    }
}