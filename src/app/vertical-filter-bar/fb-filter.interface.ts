export interface FBFilter {
    identifier: string
    title: string

    filterValue: any

    resetFilterValue(): void

    getClassName()
}