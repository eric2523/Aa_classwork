class Employee
    attr_reader :salary

    def initialize(title, salary, boss = nil)
        @title = title
        @salary = salary
        @boss = boss
    end

    def boss=()

    def bonus(multiplier)
        salary * multiplier
    end
end

class Manager < Employee
    attr_reader :employees
    
    def initialize(title, salary, boss = nil)
        super
        @employees = []
    end

    def add_employees(*employee)
        employee.each {|employee| self.employees << employee}
    end

    def bonus(multiplier)
        return salary if employees.empty?
        total_salary = 0 

        employees.each do |employee| 
            total_salary += employee.bonus(1) + employee.salary
        end

        total_salary * multiplier
    end

end
#  bob



joe = Employee.new("retail", 10)
ryan = Employee.new("retail", 20)
carlos = Employee.new("retail", 30)

corporate = Manager.new("manager", 3000)

bob = Manager.new("Manager", 20000, corporate)
bob.add_employees(joe, ryan, carlos)
corporate.add_employees(bob)
# p bob.employees
# p bob.bonus(2)
# p corporate.employees
p corporate.bonus(2)





