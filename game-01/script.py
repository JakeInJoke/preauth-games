def findMyPair(_arrayM,_toFindN):
    """
    Funcion para encontrar el primer par de numeros que consiguen formar el numero buscado.
    
    :param _arrayM: Arreglo de números enteros.
    :param _toFindN: Número entero a buscar.
    :return: Una lista con los dos números que suman N, o None si no se encuentra un par.
    """

    #Valida que el dato que se ingrese no sea un dato vacio y que sea una array
    if _arrayM is None or not isinstance(_arrayM, list): 
        #Se evaluó ingresar en las respuestas un print() que contenga el mensaje y un return vacio como alternativa
        raise ValueError('El primer parametro debe ser un arreglo') 
    #Valida que el array no esté vacio
    elif not _arrayM : 
        raise ValueError('El arreglo no debe estar vacio')
    #Valida que como minimo deben haber 2 datos para que pueda existir una combinacion, de 1 es imposible y colocar un 0 como opción significa agregar un dato que el usuario no ingresó
    elif len(_arrayM) < 2 : 
        raise ValueError('El arreglo debe tener como minimo 2 items para poder hacer una combinación')
    #Valida que ambos datos ingresados sean o estén conformados solo con valores enteros.
    elif not all(isinstance(numb, int) for numb in _arrayM) or not isinstance(_toFindN, int):
        raise ValueError('El arreglo y el numero buscado solo debe contener/ser números enteros')
    
    #Almacena los numeros vistos en la iteración
    stockNumbers = [] 

    #Por cada uno de los numeros existentes en el arreglo
    for numb in _arrayM:
        #Se ubica el dato que representa el resto que servirá para ubicarlo en los numeros vistos
        resto = _toFindN - numb 
        #Si el resto existe en los numeros vistos
        if resto in stockNumbers:
            #Entonces retorna al usuario el par adecuado para el numero buscado 
            return [resto, numb]
        #Si no encuentra par lo va almacenando en los numeros vistos 
        stockNumbers.append(numb)

    #Si no encuentra un par disponible retorna un Vacio
    return None 

#Array de numeros para buscar
M = [0,12,9,4,11,5,2,4,6,7]
#Numero buscado
N = 2 

print(findMyPair([2,3],N) or 'Vuelva a intentarlo') #Si llega un Vacio retorna el 'Vuelva a intentarlo'