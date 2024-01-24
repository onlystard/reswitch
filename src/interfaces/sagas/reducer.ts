export enum ReducerStatus {
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
}

export enum PostTypeStatus {
    STORY = 'STORY',
    GENERAL = 'GENERAL',
    EVENT = 'EVENT',
    FRIEND = 'FRIEND',
    GROUND = 'GROUND',
}

export interface ILoadingReducer<T> {
    data: T
    status: ReducerStatus
}
