const timelineData = [
    {
        eraId: "era-republica",
        categoria: "live-action",
        titulo: 'Serie "The Acolyte" (Temporada 1)',
        año: "132 ABY",
        imagenes: [
            "assets/portadas/live-action/the-acolyte/the-acolyte.webp",
        ],
        eventos: [{ tiempo: '100 años antes de "La Amenaza Fantasma" (Película 1)', descripcion: '- Historia de un grupo de Jedi en una época dorada y de paz.' }]
    },
    {
        eraId: "era-republica", 
        categoria: "animated",
        año: "68 - 58 ABY",
        imagenes: [
            "assets/portadas/animacion/historias-jedi/hdlj-temp1-cap2.webp",
        ],
        titulo: 'Serie "Historias de los Jedi" - Capítulo 2 [Justice]',
        eventos: [{ tiempo: 'Entre 36 y 26 años antes de "La Amenaza Fantasma" (Película 1)', descripcion: '- El Jedi Conde Dooku y su aprendiz Qui-Gon Jinn son enviados a un planeta.' }]
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        titulo: 'Serie "Historias del Inframundo" - Capítulo 4 [La buena vida]',
        año: "56 - 52 ABY",
        imagenes: [
            "assets/portadas/animacion/historias-inframundo/hdi-temp1-cap4.webp",
        ],
        eventos: [{ tiempo: 'Sucede entre 24 y 20 años antes de "La Amenaza Fantasma" (Película 1)', descripcion: '- Inicia la historia del cazarrecompensas Cad Bane en el inframundo.' }]
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        año: "50 - 48 ABY",
        imagenes: [
            "assets/portadas/animacion/historias-jedi/hdlj-temp1-cap3.webp",
        ],
        titulo: 'Serie "Historias de los Jedi" - Capítulo 3 [Choices]',
        eventos: [{ tiempo: 'Entre 18 y 16 años antes de "La Amenaza Fantasma" (Película 1)', descripcion: '- El Jedi Conde Dooku y Mace Windu investigan un planeta.' }]
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        año: "36 ABY",
        imagenes: [
            "assets/portadas/animacion/historias-jedi/hdlj-temp1-cap1.webp",
        ],
        titulo: 'Serie "Historias de los Jedi" - Capítulo 1 [Life and Death]',
        eventos: [{ tiempo: '4 años antes de "La Amenaza Fantasma" (Película 1)', descripcion: '- Nace Ahsoka Tano.' }]
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        titulo: 'Serie "Historias del Inframundo" - Capítulo 5 [Un Buen Cambio]',
        año: "40 - 36 ABY",
        imagenes: [
            "assets/portadas/animacion/historias-inframundo/hdi-temp1-cap5.webp",
        ],
        eventos: [{ tiempo: 'Sucede entre 8 y 4 años antes de "La Amenaza Fantasma" (Película 1)', descripcion: '- Cad Bane se reúne con un viejo amigo que se encuentra en el lado opuesto de la ley.' }]
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        titulo: 'Serie "Historias del Inframundo" - Capítulo 6 [Una Buena Acción]',
        año: "33 ABY",
        imagenes: [
            "assets/portadas/animacion/historias-inframundo/hdi-temp1-cap6.webp",
        ],
        eventos: [{ tiempo: 'Sucede 1 año antes de "La Amenaza Fantasma" (Película 1)', descripcion: '- Cad Bane y su pandilla vuelven a casa para saldar cuentas.' }]
    },
    {
        eraId: "era-republica",
        categoria: "movie",
        titulo: 'Episodio I: "La Amenaza Fantasma" (Película 1)',
        año: "32 ABY",
        imagenes: [
            "assets/portadas/peliculas/la-amenaza-fantasma-episodio1.webp",
        ],
        contenidoExtra: '- Los Sith se muestran públicamente.'
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        año: "32 ABY",
        imagenes: [
            "assets/portadas/animacion/historias-jedi/hdlj-temp1-cap4.webp",
        ],
        titulo: 'Serie "Historias de los Jedi" - Capítulo 4 [The Sith Lord]',
        eventos: [{ tiempo: 'Sucede al mismo tiempo que "La Amenaza Fantasma" (Película 1)', descripcion: '- El Conde Dooku abandona la Orden Jedi.' }]
    },
    {
        eraId: "era-republica",
        tipo: "descripcion",
        texto: "Pasan 10 años..."
    },
    {
        eraId: "era-republica",
        categoria: "cortos",
        año: "22 ABY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp2-cap10.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 2 - Capítulo 10 [Malentendido monstruoso]',
        contenidoExtra: '- La Reina Padmé Amidala investiga un ataque de monstruos en Naboo'
    },
    {
        eraId: "era-republica",
        categoria: "movie",
        titulo: 'Episodio II: "El Ataque de los Clones" (Película 2)',
        año: "22 ABY",
        imagenes: [
            "assets/portadas/peliculas/el-ataque-de-los-clones-episodio2.webp",
        ],
        eventos: [{ tiempo: 'Sucede 10 años después de "La Amenaza Fantasma" (Película 1)', descripcion: '- Comienza la Guerra de los Clones' }]
    },
    {
        eraId: "era-republica",
        tipo: "descripcion",
        categoria: "animated",
        texto: "Pasan un par de meses..."
    },
    {
        eraId: "era-republica",
        tipo: "descripcion",
        categoria: "animated",
        texto: "La serie de The Clone Wars no salió en orden cronológico lineal. Aquí te explico cómo verla correctamente:"
    },
    {
        eraId: "era-republica",
        tipo: "descripcion",
        categoria: "animated",
        texto: "Nota: Existen dos series llamadas Clone Wars (una en 2D y otra en 3D). La versión canónica oficial es la animación en 3D."
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        año: "22 ABY",
        imagenes: [
            "assets/portadas/animacion/clone-wars/clone-wars.webp",
        ],
        titulo: 'Serie "The Clone Wars"',
        eventos: [
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 16 [Al gato y al ratón]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 16 [Enemigo oculto]</strong>' }
        ]
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        año: "22 ABY",
        imagenes: [
            "assets/portadas/animacion/clone-wars/pelicula-clone-wars.webp",
        ],
        titulo: 'Película: "La Guerra de los Clones" (Película Animada)',
        eventos: [{ tiempo: 'Sucede a continuación del Capítulo 16 de la Temporada 1 de The Clone Wars', descripcion: '- Se une un nuevo integrante a Obi-Wan Kenobi y Anakin Skywalker' }]
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        año: "22 ABY",
        imagenes: [
            "assets/portadas/animacion/clone-wars/clone-wars.webp",
        ],
        titulo: 'Serie "The Clone Wars"',
        eventos: [
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 1 [Cadetes clones]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 3 [Líneas de suministro]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 1 [Emboscada]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 2 [Inicio del Malevolencia]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 3 [La Sombra del Malevolencia]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 4 [La destrucción del Malevolencia]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 5 [Novatos]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 6 [La perdición de un droide]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 7 [Duelo de droides]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 8 [Bombad Jedi]</strong>' },
        ]
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        año: "21 ABY",
        imagenes: [
            "assets/portadas/animacion/clone-wars/clone-wars.webp",
        ],
        titulo: 'Serie "The Clone Wars"',
        eventos: [
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 9 [Manto de oscuridad]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 10 [La guarida de Grievous]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 11 [Dooku capturado]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 12 [El general Gungan]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 13 [Jedi accidentado]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 14 [Defensores de la paz]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 15 [Intrusión]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 17 [El virus de la sombra azul]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 18 [El misterio de las mil lunas]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 19 [La tormenta sobre Ryloth]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 20 [Inocentes de Ryloth]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 21 [Libertad en Ryloth]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 1 [El robo del holocrón]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 2 [Cargamento de perdición]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 3 [Los niños de la Fuerza]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 17 [Cazarrecompensas]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 18 [La bestia Zillo]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 19 [La bestia Zillo contraataca]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 4 [Traición en el Senado]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 5 [Aterrizaje difícil]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 6 [Fábrica de armas]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 7 [Legado de terror]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 8 [Invasores de cerebros]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 9 [La intriga de Grievous]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 10 [El desertor]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 11 [Sable de luz perdido]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 12 [El complot de Mandalore]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 13 [Viaje de tentación]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 14 [Duquesa de Mandalore]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 20 [Trampa Mortal]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 21 [R2 vuelve a casa]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 22 [Rastreo letal]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 5 [Corrupción]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 6 [La academia]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 7 [Asesina]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 2 [Tropas]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 4 [Esfera de influencia]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 8 [Planes malignos]</strong>' },
            { clase: "temporada-1", descripcion: '<strong>Temporada 1 - Capítulo 22 [Rehenes]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 9 [La caza de Ziro]</strong>' }
        ]
    },
    {
        eraId: "era-republica",
        categoria: "cortos",
        año: "21 ABY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp1-cap10.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 1 - Capítulo 10 [Enseñarte, voy a]',
        contenidoExtra: '- Ahsoka aprende a pelear con dos sables de luz.'
    },
    {
        eraId: "era-republica",
        categoria: "cortos",
        año: "21 ABY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp2-cap2.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 2 - Capítulo 2 [Compañía inesperada]',
        contenidoExtra: '- Ahsoka se une a la misión de Anakin y Padmé.'
    },
    {
        eraId: "era-republica",
        categoria: "cortos",
        año: "21 ABY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp1-cap6.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 1 - Capítulo 6 [El impostor infiltrado]',
        contenidoExtra: '- Ahsoka y Padmé se enfrentan a un cazarrecompensas cambiaformas.'
    },
    {
        eraId: "era-republica",
        categoria: "cortos",
        año: "21 ABY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp1-cap11.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 1 - Capítulo 11 [La hazaña del caza estelar]',
        contenidoExtra: '- Ahsoka le enseña a Padmé cómo pilotar una nave.'
    },
    {
        eraId: "era-republica",
        categoria: "cortos",
        año: "21 ABY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp1-cap4.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 1 - Capítulo 4 [El camino del Padawan]',
        contenidoExtra: '- Ahsoka intenta detener a un droide averiado.'
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        año: "21 ABY",
        imagenes: [
            "assets/portadas/animacion/clone-wars/clone-wars.webp",
        ],
        titulo: 'Serie "The Clone Wars"',
        eventos: [
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 10 [Héroes de ambos lados]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 11 [Perseguir paz]</strong>' },
            { clase: "temporada-2", descripcion: '<strong>Temporada 2 - Capítulo 15 [Asesinatos Senatoriales]</strong>' },
        ]
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        año: "20 ABY",
        imagenes: [
            "assets/portadas/animacion/clone-wars/clone-wars.webp",
        ],
        titulo: 'Serie "The Clone Wars"',
        eventos: [
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 12 [Hermanas de la noche]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 13 [Monstruo]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 14 [Brujas de la bruma]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 15 [Superiores]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 16 [Altar de Mortis]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 17 [Fantasmas de Mortis]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 18 [La Ciudadela]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 19 [Contraataque]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 20 [Rescate de la Ciudadela]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 21 [La Padawan perdida]</strong>' },
            { clase: "temporada-3", descripcion: '<strong>Temporada 3 - Capítulo 22 [La caza del wookiee]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 1 [Guerra en las aguas]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 2 [Asalto gungan]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 3 [Prisioneros]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 4 [Guerrero en la sombra]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 5 [Misión humanitaria]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 6 [Droides nómadas]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 7 [Oscuridad en Umbara]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 8 [El general]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 9 [El plan de disidencia]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 10 [La carnicería de Krell]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 11 [Secuestrados]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 12 [Esclavos de la República]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 13 [Huida de Kadavo]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 14 [Un amigo en apuros]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 15 [Decepción]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 16 [Amigos y enemigos]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 17 [La Caja]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 18 [Crisis en Naboo]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 19 [Masacre]</strong>' }
        ]
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        año: "20 ABY",
        imagenes: [
            "assets/portadas/animacion/historias-imperio/hdi-temp1-cap1.webp",
        ],
        titulo: 'Serie “Historias del Imperio” - Capítulo 1 [El Camino del Miedo]',
        eventos: [{ tiempo: 'Pasa al mismo tiempo que el General Grievous realiza la Masacre', descripcion: '- Una Bruja sobrevive a la masacre del General Grievous (Morgan Elsbeth).' }]
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        año: "20 ABY",
        imagenes: [
            "assets/portadas/animacion/clone-wars/clone-wars.webp",
        ],
        titulo: 'Serie "The Clone Wars"',
        eventos: [
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 20 [Generosidad]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 21 [Hermanos]</strong>' },
            { clase: "temporada-4", descripcion: '<strong>Temporada 4 - Capítulo 22 [Venganza]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 2 [Una guerra en dos frentes]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 3 [Corredor frontal]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 4 [La guerra suave]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 5 [Punto de inflexión]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 6 [La asamblea]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 7 [Una prueba de fuerza]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 8 [Obligados a rescatar]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 9 [Un vínculo necesario]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 10 [Armas secretas]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 11 [Un día soleado en el vacío]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 12 [Desaparecido en combate]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 13 [Punto sin retorno]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 1 [La amenaza acecha]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 14 [Eminencia]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 15 [Sombras de la razón]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 16 [Los sin ley]</strong>' }
        ]
    },

    {
        eraId: "era-republica",
        tipo: "descripcion",
        categoria: "animated",
        texto: "Esta es la única vez que se mostrará un cómic en toda la lista, ya que es el único medio por el momento que explica qué pasó con Darth Maul al ser capturado por Darth Sidious."
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        año: "20 ABY",
        imagenes: [
            "assets/portadas/animacion/maul/darth-maul-comic-hijo-de-dathomir.webp",
        ],
        titulo: '4 Cómics de Darth Maul llamados "Hijo de Dathomir"',
        eventos: [
            { tiempo: 'Explica qué pasa con Darth Maul luego de ser capturado por su Ex-Maestro Darth Sidious', descripcion: '- Hay un video narrado en el canal de Youtube de Star Wars Theory Español.<br><br>- Link del video: <a href="https://youtu.be/kxkZes4VwGo?si=wFAY57hzpqbtiJlW" target="_blank" rel="noopener noreferrer" class="link-videoyoutube">"Hijo de Dathomir - Cómic COMPLETO NARRADO"</a>' }
        ]
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        año: "19 ABY",
        imagenes: [
            "assets/portadas/animacion/clone-wars/clone-wars.webp",
        ],
        titulo: 'Serie "The Clone Wars"',
        eventos: [
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 17 [Sabotaje]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 18 [El Jedi que sabía demasiado]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 19 [Atrapa a un Jedi]</strong>' },
            { clase: "temporada-5", descripcion: '<strong>Temporada 5 - Capítulo 20 [El Jedi equivocado]</strong>' },
            { clase: "temporada-6", descripcion: '<strong>Temporada 6 - Capítulo 1 [Lo desconocido]</strong>' },
            { clase: "temporada-6", descripcion: '<strong>Temporada 6 - Capítulo 2 [Conspiración]</strong>' },
            { clase: "temporada-6", descripcion: '<strong>Temporada 6 - Capítulo 3 [Fugitivo]</strong>' },
            { clase: "temporada-6", descripcion: '<strong>Temporada 6 - Capítulo 4 [Órdenes]</strong>' },
            { clase: "temporada-6", descripcion: '<strong>Temporada 6 - Capítulo 5 [Un viejo amigo]</strong>' },
            { clase: "temporada-6", descripcion: '<strong>Temporada 6 - Capítulo 6 [La subida de Clovis]</strong>' },
            { clase: "temporada-6", descripcion: '<strong>Temporada 6 - Capítulo 7 [Crisis al corazón]</strong>' },
            { clase: "temporada-6", descripcion: '<strong>Temporada 6 - Capítulo 8 [Los desaparecidos: Parte 1]</strong>' },
            { clase: "temporada-6", descripcion: '<strong>Temporada 6 - Capítulo 9 [Los desaparecidos: Parte 2]</strong>' },
            { clase: "temporada-6", descripcion: '<strong>Temporada 6 - Capítulo 10 [El que pierde]</strong>' },
            { clase: "temporada-6", descripcion: '<strong>Temporada 6 - Capítulo 11 [Voces]</strong>' },
            { clase: "temporada-6", descripcion: '<strong>Temporada 6 - Capítulo 12 [Destino]</strong>' },
            { clase: "temporada-6", descripcion: '<strong>Temporada 6 - Capítulo 13 [Sacrificio]</strong>' },
            { clase: "temporada-7", descripcion: '<strong>Temporada 7 - Capítulo 5 [Huyendo con Trace]</strong>' },
            { clase: "temporada-7", descripcion: '<strong>Temporada 7 - Capítulo 6 [Trato, no Trato]</strong>' },
            { clase: "temporada-7", descripcion: '<strong>Temporada 7 - Capítulo 7 [Deuda Peligrosa]</strong>' },
            { clase: "temporada-7", descripcion: '<strong>Temporada 7 - Capítulo 8 [Justas Otra Vez]</strong>' },
            { clase: "temporada-7", descripcion: '<strong>Temporada 7 - Capítulo 1 [El Lote Malo]</strong>' },
            { clase: "temporada-7", descripcion: '<strong>Temporada 7 - Capítulo 2 [Un Echo Distante]</strong>' },
            { clase: "temporada-7", descripcion: '<strong>Temporada 7 - Capítulo 3 [Volando en Keeradaks]</strong>' },
            { clase: "temporada-7", descripcion: '<strong>Temporada 7 - Capítulo 4 [Asuntos Inconclusos]</strong>' }
        ]
    },
    {
        eraId: "era-republica",
        categoria: "movie",
        año: "19 ABY",
        imagenes: [
            "assets/portadas/peliculas/la-venganza-de-los-sith-episodio3.webp",
        ],
        titulo: 'Episodio III: "La Venganza de los Sith" (Película 3)',
        eventos: [{ tiempo: 'Sucede 3 años después de "El Ataque de los Clones" (Película 2)', descripcion: '- Termina la Guerra de los Clones.' }]
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        año: "19 ABY",
        imagenes: [
            "assets/portadas/animacion/clone-wars/clone-wars.webp",
        ],
        titulo: 'Serie "The Clone Wars"',
        eventos: [
            { descripcion: '<strong>Estos capítulos finales pasan al mismo tiempo que "La Venganza de los Sith" (Película 3).</strong>' },
            { clase: "temporada-7", descripcion: '<strong>Temporada 7 - Capítulo 9 [Los Viejos Amigos No Se Olvidan]</strong>' },
            { clase: "temporada-7", descripcion: '<strong>Temporada 7 - Capítulo 10 [El Aprendiz Fantasma]</strong>' },
            { clase: "temporada-7", descripcion: '<strong>Temporada 7 - Capítulo 11 [Destruido]</strong>' }
        ]
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        año: "19 ABY",
        imagenes: [
            "assets/portadas/animacion/historias-jedi/hdlj-temp1-cap5.webp",
        ],
        titulo: 'Serie "Historias de los Jedi" - Capítulo 5 [Practice Makes Perfect]',
        contenidoExtra: '<ul>- Recuerdos del entrenamiento de Ahsoka durante la Guerra de los Clones que la trajo hasta estos momentos.</ul>'
    },
    {
        eraId: "era-republica",
        categoria: "animated",
        año: "19 ABY",
        imagenes: [
            "assets/portadas/animacion/clone-wars/clone-wars.webp",
        ],
        titulo: 'Serie "The Clone Wars"',
        eventos: [{ clase: "temporada-7", descripcion: '<strong>Temporada 7 - Capítulo 12 [Victoria y Muerte]</strong>' }]
    },
    {
        eraId: "era-republica",
        tipo: "descripcion",
        año: "19 ABY",
        texto: '<strong>Eventos clave que trajo este fin de la guerra:</strong><br><br>• <strong>Duración de la Guerra:</strong> La Guerra de los Clones duró 3 años (es decir, el tiempo transcurrido entre la Película 2 y la Película 3).<br><br>• <strong>La caída de la República:</strong> Palpatine proclama el Imperio Galáctico reemplazando a la República, autoproclamándose Emperador.'
    },
    {
        eraId: "era-republica",
        tipo: "descripcion",
        texto: '• <strong>La creación del Inquisitorius:</strong> Tras la ejecución de la Orden 66, Palpatine establece esta orden secreta bajo el liderazgo del "Gran Inquisidor". Los Inquisidores son Jedi caídos al lado oscuro convertidos en cazadores del Imperio.'
    },
    // --- INICIO DE LA ERA DEL IMPERIO ---
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "19 ABY",
        imagenes: [
            "assets/portadas/animacion/historias-imperio/hdi-temp1-cap4.webp",
        ],
        titulo: 'Serie "Historias del Imperio" - Capítulo 4 [Devota]',
        eventos: [{ tiempo: 'Sucede durante la orden 66 ejecutada en la "La Venganza de los Sith" (Película 3).', descripcion: '- Muestra a la Ex-Amiga de Ahsoka (Barriss Offee) después de la Guerra de los Clones.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "19 ABY",
        imagenes: [
            "assets/portadas/animacion/historias-imperio/hdi-temp1-cap5.webp",
        ],
        titulo: 'Serie "Historias del Imperio" - Capítulo 5 [Comprensión]',
        eventos: [{ tiempo: 'Sucede poco tiempo después de la Guerra de los Clones.', descripcion: '- Muestra la vida de la Ex-Amiga de Ahsoka (Barriss Offee) realizando una Misión.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "19 ABY",
        imagenes: [
            "assets/portadas/animacion/bad-batch/the-bad-batch.webp",
        ],
        titulo: 'Serie "The Bad Batch" (Temporada 1)',
        eventos: [{ tiempo: 'Sucede durante la orden 66 ejecutada en la Película 3.', descripcion: '- Muestra al Batallón 99 (El Lote Malo) después de la guerra.' }]
    },
    {
        eraId: "era-imperio",
        tipo: "descripcion",
        categoria: "animated",
        texto: 'Pasan unos meses...'
    },
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "19 ABY",
        imagenes: [
            "assets/portadas/animacion/bad-batch/the-bad-batch.webp",
        ],
        titulo: 'Serie "The Bad Batch" (Temporada 2)',
        eventos: [{ descripcion: '<strong>Sucede unos meses después de su Temporada 1</strong>' }]
    },
    {
        eraId: "era-imperio",
        tipo: "descripcion",
        categoria: "animated",
        texto: 'Pasa 1 año...'
    },
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "18 ABY",
        imagenes: [
            "assets/portadas/animacion/bad-batch/the-bad-batch.webp",
        ],
        titulo: 'Serie "The Bad Batch" (Temporada 3)',
        eventos: [{ descripcion: '<strong>Sucede 1 año después de su Temporada 2</strong>' }]
    },
    {
        eraId: "era-imperio",
        tipo: "descripcion",
        imagenes: [
            "assets/portadas/animacion/historias-inframundo/novelas/discipulo-oscuro-portada1.webp",
            "assets/portadas/animacion/historias-inframundo/novelas/discipulo-oscuro-portada5.webp",
            "assets/portadas/animacion/historias-inframundo/novelas/discipulo-oscuro-portada4.webp",
            "assets/portadas/animacion/historias-inframundo/novelas/discipulo-oscuro-portada6.webp"
        ],
        categoria: "animated",
        texto: '<strong>Contexto previo (Novela "Discípulo Oscuro"):</strong><br><br>• <strong>Un amor trágico:</strong> Al final de la Guerra de los Clones, Asajj Ventress se enamoró en secreto del Jedi Quinlan Vos.<br><br>• <strong>El sacrificio:</strong> Durante un enfrentamiento en el planeta Christophsis, el Conde Dooku intentó asesinar a Quinlan Vos con rayos de la Fuerza. Ventress se interpuso y sacrificó su propia vida para salvar al hombre que amaba.<br><br>• <strong>Su funeral:</strong> Obi-Wan Kenobi y Quinlan Vos llevaron su cuerpo de regreso a Dathomir, donde fue sepultada en las aguas mágicas junto a las demás Hermanas de la Noche caídas.'
    },
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "18 ABY",
        imagenes: [
            "assets/portadas/animacion/historias-inframundo/hdi-temp1-cap1.webp",
            "assets/portadas/animacion/historias-inframundo/hdi-temp1-cap2.webp",
            "assets/portadas/animacion/historias-inframundo/hdi-temp1-cap3.webp"
        ],
        titulo: 'Serie "Historias del Inframundo"',
        eventos: [
            { clase: "capitulo", descripcion: '<strong>Capítulo 1 [Un camino al frente]</strong>' },
            { clase: "capitulo", descripcion: '<strong>Capítulo 2 [Amigos]</strong>' },
            { clase: "capitulo", descripcion: '<strong>Capítulo 3 [De un guerrero a otro]</strong><br><br>- Estos 3 capítulos muestran la vida de Asajj Ventress en la época imperial.' }
        ]
    },
    {
        eraId: "era-imperio",
        tipo: "descripcion",
        categoria: "animated",
        texto: 'Pasa 1 año...'
    },
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "17 ABY",
        imagenes: [
            "assets/portadas/animacion/maul/maul-lord-de-las-sombras.webp"
        ],
        titulo: 'Serie "Maul - Lord de las Sombras" (Temporada 1)',
        eventos: [{ tiempo: 'Sucede 2 años después de "La Venganza de los Sith" (Película 3)', descripcion: '- Muestra la historia de Darth Maul construyendo su imperio criminal desde el inframundo tras la caída de la República y la Orden 66.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "17 ABY",
        imagenes: [
            "assets/portadas/animacion/historias-jedi/hdlj-temp1-cap6.webp",
        ],
        titulo: 'Serie "Historias de los Jedi" - Capítulo 6 [Resolve]',
        eventos: [{ tiempo: 'Sucede 2 años después de "La Venganza de los Sith" (Película 3).', descripcion: '- Muestra la vida de Ahsoka después de la Guerra de los Clones.' }]
    },
    {
        eraId: "era-imperio",
        tipo: "descripcion",
        categoria: "game",
        texto: 'Pasan 3 años...'
    },
    {
        eraId: "era-imperio",
        categoria: "game",
        titulo: 'Juego "STAR WARS Jedi: Fallen Order"',
        año: "14 ABY",
        imagenes: [
            "assets/portadas/juegos/jedi-fallen-order.webp",
        ],
        eventos: [{ tiempo: '5 años después de "La Venganza de los Sith" (Película 3)', descripcion: '- Historia de Cal Kestis, un sobreviviente de la Orden 66.' }]
    },
    {
        eraId: "era-imperio",
        tipo: "descripcion",
        categoria: "game",
        texto: 'Pasa 1 año...'
    },
    {
        eraId: "era-imperio",
        tipo: "descripcion",
        año: "13 ABY",
        imagenes: [
            "assets/portadas/peliculas/prologo-rogue-one.webp",
            "assets/portadas/peliculas/prologo-han-solo.webp"
        ],
        texto: '<strong>En este punto suceden 2 cosas. Es decir, 6 años después de "La Venganza de los Sith" (Película 3):</strong><br><br><strong>1. Prólogo de "Rogue One":</strong> <em>(primeros 8 minutos de la película)</em><br>Muestra a Jyn Erso de niña. <span class="note"><br>*No es necesario ver la película en este punto</span>.<br><br><strong>2. Prólogo de "Han Solo":</strong> <em>(primeros 14 minutos de la película)</em><br>Muestra la juventud de Han Solo en el planeta Corellia, antes de su reclutamiento imperial.'
    },
    {
        eraId: "era-imperio",
        categoria: "movie",
        titulo: 'Película "Han Solo"',
        año: "10 ABY",
        imagenes: [
            "assets/portadas/peliculas/han-solo.webp",
        ],
        eventos: [{ tiempo: '9 años después de "La Venganza de los Sith" (Película 3)', descripcion: '- Muestra la vida de Han Solo en su juventud' }]
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "10 ABY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp2-cap12.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 2 - Capítulo 12 [Doble Traición]',
        eventos: [{ tiempo: 'Sucede al mismo tiempo que la película de Han Solo, en el lapso de tiempo que quedan separados por 3 años Han Solo y Qi\'ra (Novia de Han Solo).', descripcion: '- El pirata Hondo se une con el droide IG-88 para capturar a Qi\'ra (Novia de Han Solo).' }]
    },
    {
        eraId: "era-imperio",
        categoria: "live-action",
        año: "9 ABY",
        imagenes: [
            "assets/portadas/live-action/obi-wan/obi-wan-kenobi.webp",
        ],
        titulo: 'Serie "Obi-Wan Kenobi" (Temporada 1)',
        eventos: [{ tiempo: '10 años después de "La Venganza de los Sith" (Película 3)', descripcion: '- Muestra la vida de Obi-Wan ocultándose después de la Orden 66.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "game",
        año: "9 ABY",
        imagenes: [
            "assets/portadas/juegos/jedi-survivor.webp",
        ],
        titulo: 'Juego "STAR WARS Jedi: Survivor"',
        eventos: [{ tiempo: '10 años después de "La Venganza de los Sith" (Película 3).<br>Es decir, 5 años después del primer juego.', descripcion: '- Es el segundo juego de Cal Kestis (Un sobreviviente de la orden 66).' }]
    },
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "5 ABY",
        imagenes: [
            "assets/portadas/animacion/historias-imperio/hdi-temp1-cap6.webp",
        ],
        titulo: 'Serie “Historias del Imperio” - Capítulo 6 [La Salida]',
        eventos: [{ tiempo: 'Sucede 14 años después de la "La Venganza de los Sith" (Película 3),<br>Es decir, 5 años antes de la película de "Rogue One"', descripcion: '- La Ex-Amiga de Ahsoka (Barriss Offee) se enfrenta a su pasado.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "5 ABY",
        imagenes: [
            "assets/portadas/animacion/historias-imperio/hdi-temp1-cap2.webp",
        ],
        titulo: 'Serie “Historias del Imperio” - Capítulo 2 [El Camino de la Ira]',
        eventos: [{ tiempo: 'Sucede 14 años después de "La Venganza de los Sith" (Película 3),<br>Es decir, 5 años antes de la película de Rogue One', descripcion: '- La Bruja que sobrevivió a la masacre del General Grievous (Morgan Elsbeth) se une al Imperio.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "live-action",
        año: "5 ABY",
        imagenes: [
            "assets/portadas/live-action/andor/andor.webp",
        ],
        titulo: 'Serie "Andor" (Temporada 1)',
        eventos: [{ descripcion: '<strong>14 años después de "La Venganza de los Sith" (Película 3),<br>Es decir, 5 años antes de la película de Rogue One</strong>' }]
    },
    {
        eraId: "era-imperio",
        tipo: "descripcion",
        categoria: "live-action",
        texto: 'Pasa 1 año...'
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "4 ABY",
        imagenes: [
            "assets/portadas/cortos/rebels/rebels-cortos.webp",
        ],
        titulo: 'Cortos "Rebels"',
        eventos: [
            { descripcion: '<strong>14 años después de "La Venganza de los Sith" (Película 3),<br>Es decir, 5 años antes de la película de Rogue One</strong>' },
            { clase: "capitulo", descripcion: '<strong>Capítulo 1: El fantasma en la máquina</strong>' },
            { clase: "capitulo", descripcion: '<strong>Capítulo 2: El arte ataca</strong>' },
            { clase: "capitulo", descripcion: '<strong>Capítulo 3: Enriedo</strong>' },
            { clase: "capitulo", descripcion: '<strong>Capítulo 4: Propiedad de Ezra Bridger</strong>' }
        ]
    },
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "4 ABY",
        imagenes: [
            "assets/portadas/animacion/rebels/rebels.webp",
        ],
        titulo: 'Serie "Rebels" (Temporada 1)',
        eventos: [{ descripcion: '<strong>Sucede 14 años después de "La Venganza de los Sith" (Película 3),<br>Es decir, 5 años antes de la película de Rogue One</strong>' }]
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "4 ABY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp2-cap16.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 2 - Capítulo 16 [Una lección de desarme]',
        contenidoExtra: '<ul>- Ahsoka le da a Ezra una lección sobre confiar en la Fuerza.</ul>'
    },
    {
        eraId: "era-imperio",
        categoria: "live-action",
        año: "3 ABY",
        imagenes: [
            "assets/portadas/live-action/andor/andor-temp2-cap1.webp",
            "assets/portadas/live-action/andor/andor-temp2-cap2.webp",
            "assets/portadas/live-action/andor/andor-temp2-cap3.webp"
        ],
        titulo: 'Serie "Andor" (Temporada 2) - Capítulos 1-2-3',
        eventos: [{ descripcion: '<strong>14 años después de "La Venganza de los Sith" (Película 3),<br>Es decir, 5 años antes de la película de Rogue One</strong>' }]
    },
    {
        eraId: "era-imperio",
        tipo: "descripcion",
        categoria: "live-action",
        texto: 'Pasa 1 año...'
    },
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "3 ABY",
        imagenes: [
            "assets/portadas/animacion/rebels/rebels.webp",
        ],
        titulo: 'Serie "Rebels" (Temporada 2) - Desde los Capítulos 1 al 11',
        eventos: [{ descripcion: '<strong>16 años después de "La Venganza de los Sith" (Película 3)<br>Es decir, 3 años antes de la película de Rogue One</strong>' }]
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "3 ABY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp1-cap8.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 1 - Capítulo 8 [Recompensa de problemas]',
        contenidoExtra: '<ul>- Leia y Sabine son atacadas por el droide cazarrecompensas IG-88.</ul>'
    },
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "3 ABY",
        imagenes: [
            "assets/portadas/animacion/rebels/rebels.webp",
        ],
        titulo: 'Serie "Rebels" (Temporada 2) - Desde los Capítulos 12 al 22',
        eventos: [{ descripcion: '<strong>16 años después de "La Venganza de los Sith" (Película 3)<br>Es decir, 3 años antes de la película de Rogue One</strong>' }]
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "3 ABY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp1-cap12.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 1 - Capítulo 12 [La nueva recluta]',
        contenidoExtra: '<ul>- Sabine y Ketsu se enfrentan a stormtroopers.</ul>'
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "3 ABY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp1-cap13.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 1 - Capítulo 13 [Aliadas por accidente]',
        contenidoExtra: '<ul>- Sabine ayuda a Jyn Erso a escapar de los stormtroopers que la persiguen.</ul>'
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "3 ABY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp1-cap16.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 1 - Capítulo 16 [Curso intensivo]',
        contenidoExtra: '<ul>- Sabine le presta a Ketsu su speeder favorito.</ul>'
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "3 ABY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp2-cap1.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 2 - Capítulo 1 [Despegue apresurado]',
        contenidoExtra: '<ul>- Hera y Sabine liberan la nave imperial equivocada.</ul>'
    },
    {
        eraId: "era-imperio",
        categoria: "live-action",
        año: "3 ABY",
        imagenes: [
            "assets/portadas/live-action/andor/andor-temp2-cap4.webp",
            "assets/portadas/live-action/andor/andor-temp2-cap5.webp",
            "assets/portadas/live-action/andor/andor-temp2-cap6.webp"
        ],
        titulo: 'Serie "Andor" (Temporada 2) - Capítulos 4-5-6',
        eventos: [{ descripcion: '<strong>16 años después de "La Venganza de los Sith" (Película 3),<br>Es decir, 3 años antes de la película de Rogue One</strong>' }]
    },
    {
        eraId: "era-imperio",
        tipo: "descripcion",
        categoria: "live-action",
        texto: 'Pasa 1 año...'
    },
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "2 ABY",
        
        imagenes: [
            "assets/portadas/animacion/rebels/rebels.webp",
        ],
        titulo: 'Serie "Rebels" (Temporada 3) - Desde los Capítulos 1 al 17',
        eventos: [{ descripcion: '<strong>Sucede 17 años después de "La Venganza de los Sith" (Película 3),<br>Es decir, 2 años antes de la película de Rogue One</strong>' }]
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "2 ABY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp2-cap11.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 2 - Capítulo 11 [Historia del arte]',
        contenidoExtra: '<ul>- Sabine y su hermano Tristan embarcan una misión para liberar a Mandalore.</ul>'
    },
    {
        eraId: "era-imperio",
        categoria: "live-action",
        año: "2 ABY",
        imagenes: [
            "assets/portadas/live-action/andor/andor-temp2-cap7.webp",
            "assets/portadas/live-action/andor/andor-temp2-cap8.webp",
            "assets/portadas/live-action/andor/andor-temp2-cap9.webp"
        ],
        titulo: 'Serie "Andor" (Temporada 2) - Capítulos 7-8-9',
        eventos: [{ tiempo: '17 años después de "La Venganza de los Sith" (Película 3),<br>Es decir, 2 años antes de la película de Rogue One', descripcion: '- La senadora Mon Mothma da un discurso en el Senado (Capítulo 9).' }]
    },
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "2 ABY",
        imagenes: [
            "assets/portadas/animacion/rebels/rebels-temp3-cap18.webp",
        ],
        titulo: 'Serie "Rebels" (Temporada 3) - Capítulo 18',
        eventos: [{ tiempo: 'Sucede 17 años después de "La Venganza de los Sith" (Película 3),<br>Es decir, 2 años antes de la película de Rogue One', descripcion: '- El capítulo 18 inicia con Mon Mothma realizando un segundo discurso en su nave al escapar de Coruscant (gracias a la ayuda de Andor).<br><br>- Al final de este capítulo 18 da un tercer discurso a toda la galaxia en la nave de "El Fantasma" sobre la órbita del planeta Dantooine y se conforma Oficialmente "La Rebelión".' }]
    },
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "2 ABY",
        imagenes: [
            "assets/portadas/animacion/rebels/rebels.webp",
        ],
        titulo: 'Serie "Rebels" (Temporada 3) - Desde los Capítulos 19 al 22',
        eventos: [{ descripcion: '<strong>Sucede 17 años después de "La Venganza de los Sith" (Película 3),<br>Es decir, 2 años antes de la película de Rogue One</strong>' }]
    },
    {
        eraId: "era-imperio",
        tipo: "descripcion",
        categoria: "live-action",
        texto: 'Pasa 1 año...'
    },
    {
        eraId: "era-imperio",
        categoria: "game",
        año: "1 ABY",
        imagenes: [
            "assets/portadas/juegos/vader-inmortal.webp",
        ],
        titulo: 'Juego "Vader Inmortal"',
        eventos: [{ tiempo: 'Sucede 18 años después de "La Venganza de los Sith" (Película 3),<br>Es decir, 1 año antes de la película de Rogue One', descripcion: '- Un juego VR (Realidad Virtual) donde controlamos a un contrabandista.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "animated",
        año: "1 ABY",
        imagenes: [
            "assets/portadas/animacion/rebels/rebels.webp",
        ],
        titulo: 'Serie "Rebels" (Temporada 4)',
        eventos: [{ tiempo: 'Sucede 18 años después de "La Venganza de los Sith" (Película 3),<br>Es decir, 1 año antes de la película de Rogue One', descripcion: '- El epílogo del último capítulo (a partir del minuto 42:00) da un salto hacia el futuro hasta el <span class="badge-year badge-dby badge-inline" data-tooltip="DBY: Después de la Batalla de Yavin">9 DBY</span> (5 años después de "El Retorno del Jedi"). Esa escena final conecta directamente con la serie Live-Action de Ahsoka.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "1 ABY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp1-cap7.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 1 - Capítulo 7 [La extraña]',
        contenidoExtra: '<ul>- Jyn Erso ayuda a una niña maltratada por stormtroopers.</ul>'
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "1 ABY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp2-cap4.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 2 - Capítulo 4 [El intercambio de Jyn]',
        contenidoExtra: '<ul>- Jyn Erso persigue a un niño extraterrestre hambriento.</ul>'
    },
    {
        eraId: "era-imperio",
        categoria: "live-action",
        año: "1 ABY",
        imagenes: [
            "assets/portadas/live-action/andor/andor-temp2-cap10.webp",
            "assets/portadas/live-action/andor/andor-temp2-cap11.webp",
            "assets/portadas/live-action/andor/andor-temp2-cap12.webp"
        ],
        titulo: 'Serie "Andor" (Temporada 2) - Capítulos 10-11-12',
        eventos: [{ descripcion: '<strong>Sucede 19 años después de "La Venganza de los Sith" (Película 3).<br><br>Estos capítulos finales ocurren apenas unas semanas o días antes de la película "Rogue One".</strong>' }]
    },
    {
        eraId: "era-imperio",
        categoria: "movie",
        año: "0 ABY",
        imagenes: [
            "assets/portadas/peliculas/rogue-one.webp",
        ],
        titulo: 'Película "Rogue One"',
        eventos: [
            { descripcion: '<strong>Sucede 19 años después de "La Venganza de los Sith" (Película 3)</strong>' },
            { tiempo: 'O también 10 años después de la película de "Han Solo"', descripcion: '- Un grupo de rebeldes emprende una misión para obtener los planos de una super-arma del Imperio.' }
        ]
    },
    {
        eraId: "era-imperio",
        categoria: "movie",
        año: "0 ABY",
        imagenes: [
            "assets/portadas/peliculas/una-nueva-esperanza-episodio4.webp",
        ],
        titulo: 'Episodio IV: "Una Nueva Esperanza" (Película 4)',
        eventos: [{ tiempo: 'Comienza inmediatamente después de la película de "Rogue One"', descripcion: '- Se pone en marcha el ataque a la super-arma del Imperio gracias a la obtención de los planos por los rebeldes.<br><br><strong>*Dato clave:</strong> Al final de esta película ocurre la famosa <strong>"Batalla de Yavin"</strong> (la destrucción de la Estrella de la Muerte). Este es el evento central que divide toda la cronología galáctica en Antes (ABY) y Después (DBY).' }]
    },
    {
        eraId: "era-imperio",
        tipo: "descripcion",
        texto: 'Pasan 3 años...'
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "3 DBY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp1-cap5.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 1 - Capítulo 5 [Las bestias de la Base Echo]',
        eventos: [{ tiempo: 'Sucede días antes de "El Imperio Contraataca" (Película 5)', descripcion: '- Leia y R2-D2 liberan a Chewie, sucede en la base Echo, la nueva base Rebelde en el planeta Hoth.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "movie",
        año: "3 DBY",
        imagenes: [
            "assets/portadas/peliculas/el-imperio-contraataca-episodio5.webp",
        ],
        titulo: 'Episodio V: "El Imperio Contraataca" (Película 5)',
        eventos: [{ tiempo: 'Sucede 3 años después de "Una Nueva Esperanza" (Película 4)', descripcion: '- La Rebelión es perseguida por el Imperio mientras Luke busca entrenamiento.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "3 DBY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp2-cap7.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 2 - Capítulo 7 [El camino]',
        eventos: [{ tiempo: '- Sucede al mismo tiempo que "El Imperio Contraataca" (Película 5)', descripcion: '- Al momento que Luke empieza a entrenar.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "game",
        año: "3 DBY",
        imagenes: [
            "assets/portadas/juegos/outlaws.webp",
        ],
        titulo: 'Juego de “STAR WARS Outlaws”',
        eventos: [{ tiempo: 'Sucede entre "El Imperio Contraataca" (Película 5) y "El Retorno del Jedi" (Película 6).', descripcion: '- Muestra la vida de Kay Vess, una ladrona del planeta Cantonica (el planeta casino)' }]
    },
    {
        eraId: "era-imperio",
        tipo: "descripcion",
        texto: 'Pasa 1 año...'
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "4 DBY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp2-cap6.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 2 - Capítulo 6 [Cazador, cazado]',
        eventos: [{ tiempo: '- Sucede días antes de "El Retorno del Jedi" (Película 6).', descripcion: '- Leia, Chewbacca y R2-D2 viajan a Ord Mantell.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "movie",
        año: "4 DBY",
        imagenes: [
            "assets/portadas/peliculas/el-regreso-del-jedi-episodio6.webp",
        ],
        titulo: 'Episodio VI: "El Retorno del Jedi" (Película 6)',
        eventos: [{ tiempo: 'Sucede 1 año después de "El Imperio Contraataca" (Película 5)', descripcion: '- Una nueva super-arma del imperio amenaza a los rebeldes y la galaxia.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "4 DBY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp1-cap3.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 1 - Capítulo 3 [El Escape de los Ewoks]',
        eventos: [{ tiempo: 'Sucede al mismo tiempo que "El Retorno del Jedi" (Película 6), al momento de que Leia acompaña al ewok a su aldea.', descripcion: '- Pasa a la hora 1:06:10 de la película.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "4 DBY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp2-cap9.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 2 - Capítulo 9 [Chopper y sus amigos]',
        eventos: [{ tiempo: '- Sucede al mismo tiempo que "El Retorno del Jedi" (Película 6)', descripcion: '- Al momento de la batalla en la luna boscosa de Endor.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "4 DBY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp1-cap14.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 1 - Capítulo 14 [Festín imperial]',
        eventos: [{ tiempo: 'Sucede al final de "El Retorno del Jedi" (Película 6)', descripcion: '- Preparan la fiesta que se celebra al anochecer en la luna boscosa de Endor.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "cortos",
        año: "4 DBY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp2-cap15.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 2 - Capítulo 15 [Trampas y adversidades]',
        eventos: [{ tiempo: 'Sucede días después de "El Retorno del Jedi" (Película 6)', descripcion: '- Los rebeldes se preparan para irse de la luna boscosa de Endor.' }]
    },
    {
        eraId: "era-imperio",
        categoria: "game",
        año: "4 DBY",
        imagenes: [
            "assets/portadas/juegos/squadrons.webp",
        ],
        titulo: 'Juego de “Star Wars Squadrons”',
        eventos: [{ tiempo: 'Sucede 4 años después de "El Retorno del Jedi" (Película 6)', descripcion: '- El prólogo del juego sucede después de la destrucción de Alderaan, es decir, el planeta de Leia que destruyen en "Una Nueva Esperanza" (Película 4).<br><br>- El resto del modo historia sucede 4 años después de "El Retorno del Jedi" (Película 6).' }]
    },
    {
        eraId: "era-imperio",
        categoria: "game",
        año: "4 - 5 DBY",
        imagenes: [
            "assets/portadas/juegos/battlefront-2.webp",
        ],
        titulo: 'Juego "STAR WARS Battlefront II"',
        eventos: [{ tiempo: 'Comienza durante "El Retorno del Jedi" (Película 6) y finaliza 1 año después con la Batalla de Jakku.', descripcion: '- Muestra la historia de Iden Versio, comandante del Escuadrón Infernal del Imperio.<br><br><span class="note"><strong>*Nota 1:</strong> El DLC "Resurrección" de este juego ocurre varias décadas más adelante (en la Era de la Resistencia) y se encuentra detallado más abajo en esta guía.</span><br><br><span class="note"><strong>*Nota 2:</strong> Si te preguntas por qué no está "Battlefront I" en esta lista, es porque el primer juego se enfocó en el multijugador y no cuenta con un modo campaña/historia canon.</span>' }]
    },
    // --- INICIO DE LA ERA DE LA NUEVA REPÚBLICA ---
    {
        eraId: "era-nueva-republica",
        categoria: "live-action",
        año: "9 DBY",
        imagenes: [
            "assets/portadas/live-action/el-mandaloriano/el-mandaloriano.webp",
        ],
        titulo: 'Serie "El Mandaloriano" (Temporada 1)',
        eventos: [{ tiempo: 'Sucede 5 años después de "El Retorno del Jedi" (Película 6)', descripcion: '- Muestra la vida del cazarrecompensas "Mando" (Din Djarin).' }]
    },
    {
        eraId: "era-nueva-republica",
        categoria: "animated",
        año: "9 DBY",
        imagenes: [
            "assets/portadas/animacion/historias-imperio/hdi-temp1-cap3.webp",
        ],
        titulo: 'Serie “Historias del Imperio” - Capítulo 3 [El Camino del Odio]',
        eventos: [{ tiempo: 'Sucede 5 años después de "El Retorno del Jedi" (Película 6)', descripcion: '- La Bruja (Morgan Elsbeth) que sobrevivió a la masacre del General Grievous, recibe visitas de la Nueva República.' }]
    },
    {
        eraId: "era-nueva-republica",
        categoria: "live-action",
        año: "9 DBY",
        imagenes: [
            "assets/portadas/live-action/el-mandaloriano/el-mandaloriano.webp",
        ],
        titulo: 'Serie "El Mandaloriano" (Temporada 2)',
        eventos: [{ descripcion: '<strong>Sucede meses después de la Temporada 1</strong>' }]
    },
    {
        eraId: "era-nueva-republica",
        categoria: "live-action",
        año: "9 DBY",
        imagenes: [
            "assets/portadas/live-action/el-libro-de-boba-fett/el-libro-de-boba-fett.webp",
        ],
        titulo: 'Serie "El Libro de Boba Fett" (Temporada 1)',
        eventos: [{ descripcion: '<strong>Sucede meses después de la Temporada 2 de "El Mandaloriano"</strong>' }]
    },
    {
        eraId: "era-nueva-republica",
        categoria: "live-action",
        año: "9 DBY",
        imagenes: [
            "assets/portadas/live-action/el-mandaloriano/el-mandaloriano.webp",
        ],
        titulo: 'Serie "El Mandaloriano" (Temporada 3)',
        eventos: [{ descripcion: '<strong>Sucede poco tiempo después de la Temporada 1 de "El Libro de Boba Fett"</strong>' }]
    },
    {
        eraId: "era-nueva-republica",
        categoria: "live-action",
        año: "9 DBY",
        imagenes: [
            "assets/portadas/live-action/ahsoka/ahsoka.webp",
        ],
        titulo: 'Serie "Ahsoka" (Temporada 1)',
        eventos: [{ tiempo: 'Sucede poco tiempo después de la Temporada 3 de "El Mandaloriano"', descripcion: '- Muestra la vida de Ahsoka y sus amigos de la serie de "Rebels".' }]
    },
    {
        eraId: "era-nueva-republica",
        categoria: "live-action",
        año: "9 DBY",
        imagenes: [
            "assets/portadas/live-action/skeleton-crew/skeleton-crew.webp",
        ],
        titulo: 'Serie "Skeleton Crew" (Temporada 1)',
        eventos: [{ tiempo: 'Sucede poco tiempo después de la Temporada 1 de "Ahsoka"', descripcion: '- Muestra la historia de un grupo de niños y un pirata experimentado.' }]
    },
    {
        eraId: "era-nueva-republica",
        categoria: "movie",
        año: "9 DBY",
        imagenes: [
            "assets/portadas/peliculas/el-mandaloriano-y-grogu.webp",
        ],
        titulo: 'Película "El Mandaloriano y Grogu"',
        eventos: [{ tiempo: 'Sucede después de la Temporada 3 de "El Mandaloriano"', descripcion: '- Continúa las aventuras de Din Djarin y Grogu en la pantalla grande.' }]
    },
    // --- INICIO DE LA ERA DE LA RESISTENCIA Y LA PRIMERA ORDEN ---
    {
        eraId: "era-resistencia",
        categoria: "animated",
        año: "34 DBY",
        imagenes: [
            "assets/portadas/animacion/resistencia/la-resistencia.webp",
        ],
        titulo: 'Serie "La Resistencia" (Temporada 1) - Desde los Capítulos 1 al 19',
        eventos: [{ tiempo: 'Sucede 30 años después de "El Retorno del Jedi" (Película 6)', descripcion: '- Muestra la historia de Kazuda Xiono (Kaz), poco antes de "El Despertar de la Fuerza" (Película 7).' }]
    },
    {
        eraId: "era-resistencia",
        categoria: "cortos",
        año: "34 DBY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp1-cap15.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 1 - Capítulo 15 [El riesgo de Happabore]',
        eventos: [{ tiempo: 'Sucede días antes de "El Despertar de la Fuerza" (Película 7)', descripcion: '- Rey descubre un Happabore sentado en la nave.' }]
    },
    {
        eraId: "era-resistencia",
        categoria: "cortos",
        año: "34 DBY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp2-cap5.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 2 - Capítulo 5 [Corre, Rey, corre]',
        eventos: [{ tiempo: 'Sucede días antes de "El Despertar de la Fuerza" (Película 7)', descripcion: '- Rey es acorralada por Teedo en un Destructor Estelar derribado.' }]
    },
    {
        eraId: "era-resistencia",
        categoria: "movie",
        año: "34 DBY",
        imagenes: [
            "assets/portadas/peliculas/el-despertar-de-la-fuerza-episodio7.webp",
        ],
        titulo: 'Episodio VII: "El Despertar de la Fuerza" (Película 7)',
        eventos: [{ tiempo: 'Sucede 30 años después de "El Retorno del Jedi" (Película 6)', descripcion: '- El conflicto en la galaxia regresa, La Primera Orden resurge de las sombras del extinto Imperio.' }]
    },
    {
        eraId: "era-resistencia",
        categoria: "cortos",
        año: "34 DBY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp1-cap1.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 1 - Capítulo 1 [Las arenas de Jakku]',
        eventos: [{ tiempo: 'Sucede al mismo tiempo que "El Despertar de la Fuerza" (Película 7), al momento de conocerse Rey y BB-8.', descripcion: '- Pasa a la hora 0:16:10 de la película.' }]
    },
    {
        eraId: "era-resistencia",
        categoria: "cortos",
        año: "34 DBY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp1-cap2.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 1 - Capítulo 2 [Los bandidos de BB-8]',
        eventos: [{ tiempo: 'Sucede al mismo tiempo que "El Despertar de la Fuerza" (Película 7), al momento de conocerse Rey y BB-8.', descripcion: '- Pasa a la hora 0:16:10 de la película.' }]
    },
    {
        eraId: "era-resistencia",
        categoria: "cortos",
        año: "34 DBY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp1-cap9.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 1 - Capítulo 9 [Problemas de rastreo]',
        eventos: [{ tiempo: 'Sucede al mismo tiempo que "El Despertar de la Fuerza" (Película 7), al momento de que Rey y los demás escapan de la nave "Eravana" (Es decir, el carguero de Han Solo donde transportaban "Rathtars").', descripcion: '- Pasa a la hora 0:49:00 de la película.' }]
    },
    {
        eraId: "era-resistencia",
        categoria: "cortos",
        año: "34 DBY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp2-cap14.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 2 - Capítulo 14 [Persecución peligrosa]',
        eventos: [{ tiempo: 'Sucede al mismo tiempo que "El Despertar de la Fuerza" (Película 7), muestra cómo Rey y Finn llegaron al Oscilador Térmico.', descripcion: '- Pasa a la hora 1:44:47 de la película.' }]
    },
    {
        eraId: "era-resistencia",
        categoria: "animated",
        año: "34 DBY",
        imagenes: [
            "assets/portadas/animacion/resistencia/la-resistencia-temp1-cap20.webp",
            "assets/portadas/animacion/resistencia/la-resistencia-temp1-cap21.webp",
        ],
        titulo: 'Serie "La Resistencia" (Temporada 1) - Desde los Capítulos 20 al 21',
        eventos: [{ tiempo: 'Sucede 30 años después de "El Retorno del Jedi" (Película 6)', descripcion: '- Muestra qué hace Kazuda Xiono (Kaz) al final de "El Despertar de la Fuerza" (Película 7)' }]
    },
    {
        eraId: "era-resistencia",
        categoria: "game",
        año: "34 DBY",
        imagenes: [
            "assets/portadas/juegos/battlefront-2-dlc-resurrection.webp",
        ],
        titulo: 'DLC “Resurrección” del Juego de “Star Wars Battlefront II”',
        eventos: [{ tiempo: 'Sucede al mismo tiempo que "El Despertar de la Fuerza" (Película 7)', descripcion: '- Muestra qué hace Iden Versio durante "El Despertar de la Fuerza" (Película 7).' }]
    },
    {
        eraId: "era-resistencia",
        categoria: "movie",
        año: "34 DBY",
        imagenes: [
            "assets/portadas/peliculas/los-ultimos-jedi-episodio8.webp",
        ],
        titulo: 'Episodio VIII: "Los Últimos Jedi" (Película 8)',
        eventos: [{ tiempo: 'Comienza inmediatamente después de "El Despertar de la Fuerza" (Película 7)', descripcion: '- La Primera Orden persigue a la Resistencia que intenta escapar.' }]
    },
    {
        eraId: "era-resistencia",
        categoria: "cortos",
        año: "34 DBY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp2-cap3.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 2 - Capítulo 3 [Trabajo en equipo]',
        eventos: [{ tiempo: 'Sucede al mismo tiempo que "Los Últimos Jedi" (Película 8)', descripcion: '- Muestra cómo Finn y Rose viajan a Cantonica (el planeta casino).' }]
    },
    {
        eraId: "era-resistencia",
        categoria: "cortos",
        año: "34 DBY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp2-cap8.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 2 - Capítulo 8 [Porgs!]',
        eventos: [{ tiempo: 'Sucede al mismo tiempo que "Los Últimos Jedi" (Película 8)', descripcion: '- Muestra cuando Rey, Chewbacca y R2-D2 van a Ahch-To (planeta donde se oculta Luke Skywalker).' }]
    },
    {
        eraId: "era-resistencia",
        categoria: "cortos",
        año: "34 DBY",
        imagenes: [
            "assets/portadas/cortos/force-of-destiny/fod-temp2-cap13.webp",
        ],
        titulo: 'Corto "Forces of Destiny" - Temporada 2 - Capítulo 13 [Problemas con los Porg]',
        eventos: [{ tiempo: 'Sucede al mismo tiempo que "Los Últimos Jedi" (Película 8)', descripcion: '- Muestra cuando Rey va a entrenar a Ahch-To (planeta donde se oculta Luke Skywalker).' }]
    },
    {
        eraId: "era-resistencia",
        categoria: "animated",
        año: "34 DBY",
        imagenes: [
            "assets/portadas/animacion/resistencia/la-resistencia.webp",
        ],
        titulo: 'Serie "La Resistencia" (Temporada 2)',
        eventos: [{ tiempo: 'Sucede al mismo tiempo que "Los Últimos Jedi" (Película 8)', descripcion: '- Muestra a Kaz cuando va al planeta de la resistencia (D\'Qar), pero la Resistencia ya se fue del planeta (Inicio de "Los Últimos Jedi" (Película 8)).' }]
    },
    {
        eraId: "era-resistencia",
        tipo: "descripcion",
        texto: 'Pasa 1 año...'
    },
    {
        eraId: "era-resistencia",
        tipo: "descripcion",
        año: "35 DBY",
        imagenes: [
            "assets/portadas/peliculas/mensaje-de-palpatine.webp",
        ],
        texto: 'En este punto de la historia se envía un mensaje para toda la galaxia, el mensaje puedes escucharlo en el canal de Youtube de "La Fosa del Rancor"<br><br>- Link del video: <a href="https://youtu.be/j4KLj5OLTcA?si=xbDE5e4QE28kzi3j" target="_blank" rel="noopener noreferrer" class="link-videoyoutube">"Mensaje enviado a toda la Galaxia"</a>'
    },
    {
        eraId: "era-resistencia",
        categoria: "movie",
        año: "35 DBY",
        imagenes: [
            "assets/portadas/peliculas/el-ascenso-de-skywalker-episodio9.webp",
        ],
        titulo: 'Episodio IX: "El Ascenso de Skywalker" (Película 9)',
        eventos: [{ descripcion: '<strong>Sucede un año después de "Los Últimos Jedi" (Película 8)</strong>' }]
    }
];
