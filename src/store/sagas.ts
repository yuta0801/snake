import { select, take, takeLatest, put, fork, delay } from 'redux-saga/effects'
import { TICK_INTERVAL, INITIAL_PLAYER, INITIAL_BOARD, ARROW_KEYS } from '../game/constants'
import * as Actions from './actions'
import * as Types from './types'
import { State } from './state'
import * as Game from '../game'

function* game() {
  yield put(Actions.setBoard(INITIAL_BOARD))
  yield put(Actions.setPlayer(INITIAL_PLAYER))
  yield fork(gameHandleKey)
  yield fork(gameBoardUpdate)
}

function* gamePlayerMove(keyCode: number) {
  const player = yield select((state: State) => state.player)
  const direction = Game.nextDirection(player.direction, keyCode)
  yield put(Actions.setPlayer({ ...player, direction }))
}

function* gameHandleKey() {
  while (true) {
    const { payload: keyCode } = yield take(Types.UI_KEY_DOWN)
    if (ARROW_KEYS.includes(keyCode)) yield gamePlayerMove(keyCode)
  }
}

function* gamePutFood() {
  const { board } = yield select((state: State) => state)
  const point = Game.randomPoint(board)
  const next = Game.nextBoard(board, point, -1)
  console.log(point, next)
  yield put(Actions.setBoard(next))
}

function* gameBoardUpdate() {
  yield gamePutFood()
  while (true) {
    yield delay(TICK_INTERVAL)
    const { board, player } = yield select((state: State) => state)
    const point = Game.nextPoint(player.point, player.direction)
    if (!Game.canNext(board, point)) break
    yield put(Actions.setPlayer({ ...player, point }))
  }
  yield put(Actions.sysGameOver())
}

function* top() {
  while (true) {
    const { payload: keyCode } = yield take(Types.UI_KEY_DOWN)
    if (!ARROW_KEYS.includes(keyCode)) continue

    yield put(Actions.sysGameStart())
    yield put(Actions.setPlaying(true))
    yield gamePlayerMove(keyCode)

    yield take(Types.SYS_GAME_OVER)
    yield put(Actions.setPlaying(false))
    alert('GAME OVER')
  }
}

export default function* rootSaga() {
  yield fork(top)
  yield takeLatest(Types.SYS_GAME_START, game)
}
