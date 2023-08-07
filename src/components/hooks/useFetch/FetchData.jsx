import { useFetch } from "./customHooks/useFetch"

export const FetchData = () => {

    const { data, errors, isLoading } = useFetch('https://jsonplaceholder.typicode.com/users');

    return (
        <>
            <h1 className="text-3xl font-bold m-4">Listado de usuarios obtenidos por Fetch</h1>
            {
                isLoading 
                    ?   <div className="w-max m-2 px-5 py-3 bg-blue-300 border rounded-md border-blue-800 text-blue-800 text-center">
                            Cargando...
                        </div>
                    : errors
                        ?   <div className="w-max m-2 px-5 py-3 bg-red-300 border rounded-md border-red-800 text-red-800 text-center">
                                { errors }
                            </div>
                        :   <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map(user => {
                                            return (
                                                <tr key={user.id}>
                                                    <td>{ user.id }</td>
                                                    <td>{ user.name }</td>
                                                    <td>{ user.username }</td>
                                                    <td>{ user.email }</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
            }
        </>
    )
}
