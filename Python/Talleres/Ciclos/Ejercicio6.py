productos=int(input("Cuantos productos desea ingresar "))
if isinstance(productos,int):
    for i in range(0,productos):
        valorproducto=float(input(f"ingrese el valor del producto {i+1} "))
        if valorproducto>100:
            if valorproducto>200:
                descuento=valorproducto - valorproducto*0.25
                print("Se le hace un descuento al producto del 25%: \n ",(valorproducto*0.25))
                print("El valor del producto con el descuento es de ",descuento,"\n")

            else:
                descuento=valorproducto - valorproducto*0.20
                print("Se le hace un descuento al producto del 20%: \n ",(valorproducto*0.20))
                print("El valor del producto con el descuento es de ",descuento,"\n")

        else:
            descuento=valorproducto - valorproducto*0.10
            print("Se le hace un descuento al producto del 10%: \n ",(valorproducto*0.10))
            print("El valor del producto con el descuento es de ",descuento,"\n")


else:
    print("no es numero valido hagalo de nuevo ")