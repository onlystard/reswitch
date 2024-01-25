export interface ILinkingGlobalProps {
    readonly mailTo?: string
    readonly tel?: string
    readonly sms?: string
    readonly url?: string
}

export interface ISharedGlobalProps {
    readonly title?: string
    readonly message?: string
    readonly subject?: string
    readonly url?: string
    readonly urls?: string[]
    readonly imageUrls?: string[]
    readonly failOnCancel?: boolean
}
