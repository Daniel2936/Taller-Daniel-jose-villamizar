

while True:
    opcion=int(input("que opcion desea:\n 1. Sumar 2 numeros \n 2. Restar 3 numeros \n 3. Multiplicar 2 numeros \n 4. Dividir 2 numeros \n 0. Salir de la calculadora "))
    if isinstance(opcion,int) and opcion<=4:
        if opcion==0:
            print("Muchas gracias, hasta luego")
            break
        else:
            if opcion==1:
                sum1=int(input("Ingrese el primer numero: "))
                sum2=int(input("Ingrese el segundo numero: "))
                print("\n El resultado de la suma es: ",(sum1+sum2),"\n ")
            else:
                if opcion==2:
                    resta1=int(input("Ingrese el primer numero: "))
                    resta2=int(input("Ingrese el segundo numero: "))
                    resta3=int(input("Ingrese el tercer numero: "))
                    print("\n El resultado de la resta es: ",(resta1-resta2-resta3),"\n ")
                else:
                    if opcion==3:
                        multi1=int(input("Ingrese el primer numero: "))
                        multi2=int(input("Ingrese el segundo numero: "))
                        print("\n El resultado de la multiplicacion es: ",(multi1*multi2),"\n ")
                    else:
                        if opcion==4:
                            divi1=int(input("Ingrese el primer numero: "))
                            divi2=int(input("Ingrese el segundo numero: "))
                            if divi2==0:
                                print("no se puede dividr por 0")
                            else:
                                print("\n El resultado de la division es: ",(divi1/divi2),"\n ")
        
    else:
        print("NO es un numero valido \n ")



