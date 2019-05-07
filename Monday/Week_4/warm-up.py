nani = {"a":0, "e":0, "i":0, "o":0, "u":0}

def count(thing):
    for item in thing:
        for items, values in nani:
            if item.lower() == items:
                values += 1
            else:
                pass
        
        return nani


print(count("To the moon!"))