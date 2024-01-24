import { Middleware, Tuple, applyMiddleware, configureStore, createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { rootReducer, RootState } from './global-reducers'
import { IPersistConfig } from 'utils/common'

import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import AsyncStorage from '@react-native-async-storage/async-storage'
import sagaMiddlewareFactory from 'redux-saga'
import rootSaga from './sagas'

const middleware: Middleware<{}, RootState>[] = []
const enhancers = [] as any[];

/* ------------- Persister Reducer ------------- */
const persistConfig: IPersistConfig<RootState> = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    // blacklist: ['i18n'],
    whitelist: ['uidToken'],
    stateReconciler: autoMergeLevel2,
}
const persistedReducer = persistReducer(persistConfig, rootReducer as any)

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middleware))

/* ------------- Saga Middleware ------------- */
const sagaMiddleware = sagaMiddlewareFactory();
middleware.push(sagaMiddleware as unknown as Middleware);

const serializableMiddleware = createSerializableStateInvariantMiddleware({
    ignoredActions: ['persist/PERSIST'],
    ignoredPaths: [],
})

const store = configureStore({
    reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware as Middleware),
    middleware: () => new Tuple(serializableMiddleware).concat(sagaMiddleware as Middleware),
});

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
export default store
