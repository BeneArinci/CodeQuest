const levels = [
  {
    map: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      11, 12, 13, 12, 11, 12, 13, 12, 11, 12, 13, 12, 11, 12, 13, 12, 11, 12],

    winningTile: {
      x: 8,
      y: 13
    }
  },
  {
    map: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 23, 22, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 21, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 21, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 22, 23, 22, 21, 0, 21, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 21, 21, 0, 21, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 21, 21, 0, 21, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 22, 23, 22, 21, 0, 21, 21, 0, 21, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 21, 0, 21, 21, 0, 21, 21, 0, 21, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 21, 0, 21, 21, 0, 21, 21, 0, 21, 0, 0, 0, 0,
          11, 12, 13, 12, 11, 12, 13, 12, 11, 12, 13, 12, 11, 12, 13, 12, 11, 12],

    winningTile: {
      x: 13,
      y: 4
    }
  },
  {
    map: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 22, 22, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 31, 31, 31, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 37, 11, 38, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 31, 0, 0, 36, 51, 39, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 21, 0, 0, 36, 53, 40, 13, 12, 11, 12, 13, 12, 11, 12,
      11, 12, 13, 12, 38, 0, 0, 36, 52, 53, 52, 53, 51, 53, 52, 53, 51, 53],

    winningTile: {
      x: 3,
      y: 5
    }
  },
  {
    map: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 23, 23, 22, 23, 22, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 21, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 21, 0, 33, 33, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 21, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 21, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 22, 23, 23, 23, 23, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 22, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 21, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 21, 0, 0, 22, 0, 0, 0, 0, 0, 0, 37, 13, 12, 11, 12,
      0, 0, 0, 21, 0, 0, 21, 0, 0, 0, 0, 0, 0, 36, 53, 51, 53, 53,
      11, 12, 13, 12, 11, 12, 13, 38, 0, 0, 0, 0, 0, 36, 52, 53, 51, 53],

    winningTile: {
      x: 6,
      y: 2
    }
  },
  {
    map: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 31, 31, 31, 0, 33, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 22, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 21, 0, 0, 31, 31, 31, 0, 0, 33, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 21, 0, 0, 21, 0, 21, 0, 0, 33, 0, 0, 0,
      0, 0, 0, 0, 22, 23, 22, 0, 0, 21, 0, 21, 0, 0, 33, 0, 0, 0,
      0, 0, 0, 0, 21, 0, 21, 0, 0, 37, 13, 38, 0, 0, 33, 0, 0, 0,
      0, 0, 0, 0, 21, 0, 21, 0, 0, 36, 52, 39, 0, 0, 33, 0, 0, 0,
      11, 12, 13, 12, 11, 12, 13, 12, 11, 35, 53, 40, 11, 12, 38, 0, 0, 37],

    winningTile: {
      x: 16,
      y: 13
    }
  },
  {
    map: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 32, 33, 34, 0, 0, 32, 22, 23, 22, 33, 33, 33, 33, 33, 33, 34, 0,
      0, 0, 0, 0, 0, 0, 32, 21, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 32, 21, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 32, 33, 33, 33, 33, 33, 22, 23, 22, 33, 33, 33, 33, 33, 33, 34, 0,
      0, 0, 0, 0, 0, 0, 0, 21, 0, 21, 0, 0, 0, 0, 0, 0, 34, 0,
      0, 0, 0, 0, 0, 0, 0, 21, 0, 21, 0, 0, 0, 0, 0, 0, 34, 0,
      0, 32, 33, 33, 33, 33, 33, 33, 33, 33, 22, 23, 22, 33, 33, 33, 34, 0,
      0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 21, 0, 21, 0, 0, 0, 0, 0,
      0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 21, 0, 21, 0, 0, 0, 0, 0,
      0, 0, 0, 32, 22, 23, 22, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34, 0,
      0, 0, 0, 0, 21, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0,
      0, 0, 0, 0, 21, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0,
      11, 12, 13, 12, 11, 12, 13, 12, 11, 12, 13, 12, 11, 12, 13, 12, 11, 12],

    winningTile: {
      x: 3,
      y: 4
    }
  },
  {
    map: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 31, 0, 0, 21, 0, 0, 0, 0, 23, 23, 22, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 33, 33, 0, 0, 31, 0, 0, 0, 21, 0, 22, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 21, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 21, 0, 33, 33, 33,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      11, 38, 0, 0, 13, 0, 0, 12, 0, 0, 0, 0, 0, 37, 38, 0, 0, 0],

    winningTile: {
      x: 4,
      y: 1
    }
  },
  {
    map: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 61, 62, 61, 62, 61, 62, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 63, 64, 63, 64, 63, 64, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0,
      11, 12, 13, 12, 11, 12, 13, 12, 11, 12, 13, 12, 11, 12, 13, 12, 11, 12],

    winningTile: {
      x: 9,
      y: 4
    }

  },
]
export default levels;