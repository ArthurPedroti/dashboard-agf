export function generateSimplePrintCode(data) {
  const printItens = data.map(item => {
    return `
      ^XA
  
      ^FO125,25^GB570,255,8^FS
      ^FO140,55^A0,55^FD ${item.PRODUTO}^FS
      )}^FS
      ^FO140,145^A0,35^FD ${item.DESCRICAO.slice(0, 29)}^FS
      ^FO140,185^A0,35^FD ${item.DESCRICAO.slice(30, 59)}^FS
      ^FO140,225^A0,35^FD ${item.DESCRICAO.slice(60, 89)}^FS
  
      ^XZ
      `.repeat(item.SALDO);
  });
  return printItens;
}
