fibonacci=int(input("Cuantos numeros desea de la serie fibonacci "))
secuencia1=0
secuencia2=1
secuencia3=0

for i in range(0,fibonacci):
    secuencia3=secuencia1+secuencia2
    secuencia2=secuencia1
    secuencia1=secuencia3
    print(secuencia3)

