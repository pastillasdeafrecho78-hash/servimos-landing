# ServimOS Landing

Landing independiente para presentar ServimOS.

## Abrir local

Desde esta carpeta:

```bash
python -m http.server 4173
```

Luego abre:

```text
http://localhost:4173
```

También se puede abrir `index.html` directamente en el navegador, pero el servidor local evita problemas con rutas de assets.

## Estructura

- `index.html`: contenido y secciones de venta.
- `styles.css`: identidad visual, layout responsive y componentes.
- `script.js`: scroll suave y estado simple del header.
- `assets/`: logo, icono, video demo, poster y láminas exportadas de la presentación.
- `docs/landing-plan.md`: plan editorial y de producto para iterar la página.

## Próximo paso recomendado

Cuando el copy y estructura queden aprobados, migrar esta landing a Next.js o integrarla como home pública de `ServimOS`, según la estrategia de despliegue.

## Nota de video

El original de `Downloads/Demo.mp4` pesaba aproximadamente 18 MB. La landing usa versiones optimizadas:

- `assets/demo-servimos.webm`
- `assets/demo-servimos.web.mp4`

El MP4 original no se versiona para no inflar el repositorio.
