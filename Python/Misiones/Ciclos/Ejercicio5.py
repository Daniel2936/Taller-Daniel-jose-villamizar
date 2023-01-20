variable=int(input("Ingrese un numero entero"))
if isinstance(variable,int) and variable>100:
    
    for i in range (variable,0,-1):
        contador=0
        for j in range(i,0,-1):
            
            if i%j==0:
                contador+=1

        if contador<=2:
            print(i)

                
        
else:
    print("No es un numero valido intente de nuevo")