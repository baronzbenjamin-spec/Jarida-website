const ASSET_PATTERN = /\.(jpe?g|png|svg|webp|gif|avif)(\?.*)?$/i;

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith("@assets/") || ASSET_PATTERN.test(specifier)) {
    return {
      url: "data:text/javascript,export default '';",
      shortCircuit: true,
    };
  }
  return nextResolve(specifier, context);
}
