export interface CacheSetOptions {
  expirationTtl?: number;
}

export interface Cache {
  get<T>(key: string): Promise<T | null>;
  set(key: string, value: string, options?: CacheSetOptions): Promise<void>;
  delete(key: string): Promise<void>;
  has(key: string): Promise<boolean>;
}

export function createFakeCache(): Cache {
  const cache = new Map<string, string>();

  return {
    async get<T>(key: string) {
      const cached = cache.get(key);
      return cached as T;
    },
    async set(key: string, value: string) {
      cache.set(key, value);
    },
    async delete(key: string) {
      cache.delete(key);
    },
    async has(key: string) {
      return cache.has(key);
    }
  };
}

export function createCacheFromKv(kv: KVNamespace): Cache {
  return {
    async get<T>(key: string) {
      const cached = await kv.get(key, 'json');
      return cached as T;
    },
    async set(key: string, value: string, options?: CacheSetOptions) {
      await kv.put(key, value, { expirationTtl: options?.expirationTtl });
    },
    async delete(key: string) {
      await kv.delete(key);
    },
    async has(key: string) {
      return (await kv.get(key)) !== null;
    }
  };
}
