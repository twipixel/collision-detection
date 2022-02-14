export default class Calc {
  static get DEG_TO_RAD() {
    if (this._DEG_TO_RAD) {
      return this._DEG_TO_RAD;
    }
    this._DEG_TO_RAD = Math.PI / 180;
    return this._DEG_TO_RAD;
  }


  static get RAD_TO_DEG() {
    if (this._RAD_TO_DEG) {
      return this._RAD_TO_DEG;
    }
    this._RAD_TO_DEG = 180 / Math.PI;
    return this._RAD_TO_DEG;
  }


  static get DEG180_TO_RAD() {
    if (this._DEG180_TO_RAD) {
      return this._DEG180_TO_RAD;
    }
    this._DEG180_TO_RAD = 180 * Math.PI / 180;
    return this._DEG180_TO_RAD;
  }


  static toRadians(degree) {
    return degree * this.DEG_TO_RAD;
  }


  static toDegrees(radians) {
    return radians * this.RAD_TO_DEG;
  }


  static getRotation(centerPoint, mousePoint) {
    const dx = mousePoint.x - centerPoint.x;
    const dy = mousePoint.y - centerPoint.y;
    const radians = Math.atan2(dy, dx);
    return Calc.toDegrees(radians);
  }


  /**
   * viewport와 backgroundImage비율을 구합니다.
   * 화면 사이즈에 맞춰 이미지 사이즈를 구할때 사용합니다.
   * min 비율로 이미지 사이즈를 구하면 화면 안에 이미지가 모두 노출되고
   * max 비율로 이미지 사이즈를 구하면 화면에 꽉 차게 노출됩니다.
   * @param backgroundImage
   * @param viewport
   * @returns {{min: number, max: number}}
   */
  static getScale(backgroundImage, viewport) {
    const scaleX = viewport.width / backgroundImage.width;
    const scaleY = viewport.height / backgroundImage.height;

    if (scaleX < scaleY) {
      return {min: scaleX, max: scaleY};
    } else {
      return {min: scaleY, max: scaleX};
    }
  }


  /**
   * 화면 사이즈에 맞도록 이미지 비율을 구해 사이즈를 설정합니다.
   * @param backgroundImage 배경이미지 사진
   * @param viewport 현재 화면 사이즈
   * @returns {PIXI.Rectangle}
   */
  static getSizeFitInBounds(backgroundImage, viewport) {
    const scale = this.getScale(backgroundImage, viewport);
    return new PIXI.Rectangle(0, 0, scale.min * backgroundImage.width, scale.min * backgroundImage.height);
  }


  /**
   * anchor가 중앙인 객체 좌표를 anchor가 0,0인 좌표로 변환합니다.
   * @param shape {PIXI.Point|*}
   */
  static convertCenterPointToLeftTopPoint(shape) {
    return new PIXI.Point(shape.x - shape.width / 2, shape.y - shape.height / 2);
  }


  /**
   * 회전하는 좌표 구하기
   * @param pivot 사각형의 중심점
   * @param point 계산하고 싶은 포인트
   * @param angle 회전각 (디그리)
   * @returns {{x: (number|*), y: (number|*)}}
   */
  static getRotationPointWithPivot(pivot, point, angle) {
    const diffX = point.x - pivot.x;
    const diffY = point.y - pivot.y;
    const dist = Math.sqrt(diffX * diffX + diffY * diffY);
    const ca = Math.atan2(diffY, diffX) * 180 / Math.PI;
    const na = ((ca + angle) % 360) * Math.PI / 180;
    const x = pivot.x + dist * Math.cos(na);
    const y = pivot.y + dist * Math.sin(na);
    return {x: x, y: y};
  }


  /**
   * 회전각과 사각형의 포인트를 넘겨주면 회전된 사각형의 포인트를 전달합니다.
   * @param pivot 사각형의 pivot(anchor) 포인트
   * @param rectanglePoints 사각형 좌표 (leftTop, rightTop, rightBottom, leftBottom)
   * @param degrees 각도 degress
   * @returns {{lt: ({x, y}|{x: (number|*), y: (number|*)}), rt: ({x, y}|{x: (number|*), y: (number|*)}), rb: ({x, y}|{x: (number|*), y: (number|*)}), lb: ({x, y}|{x: (number|*), y: (number|*)})}}
   */
  static getRotationPointsWithPivot(pivot, rectanglePoints, degrees) {
    const lt = Calc.getRotationPointWithPivot(pivot, rectanglePoints.lt, degrees);
    const rt = Calc.getRotationPointWithPivot(pivot, rectanglePoints.rt, degrees);
    const rb = Calc.getRotationPointWithPivot(pivot, rectanglePoints.rb, degrees);
    const lb = Calc.getRotationPointWithPivot(pivot, rectanglePoints.lb, degrees);
    return {lt: lt, rt: rt, rb: rb, lb: lb};
  }


  /**
   * 사각형의 좌표를 가지고 바운드를 계산합니다.
   * @param rotationPoints 사각형 좌표 (leftTop, rightTop, rightBottom, leftBottom)
   * @returns {{x: number, y: number, width: number, height: number}}
   */
  static getBoundsByRotationPoints(rotationPoints) {
    const x1 = Math.min(rotationPoints.lt.x, rotationPoints.rt.x, rotationPoints.rb.x, rotationPoints.lb.x);
    const y1 = Math.min(rotationPoints.lt.y, rotationPoints.rt.y, rotationPoints.rb.y, rotationPoints.lb.y);
    const x2 = Math.max(rotationPoints.lt.x, rotationPoints.rt.x, rotationPoints.rb.x, rotationPoints.lb.x);
    const y2 = Math.max(rotationPoints.lt.y, rotationPoints.rt.y, rotationPoints.rb.y, rotationPoints.lb.y);
    return {x: x1, y: y1, width: x2 - x1, height: y2 - y1};
  }


  static getBoundsByPoints(points) {
    return {x: points.lt.x, y: points.lt.y, width: points.rb.x - points.lt.x, height: points.rb.y - points.lt.y};
  }


  static deltaTransformPoint(matrix, point) {
    const dx = point.x * matrix.a + point.y * matrix.c + 0;
    const dy = point.x * matrix.b + point.y * matrix.d + 0;
    return {x: dx, y: dy};
  }


  static getScaleX(matrix) {
    return Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b);
  }


  static getScaleY(matrix) {
    return Math.sqrt(matrix.c * matrix.c + matrix.d * matrix.d);
  }


  static getSkewX(matrix) {
    const px = Calc.deltaTransformPoint(matrix, {x: 0, y: 1});
    return ((180 / Math.PI) * Math.atan2(px.y, px.x) - 90);
  }


  static getSkewY(matrix) {
    const py = Calc.deltaTransformPoint(matrix, {x: 1, y: 0});
    return ((180 / Math.PI) * Math.atan2(py.y, py.x));
  }


  static snapTo(num, snap) {
    return Math.round(num / snap) * snap;
  }


  /**
   * Degrees 로 바꾸고 round 처리 하는 이유는
   * 각도가 90, 180, 270로 딱 안떨어지고 +, - 오차가 나는 경우가 있어 round 처리하면 딱 떨어집니다.
   * @param angle (라디안)
   */
  static toRoundDegreesByRadians(angle) {
    return Math.round(Calc.toDegrees(angle));
  }
}