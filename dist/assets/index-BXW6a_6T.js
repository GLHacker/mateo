(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const x="/mateo/assets/mateo_avatar-C0ZxHqTb.png";function A(){const e=document.createElement("div");e.className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 space-y-8";const t=document.createElement("div");t.className="text-center flex flex-col items-center animate-fade-in-up",t.innerHTML=`
        <div class="relative w-64 h-64 mb-4">
            <div class="absolute inset-0 bg-mateo-blue opacity-20 rounded-full blur-xl animate-pulse"></div>
            <img src="${x}" alt="Mateo" class="relative w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500">
        </div>
        <h1 class="text-5xl md:text-6xl text-mateo-blue mb-2 drop-shadow-sm">¡Hola, soy Mateo!</h1>
        <p class="text-xl text-gray-600 font-bold bg-white/50 px-6 py-2 rounded-full shadow-sm">Bienvenido a mi aventura</p>
    `,e.appendChild(t);const o=document.createElement("div");return o.className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full",[{title:"Última Foto",icon:"📸",color:"bg-mateo-yellow",text:"Ver mis recuerdos",action:()=>C("/gallery")},{title:"Nuevo Cuento",icon:"📚",color:"bg-mateo-purple",text:"Leer historia",action:()=>C("/stories")},{title:"¡A Jugar!",icon:"🎮",color:"bg-mateo-green",text:"Jugar ahora",action:()=>C("/games")}].forEach(a=>{const r=document.createElement("div");r.className=`${a.color} bg-opacity-20 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 border-2 border-white/50 backdrop-blur-sm`,r.innerHTML=`
            <div class="text-4xl mb-2">${a.icon}</div>
            <h3 class="text-xl font-bold text-gray-800 mb-1">${a.title}</h3>
            <p class="text-sm text-gray-600 font-semibold">${a.text}</p>
        `,r.onclick=a.action,o.appendChild(r)}),e.appendChild(o),e}const h={STORIES:"mateo_stories_data",GALLERY:"mateo_gallery_data",GUESTBOOK:"mateo_guestbook_data",CHAT:"mateo_chat_data"},q=e=>{const t=localStorage.getItem(e);return t?JSON.parse(t):{}},w=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},j={getStoryInteractions:e=>q(h.STORIES)[e]||{likes:0,comments:[]},likeStory:e=>{const t=q(h.STORIES);return t[e]||(t[e]={likes:0,comments:[]}),t[e].likes+=1,w(h.STORIES,t),t[e].likes},commentStory:(e,t,o)=>{const s=q(h.STORIES);s[e]||(s[e]={likes:0,comments:[]});const a={user:t,text:o,timestamp:new Date().toISOString()};return s[e].comments.push(a),w(h.STORIES,s),s[e].comments},getPhotoInteractions:e=>q(h.GALLERY)[e]||{likes:0,comments:[]},likePhoto:e=>{const t=q(h.GALLERY);return t[e]||(t[e]={likes:0,comments:[]}),t[e].likes+=1,w(h.GALLERY,t),t[e].likes},commentPhoto:(e,t,o)=>{const s=q(h.GALLERY);s[e]||(s[e]={likes:0,comments:[]});const a={user:t,text:o,timestamp:new Date().toISOString()};return s[e].comments.push(a),w(h.GALLERY,s),s[e].comments},getGuestbookEntries:()=>{const e=q(h.GUESTBOOK);return Array.isArray(e)?e:[]},addGuestbookEntry:(e,t)=>{let o=q(h.GUESTBOOK);Array.isArray(o)||(o=[]);const s={name:e,message:t,timestamp:new Date().toISOString()};return o.unshift(s),w(h.GUESTBOOK,o),o},getChatMessages:()=>{const e=q(h.CHAT);return Array.isArray(e)?e:[]},addChatMessage:(e,t)=>{let o=q(h.CHAT);Array.isArray(o)||(o=[]);const s={user:e,text:t,timestamp:new Date().toISOString()};return o.push(s),o.length>50&&(o=o.slice(-50)),w(h.CHAT,o),o}},H="/mateo/assets/photo1-lYa61jdi.jpg",F="/mateo/assets/photo2-B4qhyc_h.jpg",B="/mateo/assets/photo3-BQC5fHKu.jpg",R="/mateo/assets/photo4-T8E2MGMA.jpg",$="/mateo/assets/photo5-Ds7jF7Pv.jpg",O="/mateo/assets/photo6-CU4lPFhb.jpg",G="/mateo/assets/photo7-z3XkA2XB.jpg",I="/mateo/assets/photo8-CAxqV4lg.jpg",U="/mateo/assets/photo9-dw9c2jj5.jpg",Y="/mateo/assets/photo10-5oPRAy5s.jpg",_="/mateo/assets/photo11-C-3ZdpYu.jpg",V="/mateo/assets/photo12-DUW5quqp.jpg",J="/mateo/assets/photo13-BIEdqHLx.jpg",Z="/mateo/assets/photo14-DwhCJTyJ.jpg",Q="/mateo/assets/photo15-BLo_GQHf.jpg",K="/mateo/assets/photo16-D6djkfk_.jpg",X="/mateo/assets/photo9-dw9c2jj5.jpg",W="/mateo/assets/photo6-CU4lPFhb.jpg",ee="/mateo/assets/photo5-Ds7jF7Pv.jpg";function ae(){const e=document.createElement("div");e.className="p-4 max-w-6xl mx-auto pb-24";const t=document.createElement("div");t.className="text-center mb-8 animate-fade-in-down",t.innerHTML=`
        <h1 class="text-4xl md:text-5xl text-mateo-blue mb-2 drop-shadow-sm font-fredoka">Galería de Recuerdos</h1>
        <p class="text-gray-600 font-semibold text-lg">Momentos inolvidables de Mateo</p>
    `,e.appendChild(t);const o=[{id:1,src:H,desc:"Primer día en el parque",story:"Mateo descubrió que el césped hace cosquillas.",date:"Enero 2024"},{id:2,src:F,desc:"Jugando con el abuelo",story:"El abuelo hace las mejores caras graciosas.",date:"Febrero 2024"},{id:3,src:B,desc:"Descubriendo los colores",story:"El rojo es su color favorito, ¡como las fresas!",date:"Marzo 2024"},{id:4,src:R,desc:"Risas en el baño",story:"¡Más burbujas, por favor!",date:"Marzo 2024"},{id:5,src:$,desc:"Su primer helado",story:"Estaba frío, pero delicioso.",date:"Abril 2024"},{id:6,src:O,desc:"Gateando por toda la casa",story:"Nadie puede atrapar al veloz Mateo.",date:"Mayo 2024"},{id:7,src:G,desc:"Con su juguete favorito",story:"El osito Sr. Abrazos va a todas partes.",date:"Mayo 2024"},{id:8,src:I,desc:"Durmiendo como un angelito",story:"Soñando con nuevas aventuras.",date:"Junio 2024"},{id:9,src:U,desc:"Fiesta de cumpleaños",story:"¡Un año lleno de amor y alegría!",date:"Julio 2024"},{id:10,src:Y,desc:"Explorando el jardín",story:"Buscando tesoros entre las flores.",date:"Agosto 2024"},{id:11,src:_,desc:"Mirando las nubes",story:"Esa parece un elefante.",date:"Agosto 2024"},{id:12,src:V,desc:"Jugando con bloques",story:"¡La torre más alta del mundo!",date:"Septiembre 2024"},{id:13,src:J,desc:"Paseo en cochecito",story:"Saludando a todos los perritos.",date:"Octubre 2024"},{id:14,src:Z,desc:"Aprendiendo a caminar",story:"Un paso, dos pasos... ¡y al suelo!",date:"Octubre 2024"},{id:15,src:Q,desc:"En la playa",story:"La arena es muy divertida.",date:"Noviembre 2024"},{id:16,src:K,desc:"Con mamá",story:"Los abrazos de mamá son los mejores.",date:"Noviembre 2024"},{id:17,src:X,desc:"Con papá",story:"Papá es muy fuerte y divertido.",date:"Noviembre 2024"},{id:18,src:W,desc:"Leyendo un cuento",story:"Había una vez...",date:"Diciembre 2024"},{id:19,src:ee,desc:"Sonrisa traviesa",story:"¿Qué estará planeando?",date:"Diciembre 2024"}],s=document.createElement("div");s.className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",o.forEach((d,i)=>{const u=`photo_${d.id}`,{likes:p}=j.getPhotoInteractions(u),b=document.createElement("div");b.className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-in-up",b.style.animationDelay=`${i*100}ms`,b.innerHTML=`
            <div class="relative aspect-square overflow-hidden cursor-pointer group">
                <img src="${d.src}" alt="${d.desc}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span class="text-white text-4xl">🔍</span>
                </div>
            </div>
            <div class="p-4">
                <p class="font-bold text-gray-700 mb-2">${d.desc}</p>
                <div class="flex justify-between items-center text-sm text-gray-500">
                    <span>${d.date}</span>
                    <button class="like-btn flex items-center space-x-1 text-mateo-red hover:bg-red-50 px-2 py-1 rounded-full transition">
                        <span>❤️</span>
                        <span class="like-count">${p}</span>
                    </button>
                </div>
            </div>
        `;const n=b.querySelector(".like-btn");n.onclick=c=>{c.stopPropagation();const g=j.likePhoto(u);n.querySelector(".like-count").textContent=g};const l=b.querySelector(".relative");l.onclick=()=>r(d),s.appendChild(b)}),e.appendChild(s);const a=document.createElement("div");a.id="lightbox",a.className="fixed inset-0 bg-black/90 z-[60] hidden flex items-center justify-center p-4",a.onclick=d=>{d.target===a&&m()},e.appendChild(a);function r(d){const i=`photo_${d.id}`;let{likes:u,comments:p}=j.getPhotoInteractions(i);const b=()=>{const f=a.querySelector(".lightbox-like-count"),M=a.querySelector("#lightbox-comments");f&&(f.textContent=u),M&&(M.innerHTML=p.length>0?p.map(E=>`
                        <div class="bg-gray-50 p-3 rounded-lg mb-2">
                            <span class="font-bold text-mateo-blue text-sm">${E.user}</span>
                            <p class="text-gray-700 text-sm">${E.text}</p>
                        </div>
                    `).join(""):'<p class="text-gray-400 text-sm italic">No hay comentarios aún. ¡Sé el primero!</p>')};a.innerHTML=`
            <div class="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale-in m-4">
                <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl z-10 bg-white/50 rounded-full w-10 h-10 flex items-center justify-center" onclick="document.getElementById('lightbox').classList.add('hidden')">×</button>
                <div class="flex flex-col md:flex-row h-full max-h-[80vh]">
                    <div class="w-full md:w-1/2 bg-black/5 flex items-center justify-center">
                        <img src="${d.src}" class="w-full h-full object-contain max-h-[50vh] md:max-h-full">
                    </div>
                    <div class="w-full md:w-1/2 p-6 overflow-y-auto flex flex-col">
                        <h3 class="text-3xl font-bold text-mateo-blue mb-4">${d.desc}</h3>
                        <div class="prose prose-lg text-gray-600 mb-6 flex-grow italic">
                            "${d.story||"Un momento mágico para recordar siempre."}"
                        </div>
                        <div class="mt-auto">
                            <div class="flex items-center justify-between text-sm text-gray-400 mb-4">
                                <span>${d.date}</span>
                                <span class="flex items-center text-mateo-red font-bold">❤️ <span class="lightbox-like-count ml-1">${u}</span></span>
                            </div>
                            <div class="grid grid-cols-2 gap-2 mb-4">
                                <button id="lightbox-like-btn" class="btn-primary bg-mateo-red hover:bg-red-400 text-sm py-2">❤️ Me Gusta</button>
                                <button id="lightbox-share-btn" class="btn-primary bg-mateo-green hover:bg-green-400 text-sm py-2">🔗 Compartir</button>
                            </div>
                            <div class="bg-blue-50 p-4 rounded-2xl">
                                <h4 class="font-bold text-mateo-blue mb-2">Comentarios</h4>
                                <div id="lightbox-comments" class="max-h-40 overflow-y-auto mb-3 custom-scrollbar">
                                    <!-- Comments loaded here -->
                                </div>
                                <div class="flex gap-2">
                                    <input type="text" id="lightbox-comment-input" placeholder="Escribe un comentario..." class="flex-1 p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mateo-blue text-sm">
                                    <button id="lightbox-send-comment" class="bg-mateo-blue text-white px-4 rounded-xl hover:bg-blue-600 transition">➤</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;const n=a.querySelector("#lightbox-like-btn");n.onclick=()=>{u=j.likePhoto(i),b()};const l=a.querySelector("#lightbox-share-btn");l.onclick=()=>{navigator.share?navigator.share({title:d.desc,text:d.story}).catch(()=>{}):alert("¡Comparte esta hermosa foto de Mateo con tu familia!")};const c=a.querySelector("#lightbox-comment-input"),g=a.querySelector("#lightbox-send-comment"),y=()=>{const f=c.value.trim();if(!f)return;p=j.commentPhoto(i,"Visitante",f),c.value="",b()};g.onclick=y,c.onkeypress=f=>{f.key==="Enter"&&y()},b(),a.classList.remove("hidden")}function m(){a.classList.add("hidden")}return e}const oe="/mateo/assets/story_space-BptFvBVu.png",te="/mateo/assets/story_dino-CwdtvQ6I.png",se=[{id:1,title:"Mateo y el Secreto de la Luna de Queso",image:oe,desc:"Una aventura espacial donde Mateo descubre de qué está hecha realmente la luna.",content:`
Había una vez, en una noche estrellada y tranquila, un niño llamado Mateo que miraba el cielo desde la ventana de su habitación. Mateo no era un niño cualquiera; era un explorador espacial en entrenamiento, o al menos eso le decía su abuelo mientras le ajustaba su casco imaginario antes de dormir. Esa noche, la luna brillaba más que nunca, redonda y perfecta, colgando en el cielo como una gran moneda de plata.

"¿De qué estará hecha la luna?", se preguntó Mateo en voz alta. Su papá le había dicho que era de roca y polvo, pero su abuelo le había guiñado un ojo y le había susurrado: "Algunos dicen que es de queso". Mateo, con su pijama de cohetes y sus ojos llenos de curiosidad, decidió que esa noche descubriría la verdad.

Cerró los ojos y, con la fuerza de su imaginación, su cama se transformó en la nave espacial "Rayo Veloz 3000". Los botones de su panel de control parpadeaban con luces de colores. "¡Preparando despegue en 3, 2, 1... Despegue!", gritó Mateo. La nave vibró y salió disparada hacia el cielo, dejando atrás su casa, su barrio y su ciudad, hasta que la Tierra se vio como una pequeña canica azul y verde.

El viaje por el espacio fue maravilloso. Mateo vio estrellas fugaces que dejaban estelas de polvo brillante, saludó a los satélites que giraban perezosamente y esquivó asteroides que flotaban como grandes papas espaciales. Pero su objetivo era claro: la Luna. A medida que se acercaba, la Luna se hacía más y más grande, llena de cráteres y montañas misteriosas.

Al aterrizar, la nave hizo un suave "puf" al tocar el suelo. Mateo se puso su traje espacial, revisó su tanque de oxígeno (que curiosamente olía a leche con chocolate) y abrió la escotilla. Dio un pequeño salto y, para su sorpresa, flotó suavemente. "¡Guau! ¡Aquí soy ligero como una pluma!", exclamó, dando saltos de canguro por la superficie lunar.

Mateo comenzó su investigación. Sacó su lupa especial y examinó el suelo. Era gris y polvoriento, tal como había dicho papá. "Mmm, parece roca", pensó un poco decepcionado. Pero entonces, vio algo brillar en el fondo de un cráter cercano. Se acercó con cuidado, saltando de piedra en piedra. En el centro del cráter, había una pequeña puerta plateada.

Con el corazón latiendo rápido, Mateo llamó a la puerta. "Toc, toc". La puerta se abrió con un chirrido y apareció un pequeño ser verde con tres ojos y antenas que se movían como resortes.
"¡Hola! Soy Zog", dijo el extraterrestre con una voz chillona pero amable. "¿Vienes por la degustación?"
"¿Degustación?", preguntó Mateo confundido.
"¡Sí! Hoy es el Festival del Queso Lunar", respondió Zog, abriendo la puerta completamente.

Mateo entró y se quedó boquiabierto. Dentro de la luna no había rocas grises. ¡Era una enorme fábrica de queso! Había ríos de queso cheddar derretido, montañas de queso suizo con agujeros gigantes donde los niños alienígenas jugaban a las escondidas, y nubes de queso crema que llovían galletas saladas.
"¡El abuelo tenía razón!", gritó Mateo emocionado.

Zog le explicó que la superficie de la luna era de roca para proteger el delicioso queso del sol caliente, pero que por dentro, la luna era la quesería más grande del universo. Mateo probó el queso lunar; sabía a una mezcla de sueños, risas y un toque de vainilla. Pasó horas jugando con Zog y sus amigos, deslizándose por toboganes de mozzarella y saltando en trampolines de queso gouda.

Cuando llegó la hora de volver, Zog le dio a Mateo un pequeño trozo de "Roca Lunar" que, al rasparlo, olía a queso fresco. "Para que no olvides tu aventura", le dijo Zog.
Mateo subió a su nave, se despidió de sus nuevos amigos y emprendió el viaje de regreso a casa. Al aterrizar en su habitación, abrió los ojos. El sol de la mañana entraba por la ventana. Mateo se estiró, pensando que todo había sido un sueño increíble. Pero entonces, al meter la mano en el bolsillo de su pijama, sintió algo. Sacó un pequeño trozo de roca gris. Lo olió y sonrió. Olía a queso.

Desde ese día, cada vez que Mateo mira la luna llena, le guiña un ojo, sabiendo que allí arriba, sus amigos están celebrando la fiesta más deliciosa del universo. Y aunque nadie más lo crea, él sabe el secreto: la luna, en su corazón, es del queso más dulce y mágico que existe.
        `},{id:2,title:"El Dinosaurio que Quería Ser Cantante",image:te,desc:"Tito el T-Rex tiene un sueño muy especial, pero su rugido es demasiado fuerte.",content:`
En el valle de los Dinosaurios, donde los volcanes humeaban y los helechos eran tan altos como edificios, vivía Tito. Tito era un Tiranosaurio Rex, grande, verde y con unos dientes muy afilados. Todos en el valle le tenían mucho respeto, y cuando Tito caminaba, el suelo temblaba: "¡Bum, bum, bum!". Pero Tito tenía un secreto. No quería ser temible. No quería cazar ni asustar a los demás. Lo que Tito más deseaba en el mundo era cantar.

Desde que era un pequeño dinosaurio saliendo del cascarón, Tito tarareaba melodías. Mientras los otros T-Rex practicaban sus rugidos feroces, Tito practicaba sus escalas musicales: "Do, re, mi, fa, sol...". Pero había un problema. Cada vez que Tito abría la boca para cantar una nota suave, lo que salía era un rugido atronador: "¡ROAAAR!".

Los pajaritos se caían de las ramas del susto, los Triceratops salían corriendo y los Diplodocus escondían sus cabezas entre las hojas.
"¡Lo siento!", gritaba Tito, pero su disculpa sonaba como un trueno.
Tito se sentía muy triste. "Tengo la música en mi corazón, pero mi voz es de monstruo", pensaba mientras se sentaba solo junto al lago.

Un día, se anunció el "Gran Concurso de Talentos del Valle". Todos los dinosaurios estaban emocionados. Las Pterodáctilos iban a hacer acrobacias aéreas, los Estegosaurios iban a tocar tambores con sus colas y los Velociraptores iban a bailar una coreografía muy rápida. Tito quería participar más que nada, pero tenía miedo de asustar a todos y arruinar la fiesta.

Mientras practicaba en una cueva lejana para no molestar, una pequeña libélula prehistórica se posó en su nariz.
"Tienes buen ritmo, grandullón", dijo la libélula.
Tito se quedó quieto para no espantarla. "¿Tú crees? Pero mi voz es demasiado fuerte."
"No es fuerte, es potente", corrigió la libélula. "Lo que necesitas no es cantar bajito, sino encontrar el estilo adecuado para tu voz."

La libélula, que se llamaba Lola, se convirtió en la entrenadora de Tito. Le enseñó que no tenía que intentar cantar canciones de cuna suaves. ¡Él era un T-Rex! Necesitaba cantar Rock and Roll.
"¡Usa tu fuerza, Tito! ¡Siente el ritmo en tus pies gigantes!", le animaba Lola.

Llegó el día del concurso. El valle estaba lleno. Cuando anunciaron a Tito, hubo un silencio nervioso. Algunos dinosaurios se prepararon para correr. Tito subió al escenario, que era una gran roca plana. Le temblaban las rodillas, pero vio a Lola dándole ánimos desde una flor.
Tito respiró hondo, cerró los ojos y empezó a golpear el suelo con el pie: "¡Bum, bum, clap! ¡Bum, bum, clap!". El ritmo era pegajoso. Luego, abrió la boca y soltó su voz. No fue un rugido de miedo, fue un canto poderoso y grave, lleno de energía.

"¡Soy Tito el Rex y vengo a cantar,
con mi voz de trueno os voy a animar!
¡Muevan las colas, muevan los pies,
el rock del dinosaurio bailen al revés!"

Al principio, el público estaba atónito. Pero el ritmo era irresistible. Los Triceratops empezaron a mover la cabeza, los Diplodocus movían sus largos cuellos al compás y hasta los pequeños Compsognathus saltaban de alegría. ¡Era un éxito! Tito cantó con toda su alma, feliz de poder compartir su voz sin asustar a nadie.

Cuando terminó, el valle estalló en aplausos y rugidos de felicidad. Tito hizo una reverencia, con una sonrisa gigante. Había descubierto que no tenía que cambiar quién era para cumplir su sueño; solo tenía que encontrar su propia manera de hacerlo.
Desde ese día, Tito se convirtió en la estrella de rock del Jurásico. Y aunque seguía siendo un T-Rex grande y temible por fuera, todos sabían que por dentro, era el dinosaurio con el corazón más musical de la historia.
        `},{id:3,title:"La Misión del Capitán Mateo en el Mar de Burbujas",image:x,desc:"La hora del baño se convierte en una expedición submarina llena de sorpresas.",content:`
Para muchos niños, la hora del baño es solo el momento de lavarse y ponerse el pijama. Pero para Mateo, cuando el agua empieza a llenar la bañera y el vapor empaña el espejo, comienza una misión de alto secreto.
"¡Capitán Mateo al puente de mando!", anunció su mamá mientras le ponía su patito de goma favorito en el agua.
Mateo, con una mirada decidida, se quitó la ropa de "niño terrestre" y se preparó para sumergirse en el inexplorado Mar de Burbujas.

Al entrar en el agua tibia, la bañera desapareció. Ahora Mateo estaba al mando del submarino "Bañera I", navegando por un océano infinito de espuma blanca y perfumada.
"Bitácora del Capitán", dijo Mateo (o eso intentó, haciendo burbujas con la boca). "Estamos entrando en la Zona de la Espuma Profunda. La visibilidad es baja, pero el olor a lavanda es fuerte."

Su primer oficial, el Patito Cuac, flotaba a su lado. "¡Cuac!", advirtió el patito.
"¡Tienes razón, oficial Cuac! ¡Monstruo marino a la vista!", exclamó Mateo.
Emergiendo de entre la espuma, apareció una enorme esponja amarilla. Pero el Capitán Mateo no tenía miedo. Agarró la esponja y la usó para limpiar el casco de su submarino (que casualmente eran sus propios brazos y piernas). "¡Toma eso, monstruo de la suciedad! ¡No podrás contra el poder del jabón!", rió Mateo.

De repente, una tormenta se desató. El "Grifo de la Cascada" se abrió, y un chorro de agua tibia cayó sobre la tripulación. Mateo cerró los ojos y se imaginó que atravesaba una catarata en una selva misteriosa. El agua le hacía cosquillas en la cabeza.
"¡Necesitamos refuerzos!", gritó.
Entonces, su mamá le pasó el barco pirata de juguete y el vaso de plástico azul.
"¡La flota ha llegado!", celebró Mateo. Llenó el vaso y creó una lluvia torrencial sobre el barco pirata, imaginando que navegaban por una tormenta en alta mar.

Pero la misión más peligrosa estaba por llegar: El Lavado de Cabeza. Muchos capitanes temían este momento, pero Mateo era valiente.
"¡Cierren las escotillas! (Cierren los ojos)", ordenó el Capitán.
Sintió el champú suave masajeando su cabello. Por un momento, pensó que un pulpo gigante le estaba haciendo cariñitos en la cabeza. Con mucho cuidado, se enjuagó, asegurándose de que ninguna gota de "ácido pica-ojos" entrara en su nave.
"¡Misión cumplida! ¡Cabello limpio y brillante!", anunció triunfante al salir a la superficie y abrir los ojos.

El Mar de Burbujas empezaba a calmarse. El agua se iba por el desagüe, creando un remolino mágico que intentaba llevarse los juguetes. Mateo rescató al Patito Cuac y al barco pirata justo a tiempo.
"Buen trabajo, equipo", susurró Mateo, envuelto ahora en su toalla con capucha de oso, que era en realidad su capa de superhéroe de secado rápido.

Salió del baño limpio, relajado y feliz. La aventura había terminado por hoy, pero el Capitán Mateo sabía que mañana, el Mar de Burbujas lo esperaría nuevamente para otra increíble expedición. Y mientras su mamá le ponía el pijama, Mateo ya estaba planeando su próximo viaje: tal vez a la Montaña de las Almohadas o al Desierto de la Alfombra. Porque para un explorador como Mateo, ¡la aventura nunca termina!
        `},{id:4,title:"El Misterio del Tobogán Dorado",image:x,desc:"Mateo encuentra un tobogán mágico en el parque que lo lleva a una tierra de nubes.",content:`
Era una tarde soleada y perfecta para ir al parque. Mateo, con sus zapatillas de correr más rápidas, llegó al parque de la colina, su favorito. Había columpios que llegaban hasta el cielo, un arenero que parecía un desierto infinito y, lo mejor de todo, el Gran Tobogán Amarillo. Pero ese día, algo era diferente.

Mientras Mateo subía las escaleras del tobogán ("uno, dos, uno, dos", contaba en su mente), notó que el plástico amarillo brillaba con una luz dorada y extraña. Al llegar a la cima, miró hacia abajo. Normalmente, veía el suelo de goma y a su mamá saludando. Pero hoy, el final del tobogán desaparecía en una niebla brillante de colores pastel.

"¡Qué curioso!", pensó Mateo. Como todo buen aventurero, sabía que no podía resistirse a un misterio. Se sentó, se impulsó con las manos y... ¡ZAS! Salió disparado.
La bajada fue mucho más larga de lo normal. Sentía el viento en su cara y escuchaba un sonido como de campanillas. Cuando por fin aterrizó, no fue en el suelo duro, sino en algo suave y esponjoso.

Mateo abrió los ojos. Estaba sentado sobre una nube. ¡Una nube de verdad! Miró a su alrededor y vio un mundo flotante. Había castillos hechos de algodón de azúcar, árboles que daban globos en lugar de frutas y ríos de limonada rosa.
"¡Bienvenido al Reino de Arriba!", dijo una voz suave.
Frente a él había un pájaro azul con un sombrero de copa y un monóculo.
"Soy el Alcalde Píopío", se presentó el pájaro. "¿Tú debes ser el Visitante del Tobogán?"

Mateo asintió, maravillado. El Alcalde Píopío le explicó que el Tobogán Dorado solo aparecía una vez cada cien años para invitar a un niño especial a jugar en las nubes. Y ese niño era Mateo.
Pasaron la tarde saltando de nube en nube (¡eran como camas elásticas gigantes!), jugando al "pilla-pilla" con el viento y haciendo formas con las nubes más pequeñas. Mateo hizo una nube con forma de dinosaurio y otra con forma de coche de carreras.

Pero lo más divertido fue la "Lluvia de Cosquillas". Una nube gris se acercó, pero en lugar de agua, dejó caer plumas suaves que hacían cosquillas a todos. Mateo se reía tanto que le dolía la barriga de felicidad.
"¡Esto es mejor que la televisión!", gritó entre risas.

Cuando el sol empezó a ponerse, tiñendo el cielo de naranja y violeta, el Alcalde Píopío le dijo que era hora de volver.
"El Tobogán Dorado te llevará a casa, Mateo. Pero recuerda, siempre que mires al cielo y veas una nube con una forma divertida, sabrás que estamos pensando en ti."

Mateo se deslizó por un arcoíris que servía de tobogán de regreso. Aterrizó suavemente en el suelo de goma del parque, justo donde había empezado. Su mamá estaba allí, esperándolo con una merienda.
"¡Mateo! Te has tirado un buen rato por el tobogán, ¿te has divertido?", preguntó ella.
Mateo miró al cielo, vio una nube con forma de sombrero de copa y sonrió.
"Sí, mamá. He estado en las nubes", respondió, guiñando un ojo. Y mientras comía su merienda, sabía que el parque guardaba secretos mágicos solo para aquellos valientes que se atrevían a deslizarse hacia la aventura.
        `},{id:5,title:"Elmo y la Fiesta Mágica de Disfraces",image:x,desc:"Cuando Mateo se pone su traje de Elmo, ¡sus juguetes cobran vida para una fiesta!",content:`
En el cajón de disfraces de Mateo había muchas opciones: un sombrero de pirata, una capa de superhéroe, unas orejas de conejo... Pero su favorito absoluto era el traje de Elmo. Era rojo, suave, peludito y tenía una capucha con los ojos grandes y la nariz naranja de Elmo.

Un día de lluvia, cuando no se podía salir a jugar, Mateo decidió que era el momento perfecto para transformarse. Se puso las piernas rojas, metió los brazos en las mangas peludas y, finalmente, se subió la capucha. Se miró al espejo y ya no vio a Mateo. ¡Vio a Elmo!
"¡Elmo quiere jugar!", dijo Mateo con su mejor imitación de voz aguda.

De repente, algo mágico sucedió. Un brillo recorrió la habitación. Su osito de peluche, el Sr. Abrazos, parpadeó. Su robot de juguete movió un brazo. ¡Sus juguetes estaban cobrando vida!
"¡Hola, Elmo!", dijo el Sr. Abrazos con una voz profunda y amable. "¿Estás listo para la fiesta?"
"¿Fiesta?", preguntó Mateo-Elmo, con los ojos muy abiertos.
"¡Claro! Cada vez que te pones el traje rojo, celebramos la Gran Fiesta de los Juguetes", explicó una muñeca bailarina que hacía piruetas sobre la estantería.

La habitación de Mateo se transformó. La alfombra se convirtió en una pista de baile con luces de discoteca que salían de la lámpara de noche. La cama se volvió un escenario.
"¡Música, maestro!", gritó el robot, y la radio de juguete empezó a tocar las canciones favoritas de Mateo, pero con mucho más ritmo.

Mateo-Elmo no podía creerlo. Empezó a bailar, moviendo sus brazos rojos y saltando. El Sr. Abrazos bailaba un vals con la muñeca, los coches de carreras hacían derrapes al ritmo de la música y los dinosaurios de plástico intentaban hacer el paso del robot (aunque les costaba un poco con sus colas).

"¡Necesitamos un líder para el tren de la conga!", gritó un soldadito de plomo.
Todos miraron a Mateo. "¡Elmo! ¡Elmo! ¡Elmo!", corearon.
Mateo se puso al frente. "¡Todos a bordo del tren de la diversión!", gritó.
Hicieron una fila larguísima que recorrió toda la habitación, pasando por debajo de la mesa (el Túnel Misterioso) y saltando sobre los cojines (las Montañas Blanditas).

Después de tanto bailar, les dio hambre. Mateo organizó un banquete imaginario con su juego de té. Sirvieron "té de risas" y "pasteles de nubes". Aunque no había comida real, todos hacían ruidos de "ñam, ñam, qué rico" y se frotaban la barriga.
Mateo se sentía el anfitrión perfecto. Con su traje de Elmo, sentía que podía hacer reír a cualquiera y que todos eran sus amigos.

Pero entonces, la puerta de la habitación se abrió. "Mateo, hora de cenar", llamó su papá.
Al instante, la música paró. Los juguetes volvieron a sus lugares y se quedaron inmóviles. El brillo mágico desapareció.
Mateo se quitó la capucha. Volvía a ser un niño normal. Miró al Sr. Abrazos, que estaba sentado en la cama, tan quieto como siempre. Pero Mateo podría jurar que el osito tenía una sonrisa un poco más grande de lo normal.

Mateo bajó a cenar con una gran sonrisa. Sabía que sus amigos juguetes estarían esperándolo para la próxima vez que Elmo decidiera aparecer. Y mientras comía su sopa, tarareaba bajito la canción de la conga, moviendo los pies debajo de la mesa. ¡Ser Elmo era el mejor superpoder del mundo!
        `},{id:6,title:"El Conductor de Carreras más Rápido del Pasillo",image:x,desc:"Mateo compite en la carrera más importante del año: El Gran Premio del Pasillo.",content:`
"¡Señoras y señores, bienvenidos al Gran Premio del Pasillo!", anunció la voz del comentarista (que sonaba sospechosamente parecida a la de Mateo).
El público (compuesto por mamá, papá y el perro Toby) estaba expectante en las gradas (el sofá del salón).
En la línea de salida estaba el bólido más rápido del mundo: El Rayo Rojo. Y a sus mandos, el legendario piloto: Mateo "El Veloz".

Mateo se ajustó sus gafas de sol (aunque estaba dentro de casa) y agarró el volante de su cochecito rojo de plástico. Su motor rugía: "¡Brrrrum, brrrrum!".
Sus rivales eran duros: El Gato Pelusa (un peluche gigante) y La Tortuga Veloz (un juguete de cuerda).
"¡Preparados, listos, YA!", gritó papá, agitando un pañuelo de cocina como bandera a cuadros.

Mateo salió disparado, impulsándose con sus piernitas fuertes. "¡Ahí va Mateo, tomando la delantera!", narraba él mismo.
La primera curva era peligrosa: La Curva de la Mesa de Centro. Mateo giró el volante con maestría, esquivando la pata de la mesa por milímetros. "¡Increíble maniobra!", exclamó el público.

Pero no todo era fácil. En la Recta del Pasillo Largo, se encontró con un obstáculo inesperado: ¡Una montaña de zapatos!
"¡Oh no! ¡Un derrumbe en la pista!", gritó Mateo.
Sin perder la calma, frenó en seco ("¡Iiiiic!"), se bajó del coche, apartó los zapatos con rapidez de superhéroe y volvió a subir. "¡El equipo de mantenimiento es muy eficiente!", rió mamá.

La carrera continuaba. Ahora venía el tramo más difícil: La Zona Oscura (el pasillo hacia las habitaciones donde la luz estaba apagada). Pero Mateo no tenía miedo. Encendió los faros imaginarios de su coche y aceleró. "¡Nada detiene al Rayo Rojo!", gritó valientemente.

De repente, Toby el perro decidió unirse a la carrera. Corría al lado de Mateo, ladrando y moviendo la cola.
"¡Cuidado, piloto! ¡Hay invasores en la pista!", alertó Mateo.
Con una risa, Mateo aceleró aún más, dejando a Toby atrás olfateando un calcetín.

La meta estaba cerca: La Puerta de la Cocina. Mateo veía la bandera a cuadros (el pañuelo de papá) ondeando. Apretó los dientes, se inclinó hacia adelante para ser más aerodinámico y... ¡CRUZÓ LA META!
"¡Y el ganador es Mateo!", celebró papá, levantando a Mateo y a su coche en brazos.
Hubo aplausos, besos y hasta una medalla de chocolate.

Mateo, cansado pero feliz, se bajó de su coche. Había sido una carrera dura, llena de peligros y emociones.
"Buena carrera, campeón", le dijo mamá.
Mateo sonrió, se quitó las gafas de sol y le dio una palmadita a su coche rojo.
"Mañana...", susurró Mateo, "...mañana correremos el Rally del Jardín".
Porque para un piloto como Mateo, cada rincón de la casa es una nueva pista esperando ser conquistada. Y con su imaginación como combustible, ¡siempre llega el primero a la meta de la diversión!
        `},{id:7,title:"La Aventura en el Reino de los Sueños",image:x,desc:"Mateo viaja a un mundo mágico donde los sueños se hacen realidad.",content:`
La noche había caído sobre la casa. Todo estaba en silencio, excepto por el suave "tic-tac" del reloj del pasillo. Mateo estaba acurrucado en su cama, abrazando a su peluche favorito. Sus párpados pesaban como si tuvieran pequeñas anclas.
"Buenas noches, Mateo", susurró mamá, dándole un beso en la frente.
Mateo cerró los ojos y, poco a poco, su respiración se volvió lenta y profunda. Pero aunque su cuerpo dormía, ¡su mente estaba a punto de despertar en una gran aventura!

De repente, Mateo no estaba en su cama. Estaba flotando en una barca hecha de una hoja gigante, navegando por un río de estrellas líquidas. El cielo era de un color violeta brillante y había lunas de todos los colores: una roja, una verde y una azul.
"¡Bienvenido al Río de los Sueños!", dijo un pez dorado que saltó del agua. El pez llevaba gafas de sol y una corbata.
"¡Hola, Sr. Pez!", saludó Mateo, que no se sorprendía de nada. En los sueños, todo es posible.

La barca lo llevó hasta una orilla de arena blanca que sabía a azúcar. Allí, un bosque de árboles gigantes lo esperaba. Pero no eran árboles normales; sus hojas eran páginas de libros y sus frutos eran bombillas que se encendían y apagaban.
Mateo bajó de la barca y se adentró en el bosque. Escuchó una música suave. Siguiendo el sonido, llegó a un claro donde un grupo de conejos tocaba violines hechos de zanahorias.
"¡Bravo!", aplaudió Mateo. Los conejos hicieron una reverencia.

Más adelante, se encontró con una montaña que roncaba. "¡Rrrrooooonc!", hacía la montaña. Cada vez que roncaba, salían pompas de jabón de su cima. Mateo persiguió las pompas, saltando y riendo. Una pompa grande lo atrapó y lo elevó por los aires.
Desde arriba, vio todo el Reino de los Sueños. Vio un castillo hecho de almohadas, donde vivía el Rey del Bostezo. Vio un tren que viajaba sobre el arcoíris. Y vio un campo donde las ovejas saltaban vallas, pero en lugar de contarlas, ellas contaban chistes.

La pompa lo llevó suavemente hasta un prado lleno de flores que cantaban nanas. Mateo se sintió muy relajado. Se tumbó en la hierba suave y miró al cielo violeta.
"Es hora de volver, Mateo", susurró el viento.
Mateo sabía que el sol estaba a punto de salir en el mundo real. Se despidió del Reino de los Sueños, prometiendo volver la próxima noche.

Poco a poco, el cielo violeta se desvaneció. Mateo abrió los ojos en su habitación. El sol de la mañana entraba por la ventana. Se estiró y sonrió. Aunque ya estaba despierto, todavía podía sentir la magia de su viaje. Y sabía que, cada noche, una nueva aventura lo esperaba al cerrar los ojos.
        `},{id:8,title:"El Explorador del Jardín Gigante",image:x,desc:"Mateo se encoge al tamaño de una hormiga y descubre un mundo gigante en su propio jardín.",content:`
Era una mañana de verano y Mateo jugaba en el jardín. Estaba observando una fila de hormigas que marchaban muy ordenadas. "Me pregunto cómo se verá el mundo desde ahí abajo", pensó Mateo.
En ese momento, una mariposa azul se posó en su hombro y espolvoreó un polvillo brillante sobre él. ¡Puf! El mundo empezó a crecer. La hierba se volvió tan alta como árboles, las flores eran como sombrillas gigantes y una pequeña piedra parecía una montaña.
¡Mateo se había encogido! Ahora era del tamaño de una hormiga.

"¡Increíble!", exclamó Mateo con su vocecita.
Empezó a caminar por la selva de césped. Se encontró con una mariquita que parecía un tanque rojo con lunares negros.
"Buenos días, viajero", dijo la mariquita. "¿Necesitas que te lleve?"
Mateo se subió a su lomo y volaron sobre el jardín. Desde el aire, vio cosas maravillosas. Vio una gota de rocío sobre una hoja que brillaba como un diamante gigante. Vio a una oruga tejiendo su capullo como si fuera un saco de dormir de seda.

Aterrizaron cerca del huerto de mamá. Allí, los tomates eran como globos aerostáticos rojos y las zanahorias eran torres naranjas enterradas en la tierra.
De repente, el suelo tembló. ¡Bum, bum, bum!
"¿Qué es eso?", preguntó Mateo asustado.
"Es el Gigante Toby", dijo la mariquita.
Era su perro, Toby. Pero ahora parecía un monstruo peludo y enorme. Toby olfateó el suelo cerca de ellos. Su nariz era como un túnel oscuro y húmedo. ¡Achús! Toby estornudó y el viento casi se lleva a Mateo volando.

Mateo se agarró fuerte a una hoja. "¡Toby, soy yo, Mateo!", gritó, pero su voz era demasiado pequeña.
Decidió que era hora de volver a su tamaño normal. Buscó a la mariposa azul. La encontró descansando sobre un girasol.
Mateo trepó por el tallo del girasol (que fue una escalada muy difícil) hasta llegar arriba.
"Mariposa, por favor, devuélveme a mi tamaño", pidió.
La mariposa aleteó y soltó de nuevo el polvillo mágico. ¡Puf!

El jardín volvió a la normalidad. La hierba era pequeña, las flores eran flores y Toby era su perro de siempre.
Mateo abrazó a Toby. "No te imaginas la aventura que acabo de tener", le dijo.
Toby lamió su cara, feliz. Mateo miró a las hormigas con nuevo respeto. Ahora sabía que, aunque sean pequeñas, viven en un mundo gigante y lleno de maravillas.
        `},{id:9,title:"El Concierto de Risas",image:x,desc:"La risa de Mateo es tan contagiosa que organiza un concierto para alegrar a todos.",content:`
Mateo tenía un superpoder muy especial: su risa. No era una risa cualquiera. Era una risa que empezaba en la barriga, subía como burbujas de refresco y salía por su boca como una explosión de alegría: "¡Jajajaja!". Y lo mejor de todo era que, quien la escuchaba, no podía evitar reírse también.

Un día, Mateo notó que la gente en la calle parecía un poco seria. El señor del quiosco tenía el ceño fruncido, la señora que paseaba al perro miraba el suelo y hasta los pájaros parecían cantar canciones tristes.
"Esto no puede ser", pensó Mateo. "Necesitamos más alegría".
Así que decidió organizar el Primer Gran Concierto de Risas.

Se subió a un banco del parque y se puso su gorra favorita al revés.
"¡Atención, atención!", gritó. "¡Prepárense para el espectáculo!"
La gente se detuvo, curiosa.
Mateo empezó suave. Hizo una mueca divertida, estirando la boca y cruzando los ojos. Una niña pequeña se rió: "Ji, ji".
Luego, Mateo contó un chiste (en su idioma de bebé, que nadie entendía pero que sonaba graciosísimo). "¡Aba daba gu!", dijo con mucho énfasis.
El señor del quiosco sonrió.

Entonces, Mateo sacó su arma secreta: Las Cosquillas Imaginarias. Empezó a reírse él solo, agarrándose la barriga y rodando por el banco. Su risa era tan genuina, tan pura, que fue como una chispa en un barril de pólvora.
La señora del perro soltó una carcajada. El perro empezó a ladrar feliz. Un policía que pasaba por allí se tuvo que sujetar el sombrero de tanto reír.
La risa se extendió por todo el parque. Los niños reían, los abuelos reían, ¡hasta las estatuas parecían sonreír!

El aire se llenó de "jajaja", "jejeje" y "jijiji". Era una sinfonía de felicidad. Los problemas y las preocupaciones se olvidaron por un momento. Todos se sentían más ligeros, más unidos.
Mateo, viendo el éxito de su concierto, se puso de pie y hizo una reverencia.
El público aplaudió y vitoreó. "¡Bravo, Mateo! ¡Otra, otra!"

Desde ese día, el parque se convirtió en el lugar más feliz de la ciudad. Y aunque Mateo no siempre daba conciertos, todos sabían que si necesitaban un poco de alegría, solo tenían que buscar al niño de la sonrisa brillante. Porque la risa de Mateo era el mejor regalo que podía dar al mundo.
        `},{id:10,title:"El Cumpleaños Inolvidable",image:x,desc:"El primer cumpleaños de Mateo está lleno de magia, amigos y un deseo muy especial.",content:`
Hoy era un día marcado con un círculo rojo en el calendario. ¡El cumpleaños de Mateo! La casa estaba decorada con globos de todos los colores del arcoíris, guirnaldas brillantes y un cartel gigante que decía "¡Feliz Cumpleaños, Mateo!".

Mateo se despertó con besos de mamá y papá. "¡Feliz cumpleaños, mi amor!", le dijeron.
Le pusieron su ropa más elegante (una camisa de cuadros y unos pantalones con tirantes) y una corona de papel dorado. Mateo se sentía como un rey.
Poco a poco, empezaron a llegar los invitados. Estaban los abuelos, los tíos, los primos y todos sus amigos del parque. Cada vez que sonaba el timbre, Mateo corría a la puerta (bueno, gateaba muy rápido) para recibir a las visitas con una sonrisa.

La fiesta fue increíble. Hubo juegos, música y mucha comida rica. Pero el momento más esperado era el pastel.
Mamá apagó las luces y entró en la sala con un pastel enorme. Tenía una vela brillante en el centro. Todos empezaron a cantar "Cumpleaños Feliz". Mateo miraba la vela con los ojos muy abiertos, fascinado por la pequeña llama que bailaba.

"Pide un deseo, Mateo", le dijo papá.
Mateo cerró los ojos. Pensó en todas las cosas que le gustaban: jugar con sus coches, los abrazos de mamá, las cosquillas de papá, los paseos por el parque... Su deseo no fue un juguete nuevo ni caramelos. Su deseo fue que todos los días fueran tan felices y llenos de amor como este.
Sopló la vela (con un poco de ayuda de mamá) y todos aplaudieron.

Luego llegó la hora de los regalos. Mateo rasgó el papel de colores con entusiasmo. ¡Había un camión de bomberos! ¡Un libro de dinosaurios! ¡Un juego de bloques! Cada regalo era una nueva sorpresa y una nueva oportunidad para jugar.
Pero el mejor regalo no estaba envuelto en papel. El mejor regalo era ver a toda su familia y amigos reunidos, celebrando su vida.

Al final del día, cuando el último invitado se fue y los globos empezaron a bajar, Mateo estaba agotado pero feliz. Se quedó dormido en brazos de papá, soñando con su fiesta.
Fue un cumpleaños inolvidable, no por los regalos o el pastel, sino por el amor que llenó cada rincón de la casa. Y Mateo, en sus sueños, sonreía, sabiendo que este era solo el comienzo de muchos años maravillosos por venir.
        `}];function ne(){const e=document.createElement("div");e.className="p-4 max-w-4xl mx-auto pb-24";const t=document.createElement("div");t.className="text-center mb-8 animate-fade-in-down",t.innerHTML=`
        <h1 class="text-4xl md:text-5xl text-mateo-yellow mb-2 drop-shadow-sm font-fredoka">Cuentos Mágicos</h1>
        <p class="text-gray-600 font-semibold text-lg">Historias para soñar y aprender</p>
    `,e.appendChild(t);const o=document.createElement("div");o.className="grid grid-cols-1 md:grid-cols-2 gap-6",e.appendChild(o);const s=se,a=document.createElement("div");a.className="hidden bg-white rounded-3xl shadow-xl p-6 animate-fade-in-up",e.appendChild(a);const r=()=>{o.innerHTML="",s.forEach(d=>{const i=document.createElement("div");i.className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl cursor-pointer border-4 border-transparent hover:border-mateo-blue",i.innerHTML=`
                <div class="relative h-48 overflow-hidden">
                    <img src="${d.image}" alt="${d.title}" class="w-full h-full object-cover transition duration-500 hover:rotate-2 hover:scale-110">
                    <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h3 class="text-white text-xl font-bold drop-shadow-md">${d.title}</h3>
                    </div>
                </div>
                <div class="p-4">
                    <p class="text-gray-600 line-clamp-3 mb-4">${d.desc}</p>
                    <button class="w-full bg-mateo-blue text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition flex items-center justify-center gap-2">
                        <span class="text-xl">📖</span> Leer Cuento
                    </button>
                </div>
            `,i.onclick=()=>m(d),o.appendChild(i)})};r();const m=d=>{e.innerHTML="",window.scrollTo(0,0);const i=document.createElement("div");i.className="animate-fade-in-up";let u=!1;const p=new SpeechSynthesisUtterance;p.lang="es-ES",p.text=d.content,p.rate=.9,p.pitch=1.1,p.onend=()=>{u=!1,n()};const b=()=>{u?(window.speechSynthesis.cancel(),u=!1):(window.speechSynthesis.cancel(),window.speechSynthesis.speak(p),u=!0),n()},n=()=>{const v=i.querySelector("#tts-btn");v&&(v.innerHTML=u?"🔇 Detener Audio":"🔊 Escuchar Cuento",v.className=u?"bg-red-500 text-white font-bold py-2 px-6 rounded-full hover:bg-red-600 transition shadow-lg animate-pulse":"bg-mateo-green text-white font-bold py-2 px-6 rounded-full hover:bg-green-600 transition shadow-lg")},l=`story_${d.id}`;let{likes:c,comments:g}=j.getStoryInteractions(l);const y=()=>{c=j.likeStory(l),M()},f=v=>{if(!v.trim())return;g=j.commentStory(l,"Visitante",v),M()},M=()=>{const v=i.querySelector("#like-btn"),L=i.querySelector("#comments-list");v&&(v.innerHTML=`❤️ ${c}`),L&&(L.innerHTML=g.map(T=>`
                    <div class="bg-gray-50 p-3 rounded-lg mb-2 text-left">
                        <span class="font-bold text-mateo-blue text-sm">${T.user}</span>
                        <p class="text-gray-700 text-sm">${T.text}</p>
                    </div>
                `).join(""))};i.innerHTML=`
            <button id="back-btn" class="mb-4 text-mateo-blue font-bold hover:underline flex items-center gap-2">
                ⬅ Volver a los cuentos
            </button>
            
            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div class="relative h-64 md:h-96">
                    <img src="${d.image}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <h1 class="absolute bottom-6 left-6 text-3xl md:text-5xl text-white font-bold drop-shadow-lg">${d.title}</h1>
                </div>
                
                <div class="p-6 md:p-10">
                    <div class="flex justify-between items-center mb-8">
                        <button id="tts-btn" class="bg-mateo-green text-white font-bold py-2 px-6 rounded-full hover:bg-green-600 transition shadow-lg">
                            🔊 Escuchar Cuento
                        </button>
                        <button id="like-btn" class="bg-pink-100 text-pink-500 font-bold py-2 px-6 rounded-full hover:bg-pink-200 transition shadow-md">
                            ❤️ ${c}
                        </button>
                    </div>

                    <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed font-nunito">
                        ${d.content.split(`
`).filter(v=>v.trim()!=="").map(v=>`<p class="mb-4">${v}</p>`).join("")}
                    </div>

                    <hr class="my-8 border-gray-200">

                    <div class="bg-blue-50 p-6 rounded-2xl">
                        <h3 class="text-xl font-bold text-mateo-blue mb-4">Comentarios</h3>
                        <div id="comments-list" class="max-h-60 overflow-y-auto mb-4 custom-scrollbar">
                            <!-- Comments loaded here -->
                        </div>
                        <div class="flex gap-2">
                            <input type="text" id="comment-input" placeholder="Escribe un comentario..." class="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mateo-blue">
                            <button id="send-comment" class="bg-mateo-blue text-white p-3 rounded-xl hover:bg-blue-600 transition">
                                ➤
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `,i.querySelector("#back-btn").onclick=()=>{window.speechSynthesis.cancel(),e.innerHTML="",e.appendChild(t),e.appendChild(o),r()},i.querySelector("#tts-btn").onclick=b,i.querySelector("#like-btn").onclick=y;const E=i.querySelector("#comment-input"),D=i.querySelector("#send-comment"),S=()=>{f(E.value),E.value=""};D.onclick=S,E.onkeypress=v=>{v.key==="Enter"&&S()},e.appendChild(i),M()};return e}function re(e,t){e.innerHTML="";const o=document.createElement("canvas");o.width=e.clientWidth,o.height=e.clientHeight||500,o.className="w-full h-full bg-white cursor-pointer touch-none",e.appendChild(o);const s=o.getContext("2d"),a=[],r=document.createElement("button");r.textContent="❌ Salir",r.className="absolute top-4 right-4 bg-white/80 text-red-500 font-bold py-2 px-4 rounded-full shadow-lg z-10",r.onclick=t,e.appendChild(r);const m=document.createElement("div");m.textContent="¡Toca la pantalla!",m.className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-300 pointer-events-none animate-pulse select-none",e.appendChild(m);function d(){const n=["#FF5252","#FF4081","#E040FB","#7C4DFF","#536DFE","#448AFF","#40C4FF","#18FFFF","#64FFDA","#69F0AE","#B2FF59","#EEFF41","#FFFF00","#FFD740","#FFAB40","#FF6E40"];return n[Math.floor(Math.random()*n.length)]}function i(n,l){m.style.display="none";const c=d(),g=Math.random()>.5?"circle":"rect",y=Math.random()*50+50;a.push({x:n,y:l,color:c,size:y,type:g,alpha:1,scale:0}),u()}function u(){const n=new(window.AudioContext||window.webkitAudioContext),l=n.createOscillator(),c=n.createGain();l.type="sine",l.frequency.setValueAtTime(200+Math.random()*500,n.currentTime),l.frequency.exponentialRampToValueAtTime(.01,n.currentTime+.5),c.gain.setValueAtTime(.5,n.currentTime),c.gain.exponentialRampToValueAtTime(.01,n.currentTime+.5),l.connect(c),c.connect(n.destination),l.start(),l.stop(n.currentTime+.5)}function p(){s.clearRect(0,0,o.width,o.height);for(let n=a.length-1;n>=0;n--){const l=a[n];if(l.scale+=.1,l.alpha-=.02,s.globalAlpha=l.alpha,s.fillStyle=l.color,s.beginPath(),l.type==="circle")s.arc(l.x,l.y,l.size*l.scale,0,Math.PI*2),s.fill();else{const c=l.size*l.scale;s.fillRect(l.x-c/2,l.y-c/2,c,c)}l.alpha<=0&&a.splice(n,1)}requestAnimationFrame(p)}p();const b=n=>{n.preventDefault();const l=o.getBoundingClientRect(),c=(n.touches?n.touches[0].clientX:n.clientX)-l.left,g=(n.touches?n.touches[0].clientY:n.clientY)-l.top;i(c,g)};o.addEventListener("mousedown",b),o.addEventListener("touchstart",b)}const P="/mateo/assets/toy_icon-DWt6llZK.png",k="/mateo/assets/book_icon-DUjV6Odk.png",N="/mateo/assets/camera_icon-CYCilhzJ.png";function le(e,t){e.innerHTML="",e.className="flex flex-col items-center justify-center h-full p-4";const o=document.createElement("div");o.className="w-full flex justify-between items-center mb-4";const s=document.createElement("h2");s.textContent="Parejas",s.className="text-3xl font-bold text-mateo-blue";const a=document.createElement("button");a.textContent="❌ Salir",a.className="bg-white text-red-500 font-bold py-2 px-4 rounded-full shadow-md",a.onclick=t,o.appendChild(s),o.appendChild(a),e.appendChild(o);const r=document.createElement("div");r.className="grid grid-cols-2 gap-4 w-full max-w-md",e.appendChild(r);const m=[x,P,k,N],d=[...m,...m].sort(()=>Math.random()-.5);let i=[],u=0;d.forEach((n,l)=>{const c=document.createElement("div");c.className="aspect-square bg-white rounded-2xl shadow-lg cursor-pointer flex items-center justify-center transform transition-transform duration-300 hover:scale-105",c.dataset.index=l;const g=document.createElement("div");g.className="w-full h-full relative";const y=document.createElement("div");y.className="absolute inset-0 bg-mateo-blue rounded-2xl flex items-center justify-center text-white text-4xl font-bold",y.textContent="?";const f=document.createElement("img");f.src=n,f.className="absolute inset-0 w-full h-full object-contain p-2 hidden",g.appendChild(y),g.appendChild(f),c.appendChild(g),c.onclick=()=>p(c,f,y,n),r.appendChild(c)});function p(n,l,c,g){i.length===2||n.classList.contains("flipped")||n.classList.contains("matched")||(n.classList.add("flipped"),c.classList.add("hidden"),l.classList.remove("hidden"),l.classList.add("animate-flip-in"),i.push({card:n,front:l,back:c,imgSrc:g}),i.length===2&&b())}function b(){const[n,l]=i;n.imgSrc===l.imgSrc?(n.card.classList.add("matched","border-4","border-green-400"),l.card.classList.add("matched","border-4","border-green-400"),u++,i=[],u===m.length&&setTimeout(()=>alert("¡Ganaste! 🎉"),500)):setTimeout(()=>{n.card.classList.remove("flipped"),n.back.classList.remove("hidden"),n.front.classList.add("hidden"),l.card.classList.remove("flipped"),l.back.classList.remove("hidden"),l.front.classList.add("hidden"),i=[]},1e3)}}function ie(){const e=document.createElement("div");e.className="p-4 max-w-4xl mx-auto pb-24 h-[calc(100vh-6rem)]";const t=document.createElement("div");t.className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full content-center",[{title:"Explosión de Color",icon:"🎨",color:"bg-mateo-red",action:()=>s(re)},{title:"Parejas",icon:"🧩",color:"bg-mateo-blue",action:()=>s(le)},{title:"Piano Musical",icon:"🎹",color:"bg-mateo-yellow",action:()=>alert("Próximamente")},{title:"Bloques",icon:"🧱",color:"bg-mateo-green",action:()=>alert("Próximamente")}].forEach(a=>{const r=document.createElement("div");r.className=`${a.color} text-white rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center cursor-pointer transform hover:scale-105 transition-all`,r.innerHTML=`
            <div class="text-6xl mb-4">${a.icon}</div>
            <h3 class="text-2xl font-bold text-center">${a.title}</h3>
        `,r.onclick=a.action,t.appendChild(r)}),e.appendChild(t);function s(a){const r=document.createElement("div");r.className="fixed inset-0 bg-gray-50 z-50 flex flex-col",document.body.appendChild(r),a(r,()=>{document.body.removeChild(r)})}return e}function de(){const e=document.createElement("div");e.className="p-4 max-w-4xl mx-auto pb-24";const t=document.createElement("div");t.className="text-center mb-8 animate-fade-in-down",t.innerHTML=`
        <h1 class="text-4xl md:text-5xl text-mateo-purple mb-2 drop-shadow-sm font-fredoka">Salón de la Familia</h1>
        <p class="text-gray-600 font-semibold text-lg">Un espacio para charlar y compartir</p>
    `,e.appendChild(t);const o=document.createElement("div");o.className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-[600px] border-4 border-mateo-purple";const s=document.createElement("div");s.className="flex-1 p-6 overflow-y-auto bg-gray-50 custom-scrollbar",s.id="chat-messages",o.appendChild(s);const a=document.createElement("div");a.className="p-4 bg-white border-t border-gray-200 flex gap-4 items-center",a.innerHTML=`
        <input type="text" id="username-input" placeholder="Tu Nombre" class="w-1/3 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mateo-purple font-bold text-mateo-purple">
        <input type="text" id="message-input" placeholder="Escribe un mensaje..." class="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mateo-purple">
        <button id="send-btn" class="bg-mateo-purple text-white p-3 rounded-xl hover:bg-purple-600 transition shadow-md transform hover:scale-105">
            <span class="text-xl">➤</span>
        </button>
    `,o.appendChild(a),e.appendChild(o);let r=j.getChatMessages();const m=()=>{s.innerHTML="",r.forEach(i=>{const u=document.createElement("div");u.className="mb-4 animate-fade-in-up",u.innerHTML=`
                <div class="flex flex-col">
                    <span class="text-xs font-bold text-mateo-purple mb-1 ml-2">${i.user}</span>
                    <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 inline-block max-w-[80%] self-start">
                        <p class="text-gray-800">${i.text}</p>
                        <span class="text-[10px] text-gray-400 block text-right mt-1">${new Date(i.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</span>
                    </div>
                </div>
            `,s.appendChild(u)}),s.scrollTop=s.scrollHeight},d=()=>{const i=a.querySelector("#username-input"),u=a.querySelector("#message-input"),p=i.value.trim(),b=u.value.trim();if(!p){alert("Por favor, escribe tu nombre.");return}b&&(r=j.addChatMessage(p,b),m(),u.value="")};return a.querySelector("#send-btn").onclick=d,a.querySelector("#message-input").onkeypress=i=>{i.key==="Enter"&&d()},m(),e}const ce={"/":A,"/gallery":ae,"/stories":ne,"/games":ie,"/lounge":de};function C(e){window.history.pushState({},e,window.location.origin+e),z(e)}function z(e){const t=document.getElementById("app-content"),o=ce[e]||A;t.innerHTML="",t.appendChild(o()),document.querySelectorAll(".nav-link").forEach(s=>{s.classList.remove("active-nav"),s.getAttribute("href")===e&&s.classList.add("active-nav")})}window.onpopstate=()=>{z(window.location.pathname)};const ue="/mateo/assets/bubble_icon-Bf5YEqng.png";function me(){const e=document.createElement("nav");return e.className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:top-0 md:bottom-auto px-4 py-2 flex justify-around items-center h-20 md:h-24 rounded-t-3xl md:rounded-b-3xl md:rounded-t-none",[{path:"/",icon:x,label:"Inicio",color:"border-mateo-blue"},{path:"/gallery",icon:N,label:"Fotos",color:"border-mateo-yellow"},{path:"/stories",icon:k,label:"Cuentos",color:"border-mateo-purple"},{path:"/games",icon:P,label:"Juegos",color:"border-mateo-green"},{path:"/lounge",icon:ue,label:"Familia",color:"border-mateo-red"}].forEach(o=>{const s=document.createElement("a");s.href=o.path,s.className=`nav-link flex flex-col items-center justify-center w-16 h-16 rounded-full transition-all duration-300 hover:-translate-y-2 border-4 border-transparent hover:${o.color}`;const a=document.createElement("img");a.src=o.icon,a.alt=o.label,a.className="w-10 h-10 object-contain";const r=document.createElement("span");r.textContent=o.label,r.className="text-xs font-bold text-gray-600 mt-1 hidden md:block",s.appendChild(a),s.appendChild(r),s.addEventListener("click",m=>{m.preventDefault(),C(o.path)}),e.appendChild(s)}),e}document.querySelector("#app").innerHTML=`
  <div class="min-h-screen flex flex-col md:flex-row bg-blue-50">
    <div id="app-content" class="flex-1 pb-24 md:pb-0 md:pt-24 overflow-y-auto">
      <!-- Page content will be injected here -->
    </div>
  </div>
`;const pe=document.querySelector("#app");pe.appendChild(me());z(window.location.pathname);
