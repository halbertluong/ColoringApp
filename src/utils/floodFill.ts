// Scanline flood fill — fills on colorCtx using outlineCtx for boundary detection.
// Dark pixels in the outline canvas are treated as walls.

function isDark(data: Uint8ClampedArray, idx: number): boolean {
  const r = data[idx];
  const g = data[idx + 1];
  const b = data[idx + 2];
  const a = data[idx + 3];
  if (a < 30) return false;
  return (r + g + b) / 3 < 100;
}

function hexToRgba(hex: string): [number, number, number, number] {
  const c = hex.replace('#', '');
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  return [r, g, b, 255];
}

function colorsMatch(
  data: Uint8ClampedArray,
  idx: number,
  target: [number, number, number, number],
  tol: number
): boolean {
  return (
    Math.abs(data[idx] - target[0]) <= tol &&
    Math.abs(data[idx + 1] - target[1]) <= tol &&
    Math.abs(data[idx + 2] - target[2]) <= tol &&
    Math.abs(data[idx + 3] - target[3]) <= tol
  );
}

export function floodFill(
  colorCtx: CanvasRenderingContext2D,
  outlineCtx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  fillHex: string,
  tolerance = 32
): void {
  const width = colorCtx.canvas.width;
  const height = colorCtx.canvas.height;
  const sx = Math.floor(startX);
  const sy = Math.floor(startY);
  if (sx < 0 || sx >= width || sy < 0 || sy >= height) return;

  const outlineData = outlineCtx.getImageData(0, 0, width, height).data;

  // Don't fill if click is on an outline pixel
  if (isDark(outlineData, (sy * width + sx) * 4)) return;

  const colorImageData = colorCtx.getImageData(0, 0, width, height);
  const colorData = colorImageData.data;

  const fill = hexToRgba(fillHex);
  const startIdx = (sy * width + sx) * 4;
  const target: [number, number, number, number] = [
    colorData[startIdx],
    colorData[startIdx + 1],
    colorData[startIdx + 2],
    colorData[startIdx + 3],
  ];

  // Already this color
  if (colorsMatch(colorData, startIdx, fill, 2)) return;

  const visited = new Uint8Array(width * height);
  const stack: number[] = [sx + sy * width];

  while (stack.length > 0) {
    const pos = stack.pop()!;
    const x = pos % width;
    const y = Math.floor(pos / width);

    if (x < 0 || x >= width || y < 0 || y >= height) continue;
    if (visited[pos]) continue;
    visited[pos] = 1;

    const idx4 = pos * 4;
    // Stop at outline pixels
    if (isDark(outlineData, idx4)) continue;
    // Stop if color doesn't match start color
    if (!colorsMatch(colorData, idx4, target, tolerance)) continue;

    // Paint this pixel
    colorData[idx4] = fill[0];
    colorData[idx4 + 1] = fill[1];
    colorData[idx4 + 2] = fill[2];
    colorData[idx4 + 3] = fill[3];

    stack.push(pos + 1, pos - 1, pos + width, pos - width);
  }

  colorCtx.putImageData(colorImageData, 0, 0);
}
