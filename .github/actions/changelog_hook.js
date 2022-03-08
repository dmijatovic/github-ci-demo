// Next version e.g. 1.12.3
exports.preVersionGeneration = (version) => {
  // console.log("preVersionGeneration...version...", version)
  // return the version as received
  return version
}

// Next tag e.g. v1.12.3
exports.preTagGeneration = (tag) => {
  // console.log("preTagGeneration...tag...", tag)
  // add alpha to all versions now
  return `${tag}-alpha`
}