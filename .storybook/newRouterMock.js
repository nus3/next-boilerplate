import * as nextRouter from 'next/router'

nextRouter.useRouter = () => ({
  route: '/',
  pathname: '/',
  push: () => {},
  prefetch: () => new Promise((resolve, reject) => {}),
})
