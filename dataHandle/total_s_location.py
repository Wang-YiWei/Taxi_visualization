f = open("12345.csv", "r")
ff = open("thisIsOnWorkTimeRegion.txt", "w")

while True:
    i = f.readline()
    if i == "": break
    sp = i.split(",")[5].split(" ")[1].split(":")[0]
    if 7 <= int(sp) <= 8:
        ff.write(i)
    print(sp)



f.close()
ff.close()
