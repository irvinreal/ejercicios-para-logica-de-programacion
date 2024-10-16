/*
  Ejercicio 60:
  Programa que calcule el beneficio de un producto despues de restarle:
  - 20% de descuento
  - 21% de iva
  - 15% de irpf
 
*/

function calcularBeneficio(precio) {
  const porcentajeDescuento = 0.2
  const porcentajeIVA = 0.21
  const porcentajeIRPF = 0.15

  // Calcular descuento => 20%
  const descuento = precio * porcentajeDescuento

  // Calcular precio con descuento
  const precioConDescuento = parseFloat(precio - descuento)

  // Calcular IVA
  const IVA = precioConDescuento * porcentajeIVA

  // Calcular IRPF
  const IRPF = parseFloat(precioConDescuento - IVA) * porcentajeIRPF

  // Calcular beneficio
  const beneficio = precioConDescuento - IVA - IRPF

  return beneficio
}

console.log(calcularBeneficio(995))
