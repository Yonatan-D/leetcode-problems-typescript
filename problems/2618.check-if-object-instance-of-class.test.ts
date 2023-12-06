import { checkIfInstanceOf } from './2618.check-if-object-instance-of-class'

describe('2618. 检查是否是类的对象实例', () => {
  it('date 构造函数返回的对象是 Date 的一个实例', () => {
    const func = () => checkIfInstanceOf(new Date(), Date)
    expect(func()).toBeTruthy()
  })

  it('dog 是 Animal 的子类。Dog 对象同时是 Dog 和 Animal 的实例', () => {
    const func = () => {
      class Animal {}
      class Dog extends Animal {}
      return checkIfInstanceOf(new Dog(), Animal)
    }
    expect(func()).toBeTruthy()
  })

  it('日期的构造函数在逻辑上不能是其自身的实例', () => {
    const func = () => checkIfInstanceOf(Date, Date)
    expect(func()).toBeFalsy()
  })

  it('值为 Number。注意 "instanceof" 关键字将返回 false', () => {
    const func = () => checkIfInstanceOf(5, Number)
    expect(func()).toBeTruthy()
  })

  it('值和类均为 null', () => {
    const func = () => checkIfInstanceOf(null, null)
    expect(func()).toBeFalsy()
  })

  it('值为 undefined, 类为 null', () => {
    const func = () => checkIfInstanceOf(undefined, null)
    expect(func()).toBeFalsy()
  })

  it('值为 [], 类为 null', () => {
    const func = () => checkIfInstanceOf([], null)
    expect(func()).toBeFalsy()
  })
})
