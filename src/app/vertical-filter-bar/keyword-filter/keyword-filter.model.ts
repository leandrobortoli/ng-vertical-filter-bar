import { FBFilter } from "../fb-filter.interface";

export class KeywordFilter implements FBFilter {

    public filterValue: string = undefined

    constructor(
        public identifier: string,
        public title: string,
    ){}

    getClassName() {
        return 'KeywordFilter'
    }

    public resetFilterValue(): void {
        this.filterValue = undefined
    }
}