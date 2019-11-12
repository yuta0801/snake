import { select, take, takeLatest, put, fork, delay } from 'redux-saga/effects'
import * as Actions from './actions'
import * as Types from './types'
import { TICK_INTERVAL, DIRECTION } from '../game/constants'
import { State } from './state'
import * as Game from '../game'

function* game() {
  yield fork(gameHandleKey)
  yield fork(gameBoardUpdate)
}

function* gameHandleKey() {
  while (true) {
    const { payload: keyCode } = yield take(Types.UI_KEY_DOWN)
    if (Object.keys(DIRECTION).includes(String(keyCode))) {
      yield put(Actions.sysMove(DIRECTION[keyCode]))
    }
  }
}

function* gameBoardUpdate() {
  while (true) {
    yield delay(TICK_INTERVAL)
    const { board, point } = yield select((state: State) => state)
    const { payload: direction } = yield take(Types.SYS_MOVE)
    const next = Game.move(point, direction)
    if (!Game.isEmpty(board, next)) break
    yield put(Actions.setPoint(next))
  }
  yield put(Actions.sysGameOver())
}

function* top() {
  while (true) {
    yield take(Types.UI_KEY_DOWN)
    yield put(Actions.sysGameStart())
    yield put(Actions.setPlaying(true))

    yield take(Types.SYS_GAME_OVER)
    yield put(Actions.setPlaying(false))
    alert('GAME OVER')
  }
}

export default function* rootSaga() {
  yield fork(top)
  yield takeLatest(Types.SYS_GAME_START, game)
}
