<div align="center">

# ◉ UnovaDex

**Tu Pokédex personal de Pokémon Blanco 2, en el bolsillo.**

Registra capturas, monta equipos, consulta tipos y averigua dónde encontrar cada Pokémon de Teselia, todo desde una sola página que funciona también sin conexión.

`HTML` · `CSS` · `JavaScript` · `PWA` · `Sin dependencias`

</div>

---

## ✨ Qué puedes hacer

### 📖 Pokédex regional
- Las **301 entradas** de la Pokédex de Teselia de Blanco 2, en su orden regional.
- Búsqueda por nombre o número y filtros: todos, capturados, pendientes, shinies, favoritos y con notas.
- Sprites animados de quinta generación.

### ✅ Seguimiento personal
- Marca cada Pokémon como **capturado**, **shiny** o **favorito**.
- Escribe **notas privadas** (dónde lo encontraste, naturaleza, nivel, mote…) con guardado automático.
- Panel de **estadísticas** con tu progreso, porcentaje y pendientes.

### 🔎 Ficha completa
- Estadísticas base con barras y total.
- **Cadena evolutiva** con los requisitos de cada evolución: nivel, objeto, intercambio, felicidad, hora del día…
- **Dónde encontrarlo** en Blanco 2 / Negro 2: zona, método (hierba, surf, caña, cueva…), rango de niveles y porcentaje.

### ♟ Mis equipos
- Crea todos los equipos que quieras, con nombre, y añade hasta **6 Pokémon** a cada uno.
- Resumen de los tipos que cubre cada equipo.

### ◈ Tabla de tipos
- Modo **defensa**: elige uno o dos tipos y mira sus debilidades (×4, ×2), resistencias (×½, ×¼) e inmunidades.
- Modo **ataque**: a qué tipos hace más o menos daño cada tipo.
- **Matriz completa** de efectividades.
- Con las reglas de la quinta generación: **17 tipos, sin Hada**.

### ⇅ Copias de seguridad
- **Exporta** todo tu progreso a un archivo JSON.
- **Importa** una copia anterior, con validación y confirmación antes de reemplazar tus datos.

### 🌗 Y además
- Tema **oscuro y claro**.
- Diseño pensado para **móvil**, con navegación inferior.
- **Instalable** como app y con funcionamiento sin conexión una vez cargada.

---

## 🚀 Cómo usarla

### En línea
Abre la URL donde la hayas desplegado:

```
https://unovadex-pokemon-blanco-2.vercel.app
```

En Chrome, pulsa **⋮ → Instalar app** para tenerla con su icono y a pantalla completa.

## 💾 Tus datos

Todo se guarda **en tu navegador** (`localStorage`), sin cuentas ni servidores propios. Eso significa:

- Tus capturas y notas son **solo tuyas** y son privadas.
- Se guardan **por dirección**: usa siempre la misma URL.
- Si borras los datos del navegador, se pierden. **Exporta una copia de vez en cuando** desde *Copias de seguridad*.

---

## 🗂 Estructura

```
UnovaDex-app/
├── index.html            # Toda la app: HTML, CSS y JS
├── manifest.webmanifest  # Datos de instalación (PWA)
├── sw.js                 # Service worker (modo sin conexión)
├── icon.svg
├── icon-192.png
└── icon-512.png
```

## 🔌 Fuentes de datos

- [PokéAPI](https://pokeapi.co): Pokédex regional, estadísticas, evoluciones y zonas de captura.
- [PokeAPI/sprites](https://github.com/PokeAPI/sprites): sprites de quinta generación.

Los datos de zonas pueden no incluir regalos, eventos ni encuentros especiales.

---

<div align="center">

*UnovaDex es un proyecto personal y no oficial. Pokémon y sus nombres son marcas de Nintendo, Game Freak y The Pokémon Company.*

</div>
