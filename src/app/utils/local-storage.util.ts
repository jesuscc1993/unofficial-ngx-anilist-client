export class LocalStorage {
  static setString(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  static getString(key: string) {
    return localStorage.getItem(key);
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }

  static setObject(key: string, json: any) {
    localStorage.setItem(key, JSON.stringify(json));
  }

  static getObject<T>(key: string) {
    const jsonString: string = localStorage.getItem(key);
    return jsonString && (JSON.parse(jsonString) as T);
  }
}
