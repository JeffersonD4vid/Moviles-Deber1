//2. Desarrolle una función que reciba un arreglo como parámetro 
// y como resultado retorne la suma de los elementos del arreglo. 

export const EjercicioDos = () => {

    const ejemplo: number [] = [1, 2, 3, 4, 5];
    

    const arreglo =(numeros:number[]) =>{

      //Se ultilizo la funcion reduce para poder sumar todos los elementos del arreglo
        return numeros.reduce((total, num) => total + num, 0);
    }

    //Se crear una constante para que almacene la suma de todos los arreglos
    const sumaNumeros: number  = arreglo(ejemplo);
    
  return (
    <>
        <h3>Ejercicio 2</h3>
        <span>La suma de los elementos del arreglo es: {sumaNumeros}</span>
    </>
    
  )
}
