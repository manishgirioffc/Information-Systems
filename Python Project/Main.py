import binarydecimal
import FullAdder
def addition():
    check = "yes"
    while check == "yes" or check=="YES":
        
        a = 257
        while a<=0 | a>255:
            while  True:
                try:
                    a = int(input("Enter the First Number : "))
                    if (a>=0 | a<256):
                        print("The input is valid")
                        break
                    else:
                        print("Value out of range")
                except:
                        print("Invalid Input")
                    
        
        b = 257
        while b<=0 | b>255:
            while True:
                try:
                    b = int(input("Enter the Second Number : "))
                    if (b>=0 | b<256):
                        print("The input is valid")
                        break
                    else:
                        print("Value out of range")
                except:
                    print("Invalid Input")
            g = a+b
            if g>256:
                print("The sum is more than 255 therefore the program will be terminated.")
                exit()
            else:
                print("The sum is" , g)
                check= "false"                      
    MyList_list = binarydecimal.binary(a)
    MyList2_list = binarydecimal.binary(b)
    z = 0
    MyList = []
    for i in range (len(MyList_list)):
        z = FullAdder.FullAdder(MyList_list[i], MyList2_list[i],z,MyList)
    print (a, binarydecimal.reverse(MyList_list))
    print (b, binarydecimal.reverse(MyList2_list))
    print ("--------------------------------------------")
    print (binarydecimal.decimal(MyList),binarydecimal.reverse(MyList))      
    check = input ("Do you want to Continue? (Yes/No)")
    if check == "yes" or check=="YES":
        addition()
    else:
        exit()
addition()
