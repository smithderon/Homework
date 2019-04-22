# mydict = {
#     "Roaches" : "Repulsive",
#     "Anime" : "Glorified",
#     "Life" : "Standstill",
#     "Purposeful" : True
# }
# # print(mydict["Anime"])

# # nani = "what" in mydict
# # print(nani)

# # mydict["Mind"] = "Incomprehensible"
# # print(mydict["Mind"])

# # keys = mydict.keys()
# # value = mydict.values()
# # print(keys, value)

# # for i in value:
# #     print(i)

# del mydict["Roaches"]
# print(mydict)

# while True:
#     try:
#         x = int(input("Gimme some money!"))
#         break

#     except ValueError:
#         print("You think this is a game!? I said...")
# x = 10
# if x > 5:
#     raise Exception("IT'S GOING TO EXPLODE, GET OUT OF THERE!")

import pickle

stuff = {"Bananas" : "Not so good"}
with open ("stuff.pickle", "wb" ) as fh:
    pickle.dump(stuff, fh)