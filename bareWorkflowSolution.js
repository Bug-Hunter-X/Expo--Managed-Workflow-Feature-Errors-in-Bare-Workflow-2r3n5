The solution depends on whether switching to managed workflow is acceptable.

**Solution 1: Migrate to Managed Workflow**

This is the easiest solution. In your `app.json` or `expo.json` remove `"expo": {"scheme": "myapp"}`  and `"android": {"package": "com.yourcompany.myapp"}`  and `"ios": {"bundleIdentifier": "com.yourcompany.myapp"}`.  Then  Run `expo prebuild` and re-build the app.

**Solution 2: Use Native Modules (Advanced)**

This requires significant effort and knowledge of native mobile development. For example, if you need push notifications, you would need to integrate the native iOS (using Firebase Cloud Messaging) and Android (using Firebase Cloud Messaging) libraries into your project and handle the notification logic directly in Swift/Objective-C or Kotlin/Java. This is a much more complex process and not described here due to its extensive nature.