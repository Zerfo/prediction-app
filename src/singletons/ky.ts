import Ky from 'ky'

const ky = Ky.create({
  hooks: {
    beforeError: [
      async (error) => {
        error.message =
          (await error.response.text()).trim() ||
          `${error.response.status} ${error.response.statusText}`

        return error
      },
    ],
  },
  retry: 0,
})

export default ky