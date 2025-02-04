import { createPathFromArray, isValidPath, getNetworkFromPath } from '../paths'

describe('paths helpers: createPathFromArray', () => {
  it('should create paths from array of directories', () => {
    const arrOne = ['authn']
    const arrTwo = ['mainnet', 'authn']
    const arrThree = ['testnet', 'authn']
    const arrFour = ['canarynet', 'authn']
    const arrFive = ['sandboxnet', 'authn']

    const expectedResponseOne = '/authn'
    const expectedResponseTwo = '/mainnet/authn'
    const expectedResponseThree = '/testnet/authn'
    const expectedResponseFour = '/canarynet/authn'
    const expectedResponseFive = '/sandboxnet/authn'

    expect(createPathFromArray(arrOne)).toEqual(expectedResponseOne)
    expect(createPathFromArray(arrTwo)).toEqual(expectedResponseTwo)
    expect(createPathFromArray(arrThree)).toEqual(expectedResponseThree)
    expect(createPathFromArray(arrFour)).toEqual(expectedResponseFour)
    expect(createPathFromArray(arrFive)).toEqual(expectedResponseFive)
  })
})

describe('paths helpers: isValidPath', () => {
  it('should check a path is valid', () => {
    const pathOne = ['authn']
    const pathTwo = ['mainnet', 'authn']
    const pathThree = ['testnet', 'authn']
    const pathFour = ['canarynet', 'authn']
    const pathFive = ['foo', 'bar']
    const pathSix = ['sandboxnet', 'authn']

    expect(isValidPath(pathOne)).toBe(true)
    expect(isValidPath(pathTwo)).toBe(true)
    expect(isValidPath(pathThree)).toBe(true)
    expect(isValidPath(pathFour)).toBe(true)
    expect(isValidPath(pathFive)).toBe(false)
    expect(isValidPath(pathSix)).toBe(true)
    expect(isValidPath(null)).toBe(false)
  })
})

describe('paths helpers: getNetworkFromPath', () => {
  it('get correct network from path', () => {
    const pathOne = ['authn']
    const pathTwo = ['testnet', 'authn']
    const pathThree = ['canarynet', 'authn']
    const pathFour = ['sandboxnet', 'authn']

    expect(getNetworkFromPath(pathOne)).toEqual('mainnet')
    expect(getNetworkFromPath(pathTwo)).toEqual('testnet')
    expect(getNetworkFromPath(pathThree)).toEqual('canarynet')
    expect(getNetworkFromPath(pathFour)).toEqual('sandboxnet')
  })
})
