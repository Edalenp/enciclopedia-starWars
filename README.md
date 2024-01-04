# LA ENCICLOPEDIA DE STAR WARS 

> Crea una app que sirva para listar los personajes de Star Wars y que te permita buscarlos por nombre.

Requisitos:

    - Usa el API https://swapi.dev
    - El diseño es de libre elección.
    - Debe mostrar un listado y un detalle de cada personaje.
    - El listado tendrá que estar paginado.
    - El listado poseerá un filtro de búsqueda.
    - Al seleccionar un personaje del listado, el detalle mostrará los datos que consideres oportunos.
    - OPCIONAL: Detalle de películas, vehículos, naves, especies...
    - OPCIONAL: Foto de cada personaje.


# OBSERVACIONES A TENER EN CUENTA

1. Cuando vas a buscar un personaje, te dará un bug y hará que tu busqueda sea lenta. Esto es porque cuando le hago petición a la API, esta se tarda en obtener los datos en cinco segundos apróximadamente. Intenté de muchas formas evitar lo anterior, pero no pude encontrar una solución, con lo que cual me dispuse a probar otra API diferente y hacer la obtención de datos. Con la otra API me fue excelente, me daba una respuesta enseguida, por lo cuál asumí que la SWAPI está lenta. Para evitar esto, debes esperar cinco segundos a que carguen los resultados, así mismo cuando vas a pasar de página. 

2. El código lo hice en inglés debido a que la respuesta de la API me la da en inglés, por eso decidí hacerlo todo en inglés. 

PD >> No es el mejor diseño, pero estoy aprendiendo sobre patrones de diseño. 
