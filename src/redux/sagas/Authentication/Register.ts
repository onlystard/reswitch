import { IRegisterRequestParams } from 'interfaces/Auth'
import { IAction, IResponse } from 'interfaces/sagas/common'
import { call, put, takeLeading } from 'redux-saga/effects'
import { FAILURE } from 'redux/action-type-utils'
import { REGISTER_REQUEST } from 'redux/actions'
import { alertMessage } from 'utils/common'

async function userRegister(params: IRegisterRequestParams): Promise<IResponse<any>> {
    return new Promise((resolve, reject) => {

    })
}

function* handleRegisterSuccess(action: IAction<IRegisterRequestParams>): Generator<any, any, IResponse<IRegisterRequestParams>> {
    const { payload } = action
    const response = yield call(userRegister, payload)

    try {
        if (action?.response != null && response?.success === true) {
            yield put({
                type: action.response.success,
                hideLoading: true,
            })
            alertMessage('success', 'Hệ thống sẽ gửi mã OTP đến số điện thoại đã đăng ký để xác thực');
        } else if (action?.response != null && response?.error === true) {
            yield put({
                type: action.response.fail,
                hideLoading: true,
            })
            alertMessage('danger', 'Có lỗi sai khi nhập số điện thoại đăng ký hoặc mật khẩu');
        }
    } catch (error) {
        yield put({ type: FAILURE(REGISTER_REQUEST) })
        if (action.response) {
            yield put({
                type: action.response.fail,
                hideLoading: true,
            })
        }
    }
}

export default function* watchRegister() {
    yield takeLeading(REGISTER_REQUEST, handleRegisterSuccess)
}
