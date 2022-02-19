import KeyCode from '../../src/consts/KeyCode';
import Mouse from '../../src/utils/Mouse';
import PastelColor from '../../src/utils/PastelColor';

const gridX = 20
  , gridY = 20
  , gridWidth = 30
  , gridHeight = 30
  , space = 1
  , tree = new rbush();

let countX = 0
  , countY = 0
  , gridXY = []
  , graphXY = []
  , graphics = []
  , selected = {}
  , selectedGraphics = {}
  , animateGraphics = []
  , animationId = 0
  , selectedColor = PastelColor.generate().hex;

export default class Test extends PIXI.Container {
  constructor(renderer) {
    super();

    this.interactive = true;
    this.renderer = renderer;
    this.canvas = this.renderer.view;
    this.context = this.canvas.getContext('2d');

    this.initialize();
    this.initializeGUI();
    this.addEvent();
    // this.testRBush();
  }

  initialize() {
    this.createRandomBlock();
    this.createGrid();
    this.displayGrid();
  }

  initializeGUI() {
    const gui = this.gui = new dat.GUI();
    gui.width = 300;
    const settings = {};
    settings.reset = () => {
      this.reset();
    };
    gui.add(settings, 'reset');
  }

  createRandomBlock() {
    tree.clear();
    const {x: countX, y: countY} = this.getCount();
    const blockCount = Math.floor((countX * countY) / 6);
    for (let i = 0; i < blockCount; i += 1) {
      const randomX = Math.floor(Math.random() * countX);
      const randomY = Math.floor(Math.random() * countY);
      const {x, y} = this.getPoint(randomX, randomY);
      const bbox = {minX: x + space, minY: y + space, maxX: x + gridWidth - space, maxY: y + gridHeight - space};
      tree.insert(bbox);
    }
  };

  testRBush() {
    const bbox1 = {minX: 0, minY: 0, maxX: 20, maxY: 20};
    const bbox2 = {minX: 40, minY: 90, maxX: 60, maxY: 110};
    const bbox3 = {minX: 0, minY: 0, maxX: 60, maxY: 110};
    const bbox4 = {minX: 120, minY: 120, maxX: 130, maxY: 130};
    tree.insert(bbox1);
    console.log(tree.collides(bbox4));
  }

  createGrid() {
    gridXY = [];
    graphXY = [];
    const {x: countX, y: countY} = this.getCount();
    let i, j;
    for (i = 0; i < countX; i += 1) {
      gridXY[i] = [];
      const graphY = graphXY[i] = [];
      const xIndex = i - 1 < 0 ? 0 : i;
      for (j = 0; j < countY; j += 1) {
        const yIndex = j - 1 < 0 ? 0 : j;
        const {x, y} = this.getPoint(xIndex, yIndex);
        gridXY[i][j] = [x, y, gridWidth, gridHeight];
        graphY[j] = Number(!tree.collides({minX: x, minY: y, maxX: x + gridWidth, maxY: y + gridHeight}));
      }
    }
  }

  displayGrid() {
    if (!graphXY) return;
    const blockColor = PastelColor.generate().hex;
    graphics = [];
    graphXY.forEach((graphY, xIndex) => {
      graphY.forEach((state, yIndex) => {
        const g = new PIXI.Graphics();
        const {x, y} = this.getPoint(xIndex, yIndex);
        g.lineStyle(1, 0xFFFFFF, 0.3);
        if (state === 0) g.beginFill(blockColor, 0.3);
        g.drawRect(x, y, gridWidth, gridHeight);
        this.addChild(g);
        graphics.push(g);
      });
    });
  }

  clear() {
    if (!graphics) return;
    graphics.forEach((g) => {
      this.removeChild(g);
    });
    graphics.length = 0;
    gridXY.length = 0;
    graphXY.length = 0;
    gridXY = [];
    graphXY = [];
    graphics = [];

    Object.keys(selectedGraphics).forEach(key => {
      this.removeChild(selectedGraphics[key]);
      selectedGraphics[key] = null;
    });

    this.clearAnimateGraphics();
  }

  reset() {
    this.clear();
    this.initialize();
  };

  runSearch(graph, start, end, options) {
    if (!(graph instanceof Graph)) {
      graph = new Graph(graph);
    }
    start = graph.grid[start[0]][start[1]];
    end = graph.grid[end[0]][end[1]];

    var sTime = new Date(),
      result = astar.search(graph, start, end, options),
      eTime = new Date();
    return {
      result: result,
      text: (result) => {
        return result.map(function (node) {
          return "(" + node.x + "," + node.y + ")";
        }).join("");
      },
      time: (eTime - sTime)
    };
  }

