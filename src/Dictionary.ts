class Dictionary {
    protected dataStore: Array<[any, any]>;

    constructor() {
        this.dataStore = new Array<[any, any]>();
    }

    public Add = (key: string, value: any) => {
        this.dataStore.push([key, value]);
    };

    public Find = (key: any): any | null => {
        let result = this.dataStore.find((item: any) => item[0] === key);
        if (result) {
            return result[1];
        } 
        return null;
    }

    public Remove = (key: any) => {
        let index: number = this.dataStore.findIndex((item: any) => item[0] === key);
        delete this.dataStore[index];
    }

    public ShowAll = () => {
        this.dataStore.forEach((storeItem: any) => {
            console.log(`Key: ${storeItem[0]}, value: ${storeItem[1]}`);
        });
    }
}

export default Dictionary;