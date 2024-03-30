export interface UserProps {
    id?: string
    name: string
    email: string
    password: string
}

export default class User {
    private _props: UserProps  

    constructor(props: UserProps) { this._props = props }

    get id() { return this._props?.id ?? '' }
    get name() { return this._props.name }
    get email() { return this._props.email }
    get password() { return this._props.password }

    clone(props: UserProps) {
        return new User({
            ...this._props,
            ...props
        })
    }
}