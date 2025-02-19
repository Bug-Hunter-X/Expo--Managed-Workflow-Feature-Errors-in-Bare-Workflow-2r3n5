# Expo Bare Workflow Managed Feature Error

This repository demonstrates a common error encountered when using Expo managed workflow features (like push notifications, location services, etc.) within an Expo bare workflow project.  The core issue is attempting to access Expo modules that are not available in the bare workflow environment.

## Problem

When using Expo's bare workflow, you have direct control over the native iOS and Android projects.  However, this means that some Expo modules, typically those providing platform-specific functionality, are not automatically included.  Attempting to import and use these modules results in build errors or runtime exceptions.

## Solution

The solution is to either:

1. **Switch to a managed workflow:** If you don't need the fine-grained control of a bare workflow, the simplest solution is to migrate to a managed workflow where these modules are seamlessly integrated.
2. **Use native modules directly:** If remaining in a bare workflow is essential, you will need to find and integrate the corresponding native iOS and Android modules manually.  This requires more advanced knowledge of native mobile development.