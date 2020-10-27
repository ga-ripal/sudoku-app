# sudoku-app
sudoku Application in node
To start the Application User must set .env file 
To srtup this file User may check .env.example file in code

In this Sudoku app Pass data like

{"data":[  
      [2, null, 5, null, null, 9, null, null, 4],
      [null, null, null, null, null, null, 3, null, 7],
      [7, null, null, 8, 5, 6, null, 1, null],
      [4, 5, null, 7, null, null, null, null, null],
      [null, null, 9, null, null, null, 1, null, null],
      [null, null, null, null, null, 2, null, 8, 5],
      [null, 2, null, 4, 1, 8, null, null, 6],
      [6, null, 8, null, null, null, null, null, null],
      [1, null, null, 2, null, null, 7, null, 8]
    ]}

And User will get answer like

{
    "success": true,
    "message": "Sudoku created successfully",
    "data": {
        "finalResult": [
            2,
            null,
            5,
            null,
            null,
            9,
            null,
            null,
            4,
            null,
            null,
            null,
            null,
            null,
            null,
            3,
            null,
            7,
            7,
            null,
            null,
            8,
            5,
            6,
            null,
            1,
            null,
            4,
            5,
            null,
            7,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            9,
            null,
            null,
            null,
            1,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            2,
            null,
            8,
            5,
            null,
            2,
            null,
            4,
            1,
            8,
            null,
            null,
            6,
            6,
            null,
            8,
            null,
            null,
            null,
            null,
            null,
            null,
            1,
            null,
            null,
            2,
            null,
            null,
            7,
            null,
            8,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            4,
            5,
            6,
            7,
            8,
            9,
            1,
            2,
            3,
            2,
            1,
            4,
            3,
            6,
            5,
            8,
            9,
            7,
            3,
            6,
            5,
            8,
            9,
            7,
            2,
            1,
            4,
            7,
            8,
            9,
            1,
            2,
            4,
            3,
            5,
            6,
            5,
            3,
            1,
            6,
            4,
            2,
            9,
            7,
            8,
            6,
            4,
            2,
            9,
            7,
            8,
            5,
            3,
            1,
            8,
            9,
            7,
            5,
            1,
            3,
            4,
            6,
            2
        ]
    }
}
