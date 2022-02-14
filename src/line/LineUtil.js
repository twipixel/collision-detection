/**
 * https://stackoverrun.com/ko/q/4433844
 */
export default class LineUtil {
  static intersection(lineSegment1, lineSegment2) {
    const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (denom == 0.0) { // Lines are parallel.
      return null;
    }
    const x1 = lineSegment1.x1.x
      , x2 = lineSegment1.x2.x
      , x3 = lineSegment2.x1.x
      , x4 = lineSegment2.x2.x
      , y1 = lineSegment1.x1.y
      , y2 = lineSegment1.x2.y
      , y3 = lineSegment2.x1.y
      , y4 = lineSegment2.x2.y;
    // calculate the direction of the lines
    const uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
    const uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
    // if uA and uB are between 0-1, lines are colliding
    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
      // optionally, draw a circle where the lines meet
      const x = x1 + (uA * (x2 - x1));
      const y = y1 + (uA * (y2 - y1));
      return {x, y};
    }
    return null;
  }
}