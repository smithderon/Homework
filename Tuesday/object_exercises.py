#1 & 3

class Person: 
    def __init__(self, name, email, phone):
        self.name = name 
        self.email = email 
        self.phone = phone
        self.friendlist = [] 

    def greet(self, other_person): 
        print('Hello {}, I am {}!'.format(other_person, self.name))
    
    def contact_info(self):
        print(f"{self.name} : {self.email} & {self.phone}")
        return  "hello"


sonny = Person("Sonny", "sonny@hotmail.com","483-485-4948")
jordan = Person("Jordan", "jordan@aol.com", "495-586-3456")
# sonny.greet("Jordan")
# jordan.greet("Sonny")
# print(sonny.email," : ", sonny.phone)
# print(jordan.email, " : ", jordan.phone)
jordan.friendlist.append("sonny")
print(jordan.friendlist)
sonny_info = sonny.contact_info()
print(sonny_info)

#2

# class Vehicle:
#     def __init__(self, make, model, year):
#         self.make = make
#         self.model = model
#         self.year = year
#     def print_info(self):
#         print(f"Make: {self.make}, Model: {self.model}, Year: {self.year}")

# honda = Vehicle("Honda", "civic", "2010")
# honda.print_info()
