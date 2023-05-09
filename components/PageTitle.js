export default function PageTitle({ children }) {
  return (
    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
    <p class="text-gray-600">{{ 7 }} min read</p>
      {children}
    </h1>
  )
}
