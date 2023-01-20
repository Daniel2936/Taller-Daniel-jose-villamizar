numero1=int(input("ingrese el valor del primer intervalo "))
numero2=int(input("ingrese el valor del segundo intervalo "))
sumatoria=0

if numero1>numero2:
    for i in range (numero2,numero1+1):
         if i%2==0:
             sumatoria+=i

    print("la sumatoria de los numeros pares en el rango {",numero2,numero1," } es ",sumatoria)


else:
    for i in range (numero1,numero2+1):
        
         if i%2==0:
             sumatoria+=i

    print("la sumatoria de los numeros pares en el rango {",numero1,numero2," } es ",sumatoria)