fibonacci=int(input("Cuantos numeros desea de la serie fibonacci "))
secuencia1=0
secuencia2=1

for i in range(0,fibonacci):
    print(secuencia1)
    secuencia3=secuencia1+secuencia2
    secuencia1=secuencia2
    secuencia2=secuencia3

