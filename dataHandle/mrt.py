f = open("MRT.csv", "r")
ff = open("outMRT.csv", "w")

count = 0
while True:
    i = f.readline()
    if i=="": break
    sp = i.split(",")
    tmp = []
    count = count + 1
    for i in range(5):
        tmp.append(sp[i].split(" ")[0])
    ff.write(tmp[0]+","+tmp[1]+","+tmp[2]+","+tmp[3]+","+tmp[4])
    print(tmp)


print(count)
ff.close()
f.close()
