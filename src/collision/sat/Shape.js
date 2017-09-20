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
    collideWidth(otherShape)
    {
        console.log('드래그 도형 축', this.getAxes());
        console.log('다른 도형 축', otherShape.getAxes());
        const axes = this.getAxes().concat(otherShape.getAxes());
        return !this.separationOnAxes(axes, otherShape);
    }


    separationOnAxes(axes, otherShape)
    {
        for (var i=0; i < axes.length; ++i)
        {
            const axis = axes[i];
            const projection1 = otherShape.project(axis);
            const projection2 = this.project(axis);
            if (!projection1.overlaps(projection2)) {
                return true;
            }
        }

        return false;
    }


    /**
     * 충돌감지에 사용되는 축 반환, 도형의 모든 빗변에 대한 축을 반환합니다.
     * @returns {string}
     */
    getAxes()
    {
        throw 'getAxes() not implemented';
    }


    /**
     * 축에 다각형의 변을 투영합니다.
     * @param axis
     * @returns {string}
     */
    projection(axis)
    {
        throw 'project(axis) not implemented';
    }
}