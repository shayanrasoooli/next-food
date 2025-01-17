import { useRouter } from "next/router";
import DetailsPage from "../../component/templates/DetailsPage"

function Details({data}) {
    const router = useRouter();

    if (router.isFallback) {
        return <h2>Loading Page ...</h2>
    }
  return (
    <DetailsPage {...data}/>
  )
}

export default Details

export async function getStaticPaths() {
    const res = await fetch("http://localhost:3001/data");
    const json = await res.json();
    const data = json.slice(0 , 10);

    const paths = data.map((food) => ({
        params : { id : food.id.toString()}
    }))

    return{
        paths, 
        fallback: true,
    }

}

export async function getStaticProps(context){
    const {params: {id}} = context;
    const res = await fetch(`http://localhost:3001/data/${id}`)
    const data = await res.json()

    if(!data.name) {
        return{
            notFound : true,
        }
    }
    return{
        props: {
            data
        },
        revalidate : 10 ,//seconds
    } 
}