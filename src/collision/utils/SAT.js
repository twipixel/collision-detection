export default class SAT
{
    static collide(shape1, shape2)
    {
        const axes1 = shape1.getAxes();
        const axes2 = shape2.getAxes();
        const axes = axes1.concat(axes2);

        for (var i = 0; i < axes.length; i++) {
            var axis = axes[i];
            var proj1 = shape1.project(axis);
            var proj2 = shape2.project(axis);

            var MTV;
            var minOverlap = Number.MAX_VALUE; // amount of smallest overlap
            // check overlap
            if (proj1.min <= proj2.max && proj1.max >= proj2.min) {

                var overlap = Math.min(proj2.max - proj1.min, proj1.max - proj2.min);

                if (overlap < minOverlap) {
                    minOverlap = overlap;
                    MTV = new PIXI.Vector(axis.x * overlap, axis.y * overlap);
                }

            } else {
                // not overlapping
                return false;
            }
        }

        return MTV;
    }
}