const config = {
    appId: 'com.snapdb.app',
    appName: 'SnapDB',
    webDir: 'www',
    bundledWebRuntime: false,
    android: {
        allowMixedContent: true
    },
    plugins: {
        CapacitorFilePicker: {},
        Media: {},
        Filesystem: {}
    }
};
export default config;
