const message = () => {
  return {
    common: {
      failed: 'Failed',
      success: 'Success',
      created: 'Created',
      failure: 'Failure',
      notFound: 'Data not found',
      badRequest: 'Bad Request',
      generalErr: 'Sorry, something wrong in our end, please try again later'
    },
    auth: {
      unAuthorize: 'You are not authorize to access this API',
      invalidAPIKey: 'Failed to authenticate API Key',
      invalidToken: 'Failed to authenticate token',
      invalid: 'Failed to authenticate'
    }
  }
}

export const MESSAGE = message()
