export const browserMockTemplate = (
  handlersCode: string
) => `/**
* This file is AUTO GENERATED by msw-auto-mock, you can also commit/edit it as you prefer.
*/
import { setupWorker, rest } from 'msw'
import faker from 'faker'

faker.seed(1);

const handlers = [
  ${handlersCode}
]

// This configures a Service Worker with the given request handlers.
const worker = setupWorker(...handlers)

worker.start()
`;