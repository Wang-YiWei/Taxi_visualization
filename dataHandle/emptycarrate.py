f = open("all.csv", "r")
ff = open("output2.csv", "w")
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
    if int(sp[0]) not in dic:
        dic.append(int(sp[0]))    
''' 
    try:
        sp = sp[5].split(" ")[1].split(":")[0]
        time[int(sp)] = time[int(sp)] + 1
        count = count + 1
    except IndexError:
        print(sp, count)
'''
dic = sorted(dic)
#print(dic)
#print(len(dic))
f.close()

sp, minH, maxH, workTime, minM, maxM, workMin = 0, 0, 0, 0, 0, 0, 0
total_work_minutes, actual_work_minutes = 0, 0
IdData, minlist, maxlist, minlist_data, maxlist_data = [], [], [], [], []
empty = []
listminM, listmaxM = [], []
final_data = {}
count = 0
for x in dic: # 所有人
    f = open("all.csv", "r")
    while True:
        i = f.readline()
        if i=='': break
        
        sp = i.split(",")
        if int(sp[0]) == x: # 過濾司機資料
            IdData.append(sp)

    for i in IdData: # 某司機資料
        if int(i[5].split(" ")[1].split(":")[0]) >= 7: # 出發時間
            minlist.append(int(i[5].split(" ")[1].split(":")[0]))
            minlist_data.append(i)
            

        if 7 <= int(i[6].split(" ")[1].split(":")[0]) <= 23:
            maxlist.append(int(i[6].split(" ")[1].split(":")[0]))
            maxlist_data.append(i)
    #print(minH)
        # 5 for start -> samll
        # 6 for end -> large

    if len(minlist) <= 2 or len(maxlist) <= 2:
        empty.append(x) ## 28 and 82
    else:
        #print(minlist, maxlist)
        minH = min(minlist)
        maxH = max(maxlist)
        workTime = maxH - minH
        #print(workTime)
        for i in IdData:
            if int(i[5].split(" ")[1].split(":")[0]) is minH:
                listminM.append(int(i[5].split(" ")[1].split(":")[1]))

            if int(i[6].split(" ")[1].split(":")[0]) is maxH:
                listmaxM.append(int(i[6].split(" ")[1].split(":")[1]))
        minM = min(listminM)
        maxM = max(listmaxM)
        workMin = maxM - minM
        #print(workMin)
        total_work_minutes = workTime*60 + workMin # 不用處理正負
        count = count + 1
        #print(count)
        for i in range(len(minlist_data)): # 選 min 是因為 max 會開車到凌晨下車
            h = int(minlist_data[i][6].split(" ")[1].split(":")[0]) - int(minlist_data[i][5].split(" ")[1].split(":")[0])
            mi = int(minlist_data[i][6].split(" ")[1].split(":")[1]) - int(minlist_data[i][5].split(" ")[1].split(":")[1])
            if h < 0:
                continue
            else:
                actual_work_minutes = actual_work_minutes + 60 * h + mi
        final_data[x] = 1-actual_work_minutes/total_work_minutes
        ff.write(str(x)+","+str(int(100*(1-actual_work_minutes/total_work_minutes)))+"\n")
        #print(1-actual_work_minutes/total_work_minutes)

    minlist, maxlist, IdData = [], [], []
    minH, maxH, workTime, minM, maxM, workMin = 0, 0, 0, 0, 0, 0
    total_work_minutes, actual_work_minutes = 0, 0
    IdData, minlist, maxlist, minlist_data, maxlist_data = [], [], [], [], []
    listminM, listmaxM = [], []
    f.close()


#print("\n", final_data, "\n")

print("\n" ,empty)
print(len(empty))

empty = []

final_data = {}
    

ff.close()


