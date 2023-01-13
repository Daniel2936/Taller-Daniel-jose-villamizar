base=float(input("ingrese el valor de la base del triangulo "))
if base<=0:
    print("No es un valor valido")
else:
    altura=float(input("ingrese el valor de la altura del triangulo "))
    if altura<=0:
        print("No es un valor valido")
    elif altura==base:
        print("Son valores repetidos no se puede ejecutar")
    
    elif base>5 and altura>4:
        area=(base*altura)/2
        print("se puede calcular el area del triangulo y esta es ",area,"cm°2")
    else:
        print("no se puede calcular el area del triangulo")
        calculo=((base*2)+10)
        print("el resultado del otro calculo es ",calculo)
