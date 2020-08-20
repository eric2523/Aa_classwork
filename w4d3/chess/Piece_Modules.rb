require "byebug"
module Slideable
    DIAGONALS = [
        [1, 1], 
        [-1, -1],
        [1, -1],
        [-1, 1]
    ]

   CARDINALS = [
       [1, 0],
       [-1,0],
       [0,1],
       [0,-1]
   ]

   def moves
    directory = []

    self.move_dirs.each do |direction|  # [ 1, 0]
        directory += grow_unblocked_moves_in_dir(direction[0], direction[1]) 
    end
    directory
   end

   def grow_unblocked_moves_in_dir(row, column)
    directory = []
    position = [row, column]
    directory << position
        until directory.last[0].abs == 7 || directory.last[1].abs == 7
            new_pos = [directory.last[0] + row, directory.last[1] + column]
            return directory if self.board[new_pos] == self.board.sentinel
            directory << new_pos 
        end
    directory
   end
end

module Stepable     
    KNIGHT_MOVES = [
        [-2, -1],
        [-2,  1],
        [-1, -2],
        [-1,  2],
        [ 1, -2],
        [ 1,  2],
        [ 2, -1],
        [ 2,  1]
    ]

    KINGLY_MOVES = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
        [-1, -1],
        [1, -1],
        [1, 1],
        [-1, 1]
    ]

    def moves
        directory = []
        self.move_diffs.each do |direction|
            directory += [direction] 
        end
        directory
    end    
end
