import { action, observable , makeAutoObservable , runInAction, computed, autorun} from 'mobx';
 
class CountStore {
  constructor(){
    makeAutoObservable(this)
  }
 
 
  @observable
  numbers = 1
   

  @action
  setNumbers = () => {
    this.numbers++
  }
  @action
  asyncSetNumbers = () => {
    setTimeout(()=>{
      runInAction(()=>{
        this.numbers++;
      })
      
    })
  }

  @computed get getNumbers(){
    return this.numbers*100
  }
}
 
const countStore = new CountStore();
autorun(()=>{
  console.log(countStore.numbers + 100);
})
export default countStore;