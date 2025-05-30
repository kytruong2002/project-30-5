interface ImportMetaEnv {
  readonly VITE_API_KEY: string
  readonly VITE_API_URL_GRAPHQL: string
  readonly VITE_PORT: number
  // thêm các biến khác nếu cần
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
