# student1 = "Mikasa"
# student2 = "Akame"
# student3 = "Shana"

# def students():
#     return print(student1, student2, student3)

# students()

# class students:
#     def pr_students():
#         print("Mikaze, Cicilene, Ein")

# students.pr_students()

# class Students:
#     def pr_students(self):
#         print("Mikaze, Cicilene, Ein")

# Mikail = Students()
# Mikail.pr_students()

# Nail = Students()
# Nail.pr_students()

# class Class(object):
#     def __init__(self, mine, lastn):
#         print("Hiyaa!")
#         self.mine = mine
#         self.lastn = lastn
#     def print_mine(self):
#         print(f"{self.mine} {self.lastn} you're mine!")

# # DC = Class("Aisha", "Gascon")
# # DC.print_mine()

# haha = Class("Gwen","Smith")
# haha.print_mine()

# def Person(name):
#     count = 0
#     print(f"Hi, my name is {name}")
#     return count

# Lara = Person("Lara")
# print(Lara)

# class Person(object):
#     def __init__(self, name):
#         self.name = name
#         self.count = 0
#         print(f"The name is {self.name}, remember that!")

#     def namechange(self, new_name):
#         self.count += 1
#         self.name = new_name
#         print(f"My new name is {self.name} and I've changed my name {self.count} times!")

# student = Person("Aisha")
# student2 = Person("Nani")
# student.namechange("Gwen")
# student.namechange("Smith")
# student2.namechange("Sore")
# student.namechange("HONTOU!?")

# class Phone(object):
#     def __init__(self, typo):
#         self.typo = typo
#         print(f"I have a {self.typo} phone!")

#     def newphone(self, new_type):
#         self.new_type = new_type
#         print(f"Well, that phone was gross so I switched to {self.new_type}")

# Mine = Phone("APPLE!")
# Mine.newphone("Android!")

# class Car(object):
#     bonanza = "Yep, it's true."
#     def __init__(self, make, model, color):
#         self.make = make
#         self.model = model
#         self.color = color
#         self.doorstat = "closed"
#     def colorchange(self, nxcolor):
#         self.color = nxcolor
#         print(f"You've changed your {self.make}'s color to {nxcolor}")
#     def opendoor(self):
#         self.doorstat = "open"
#     def colordis(self):
#         print(f"You know your {self.make} is {self.color}...right?")

# Toyota = Car("Toyota", "prius", "black")
# Honda = Car("Honda", "civic", "blue")

# Honda.colorchange("heliotrope")

class Animal:
  def __init__ (self, name):
    self.name = name
class Dog (Animal):
  def woof (self):
    print("Woof")
class Cat (Animal):
  def meow (self):
    print("Meow")

puppy = Dog("beanie")
print(puppy.name)