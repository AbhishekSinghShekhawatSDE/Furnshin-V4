# Known Issues

Items documented here were identified during pre-launch optimization
and deferred for post-launch resolution.

## Open Items
- **Unused Components**: These files are currently not imported anywhere and can be safely removed after verification:
    - `src/components/hero/ManufacturingPortal.tsx`
    - `src/components/layout/OrbitalMenu.tsx`
    - `src/components/sections/ServicesFeed.tsx`
- **Build Analyzer**: `@next/bundle-analyzer` has limited support for Turbopack; standard JS output was used for verification.

## Resolved
- **TypeScript Strictness**: All `any` types removed, strict mode enabled, unused variables purged.
- **Image Optimization**: All `<img>` tags converted to `next/image`.
- **Dynamic Imports**: Three.js and heavy R3F components are lazy-loaded.
