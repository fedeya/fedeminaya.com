import type {
  V2_HtmlMetaDescriptor,
  V2_MetaFunction
} from '@remix-run/cloudflare';

export function mergeMeta<T = unknown>(
  overrideFn: V2_MetaFunction<T>,
  appendFn?: V2_MetaFunction<T>
): V2_MetaFunction<T> {
  return arg => {
    // get meta from parent routes
    let mergedMeta = arg.matches.reduce((acc, match) => {
      return acc.concat(
        (match as { meta?: V2_HtmlMetaDescriptor[] }).meta || []
      );
    }, [] as V2_HtmlMetaDescriptor[]);

    // replace any parent meta with the same name or property with the override
    const overrides = overrideFn(arg);

    for (let override of overrides) {
      let index = mergedMeta.findIndex(
        meta =>
          ('name' in meta &&
            'name' in override &&
            meta.name === override.name) ||
          ('property' in meta &&
            'property' in override &&
            meta.property === override.property) ||
          ('title' in meta && 'title' in override)
      );
      if (index !== -1) {
        mergedMeta.splice(index, 1, override);
      }
    }

    // append any additional meta
    if (appendFn) {
      mergedMeta = mergedMeta.concat(appendFn(arg));
    }

    return mergedMeta;
  };
}
