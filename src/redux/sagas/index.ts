import { all } from '@redux-saga/core/effects';

import * as authentication from './Authentication';

export default function* () {
    yield all([
        authentication.watchRegister(),
    ]);
}
