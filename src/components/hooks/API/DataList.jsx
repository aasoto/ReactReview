import { useFetchData } from "./customHooks/useFetchData"

export const DataList = ({endPoint}) => {

    const {data, isLoading} = useFetchData(endPoint);

    return (
        <>
        {
            isLoading 
                ? <p>Cargando...</p>
                : endPoint == 'users'
                    ? data.map(item => <li key={item.id}>{item.name}</li>)
                    : data.map(item => <li key={item.id}>{item.title}</li>)
        }
        </>
    )
}
