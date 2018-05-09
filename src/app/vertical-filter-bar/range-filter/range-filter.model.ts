import { FBFilter } from "../fb-filter.interface";

export class RangeFilter implements FBFilter {

    public filterValue: number[] = []

    constructor(
        public identifier: string,
        public title: string,
        public min: number,
        public max: number,
        public currencyRange: boolean = false
    ) {
        this.filterValue.push(min)
        this.filterValue.push(max)
    }

    public getClassName(): string {
        return 'RangeFilter'
    }

    public resetFilterValue(): void {
        this.filterValue = new Array()
        this.filterValue.push(this.min)
        this.filterValue.push(this.max)
    }
}