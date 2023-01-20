animal=(input("Ingrese el animal que animal quiere estudiar "))
contador1=0
contador2=0
contador3=0
if animal=="elefantes":
    for i in range(0,20):
        edad=int(input("que edad tiene el animal "))
        if(edad==0 or edad==1):
            contador1=contador1+1
        elif(edad <3):
            contador2=contador2+1
        elif(edad>=3):
            contador3=contador3+1
    print("el porcentaje de elefantes de 0 a 1 es",(contador1*100)/20," % ") 
    print("el porcentaje de elefantes de 1 a 3  es",(contador2*100)/20," % ")    
    print("el porcentaje de elefantes de 3 o mas es",(contador3*100)/20," % ")          

elif animal=="jirafas":
    for i in range(0,15):
        edad=int(input("que edad tiene el animal "))
        if(edad==0 or edad==1):
            contador1=contador1+1
        elif(edad <3):
            contador2=contador2+1
        elif(edad>=3):
            contador3=contador3+1
    print("el porcentaje de jirafas de 0 a 1 es ",(contador1*100)/15," % ") 
    print("el porcentaje de jirafas de 1 a 3  es ",(contador2*100)/15," % ")    
    print("el porcentaje de jirafas de 3 o mas es ",(contador3*100)/15," % ")   

elif animal=="chimpances":
    for i in range(0,50):
        edad=int(input("que edad tiene el animal ",))
        if(edad==0 or edad==1):
            contador1=contador1+1
        elif(edad <3):
            contador2=contador2+1
        elif(edad>=3):
            contador3=contador3+1
    print("el porcentaje de chimpances de 0 a 1 es",(contador1*100)/50," % ") 
    print("el porcentaje de chimpances de 1 a 3  es",(contador2*100)/50," % ")    
    print("el porcentaje de chimpances de 3 o mas es",(contador3*100)/50," % ")   

else:

    print("No es un animal valido")

