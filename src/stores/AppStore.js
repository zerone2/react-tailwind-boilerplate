import { observable } from 'mobx'
import { persist } from 'mobx-persist'

export default class AppStore {
  @persist('object') @observable appInfo = {}
}
