f = open("7.csv", "r")
ff = open("span7.csv", "w")
count = 0
dic = []
time = [0 for x in range(24)]
while True:
    i = f.readline()
    if i=='': break
    #sp = i.split("\t")
    #ff.write("{lat: "+ sp[1].split("\n")[0]+ ", lng:" + sp[0]+"},\n")
    sp = i.split(",")
    
    # 經緯度資料
    #ff.write("{lat: "+ sp[4]+ ", lng:" + sp[3]+"},\n")
    
    # 每日全部的司機 id
    #if int(sp[0]) not in dic:
    #    dic.append(int(sp[0]))    

    try:
        sp = sp[5].split(" ")[1].split(":")[0]
        time[int(sp)] = time[int(sp)] + 1
        count = count + 1
    except IndexError:
        print(sp, count)

print([int(x) for x in time])
ff.write("span,value\n")
count = 0
for i in [int(x) for x in time]:
  if count < 9:
    ff.write("0"+str(count)+":00-0"+ str(count+1) +":00,"+str(i)+"\n")
  elif count == 9:
    ff.write("09:00-10:00,"+str(i)+"\n")
  else:
    ff.write(str(count)+":00-"+ str(count+1) +":00,"+str(i)+"\n")
  count = count + 1
f.close()
ff.close()