
const Item = ({topic, seen}) => {
    return (
        <li>{topic} {seen ? '✔' : '❌'}</li>
    );
}

export const ListTernary = () => {
    return (
        <>
            <ol>
                <Item topic={'Instaciones'} seen={true}/>
                <Item topic={'Uso de Vite'} seen={true}/>
                <Item topic={'Componentes'} seen={true}/>
                <Item topic={'Variables en JSX'} seen={false}/>
                <Item topic={'Props'} seen={false}/>
            </ol>
        </>
    )
}
