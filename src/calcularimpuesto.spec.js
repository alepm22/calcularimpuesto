const { calcularImpuesto } = require('./calculadorimpuesto');

describe('calcularImpuesto', () => {
  test('calcula el IVA correctamente', () => {
    expect(calcularImpuesto(100, 'IVA')).toBeCloseTo(13);
  });

  test('calcula el IT correctamente', () => {
    expect(calcularImpuesto(100, 'IT')).toBeCloseTo(3);
  });

  test('calcula el RC-IVA correctamente', () => {
    expect(calcularImpuesto(200, 'RC-IVA')).toBeCloseTo(13); // 200 * 0.5 * 0.13 = 13
  });

  test('retorna 0 si tipo de impuesto es desconocido', () => {
    expect(calcularImpuesto(100, 'XYZ')).toBe(0);
  });

  test('retorna 0 si el monto es negativo', () => {
    expect(calcularImpuesto(-50, 'IVA')).toBe(0);
  });

  test('retorna 0 si el monto no es número', () => {
    expect(calcularImpuesto("cien", 'IVA')).toBe(0);
  });
});
