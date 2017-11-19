f = open("output.txt", "w")
ff = open("rawdata.txt", "r")
while True:
    sp = ff.readline()
    if sp=="": break
    sp = sp.split("\t")
    f.write("new google.maps.LatLng("+sp[1].split("\n")[0]+", " + sp[0] +", 100),\n")
    print(sp)

f.close()
ff.close()
