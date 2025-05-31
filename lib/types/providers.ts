export interface Provider {
  name: string
  value: string
  category: "authentication" | "database" | "hosting" | "framework"
}

export interface AuthProvider extends Provider {
  category: "authentication"
}

export interface DatabaseProvider extends Provider {
  category: "database"
}

export interface HostingProvider extends Provider {
  category: "hosting"
}

export interface FrameworkProvider extends Provider {
  category: "framework"
}
