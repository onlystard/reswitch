export interface IUidTokenReducer {
    lastLoggedInAt: number // time in ms
    uid?: string
    accessToken?: string
    refreshToken?: string
}

export interface IGetUidReducer {
    readonly uid: string
    readonly success: boolean
}
