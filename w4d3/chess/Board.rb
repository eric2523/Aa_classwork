require_relative "NullPiece"
require_relative "Piece"

class InvalidMoveError < StandardError; end

class Board
    attr_reader :sentinel
    attr_accessor :board
                                          
    def initialize
        @sentinel = NullPiece.instance 
        @board = self.populate
    end

    def populate
        new_board = Array.new(8) do |i|
            i.between?(2,5) ? Array.new(8) {@sentinel} : Array.new(8) {Piece.new("color", "board", "pos")}
        end
        new_board
    end

    def [](pos) 
        self.board[pos[0]][pos[1]]
    end

    def []=(pos, value)
        self.board[pos[0]][pos[1]] = value
    end

    def valid_pos(pos)
        return true if pos[0].between?(0,7) && pos[1].between?(0,7)
        return false
    end

    def move_piece(start_pos, end_pos) 
        raise InvalidMoveError if !self.valid_pos(start_pos) || !self.valid_pos(end_pos)
        
        start = self[start_pos]
        final = self[end_pos]

        if start == @sentinel || final != @sentinel
            raise InvalidMoveError
        end

        self[end_pos] = start
        self[start_pos] = @sentinel
        return true
    end
end

new_board = Board.new
new_pawn = Pawn.new("white", new_board, [5,1]) #[row, col]
p new_pawn.move_dirs

# p new_board.board

