# Capturas para la landing

Objetivo: reemplazar los fotogramas del video en la sección **Demo visual** (`#evidencia`) por capturas reales del producto.

## Checklist (sin datos sensibles)

1. Dashboard — sin nombres de clientes reales ni totales identificables.
2. Mesas — estados y layout genéricos.
3. Comandas — ítems de prueba.
4. Cocina / KDS.
5. Barra.
6. Carta / menú admin.
7. Solicitudes (QR/link) si aplica.
8. Caja — montos de prueba.
9. Reportes — preset “Productos más vendidos” si existe en tu cuenta de demo.
10. Roles / permisos — pantalla de edición sin correos reales.

## Reglas

- Usar **cuenta de demo** o anonimizar.
- No publicar inventario si el módulo está oculto por feature flag en producción.
- Exportar WebP o JPG optimizado; nombrar `dashboard.webp`, `mesas.webp`, etc.
- Actualizar `index.html` en `#evidencia` para apuntar a estos archivos cuando estén listos.
