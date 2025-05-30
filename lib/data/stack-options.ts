export interface StackOption {
  value: string
  label: string
}

export const authOptions: StackOption[] = [
  { value: "auth0", label: "Auth0" },
  { value: "supabase-auth", label: "Supabase Auth" },
  { value: "nextauth", label: "NextAuth.js" },
  { value: "clerk", label: "Clerk" },
  { value: "firebase-auth", label: "Firebase Auth" },
  { value: "cognito", label: "AWS Cognito" },
  { value: "okta", label: "Okta" },
]

export const databaseOptions: StackOption[] = [
  { value: "postgresql", label: "PostgreSQL" },
  { value: "mongodb", label: "MongoDB" },
  { value: "supabase", label: "Supabase" },
  { value: "planetscale", label: "PlanetScale" },
  { value: "firebase", label: "Firebase" },
  { value: "dynamodb", label: "AWS DynamoDB" },
  { value: "mysql", label: "MySQL" },
  { value: "redis", label: "Redis" },
]

export const hostingOptions: StackOption[] = [
  { value: "vercel", label: "Vercel" },
  { value: "netlify", label: "Netlify" },
  { value: "aws", label: "AWS" },
  { value: "railway", label: "Railway" },
  { value: "render", label: "Render" },
  { value: "gcp", label: "Google Cloud" },
  { value: "azure", label: "Azure" },
  { value: "digitalocean", label: "DigitalOcean" },
]
