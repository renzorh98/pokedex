# Pokédex
El proyecto se encuentra desarrollado bajo el framework de Vue, utilizando Typescript para el desarrollo de los scripts de la aplicación ya que nos permite desarrollar aplicaciones mucho más robustas, permitiéndonos detectar de manera temprana posibles errores que se suelen cometer durante el desarrollo de aplicaciones web, Javascript para el desarrollo de las pruebas unitarias y ademas para las hojas de estilo se usó Sass el cual es un preprocesador de CSS ya que según sus características es vital para proyectos a gran escala.

Se utilizaron los siguientes paquetes:

1. vue axios con la finalidad de realizar el consumo de los servicios de pokeapi.co.
2. vue router es el router principal de vue se usó con la finalidad de permitir la navegación dentro del proyecto.
3. vuex y vuex-persist con la finalidad de realizar el almacenamiento de la información en el localstorage y el store de vue en búsqueda de simular la persistencia de datos.
4. vue-jest y test-utils para poder realizar las pruebas unitarias sobre los componentes del proyecto.
5. ESLint y Prettier en fin de poder analizar el código conforme se iba desarrollando en búsqueda de obtener un entorno de trabajo limpio.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Unit testing
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
