export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const Int8View = new Int8View(buffer);
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  Int8View[position] = value;
  return view;
}
