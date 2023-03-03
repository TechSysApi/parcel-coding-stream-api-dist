var variables={
  "name": "@ch-post-logistics/parcel-coding-stream-api",
  "version": "5.3.0-feature-refactoring.11",
  "description": "Parcel Coding Stream API",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "prepublishOnly": "npm test",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix"
  },
  "author": "gfellerle",
  "license": "Apache-2.0",
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.13.0",
    "@typescript-eslint/parser": "^4.13.0",
    "apikana": "^0.9.28",
    "apikana-defaults": "0.0.77",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "prettier": "^2.2.1",
    "typescript": "^4.1.3"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "gfellerle",
    "namespace": "logistics.parcel.coding",
    "shortName": "parcel-coding",
    "projectName": "parcel-coding-stream-api",
    "npmPackage": "@ch-post-logistics/parcel-coding-stream-api",
    "title": "Parcel Coding Stream API",
    "plugins": [
      "maven",
      "dotnet",
      "readme"
    ],
    "javaPackage": "ch.post.logistics.parcel.coding.v1",
    "mavenGroupId": "ch.post.logistics.parcel",
    "dotnetNamespace": "Ch.Post.Logistics.Parcel.Coding.V1",
    "dotnetPackageId": "Ch.Post.Logistics.Parcel.Coding.StreamApi",
    "mqs": "Kafka"
  },
  "dependencies": {},
  "_": [
    "start",
    "src",
    "dist"
  ]
}