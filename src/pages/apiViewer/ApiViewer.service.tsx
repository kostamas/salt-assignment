export const getApiData = () => fetch('http://localhost:3000/fe_data.json').then((res) => res.json());

export const filterApiDetails = (data: any, apiDetailsKeys: string[], filterValue: string, showOnlyPii: boolean) => {
    if(filterValue || showOnlyPii) {
        apiDetailsKeys.forEach((key: string) => {
            return data[key] = data[key] && data[key].filter((detail: any) => {
                if(showOnlyPii &&  !detail.pii){
                    return false;
                }

                return !filterValue || detail.name.toLowerCase().includes(filterValue.toLowerCase()) ||
                    detail.type.toLowerCase().includes(filterValue.toLowerCase());
            })
        });
    }
    return data;
};
