# 🔐 Guía para Configurar GitHub Personal Access Token (PAT)

## ¿Por qué usar un Personal Access Token?

GitHub ya no permite usar contraseñas para operaciones Git desde la línea de comandos. En su lugar, debes usar un **Personal Access Token (PAT)**, que es más seguro y te da control granular sobre los permisos.

---

## 📝 Pasos para Crear tu Token

### 1. Ve a GitHub Settings

1. Abre tu navegador y ve a: <https://github.com>
2. Haz clic en tu foto de perfil (esquina superior derecha)
3. Selecciona **Settings** (Configuración)

### 2. Accede a Developer Settings

1. En el menú lateral izquierdo, baja hasta el final
2. Haz clic en **Developer settings**

### 3. Crea un Personal Access Token

1. En el menú lateral, haz clic en **Personal access tokens**
2. Selecciona **Tokens (classic)**
3. Haz clic en **Generate new token** → **Generate new token (classic)**

### 4. Configura el Token

**Nombre del token**: `mateo-web-deploy` (o el que prefieras)

**Expiration**: Selecciona la duración (recomendado: 90 días o No expiration para proyectos personales)

**Scopes** (Permisos necesarios):

- ✅ **repo** (Marca toda la sección)
  - ✅ repo:status
  - ✅ repo_deployment
  - ✅ public_repo
  - ✅ repo:invite
  - ✅ security_events

**Opcional pero recomendado**:

- ✅ **workflow** (para GitHub Actions)

### 5. Genera y Copia el Token

1. Haz clic en **Generate token** (botón verde al final)
2. **¡IMPORTANTE!** Copia el token inmediatamente
   - Se verá algo así: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - **Solo se mostrará UNA VEZ**
   - Guárdalo en un lugar seguro (no lo compartas)

---

## 🚀 Cómo Usar el Token para Push

### Opción 1: Usar el Token Directamente (Recomendado para una vez)

```bash
# Cuando hagas git push, te pedirá usuario y contraseña
git push origin main

# Username: tu_usuario_de_github
# Password: pega_aqui_tu_token (no tu contraseña de GitHub)
```

### Opción 2: Configurar el Token en la URL del Remote (Más conveniente)

```bash
# Actualizar la URL del remote para incluir el token
git remote set-url origin https://TU_TOKEN@github.com/GLHacker/mateo.git

# Ahora puedes hacer push sin que te pida credenciales
git push origin main
```

**Ejemplo**:

```bash
git remote set-url origin https://ghp_1234567890abcdefghijklmnopqrstuvwxyz@github.com/GLHacker/mateo.git
```

### Opción 3: Usar Git Credential Manager (Más seguro)

```bash
# Configurar Git para recordar credenciales
git config --global credential.helper store

# La primera vez que hagas push, ingresa:
git push origin main
# Username: tu_usuario
# Password: tu_token

# Git guardará el token y no te lo pedirá de nuevo
```

---

## 🔍 Verificar que Funcionó

Después de hacer push exitosamente:

1. Ve a tu repositorio: <https://github.com/GLHacker/mateo>
2. Verifica que aparezcan los nuevos commits
3. Ve a **Actions** para ver el workflow de despliegue
4. Espera 2-3 minutos a que se complete el despliegue
5. Visita tu sitio: <https://glhacker.github.io/mateo/>

---

## 🛡️ Seguridad del Token

### ✅ Buenas Prácticas

- ✅ Nunca compartas tu token públicamente
- ✅ No lo subas a repositorios
- ✅ Usa tokens con permisos mínimos necesarios
- ✅ Renueva tokens periódicamente
- ✅ Revoca tokens que ya no uses

### ❌ Qué NO hacer

- ❌ No pongas el token en archivos de código
- ❌ No lo compartas en chat/email
- ❌ No uses el mismo token para múltiples proyectos críticos

### 🔄 Si Expones un Token Accidentalmente

1. Ve a GitHub → Settings → Developer settings → Personal access tokens
2. Encuentra el token comprometido
3. Haz clic en **Delete** o **Revoke**
4. Genera un nuevo token

---

## 📋 Comandos Completos para Este Proyecto

```bash
# 1. Navega al directorio del proyecto
cd /home/laura/.gemini/antigravity/scratch/mateo-web

# 2. Verifica el estado
git status

# 3. Verifica los commits pendientes
git log --oneline -5

# 4. Configura tu identidad (opcional pero recomendado)
git config user.name "Tu Nombre"
git config user.email "tu@email.com"

# 5. Haz push con tu token
git push origin main
# Cuando te pida:
# Username: GLHacker (o tu usuario)
# Password: [pega tu token aquí]

# 6. Verifica que se subió
git log --oneline origin/main -5
```

---

## 🎯 Estado Actual del Proyecto

**Commits pendientes de push**:

1. `633900c` - Fix Gallery.js: Correct property references and add interactive likes/comments
2. `fa92839` - Add professional documentation: README and analysis report

**Total de archivos a subir**:

- ✅ Correcciones en Gallery.js
- ✅ README.md completo
- ✅ ANALISIS_PROFESIONAL.md

---

## 🆘 Solución de Problemas

### Error: "Authentication failed"

- Verifica que estés usando el **token**, no tu contraseña de GitHub
- Asegúrate de que el token tenga permisos de **repo**
- Verifica que el token no haya expirado

### Error: "remote: Permission denied"

- El token no tiene permisos suficientes
- Genera un nuevo token con scope **repo** completo

### Error: "fatal: could not read Username"

- Usa la opción 2 (incluir token en URL) o opción 3 (credential helper)

---

## ✨ Próximos Pasos Después del Push

1. ✅ Verificar que los commits aparezcan en GitHub
2. ✅ Ir a la pestaña **Actions** y ver el workflow ejecutándose
3. ✅ Esperar a que el deployment se complete (2-3 minutos)
4. ✅ Visitar <https://glhacker.github.io/mateo/>
5. ✅ Probar todas las funcionalidades en el sitio publicado
6. ✅ Compartir el link con familia y amigos 🎉

---

**¿Necesitas ayuda?** Si tienes problemas con el token, avísame y te ayudo paso a paso.
