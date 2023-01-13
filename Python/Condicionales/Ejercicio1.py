numero1=input("Ingrese el valor del primer numero")
if numero1<=0:
    print("No es un numero entero Valido, intente de nuevo")
else:
    numero2=input("Ingrese el valor del primer numero")
    if numero2<=0:
        print("No es un numero entero Valido, intente de nuevo")
    elif numero1==numero2:
        print("son numeros iguales no se puede continuar")
    else:
        numero3=("Ingrese el valor del tercer numero")
        if numero3<=0:
            print("No es un numero entero Valido, intente de nuevo")
        elif numero3==1 or numero3==numero2:
            print("Son numeros iguales, no se puede continuar")
        elif numero1>numero2 and numero1>numero3:
            if numero2>numero3:
                print("El numero mayor es "+numero1)
                print("El numero menor es "+numero3)
            else:
                print("El numero mayor es "+numero1)
                print("El numero menor es "+numero2)
        elif numero1>numero2 and numero1>numero3:
            print("El numero mayor es "+numero1)
            print("El numero menor es "+numero3)






    