import { Uuid } from '~context/shared/domain/value-objects'

describe('Uuid', () => {
  test('should create a valid uuid', () => {
    const uuidV4 = 'fa9438c5-66fd-4813-8fb3-02ac4d7f78c1'
    const uuid = new Uuid(uuidV4)
    expect(uuid.value).toBe('fa9438c5-66fd-4813-8fb3-02ac4d7f78c1')
  })

  test('should throw an error when uuid is invalid', () => {
    expect(() => {
      const invalidUuid = '123'
      /* eslint-disable-next-line no-new */
      new Uuid(invalidUuid)
    }).toThrow()
  })

  test('Should return a valid random uuid', () => {
    const randomUuid = Uuid.random().toString()
    const uuid = new Uuid(randomUuid)
    expect(uuid.toString()).toBe(randomUuid)
  })
})
