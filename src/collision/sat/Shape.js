import Painter from './../utils/Painter';


export default class Shape
{
    constructor()
    {
        this.interactive = true;
    }


    /**
     * 축에 투영하여 분리가 있으면 true 반환(충돌되지 않았다면 true 반환)
     * @param otherShape
     * @returns {boolean}
     */
    collidesWith(shape)
    {
        var axes = this.getAxes().concat(shape.getAxes());
        return !this.separationOnAxes(axes, shape);
    }


    separationOnAxes(axes, shape)
    {
        for (var i=0; i < axes.length; ++i) {
            var axis = axes[i];
            var projection1 = shape.project(axis);
            var projection2 = this.project(axis);

            if (! projection1.overlaps(projection2)) {
                return true; // don't have to test remaining axes
            }
        }
        return false;
    }
}