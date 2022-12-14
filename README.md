# UT1 - PGL - Gestor de juguetes

En este proyecto se ha implementado una apliaci贸n para gestionar un listado de juguetes para una mascota.

## Comenzando 馃殌

Para poder descargar esta apliaci贸n al completo tan s贸lo ejecuta en tu terminal:


```
git clone https://github.com/wenesmek/UT1-PGL-Ionic.git
```

(si no tienes git instalado, mira el apartado _Pre-requisitos_)


### Pre-requisitos 馃搵

Para poder ejecutar este programa y sus configuraciones necesitar谩s:

* [Node](https://nodejs.org/es/) - Version 16.17.1 LTS de Node
* [Git](https://git-scm.com/) - Gestor de repositorios
* Ionic - Paquete de node para poder ejecutar/crear aplicaciones Ionic ``` npm install -g @ionic/cli ```



### Instalaci贸n 馃敡

_Back-end_

_Instalando dependencias_

Para configurar las bibliotecas y dependencias del Back, tan s贸lo ejecuta este comando dentro de la carpeta _backend_ del proyecto:

```
npm i
```

_Configurando BBDD_

Deber谩s crear una tabla en tu servicio de MySql con el nombre _db_juguetes_. A continuaci贸n configura con tus propios datos de conexi贸n a la BBDD el archivo _db.config.js_ dentro de la carpeta _config_ del Back-end.

```
module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'root',
    DB: 'db_juguetes',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
```

* Aseg煤rate de colocar los credenciales de conexi贸n a tu base de datos en los campos _USER_ y _PASSWORD_.

_Front-end_

_Instalando dependencias_

Para configurar las bibliotecas y dependencias del Front, tan s贸lo ejecuta este comando dentro de la carpeta _frontend_ del proyecto:

```
npm i
```


## Levantando el Back-End 鈿欙笍

Una vez configurado el proyecto del _backend_, tan s贸lo deber谩s ejectur ``` node index.js ``` dentro de la ra铆z del proyecto.

Ver谩s que en la consola aparecer谩n una serie de notificaciones referidas a la base de datos y un aviso de que el servicio Back-End se ha levantado en el puerto 8080.

Para realizar pruebas de los _endpoints_ que esta api-restfull ofrece puedes hacer uso del siguiente bot贸n (enlace a workplace de [Postman](https://web.postman.co/))

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/14032196-2e44493c-c0a7-44ec-962c-b364f8b176f7?action=collection%2Ffork&collection-url=entityId%3D14032196-2e44493c-c0a7-44ec-962c-b364f8b176f7%26entityType%3Dcollection%26workspaceId%3D80aad27e-dcf1-45ea-b953-b71747bc7a26)




## Levantando el Front-End 鈿欙笍

Para ejecutar el servicio de _Ionic_ del front tan s贸lo tendr谩s que ejecutar el siguiente comando desde la carpeta _frontend_:


```
ionic serve
```

Una vez ejecutados los dos servicios (_Back-end_ y _Front-end_) la aplicaci贸n estar谩 completamente funcional y se podr谩 probar la creaci贸n, modificaci贸n, eliminaci贸n y listado de juguetes para mascotas 隆buen provecho! 	:bowtie:



## Construido con 馃洜锔?



* [WebStorm](https://www.jetbrains.com/es-es/webstorm/) - IDE para javascript de JetBrains
* [GitHub Cli](https://cli.github.com/) - Manejador de repositorios para consola de GitHub
* [VSCode](https://code.visualstudio.com/) - Editor de texto Visual Studio Code





---
鈱笍 con 鉂わ笍 por [N茅stor Lorenzo Artiles](https://github.com/wenesmek) :neckbeard:
