import { action, observable , makeAutoObservable , runInAction, computed, autorun} from 'mobx';
import countStore from "./countStore";
class DisplayStore {
    constructor(){
        makeAutoObservable(this)
    }

    @observable
    name = '显示'

    @action
    setDisplay = () => {
        return this.name = `${this.name}aa` + countStore.numbers;
    }
}
const displayStore = new DisplayStore();
export default displayStore
