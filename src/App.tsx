import { RouterProvider } from "react-router-dom"
import ThemeProvider from "./shared/components/theme-provider"
import { router } from "./pages/routes"

function App() {

  
  
  return (
    <>
      <ThemeProvider>
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }}
        />
      </ThemeProvider>
    </>
  )
}

export default App
