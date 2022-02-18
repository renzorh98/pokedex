# Pokédex
El proyecto se encuentra desarrollado bajo el framework de Vue pero utilizando Typescript ya que nos permite desarrollar aplicaciones mucho mas robustas, permitiendonos detectar de manera temprana posibles errores que se suelen cometer durante el desarrollo de aplicaciones web ademas se uso Sass el cual es un preprocesador de CSS ya que segun sus caracteristicas es vital para proyectos a gran escala.

Se utilizaron los siguientes paquetes:

1. axios con la finalidad de realizar el consumo de los servicios de pokeapi.co.
2. vue router el router principal de vue con la finalidad de realizar la navegacion dentro del proyecto.
3. vuex y vuex-persist con la finalidad de realizar el almacenamiento de la informacion en el localstorage y el store de vue en busqueda de simular la persistencia de datos.
4. vue-jest y test-utils para poder realizar las pruebas unitarias sobre los componentes del proyecto.


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
