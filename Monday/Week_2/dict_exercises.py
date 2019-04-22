# 1

# phonebook_dict = { 
#   'Alice': '703-493-1834', 
#   'Bob': '857-384-1234', 
#   'Elizabeth': '484-584-2923'
# }

# name = phonebook_dict["Elizabeth"]
# phonebook_dict["Kareem"] = "938-489-1234"
# # print(name)
# print(phonebook_dict)

# del phonebook_dict["Alice"]
# phonebook_dict["Bob"] = '968-345-2345'

# print(phonebook_dict)

#2

# ramit = [
#     { 
#     'name': 'Ramit', 
#     'email': 'ramit@gmail.com', 
#     'interests': ['movies', 'tennis'], 
#     'friends':  { 
#         'name': 'Jasmine', 
#         'email': 'jasmine@yahoo.com', 
#         'interests': ['photography', 'tennis']
#     }
#         }, 
#         { 
#             'name': 'Jan', 
#             'email': 'jan@hotmail.com', 
#             'interests': ['movies', 'tv'] 
#         }  
# ]

# hiya = ramit[1]["interests"][0]
# print(hiya)

# Letter Summary

# def histogram():
#     string = str(input("Let me count the number of letters in your word(s). "))
#     data = {}
#     for letter in string:
#         if letter in data:
#             data[f"{letter}"] += 1
#         else:
#             data[f"{letter}"] = 1
#     return data


# print(histogram())

# Word Histogram

def histogram():
    string = str(input("Let me count the number of words in your sentence(s). "))
    data = {}
    for word in range (len(string)):
        while word != " ":
            if word in data:
                data[f"{word[:]}"] += 1
                break
            else:
                data[f"{word[:]}"] = 1
                break
    return data

print(histogram())

