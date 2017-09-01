# aluminium
Hugo Template

### Cómo instalar?
Primero debo crear un sitio de Hugo
```sh
hugo new site my-hugo-site
```
Dentro de la carpeta del nuevo sitio, inicio git e instalo el tema como un submódulo dentro de la carpeta "themes"
```sh
cd my-hugo-site
git init
git submodule add https://github.com/Revenatium/aluminium.git themes/aluminium
```
Y finalmente modifico el config.toml para que use el nuevo tema
```sh
echo 'theme = "ananke"' >> config.toml
```
Para ver en el navegador
```sh
hugo server -D
```
**A partir de ahora ya puedo comenzar a agregar contenido al sitio**

### Home
Para crear una página principal o home debo ejecutar el siguiente comando
```sh
hugo new _index.es.md
```
El cual generará un archivo _index.es.md en el que ya puedo comenzar a agregar contenido, por ejemplo:

```md
--
title: My Hotel
description: Vacaciones de lujo en Puerto Aventuras
date: 2017-08-03T13:32:23-05:00
draft: true
---
<div class="row mb-4">
   <div class="col-sm-12 text-center">
   <h4>Comodidades</h4>
   <p>Nuestros condominios constan de una a dos recamaras, todos se encentran totalmente equipados con cocineta y funcionales sercivios, servicio de limpuieza, caja de seguridad y personal multilingue.<p>
   </div>
</div>
```
### Secciones / Páginas
Para agregar una nueva página al sitio simplemente debo crearlas al igual que la home:
```sh
hugo new condominios.es.md
```

Entre las secciones hay 2 muy importantes, **habitaciones** y **ofertas** las cuales deben tener un layout específico que se obtiene agregado el atributo "layout" en los archivos .md
 - layout: "rooms" -> habitaciones
 - layout: "deals" -> ofertas

Ejemplo:
```md
---
title: "Condominios"
description: "Modernidad, espacio y comodidad"
date: 2017-08-03T13:30:41-05:00
draft: true
layout: "rooms"
---
```

### Habitaciones
Las habitaciones serán listadas dentro de la página que tenga el layout = "rooms". Para agregar un elemento a esta lista debemos ejecutar el siguiente comando:

```sh
hugo new rooms/mi-nuevo-room.es.md
```
lo cual nos generará un archivo en la carpeta "rooms" con la siguiente información:

```md
---
title: "Mi nuevo room"
date: 2017-08-03T17:45:43-05:00
draft: true
description: ""
image: {}
id: 0
pax: ""
bedding: ""
---
```
Al cual yo ya puedo modificar con la información pertinente, por ejemplo:

```md
title: "Mi nuevo room"
date: 2017-08-03T17:45:45-05:00
draft: true
description: "una descripción"
image: {base: "https://res.cloudinary.com/itermotus/", path: "hotel-stage/ixtul/1/juior_2.jpg"}
id: 2
pax: "2 personas"
bedding: "2 camas matrimoniales"
---
{{< photoGallery 
base="https://res.cloudinary.com/itermotus/" 
pics="assets/coralmaya/4-habitaciones-1.jpg,assets/coralmaya/4-habitaciones-2.jpg,assets/coralmaya/4-habitaciones-3.jpg" 
>}}
```
### Ofertas
Es el mismo proceso que habitaciones pero en lugar de crear una publicacóión en la carpeta rooms, debe hacerse en la carpeta deals:

```sh
hugo new deals/mi-espantosa-oferta.es.md
```
## Shortcodes
En el ejemplo de un nuevo room agregamos un "pseudo-elemento" llamado "photoGallery", este es un "atajo" que solo necesitan mínima información para crear una sección completa, en este caso una galería.
Al igual que esta tenemos otros shortcuts, a continuación se enlistan:

- photoGallery (base, pics)
    - Genera una galería de imágenes. Recibe como parámetros la base de la URL (base) y la ruta de varías imagenes separadas por coma (se recomienda usar al menos tres), el layout se ajustará atuomáticamente basado en el número de fotos.
- circleAmenity (base, path, title, [inner])
    - elemento que incluye una imagen recorada en círculo, un título y una descripción (inner)
- location (lat, lng, zoom, [inner])
    - Agrega la sección completa de ubicación con título predefinido, descripción (inner) y un mapa de google con un marcador en el lat, lng dado con el zoom especificado.

### Idiomas
El idioma principal del sitio se define en el archivo config.toml
```toml
DefaultContentLanguage = "es"
```
Para cáda nueva página, dependiendo del idioma de la publicación debe ser el sufijo del archivo:
 - .es -> español
 - .en -> inglés

Para darle un título a mi página diferente por idioma se debe modificar el archivo config.toml
```toml
[Languages]
   [Languages.en]
      title = "Hotel Flamingos EN"
   [Languages.en]
      title = "Hotel Flamingos EN"
```
**Recursos**
El tema ya contiene algunos recursos en la carpeta i18n, si se desean agregar mas o sobreescribirlos se debe hacer en una carpeta i18n que se encuentre en la raiz de mi nuevo sitio.
### FAQ
**Por qué las urls de las imágenes se dividen en *base* y *path*?**
Por que el tamaño final de la imagen lo decide el template por lo que necesita transformarla y para esto agregará ciertos componentes a la url.

 **El mapa no se muestra**
 Google maps requiere una api key que debe proporcionarse en el archivo config.toml, en la seccion [params]:
 ```toml
 [params]
   maps_api_key = "miVERRYlongKEY"
 ```
 **No se muestra el widget**
 La url del widget es personalizada y por lo tanto debe agregarse integra al archivo config.toml en la sección de params:
  ```toml
 [params]
   bookerURL = "https://assets.revenatium.com/my-site/es-mx/my.version/bundle.js"
 ```
