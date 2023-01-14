export interface GenRequestOptions {
    pagination: {
        page: number, 
        pageElmtCount: number,
        orderBy: {column: string, order: 'asc'|'desc'}[]
    };
    filters: {
        column: string,
        comparator: string,
        value: string,
        type: "string"|"date"| "number"
    }[]
}
