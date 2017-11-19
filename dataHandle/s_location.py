f = open("12345.csv", "r")
ff = open("out.txt", "w")

while True:
    sp = f.readline()
    if sp == "": break
    sp = sp.split(",")
    wei = sp[2]
    gin = sp[1]
    ff.write("new google.maps.LatLng(" + wei +" ,"+ gin + ", 100),\n")



f.close()
ff.close()
