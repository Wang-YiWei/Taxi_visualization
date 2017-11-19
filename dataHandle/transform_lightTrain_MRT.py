f = open("MRT.csv", "r")
ff = open("outMRT.txt", "w")
while True:
    i = f.readline()
    if i=="": break
    sp = i.split(",")
    ff.write("{lat: "+ sp[3]+", lng: " + sp[4].split("\n")[0] + "},\n")

f.close()
ff.close()

f = open("light_train.csv", "r")
ff = open("outLight.txt", "w")

while True:
    i = f.readline()
    if i=="": break
    sp = i.split(",")
    ff.write("{lat: " + sp[2] + ", lng: " + sp[3].split("\n")[0] + "},\n")

f.close()
ff.close()
