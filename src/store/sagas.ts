import { select, take, takeLatest, put, fork, delay } from 'redux-saga/effects'
import { TICK_INTERVAL, INITIAL_PLAYER, INITIAL_BOARD, ARROW_KEYS } from '../game/constants'
import * as Actions from './actions'
import * as Types from './types'
import { State } from './state'
import * as Game from '../game'

function* game() {
  yield fork(gameHandleKey)
  yield fork(gameBoardUpdate)
}

function* gamePlayerMove(keyCode: number) {
  const player = yield select((state: State) => state.player)
  const direction = Game.nextDirection(player.direction, keyCode)
  yield put(Actions.setPlayerDirection(direction))
}

function* gameHandleKey() {
  while (true) {
    const { payload: keyCode } = yield take(Types.UI_KEY_DOWN)
    if (ARROW_KEYS.includes(keyCode)) yield gamePlayerMove(keyCode)
  }
}

function* sysGameFood() {
  while (true) {
    const { player, board } = yield select((state: State) => state)
    yield put(Actions.setBoard(Game.putFood(board)))
    yield take(Types.SYS_GAME_EAT)
    yield put(Actions.setPlayerLength(player.length + 1))
  }
}

function* gameBoardUpdate() {
  yield fork(sysGameFood)
  while (true) {
    yield delay(TICK_INTERVAL)
    const { board, player } = yield select((state: State) => state)
    const point = Game.nextPoint(player.point, player.direction)
    yield put(Actions.setBoard(Game.move(board, player)))
    const cell = Game.current(board, player.point)
    if (cell.type === 'FOOD') yield put(Actions.sysGameEat())
    else if (cell.type !== 'EMPTY') break
    yield put(Actions.setPlayerPoint(point))
  }
  yield put(Actions.sysGameOver())
}

function* top() {
  while (true) {
    const { payload: keyCode } = yield take(Types.UI_KEY_DOWN)
    if (!ARROW_KEYS.includes(keyCode)) continue

    yield put(Actions.setBoard(INITIAL_BOARD))
    yield put(Actions.setPlayer(INITIAL_PLAYER))
    yield gamePlayerMove(keyCode)

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
