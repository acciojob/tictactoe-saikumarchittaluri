//your JS code here. If required.
document.getElementById("submit").addEventListener("click", function() {
            const player1Name = document.getElementById("player-1").value;
            const player2Name = document.getElementById("player-2").value;

            document.getElementById("player-input").style.display = "none";
            document.getElementById("message").textContent = `${player1Name}, you're up.`;

            createBoard();
        });

        let currentPlayer = "X";
        const cells = new Array(9).fill("");

        function createBoard() {
            const board = document.getElementById("board");
            for (let i = 0; i < 9; i++) {
                const cell = document.createElement("div");
                cell.className = "cell";
                cell.id = i;
                cell.addEventListener("click", () => cellClicked(i));
                board.appendChild(cell);
            }
        }

        function cellClicked(index) {
            if (cells[index] === "") {
                cells[index] = currentPlayer;
                document.getElementById(index).textContent = currentPlayer;
                checkWin();
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                document.getElementById("message").textContent = `${currentPlayer === "X" ? player1Name : player2Name}, you're up.`;
            }
        }

        function checkWin() {
            const winningCombos = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
                [0, 4, 8], [2, 4, 6] // diagonals
            ];

            for (const combo of winningCombos) {
                const [a, b, c] = combo;
                if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                    const winner = cells[a];
                    document.getElementById("message").textContent = `${winner === "X" ? player1Name : player2Name}, congratulations, you won!`;
                }
            }
        }
