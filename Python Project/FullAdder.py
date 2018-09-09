import logicgates
def FullAdder (x,y,z,Mylist3):
    y1 = logicgates.XOR(x,y)
    y2 = logicgates.AND(x,y)
    y3 = logicgates.AND(y1,z)
    y4 = logicgates.NOR(y2,y3)
    y5 = logicgates.OR(z,y1)
    y6 = logicgates.NAND(z,y1)
    Mylist3.append(logicgates.AND(y5,y6))
    z = logicgates.NOT(y4)
    return z
    print(z)
