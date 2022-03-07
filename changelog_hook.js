// // Next version e.g. 1.12.3
// export function preVersionGeneration(version: string): string {
//   console.log("preVersionGeneration...version...", version)
//   return version
// }

// // Next tag e.g. v1.12.3
// export function preTagGeneration(tag: string): string {
//   console.log("preTagGeneration...tag...", tag)
//   return `${tag}-alpha`
// }

exports.preVersionGeneration = (version) => {
  console.log("preVersionGeneration...version...", version)
  return version
}

exports.preTagGeneration = (tag) => {
  console.log("preTagGeneration...tag...", tag)
  return `${tag}-alpha`
}