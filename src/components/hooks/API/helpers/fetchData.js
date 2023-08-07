
export const fetchData = async(url, endPoint) => {

    try {
        const response = await fetch(`${url}/${endPoint}`);
        const data = await response.json();
        return {
            data,
            isLoading: false,
        }
    } catch (error) {
        console.error(error);
    }
}
