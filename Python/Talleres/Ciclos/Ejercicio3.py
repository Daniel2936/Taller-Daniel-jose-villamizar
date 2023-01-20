numerof=int(input("Ingrese el numero a sacar el factorial "))

factorial=1
if numerof>=10 and numerof<=15:
    for i in range (0,numerof):
        factorial*=(i+1)

    print("el factorial del numero: ",numerof, " es ",factorial)
else:
    print("no es un numero valido repita")