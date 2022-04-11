// Fake implementation of NatsWrapper for testing
export const natsWrapper = {
  client: {
    publish: jest.fn().mockImplementation(
      (subject: string, data: string, callback: () => void) => {
        callback()
      }
    )
  }
}