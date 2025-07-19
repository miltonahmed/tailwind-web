import { Outlet } from "react-router"

const RootLayout = () => {
  return (
    <div>
      <header/>
      <Outlet/>
    </div>
  )
}

export default RootLayout