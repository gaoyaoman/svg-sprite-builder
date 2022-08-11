const importAll = requireContext => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../icons/special', true, /\.svg$/))
}
catch (error) {
  console.log({ error })
}
