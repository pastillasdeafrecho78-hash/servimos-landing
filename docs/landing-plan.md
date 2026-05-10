# Plan de landing ServimOS

## Objetivo

Presentar ServimOS como una plataforma accesible para restaurantes y black kitchens que necesitan digitalizar operación sin pagar instalaciones costosas ni depender por completo de comisiones de delivery.

## Mensaje central

ServimOS controla la operación completa del restaurante: pedidos, mesas, QR, links por WhatsApp, cocina, barra, caja, roles y reportes.

La promesa comercial no debe ser "software complejo"; debe ser:

> Más control, menos fuga operativa, sin gastar una fortuna.

## Público

- Restaurantes pequeños y medianos.
- Black kitchens.
- Negocios con operación informal que quieren profesionalizarse.
- Restaurantes con varias sucursales que necesitan control por organización/sucursal.

## Secciones actuales

1. Hero: promesa principal y demo.
2. Problema: accesibilidad, QR, permisos, margen.
3. Módulos: POS, QR, WhatsApp, KDS, roles, reportes.
4. Flujo: acceso, configuración, carga de menú, operación.
5. Visual: lámina de presentación.
6. Demo: video del recorrido operativo.
7. Planes: modelo mensual sugerido.
8. CTA: solicitar demo.

## Diferenciadores reales del producto

- Multi-tenant por organización y sucursal.
- Permisos por rol y área.
- POS/comandas conectado a cocina y barra.
- QR y pedidos públicos.
- Links compartibles para pedidos.
- KDS con estados y secciones configurables.
- Extras por producto y categoría.
- Mesas en lista/plano.
- Reportes y caja.
- Base para app móvil con WebView.
- Billing SaaS con Stripe.

## Riesgos de comunicación

- No prometer integraciones oficiales con Uber Eats, Rappi o DiDi hasta tener acceso a APIs.
- No vender "push real en background" si todavía se usa notificación local/polling/realtime parcial.
- No vender facturación fiscal si no está implementada como producto cerrado.

## Siguiente iteración

- Agregar screenshots reales del dashboard en vez de mock visual.
- Crear video corto o GIF del flujo: mesa -> comanda -> cocina -> listo -> cobro.
- Optimizar `Demo.mp4` para producción: versión WebM, MP4 comprimido y carga bajo demanda.
- Definir correo/teléfono real para CTA.
- Decidir si se despliega como repo separado o como ruta pública dentro de ServimOS.
