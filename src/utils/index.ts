export function getRandomEnum<T extends object>(anEnum: T): T[keyof T] {
  const enumValues = Object.keys(anEnum)
  const randomValue: string = enumValues[Math.floor(Math.random() * 3)]
  return anEnum[randomValue]
}
