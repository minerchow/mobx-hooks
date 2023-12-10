import React from "react";
import { useObserver, useLocalStore } from 'mobx-react';
import store from '@/stores'
const CountPage = () => {
    const localStore = useLocalStore(() => store);
    return useObserver(() => {
        return (
            <>
            <button onClick={localStore.CountStore.setNumbers}>{localStore.CountStore.numbers}</button>
            <button onClick={localStore.CountStore.asyncSetNumbers}>异步{localStore.CountStore.numbers}</button>
            <div>computed:{localStore.CountStore.getNumbers}</div>
            <button onClick={localStore.DisplayStore.setDisplay}>display</button>
            <div>{localStore.DisplayStore.name}</div>
            </>
        )
    })

}

export default CountPage; 