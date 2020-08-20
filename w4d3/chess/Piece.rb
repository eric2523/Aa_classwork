require "byebug"
require_relative "Piece_Modules"

class Piece
    attr_reader :color, :board, :pos

    def initialize(color, board, pos)
        @color = color
        @board = board
        @pos = pos
    end

    def pos=(val)

    end
end

class Rook < Piece
    include Slideable

    def initialize(color, board, pos)
        super
    end

    def symbol
        return :R
    end

    def move_dirs
        CARDINALS
    end
    
end

class Bishop < Piece
    include Slideable

    def initialize(color, board, pos)
        super
    end

    def symbol
        return :B
    end

    def move_dirs
        DIAGONALS
    end
end

class Queen < Piece
    include Slideable

    def initialize(color, board, pos)
        super
    end

    def symbol
        return :Q
    end

    def move_dirs
        DIAGONALS + CARDINALS
    end
end

class Knight < Piece
    include Stepable

    def initialize(color, board, pos)
        super
    end

    def symbol
        return :KN
    end

    def move_diffs
        KNIGHT_MOVES
    end
end

class King < Piece
    include Stepable
    
    def initialize(color, board, pos)
        super
    end

    def symbol
        return :KG
    end

    def move_diffs
        KINGLY_MOVES
    end
end

class Pawn < Piece
    # MOVES = [
    #     [0,1],
    #     [0,-1]
    # ]
    def initialize(color, board, pos)
        super

    end

    def symbol
        return :KG
    end


    def at_start_row?
        if color == "black" && pos[0] == 1 
            true
        elsif color == "white" && pos[0] == 6
            true
        else
            false
        end

    end

    def side_attack?
        # [1, 1]
        # [2, 0] || [2, 2]
        if color == "black" 
            if self.board[pos[row + 1]][[col + 1]] != sentinel
                 return 2
                self.board[pos[row + 1]][[col - 1]] != sentinel

            end
        end
    end

    def forward_dir
        if color == "black"
            return -1 
        else 
            return 1
        end
    end

    def move_dirs
        self.forward_steps # returns directory 
        if self.side_attack == 2
            directory << [1, 1]
    end

    def forward_steps
        directory = []
        if self.at_start_row? && color == "black"
            directory << [0, -1]
            directory << [0, -2]
        elsif self.at_start_row? && color == "white"
            directory << [0, 1]
            directory << [0, 2]
        else
            directory << [0, self.forward_dir]
        end
        directory
    end

    
end


    


