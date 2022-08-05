const importAll = requireContext => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../icons/color', true, /\.svg$/))
}
catch (error) {
  console.log({ error })
}