  showRoute(route) {
    this.clearAnimateRoute();
    this.animateRoute(route.result.map(({x: xIndex, y: yIndex}) => {
      return this.getPoint(xIndex, yIndex)
    }));
  }

  animateRoute(coordinates) {
    const steps = coordinates.length
      , loopTime = 1
      , times = steps * loopTime;

    let counter = 0
      , prevLoopCount = 0;

    const animate = () => {
      const step = counter % steps
        , loopCount = Math.floor(counter / steps)
        , coordinate = coordinates[step]
        , alpha = 0.1 + (step / steps)
        , graphic = this.getCell(selectedColor, alpha);

      if (prevLoopCount !== loopCount) {
        return;
        // prevLoopCount = loopCount;
        // color = PastelColor.generate().hex;
      }

      graphic.x = coordinate.x;
      graphic.y = coordinate.y;
      this.addChild(graphic);
      animateGraphics.push(graphic);

      if (counter < times) {
        animationId = requestAnimationFrame(animate);
      }
      counter = counter + 1;
    };
    animate();
  }

  clearAnimateRoute() {
    cancelAnimationFrame(animationId);
    this.clearAnimateGraphics();
  }

  clearAnimateGraphics() {
    animateGraphics.forEach((g) => {
      this.removeChild(g);
    });
    animateGraphics.length = 0;
    animateGraphics = [];
  }

  drawCell(xIndex, yIndex, color, alpha = 0.3) {
    const {x, y} = this.getPoint(xIndex, yIndex);
    const graphic = this.getCell(color, alpha);
    graphic.x = x;
    graphic.y = y;
    this.addChild(graphic);
    return graphic;
  }

  getCell(color, alpha = 0.3) {
    const graphic = new PIXI.Graphics();
    graphic
      .lineStyle(1, 0xFFFFFF, alpha)
      .beginFill(color, alpha)
      .drawRect(0, 0, gridWidth, gridHeight);
    return graphic;
  }

  showSelect() {
    this.clearSelectedGraphics();
    this.showSelectedGraphics();
  }

  showSelectedGraphics() {
    Object.entries(selected).forEach(([key, selectedIndex]) => {
      if (!selectedIndex) return;
      const [xIndex, yIndex] = selectedIndex;
      selectedGraphics[key] = this.drawCell(xIndex, yIndex, selectedColor, 0.1);
    });
  }

  clearSelectedGraphics() {
    Object.entries(selectedGraphics).forEach(([key, graphic]) => {
      this.removeChild(graphic);
      selectedGraphics[key] = null;
    });
  }

  findWay() {
    const result = this.runSearch(graphXY, selected.start, selected.end, {closest: true, diagonal: false});
    this.showRoute(result);
  }

  getCount() {
    if (!this.canvas) return {x: 0, y: 0};
    const {width, height} = this.canvas;
    countX = Math.floor(width / gridWidth) - 1;
    countY = Math.floor(height / gridHeight) - 1;
    return {
      x: countX,
      y: countY,
    }
  }

  isBlock(xIndex, yIndex) {
    const {x, y} = this.getPoint(xIndex, yIndex);
    const bbox = {minX: x, minY: y, maxX: x + gridWidth, maxY: y + gridHeight};
    return tree.collides(bbox);
  }

  getPoint(xIndex, yIndex) {
    return {x: gridX + gridWidth * xIndex, y: gridY + gridHeight * yIndex};
  }

  getIndex({x, y}) {
    const xIndex = Math.floor((x - gridX) / gridWidth)
      , yIndex = Math.floor((y - gridY) / gridHeight);
    return {xIndex, yIndex}
  }

  addEvent() {
    this.keyUpListener = this.onKeyUp.bind(this);
    window.addEventListener('keyup', this.keyUpListener);

    this.listenerClick = this.onClick.bind(this);
    this.on('click', this.listenerClick);
  }

  update() {
  }

  resize() {
    this.hitArea = new PIXI.Rectangle(0, 0, this.canvas.width, this.canvas.height);
  }

  onClick() {
    const {xIndex, yIndex} = this.getIndex(Mouse.global);
    const isBlock = this.isBlock(xIndex, yIndex);
    if (selected.start && selected.end) {
      selected.start = null;
      selected.end = null;
    }

    if (!selected.start && !isBlock) {
      selectedColor = PastelColor.generate().hex;
      selected.start = [xIndex, yIndex];
    } else if (!selected.end && !isBlock) {
      selected.end = [xIndex, yIndex];
    }

    if (selected.start && selected.end) {
      this.findWay();
    }
    this.showSelect();
  }

  onKeyUp(e) {
    switch (e.keyCode) {
      case KeyCode.SPACE:
        break;
    }
  }
}