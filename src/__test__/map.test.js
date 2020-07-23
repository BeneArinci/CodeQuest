import Player from "../js/player";
import Map from "../js/map";

jest.mock("../js/player")

describe("Map", () => {
  let map;
  let player;

  beforeEach(()=>{
    player = new Player()
    map = new Map(player, "ctx", "gridMap", "gridSize", "gameWidth", "gameHeight", "winningTile")
    Player.mockClear()
  })

  test("if player is being stored correctly", () => {
    expect(map.player).toBeInstanceOf(Player)

  })



})