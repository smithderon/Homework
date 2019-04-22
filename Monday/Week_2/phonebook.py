# nope = {
#     "Marvin" : "Marvin",
#     "number" :{
#         "home": 299-290-5859,
#         "cell": 827-520-5958
#         },
#     "name" : "R.kelly",
#         "numbers" :{
#             "cell": "run",
#             "home": "run faster",
#             "emergency" : 911
#             }
# 
nope = {"Marvin" : "833-433-4949", "R.Kelly" : "Run for your life!"}

def phonebook():
    choice = int(input("""
    Welcome to your phonebook! What would you like to do?
    To look up a number, press 1.
    To delete a number, press 2.
    To see a list of all entries, press 3.
    To create a new entry, press 4.
    To close the phonebook, please press 5.
    Please do not press any other number!
    >>> """))
    while choice == 1:
        old_name = input("Name of the person you're looking for? >>> ")
        if old_name in nope:
            print(f"Here is the number for {old_name}:", nope[old_name])
            return phonebook()
        else:
            print("Sorry, there are no entries under that name! Returning to top menu")
            return phonebook()
    while choice == 2:
        deletion = input("We're sorry to see this person go. Please enter the name that you'd like to delete. >>> ")
        if deletion in nope:
            print (f"The number of {deletion}, has been removed from the directory")
            del nope[f"{deletion}"]
            return phonebook()
        else:
            print("Sorry, but you don't have a friend by that name")
            return phonebook()
    if choice == 3:
        print (nope)
        return phonebook()
    while choice == 4:
        name = str(input("Name of your new contact: "))
        number = str(input("Number of your new contact: "))
        nope[name] = number
        contact = nope[name]
        print(f"""
        Here is your new phonebook entry: {name}:{contact}
        """)
        return phonebook()
    if choice == 5:
        print("Make sure to enjoy your day!")
    else:
        print("If you don't know how to read, you probably shouldn't be here...")
    return("Please don't come back! I hate work...")
print(phonebook())

