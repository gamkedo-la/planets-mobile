const UNIT_SQUARE_DEFAULT_SIZE = 8;
var allFleets = [
    {
        x: null,
        y: null,
        ships: 10,

        // should be at _either_ a planet
        // (& therefore moving with the planet)
        planetIdx: 0,

        // OR at an orbit & idx point
        // (& therefore not moving with planets)
        orbitIdx: null,
        stepIdx: null,
    }
];

function moveFleets() {
    for(const fleet of allFleets) {
        let planet = planets[fleet.planetIdx];
        fleet.x = planet.x;
        fleet.y = planet.y;
    }
}

function drawFleets() {
    let drawWidth = UNIT_SQUARE_DEFAULT_SIZE * scaleFactor;
    const selectedCircleRadius = drawWidth + 3;

    for(const fleet of allFleets) {
        let drawX = fleet.x - (drawWidth / 2);
        let drawY = fleet.y - (drawWidth / 2);

        if(selectedEntity && selectedEntity == fleet){
            colorCircle(fleet.x,fleet.y, drawWidth, 'cyan');
        }
        colorRect(drawX,drawY, drawWidth,drawWidth, 'yellow');
    }
}
