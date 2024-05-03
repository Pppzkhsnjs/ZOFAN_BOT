class ChessGame {
    constructor() {
        this.board = this.initializeBoard();
        this.currentPlayer = 'white';
    }

    initializeBoard() {
        // تهيئة اللوحة
        return [
            ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
            ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
        ];
    }

    movePiece(start, end) {
        const [startX, startY] = start;
        const [endX, endY] = end;

        const piece = this.board[startX][startY];

        if (piece === ' ') {
            return "لا يوجد قطعة في هذا الموقع.";
        }

        // قواعد الحركة: القطعة تتحرك إلى الموقع المطلوب بشرط أن تكون الخانة المطلوبة فارغة
        if (this.board[endX][endY] === ' ') {
            this.board[endX][endY] = piece;
            this.board[startX][startY] = ' ';
            return "تم التحرك بنجاح!";
        } else {
            return "هذه الخانة محجوزة.";
        }
    }
}

// اختبار اللعبة
const game = new ChessGame();
console.log(game.movePiece([6, 4], [4, 4])); // حركة البيدق
console.log(game.movePiece([1, 3], [3, 3])); // حركة البيدق
console.log(game.movePiece([0, 5], [1, 3])); // حركة الحصان
