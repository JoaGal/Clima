
import { useFetch } from "../hooks/useFetch";
import { Landing } from "./Landing";
export const Home = () => {

  const {load} = useFetch();
  return (
    <>
      {load === true ?
        (
          <>
            <h1 className='text-center mt-16 shadow-md  shadow-white text-6xl italic tracking-wide text-white'>Pronostico</h1>
            <Landing/>

          </>

        )
        : null}
    </>
  )
}
