import * as hash from 'object-hash'
import { Person } from 'src/interface/person';

const IdFactory = () => {
    const origin = Date.now().toString() + Math.random().toString().substr(2)
    return hash(origin, { algorithm: 'sha1', encoding: 'hex' }).slice(0, 10)
}

export default (additionals: object = {}): Person => {
    return {
        id: IdFactory(),
        firstName: '',
        lastName: '',
        bornOn: Date.now(),
        isMale: true,
        fellow: null,
        father: null,
        mother: null,
        offsprings: [],
        info: {},
        ...additionals,
    }
}
