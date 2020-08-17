class PolyTreeNode
    attr_reader :children, :parent, :value

    def initialize(value)
        @children = []
        #set parent initially to nil for the root node 
        @parent = nil
        @value = value
    end

    def parent=(parent_node)
        #remove self from exisiting parent node 
        parent.children.delete(self) if parent
        #set new parent to parent_node
        @parent = parent_node
        #shovel self (which was deleted from previous node) into new parent_node's children 
        parent_node.children << self if parent_node
        self
    end

    def add_child(child_node)
        self.children | [child_node]
        child_node.parent=(self)
    end

    def remove_child(child_node)
        if children.delete(child_node)
            child_node.parent = nil
        else
            raise 'You dont have this child'
        end
    end

    def dfs(target)
        return nil if self.nil?
        return self if self.value == target

        self.children.each do |child|
            search = child.dfs(target)
            return search unless search.nil?
        end
        nil
    end

    def bfs(target)
        return self if self.value == target

        queue = [self]
        until queue.empty?
            queue.shift.children.each do |child|
                return child if child.value == target

                queue << child
            end
        end
        nil
    end

    def inspect
        "<@value = #{value}, \nchildren = #{children.inspect}; >"
    end
end

