const PLUGIN = 'SharedPreferences'

export function getSharedPreferences(file, mode, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, PLUGIN, 'getSharedPreferences', [file, mode])
}

export function sharedPreferencesWithOtherApp(file, mode, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, PLUGIN, 'sharedPreferencesWithOtherApp', [file, mode])
}

export function getSharedPreferencesFromOtherApp(file, mode, packageIdentifierOfOtherApp, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, PLUGIN, 'getSharedPreferencesFromOtherApp', [file, mode, packageIdentifierOfOtherApp]);
}

export function putString(key, string, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, PLUGIN, 'putString', [key, string])
}

export function getString(key, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, PLUGIN, 'getString', [key])
}

export function remove(key, successCallback, errorCallback){
  cordova.exec(successCallback, errorCallback, PLUGIN, 'remove', [key])
}

export function clear(successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, PLUGIN, 'clear', ['null'])
}
