import { select, take, takeLatest, put, fork, delay } from 'redux-saga/effects'
import { TICK_INTERVAL, DIRECTION, INITIAL_PLAYER } from '../game/constants'
import * as Actions from './actions'
import * as Types from './types'
import { State } from './state'
import * as Game from '../game'

function* game() {
  yield put(Actions.setPlayer(INITIAL_PLAYER))
  yield fork(gameHandleKey)
  yield fork(gameBoardUpdate)
}

function* gameHandleKey() {
  while (true) {
    const { payload: keyCode } = yield take(Types.UI_KEY_DOWN)
    if (Object.keys(DIRECTION).includes(String(keyCode))) {
      const player = yield select((state: State) => state.player)
      const direction = Game.nextDirection(player.direction, keyCode)
      yield put(Actions.setPlayer({ ...player, direction }))
    }
  }
}

function* gameBoardUpdate() {
  while (true) {
    yield delay(TICK_INTERVAL)
    const { board, player } = yield select((state: State) => state)
    const point = Game.nextPoint(player.point, player.direction)
    if (!Game.isEmpty(board, point)) break
    yield put(Actions.setPlayer({ ...player, point }))
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
