def binary(x):
    lists=[]
    for i in range(8):
        lists.append(x%2)
        x= int(x/2)
    return lists

def reverse(x):
    
    lists = []
    y=-1
    for i in range(len(x)):
        lists.append(x[y])
        y-= 1
    return lists

def decimal(x):
    y = 0
    for i in range(len(x)):
        y = y+(x[i]*2**i)
    return y


