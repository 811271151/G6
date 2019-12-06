import { IBehavior } from '../interface/behavior'
import BehaviorOption from './behaviorOption'

export default class Behavior {
  private static types = {}
  public static registerBehavior<T extends IBehavior>(type: string, behavior: T) {
    if(!behavior) {
      throw new Error(`please specify handler for this behavior: ${type}`)
    }
    // TODO 将传进来的Behavior和默认的合并

    const instance = Object.assign({}, BehaviorOption.prototype, behavior)
    this.types[type] = instance
  }

  public static hasBehavior(type: string) {
    return !!this.types[type]
  }

  public static getBehavior(type: string) {
    return this.types[type]
  }
}