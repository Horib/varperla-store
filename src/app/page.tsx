import HomePage from "./home-page"

// export const metadata = {
//   title: "My Page Title",
// }

export default async function Page() {
  // Fetch data directly in a Server Component
  // Forward fetched data to your Client Component
  return <HomePage />
}
