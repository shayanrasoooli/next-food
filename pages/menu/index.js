import MenuPage from "../../component/templates/ManuPage";

export default function Index({data}) {
    return(
        <>
        <MenuPage data={data} />
        
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:3001/data")
    const data = await res.json();
    return{
        props: {
            data
          },
          revalidate : 10, //seconds

    }
}