function classificarTriangulo (lado1, lado2, lado3){
    if (lado1 == lado2 && lado1 == lado3)
    {
    console.log(`Triangulo Equilatero`)
    }
    else if (lado1 == lado2 && lado2 != lado3){
        console.log(`Triangulo Isósceles`)
    }
    else if (lado1 == lado3 && lado3 != lado2){
        console.log(`Triangulo Isósceles`)
    }
    else {
        console.log(`Triangulo Escaleno`)
    }
}

classificarTriangulo(3,3,3)
classificarTriangulo(6,7,6)
classificarTriangulo(4,1,9)